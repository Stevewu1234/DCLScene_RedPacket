import * as utils from '@dcl/ecs-scene-utils'
import { TigerHead, playerGameStatus, initializeUesrData } from './tigerHead'

// Adding coin models
const tigerShape = new GLTFShape('models/coin.glb') // Includes the spinning animation

export async function triggerToPlay() {
    await initializeUesrData();

    let triggerBoxShape = new utils.TriggerBoxShape(
        new Vector3(1.5, 3, 1.5),
        new Vector3(0, 1, 0)
    ) // Trigger shape for coin
    
    // Setup the coins
    for (let tigerHead of playerGameStatus.positions) {
    const coin = new TigerHead(
        tigerShape,
        new Transform({ position: tigerHead }),
        triggerBoxShape
    )
    }
}