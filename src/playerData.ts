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
      if(wearableData[3].checked == true) {
        playerStatus.wearableInfoCheckedCompleted = true
        return true
      }
    }
}



// tiger head collection game info & functions
export let allPositions = [
    new Vector3(10, 1, 10),  // 1
    new Vector3(20, 1, 80),  // 2
    new Vector3(30, 1, 10),  // 3
    new Vector3(40, 1, 140),  // 4
    new Vector3(50, 1, 10),  // 5
    new Vector3(69, 1, 30),  // 6
    new Vector3(70, 1, 10),  // 7
    new Vector3(80, 1, 40),  // 8
    new Vector3(90, 1, 10),  // 9
    new Vector3(100, 1, 10),  // 10
    new Vector3(110, 1, 70),  // 11
    new Vector3(120, 1, 10),  // 12
    new Vector3(130, 1, 10),  // 13
    new Vector3(140, 1, 67),  // 14
    new Vector3(150, 1, 10),  // 15
    new Vector3(160, 1, 20),  // 16
    new Vector3(170, 1, 48),  // 17
    new Vector3(180, 1, 53),  // 18
    new Vector3(190, 1, 130),  // 19
    new Vector3(200, 1, 20),  // 20
    new Vector3(100, 1, 100),  // 21
    new Vector3(60, 1, 60),  // 22
    new Vector3(70, 1, 70),  // 23
    new Vector3(54, 1, 10),  // 24
    new Vector3(25, 1, 10),  // 25
    new Vector3(96, 1, 10),  // 26
    new Vector3(127, 1, 10),  // 27
    new Vector3(38, 1, 10),  // 28
    new Vector3(29, 1, 110),  // 29
    new Vector3(61, 1, 10),  // 30
]

const finishGameAmount = 10;
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