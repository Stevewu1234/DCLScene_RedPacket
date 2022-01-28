import { getUserData, UserData } from '@decentraland/Identity';
import { wearableData } from './wearableData';

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

export async function initializeUserAddress() {
    if (!userData) {
      await setUserData()
    }
    let data = await fetchUserData()
    playerStatus.address = data.userId.toString();
}


export let playerStatus = {
    address: "",
    tigerHeadCollectionGameCompleted: false,
    wearableInfoCheckedCompleted: false,
    positions: [],
    collectedTiger: 0,
}


// wearable check game info & functions
export function checkAllInfoOpened() {
    for(let i in wearableData) {
      if(wearableData[i].checked != true) {
        
        return playerStatus.wearableInfoCheckedCompleted = false
      }
    }
    return playerStatus.wearableInfoCheckedCompleted = true
}


export const wearablePositions = {
    allForOne: new Vector3(106.02, 0.88165, 137.99),
    drx: new Vector3(106.19, 0.88165, 150.82),
    kiko: new Vector3(104.95, 0.88165, 141.22),
    nancy: new Vector3(105.04, 0.88165, 147.71),
    yaman: new Vector3(104.62, 0.88165, 144.42)
}


// tiger head collection game info & functions
export let allPositions = [
    new Vector3(90, 1, 100),  // 1 - add - edge
    new Vector3(110, 3, 110),  // 2 - add - platform
    new Vector3(120, 3, 120),  // 3 - add - platform
    new Vector3(120, 3, 130),  // 4 - add - platform
    new Vector3(130, 3, 120),  // 5 - add - platform
    new Vector3(120, 3, 160),  // 6 - add - platform
    new Vector3(20, 1, 60),  // 7 - add - edge
    new Vector3(80, 1, 80),  // 8 - add - edge
    new Vector3(90, 1, 10),  // 9 - add - edge
    new Vector3(100, 1, 10),  // 10
    new Vector3(110, 1, 70),  // 11
    new Vector3(120, 1, 10),  // 12
    new Vector3(130, 1, 10),  // 13
    new Vector3(140, 1, 67),  // 14 - add - edge
    new Vector3(134, 1, 210),  // 15
    new Vector3(120, 1, 230),  // 16
    new Vector3(170, 1, 48),  // 17 - add - edge
    new Vector3(180, 1, 53),  // 18 - add - edge
    new Vector3(190, 1, 130),  // 19 - add - edge
    new Vector3(200, 1, 20),  // 20 - add - edge
    new Vector3(68, 1, 230),  // 21 - add - edge
    new Vector3(38, 1, 240),  // 22 - add - edge - front door road
    new Vector3(48, 1, 210),  // 23 - add - edge
    new Vector3(34, 1, 180),  // 24 - add - front door
    new Vector3(80, 3, 140),  // 25 - add - front door platform
    new Vector3(96, 3, 140),  // 26 - add - front door platform
    new Vector3(54, 1, 140),  // 27 - add - front door
    new Vector3(68, 1, 150),  // 28 - add - front door
    new Vector3(29, 1, 120),  // 29 - add - front door
    new Vector3(26, 1, 160),  // 30 - add - front door
]
// complete tiger head collection game if you collected more than 'finishGameAmount'
const finishGameAmount = 10;

// total tiger head appearing on the scene
export const totalTiger = 10;


export function finishTigerHeadCollection() {
    if(playerStatus.collectedTiger >= finishGameAmount) {
        return true
    }
    return false
}


// firework time setting
export const partyTime = new Date('2022-01-26T22:19:00');
export const partyEnd = new Date('2022-01-26T22:21:00');
export const fireworkPostions = [
    new Vector3(70, 0, 110),
    new Vector3(70, 0, 210),
    new Vector3(110, 20, 110),
    new Vector3(90, 0, 210),
    new Vector3(110, 0, 110)
]