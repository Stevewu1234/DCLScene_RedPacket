import { wearableData } from './wearableData';

export function wearableModel() {
    const All_For_One = new Entity();
    engine.addEntity(All_For_One);
    All_For_One.addComponent(new GLTFShape(wearableData[0].modelLink));
    All_For_One.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(8, 1, 8),
    }))

    const DR_X = new Entity();
    engine.addEntity(DR_X);
    DR_X.addComponent(new GLTFShape(wearableData[1].modelLink));
    DR_X.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(10, 1, 8),
    
    }))

    const YAMAN = new Entity();
    engine.addEntity(YAMAN);
    YAMAN.addComponent(new GLTFShape(wearableData[2].modelLink));
    YAMAN.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(12, 1, 8)
    }))

    const Kiko = new Entity();
    engine.addEntity(Kiko);
    Kiko.addComponent(new GLTFShape(wearableData[3].modelLink));
    Kiko.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(14, 1, 8)
    }))

    const Nancy = new Entity();
    engine.addEntity(Nancy);
    Nancy.addComponent(new GLTFShape(wearableData[4].modelLink));
    Nancy.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(16, 1, 8)
    }))
}
