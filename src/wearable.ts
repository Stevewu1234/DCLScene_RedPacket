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

    let All_For_One_model = new Entity();
    engine.addEntity(All_For_One_model)
    All_For_One_model.addComponent(new GLTFShape(wearableData[0].modelLink))
    All_For_One_model.addComponent(new Transform({
        rotation: Quaternion.Euler(0, 90, 0), 
        position: wearablePositions.allForOne,
    }))

     
    // dr.x
    const DR_X = new WearableNFT(
        new GLTFShape('models/collision_model.glb'),
        new Transform({
            position: wearablePositions.drx,
        }),
        wearableData[1].id,
        infoPanel
    )

    let DR_X_model = new Entity();
    engine.addEntity(DR_X_model)
    DR_X_model.addComponent(new GLTFShape(wearableData[1].modelLink))
    DR_X_model.addComponent(new Transform({
        rotation: Quaternion.Euler(0, 90, 0), 
        position: wearablePositions.drx,
    }))

    
    // yaman
    const YAMAN = new WearableNFT(
        new GLTFShape('models/collision_model.glb'),
        new Transform({
            position: wearablePositions.yaman
        }),
        wearableData[2].id,
        infoPanel
    )

    let YAMAN_model = new Entity();
    engine.addEntity(YAMAN_model)
    YAMAN_model.addComponent(new GLTFShape(wearableData[2].modelLink))
    YAMAN_model.addComponent(new Transform({
        rotation: Quaternion.Euler(0, 90, 0), 
        position: wearablePositions.yaman,
    }))

    
    // kiko - no need to load collision model
    const Kiko = new WearableNFT(
        new GLTFShape(wearableData[3].modelLink),
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

    let Nancy_model = new Entity();
    engine.addEntity(Nancy_model)
    Nancy_model.addComponent(new GLTFShape(wearableData[4].modelLink))
    Nancy_model.addComponent(new Transform({
        rotation: Quaternion.Euler(0, 90, 0),
        position: wearablePositions.nancy,
    }))
}



