export function buildBaseScene() {
    //一.基础场景
    const D3Enviroment = new Entity();
    engine.addEntity(D3Enviroment);
    D3Enviroment.addComponent(new GLTFShape("models/D3Environment.glb"));
    D3Enviroment.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(-800, 0, -656)
    }))


    const D3Ground = new Entity();
    engine.addEntity(D3Ground);
    D3Ground.addComponent(new GLTFShape("models/D3Ground.glb"));
    D3Ground.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(-800, 0, -656)
    }))


    const D3Building = new Entity();
    engine.addEntity(D3Building);
    D3Building.addComponent(new GLTFShape("models/D3Building.glb"));
    D3Building.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-180, 0),
        position: new Vector3(-800, 0, -656)
    }))
}