
import { buildBaseScene } from './baseScene';
import { checkStart } from './fireworks';

buildBaseScene();
checkStart();


// let endTimeCheck = new Entity();
// engine.addEntity(endTimeCheck);
// endTimeCheck.addComponent(
//   new utils.Interval(1000, () => {
//     removeFireworks()

//     // stop checking for the party starting, it's already started!
//     endTimeCheck.removeComponent(utils.Interval)
//   })
// )





// fireworks
// const fireworks = new Entity();
// engine.addEntity(fireworks);
// fireworks.addComponent(new GLTFShape("models/LOGO_Fireworks_0126_ml.glb"));
// fireworks.addComponent(new Transform({
//   rotation: Quaternion.Euler(0,-90, 0),
//   position: new Vector3(70, 0, 110)
// }))

