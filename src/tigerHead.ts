import * as utils from '@dcl/ecs-scene-utils'
import { getUserData, UserData } from '@decentraland/Identity';
import { showTigerHeadUI, showWearableGameUI } from './TaskUI';

/**
 * Sound is a separated from the coin entity so that you can
 * still hear it even when the coin is removed from the engine.
 */
const tigerPickupSound = new Entity()
tigerPickupSound.addComponent(new Transform())
tigerPickupSound.addComponent(
  new AudioSource(new AudioClip('sounds/coinPickup.mp3'))
)
engine.addEntity(tigerPickupSound)
tigerPickupSound.setParent(Attachable.AVATAR)

export let playerGameStatus = {
  "address": "",
  "positions": [],
  "collectedTiger": 0,
  "completed": false
};

const xPosition = 40; // 1040
const yPosition = 20;  // 944
const zPosition = 3; 
const totalTiger = 10;

const finishGameAmount = 10;

// get user blockchain data
let userData: UserData

async function fetchUserData() {
    const data = await getUserData()
    log('getUserData:', data.displayName)
    return data
  }
  
async function setUserData() {
    const data = await getUserData()
    log('setUserData:', data.displayName)
    userData = data
}


async function enterScene({ id }: { id: string }) {

  let response = await utils.sendRequest(
    "https://us-central1-dcl-poap.cloudfunctions.net/app/huntttiger",
    "POST",
  {
    "content-type": "application/json",
  },
  {
    id,
  }
  );
    log("response", response);
    const { success, error } = await response;
  
  if (success) {
    log("congratulation, you completed the game");
  }

  if (error == "Event Not Started") {
    log("the game is not started or over");
  }

  
}

// generate random position
function generateRandomPosition(
  xRange: number,
  yRange: number,
  zRange: number
) {
  let randomPosition = new Vector3(Math.random()*xRange, Math.random()*zRange+1, Math.random()*yRange);

  return randomPosition;
}

// generate random position array
function generateRandomPositionArry() {
  let positionArry = [];

  for(let i = 0; i< totalTiger; i++) {
      positionArry.push(generateRandomPosition(xPosition, yPosition, zPosition));
  }

  return positionArry;
}

// initialize user data
export async function initializeUesrData() {
  if (!userData) {
      await setUserData()
  }
  let data = await fetchUserData();
  let positions = generateRandomPositionArry();
  log("The player status has been initialized", data.userId, positions);

  playerGameStatus = {
      "address": data.userId.toString(),
      "positions": positions,
      "collectedTiger": 0,
      "completed": false
  }
}

// add collected amount
function addCollected() {
  playerGameStatus.collectedTiger++;

  if(playerGameStatus.collectedTiger >= finishGameAmount) {
    playerGameStatus.completed = true;
    log("you have finished collection of tiger head ", playerGameStatus.collectedTiger);
    showTigerHeadUI();
  }
}


export class TigerHead extends Entity {
  constructor(
    model: GLTFShape,
    transform: Transform,
    trigger: utils.TriggerBoxShape
  ) {
    super()
    engine.addEntity(this)
    this.addComponent(model)
    this.addComponent(transform)

    // Create trigger for tiger head
    this.addComponent(
      new utils.TriggerComponent(trigger, {
        onCameraEnter: () => {
          // Camera enter
          this.getComponent(Transform).scale.setAll(0)
          tigerPickupSound.getComponent(AudioSource).playOnce()
        },
        onCameraExit: () => {
          // Camera exit
          engine.removeEntity(this)

          addCollected();

          if(playerGameStatus.completed) {
            const id = playerGameStatus.address
            enterScene({id});
          }
        },
      })
    )
  }
}
