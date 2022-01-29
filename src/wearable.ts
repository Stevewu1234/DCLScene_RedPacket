import { wearableData } from './wearableData';
import { InfoPanel } from './wearableDetailPanel';
import { WearableNFT } from './WearableNFT';
import { initializeUserAddress, wearablePositions } from './playerData';

// UI Elements
const canvas = new UICanvas()
const infoPanel = new InfoPanel(canvas)



export async function checkWearable() {

    await initializeUserAddress();


    // all for one
    const All_For_One = new WearableNFT(
        new GLTFShape('models/collision_model.glb'),
        new Transform({
            position: wearablePositions.allForOne,
        }),
        wearableData[0].id,
        infoPanel
    )
     
    // dr.x
    const DR_X = new WearableNFT(
        new GLTFShape('models/collision_model.glb'),
        new Transform({
            position: wearablePositions.drx,
        }),
        wearableData[1].id,
        infoPanel
    )

    
    // yaman
    const YAMAN = new WearableNFT(
        new GLTFShape('models/collision_model.glb'),
        new Transform({
            position: wearablePositions.yaman
        }),
        wearableData[2].id,
        infoPanel
    )
    
    // kiko - no need to load collision model
    const Kiko = new WearableNFT(
        new GLTFShape('models/collision_model.glb'),
        new Transform({
            rotation: Quaternion.Euler(0, 90, 0),
            position: wearablePositions.kiko
        }),
        wearableData[3].id,
        infoPanel
    )
    
    // nancy
    const Nancy = new WearableNFT(
        new GLTFShape('models/collision_model.glb'),
        new Transform({
            position: wearablePositions.nancy
        }),
        wearableData[4].id,
        infoPanel
    )
}



