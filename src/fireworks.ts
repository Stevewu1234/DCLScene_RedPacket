import * as utils from '@dcl/ecs-scene-utils'


let partyTime = new Date('2022-01-26T22:19:00');
let partyEnd = new Date('2022-01-26T22:21:00');

let partyChecker = new Entity();
engine.addEntity(partyChecker);

let endTimeCheck = new Entity();
engine.addEntity(endTimeCheck);

let fireworks_1 = new Entity();
engine.addEntity(fireworks_1);

let fireworks_2 = new Entity();
engine.addEntity(fireworks_2);

let fireworks_3 = new Entity();
engine.addEntity(fireworks_3);

let fireworks_4 = new Entity();
engine.addEntity(fireworks_4);

let fireworks_5 = new Entity();
engine.addEntity(fireworks_5);

async function checkTime() {
  let json = await utils.sendRequest(
    'https://worldtimeapi.org/api/timezone/Asia/Shanghai'
  )

  let toDate = new Date(json.datetime);
  log("checkStart", toDate)

  // compare the party start time to the current hour
  if (
    toDate.getTime() >= partyTime.getTime() &&
    toDate.getTime() <= partyEnd.getTime()
  ) {
    log('PARTY TIME!')


    fireworks_1.addComponent(new GLTFShape("models/LOGO_Fireworks_0126_ml.glb"));
    fireworks_1.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-90, 0),
        position: new Vector3(70, 0, 110)
    }))

    fireworks_2.addComponent(new GLTFShape("models/LOGO_Fireworks_0126_ecn.glb"));
    fireworks_2.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-90, 0),
        position: new Vector3(70, 0, 210)
    }))

    fireworks_3.addComponent(new GLTFShape("models/LOGO_Fireworks_0126_eth.glb"));
    fireworks_3.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-90, 0),
        position: new Vector3(110, 20, 110)
    }))

    fireworks_4.addComponent(new GLTFShape("models/LOGO_Fireworks_0126_green.glb"));
    fireworks_4.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-90, 0),
        position: new Vector3(90, 0, 210)
    }))

    fireworks_5.addComponent(new GLTFShape("models/LOGO_Fireworks_0126_ml.glb"));
    fireworks_5.addComponent(new Transform({
        rotation: Quaternion.Euler(0,-90, 0),
        position: new Vector3(110, 0, 110)
    }))

    // stop checking for the party starting, it's already started!
    partyChecker.removeComponent(utils.Interval);
  }

  if (toDate.getTime() > partyEnd.getTime()) {
      // stop checking for the party starting, it's already started!
      partyChecker.removeComponent(utils.Interval);
  }
}

async function removeFireworks() {
  let json = await utils.sendRequest(
    'https://worldtimeapi.org/api/timezone/Asia/Shanghai'
  )

  let toDate = new Date(json.datetime)
  log("checkEnd", toDate)

  // compare the party start time to the current hour
  if (
    toDate.getTime() > partyEnd.getTime()
  ) {
    log('Party End');
    fireworks_1.removeComponent(GLTFShape);
    fireworks_2.removeComponent(GLTFShape);
    fireworks_3.removeComponent(GLTFShape);
    fireworks_4.removeComponent(GLTFShape);
    fireworks_5.removeComponent(GLTFShape);

    // stop checking for the party starting, it's already started!
    endTimeCheck.removeComponent(utils.Interval)
  }
}


export function checkStart() {
    // dummy entity to run the checkTime() function once every second

    partyChecker.addComponent(
        new utils.Interval(1000, () => {
            checkTime();
        })
    )
}

export function checkEnd() {

    endTimeCheck.addComponent(
        new utils.Interval(1000, () => {
            removeFireworks();
        })
    )
}
