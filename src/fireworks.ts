import * as utils from '@dcl/ecs-scene-utils'


let partyTime = new Date('2022-01-24T21:00:00');
let partyEnd = new Date('2022-01-24T21:35:00');

let partyChecker = new Entity();
engine.addEntity(partyChecker);


// const fireworks_1 = new Entity();
// engine.addEntity(fireworks_1);

async function checkTime() {
  let json = await utils.sendRequest(
    'https://worldtimeapi.org/api/timezone/Asia/Shanghai'
  )

  let toDate = new Date(json.tdaetime)
  log(toDate)




  // compare the party start time to the current hour
  if (
    toDate.getTime() >= partyTime.getTime() &&
    toDate.getTime() <= partyEnd.getTime()
  ) {
    log('PARTY TIME!')

    let fireworks_1 = new Entity();
    engine.addEntity(fireworks_1);
    fireworks_1.addComponent(new GLTFShape("models/LOGO_Fireworks_0126_ml.glb"));
    fireworks_1.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-90, 0),
        position: new Vector3(70, 0, 110)
    }))
    
    // stop checking for the party starting, it's already started!
    partyChecker.removeComponent(utils.Interval);
  }
}

// async function removeFireworks() {
//   let json = await utils.sendRequest(
//     'https://worldtimeapi.org/api/timezone/Asia/Shanghai'
//   )

//   let toDate = new Date(json.datetime)
//   log(toDate)

//   // compare the party start time to the current hour
//   if (
//     toDate.getTime() > partyEnd.getTime()
//   ) {

//     fireworks_1.removeComponent(GLTFShape);    
//   }
// }


export function checkStart() {
    // dummy entity to run the checkTime() function once every second

    partyChecker.addComponent(
    new utils.Interval(1000, () => {
        checkTime();


    })
    )
}
