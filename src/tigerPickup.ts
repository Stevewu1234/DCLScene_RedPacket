import * as utils from "@dcl/ecs-scene-utils";
import { TigerHead } from "./tigerHead";
import {
  playerStatus,
  initializeUserAddress,
  allPositions,
  totalTiger,
} from "./playerData";

// Adding coin models
const tigerShape = new GLTFShape("models/coin.glb"); // Includes the spinning animation

const xPosition = 40; // 1040
const yPosition = 20; // 944
const zPosition = 3;

// generate random position
function generateRandomPosition(
  xRange: number,
  yRange: number,
  zRange: number
) {
  let randomPosition = new Vector3(
    Math.random() * xRange,
    Math.random() * zRange + 1,
    Math.random() * yRange
  );

  return randomPosition;
}

// generate random position array
function generateRandomPositionArry() {
  let positionArry = [];

  for (let i = 0; i < totalTiger; i++) {
    positionArry.push(generateRandomPosition(xPosition, yPosition, zPosition));
  }

  return positionArry;
}

function generateRandomPositions() {
  let positionArry = [];

  let cloneP = allPositions;

  for (let i = 0; i < totalTiger; i++) {
    let randomIndex = Math.floor(Math.random() * cloneP.length);
    let randomPositon = cloneP[randomIndex];

    cloneP = [
      ...cloneP.slice(0, randomIndex),
      ...cloneP.slice(randomIndex + 1),
    ];

    positionArry.push(randomPositon);
  }
  log(cloneP);
  return positionArry;
}

// initialize tiger head postions
async function initializePositions() {
  initializeUserAddress();

  let positions = generateRandomPositionArry();
  log(
    "The player status has been initialized",
    playerStatus.address,
    positions
  );

  playerStatus.positions = positions;
}

export async function triggerToPlay() {
  await initializePositions();

  let triggerBoxShape = new utils.TriggerBoxShape(
    new Vector3(1.5, 3, 1.5),
    new Vector3(0, 1, 0)
  ); // Trigger shape for coin

  // Setup the coins
  for (let tigerHead of playerStatus.positions) {
    const coin = new TigerHead(
      tigerShape,
      new Transform({ position: tigerHead }),
      triggerBoxShape
    );
  }
}
