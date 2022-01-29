import * as utils from '@dcl/ecs-scene-utils'
import { showTigerHeadUI } from './TaskUI';
import { playerStatus, finishTigerHeadCollection } from './playerData';

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


// add collected amount
function addCollected() {
  playerStatus.collectedTiger++;

  if(finishTigerHeadCollection()) {
    playerStatus.tigerHeadCollectionGameCompleted = true;
    log("you have finished collection of tiger head ", playerStatus.collectedTiger);
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

          // log("you have collected the head on positon of", transform)
        },
        onCameraExit: () => {
          // Camera exit
          engine.removeEntity(this)

          addCollected();

          if(playerStatus.tigerHeadCollectionGameCompleted) {
            const id = playerStatus.address
            enterScene({id});
          }
        },
      })
    )
  }
}
