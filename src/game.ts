
import { buildBaseScene } from './baseScene';
import { checkStart, checkEnd } from './fireworks';
import { triggerToPlay } from './tigerPickup';
import { wearableModel } from './wearableModel';
import { metaOperaLiveStreaming } from './liveStream';

// base scene
buildBaseScene();

// firework shooting
checkStart();
checkEnd();

// tiger head collection game
triggerToPlay();

// wearable NFT check game
wearableModel();

// live streaming screen setting
metaOperaLiveStreaming();