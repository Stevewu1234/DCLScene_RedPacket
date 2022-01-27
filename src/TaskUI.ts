import * as ui from '@dcl/ui-scene-utils';
import { playerStatus } from './playerData';

const canvas = new UICanvas();
const rect = new UIContainerRect(canvas);

// rect.adaptHeight = true;
// rect.adaptWidth = true;
rect.hAlign = 'left';
rect.vAlign = 'top';
rect.opacity = 0.8;


// ad UI text
// const factTxt = new UIText(rect)
// factTxt.outlineColor = new Color4(0.7, 1, 0.8, 1)
// factTxt.value = 'Welcome to DragonCtiy, This is a funny game that you must be attracted by the wisdom of me'
// factTxt.fontSize = 22
// factTxt.width = 500
// factTxt.height = 205
// factTxt.positionX = 455
// factTxt.positionY = 0
// factTxt.color = new Color4(0.7, 1, 0.8, 1)
// factTxt.textWrapping = true
// factTxt.visible = false;

// task_1
let imgTaskIcon_1 = new Texture("images/tigerHead.png")
const taskIcon_1 = new UIImage(rect, imgTaskIcon_1)
taskIcon_1.name = 'tigerHead_Game'
taskIcon_1.width = '50px'
taskIcon_1.height = '50px'
taskIcon_1.sourceWidth = 180
taskIcon_1.sourceHeight = 180
taskIcon_1.positionX = 1300
taskIcon_1.positionY = -550
taskIcon_1.visible = false

// task_2
let imgTaskIcon_2 = new Texture("images/wearable.png")
const taskIcon_2 = new UIImage(rect, imgTaskIcon_2)
taskIcon_2.name = 'close_btn'
taskIcon_2.width = '50px'
taskIcon_2.height = '50px'
taskIcon_2.sourceWidth = 200
taskIcon_2.sourceHeight = 200
taskIcon_2.positionX = 1380
taskIcon_2.positionY = -550
taskIcon_2.visible = false


// group UIs
// const testIcon = {
//     "task_1": taskIcon_1,
//     "task_2": taskIcon_2
// }

// const planetMenuGroup = {
//     "factTxt" : factTxt
// }

export function showTigerHeadUI() {
   taskIcon_1.visible = true
   ui.displayAnnouncement('Congratulation! You have completed the tiger head collection game', 5);
}

export function showWearableGameUI() {
   taskIcon_2.visible = true
   ui.displayAnnouncement('Congratulation! You have completed checking all wearable info', 5);
}