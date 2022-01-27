
import { buildBaseScene } from './baseScene';
import { checkStart, checkEnd } from './fireworks';
import { triggerToPlay } from './tigerPickup';
import { checkWearable } from './wearable';
import { metaOperaLiveStreaming } from './liveStream';

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