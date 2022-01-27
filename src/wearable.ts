import { wearableData } from './wearableData';
import { InfoPanel } from './wearableDetailPanel';
import { WearableNFT } from './WearableNFT';
import { initializeUserAddress } from './playerData';

// UI Elements
const canvas = new UICanvas()
const infoPanel = new InfoPanel(canvas)



export async function checkWearable() {

    await initializeUserAddress();

    const All_For_One = new WearableNFT(
        new GLTFShape(wearableData[0].modelLink),
        new Transform({
            rotation: Quaternion.Euler(0,-180, 0), 
            position: new Vector3(8, 1, 8),
        }),
        wearableData[0].id,
        infoPanel
    )
    
    const DR_X = new WearableNFT(
        new GLTFShape(wearableData[1].modelLink),
        new Transform({
            rotation: Quaternion.Euler(0,-180, 0),
            position: new Vector3(10, 1, 8),
        }),
        wearableData[1].id,
        infoPanel
    )
    
    const YAMAN = new WearableNFT(
        new GLTFShape(wearableData[2].modelLink),
        new Transform({
            rotation: Quaternion.Euler(0,-180, 0),
            position: new Vector3(12, 1, 8)
        }),
        wearableData[2].id,
        infoPanel
    )
    
    
    const Kiko = new WearableNFT(
        new GLTFShape(wearableData[3].modelLink),
        new Transform({
            rotation: Quaternion.Euler(0,-180, 0),
            position: new Vector3(14, 1, 8)
        }),
        wearableData[3].id,
        infoPanel
    )
    
    const Nancy = new WearableNFT(
        new GLTFShape(wearableData[4].modelLink),
        new Transform({
            rotation: Quaternion.Euler(0,-180, 0),
            position: new Vector3(16, 1, 8)
        }),
        wearableData[4].id,
        infoPanel
    )
}

