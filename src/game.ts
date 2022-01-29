import { buildBaseScene } from "./baseScene";
import { checkStart, checkEnd } from "./fireworks";
import { triggerToPlay } from "./tigerPickup";
import { checkWearable } from "./wearable";
import { metaOperaLiveStreaming } from "./liveStream";
import { setUpPoapBooth } from "./poap/src/index";

// base scene
buildBaseScene();

// firework shooting
checkStart();
checkEnd();

// tiger head collection game
triggerToPlay();

// wearable NFT check game
checkWearable();

// live streaming screen setting
metaOperaLiveStreaming();

setUpPoapBooth({
  transform: {
    position: new Vector3(107.6, 0.86426, 129.76),
    rotation: Quaternion.Euler(0, 0, 0),
  },
  poapServer: "poapapi.dcl.guru",
  // change to event id
  eventName: "24474",
  // change the name of the poap
  UIdisplayName: "Cool Poap",
  imageSizeX: 1080,
  imageSizeY: 1080,
});
