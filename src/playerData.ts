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
        return true
      }
    }
}



// tiger head collection game info & functions
export let allPositions = [
    new Vector3(10, 1, 10),  // 1
    new Vector3(20, 1, 10),  // 2
    new Vector3(30, 1, 10),  // 3
    new Vector3(40, 1, 10),  // 4
    new Vector3(50, 1, 10),  // 5
    new Vector3(60, 1, 10),  // 6
    new Vector3(70, 1, 10),  // 7
    new Vector3(80, 1, 10),  // 8
    new Vector3(90, 1, 10),  // 9
    new Vector3(100, 1, 10),  // 10
    new Vector3(110, 1, 10),  // 11
    new Vector3(120, 1, 10),  // 12
    new Vector3(130, 1, 10),  // 13
    new Vector3(140, 1, 10),  // 14
    new Vector3(150, 1, 10),  // 15
    new Vector3(160, 1, 10),  // 16
    new Vector3(170, 1, 10),  // 17
    new Vector3(180, 1, 10),  // 18
    new Vector3(190, 1, 10),  // 19
    new Vector3(200, 1, 10),  // 20
    new Vector3(21, 1, 10),  // 21
    new Vector3(22, 1, 10),  // 22
    new Vector3(23, 1, 10),  // 23
    new Vector3(24, 1, 10),  // 24
    new Vector3(25, 1, 10),  // 25
    new Vector3(26, 1, 10),  // 26
    new Vector3(27, 1, 10),  // 27
    new Vector3(28, 1, 10),  // 28
    new Vector3(29, 1, 10),  // 29
    new Vector3(31, 1, 10),  // 30
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