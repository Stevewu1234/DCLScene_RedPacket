



const canvas = new UICanvas();
const rect = new UIContainerRect(canvas);

// rect.adaptHeight = true;
// rect.adaptWidth = true;
rect.hAlign = 'left';
rect.vAlign = 'top';
rect.opacity = 0.8;


// add static content
let sunUITexture = new Texture("images/button-artscape.png")
const sunImgScreen = new UIImage(rect, sunUITexture)
sunImgScreen.hAlign = 'left'
sunImgScreen.vAlign = 'top'
sunImgScreen.sourceLeft = 0
sunImgScreen.sourceTop = 0
sunImgScreen.sourceWidth = 1024
sunImgScreen.sourceHeight = 483
sunImgScreen.width = 1024
sunImgScreen.height = 512
sunImgScreen.visible = false



// ad UI text
const factTxt = new UIText(rect)
factTxt.outlineColor = new Color4(0.7, 1, 0.8, 1)
factTxt.value = 'Welcome to DragonCtiy, This is a funny game that you must be attracted by the wisdom of me'
factTxt.fontSize = 22
factTxt.width = 500
factTxt.height = 205
factTxt.positionX = 455
factTxt.positionY = 0
factTxt.color = new Color4(0.7, 1, 0.8, 1)
factTxt.textWrapping = true

// task_1
let imgTaskIcon_1 = new Texture("images/button-close.png")
const taskIcon_1 = new UIImage(rect, imgTaskIcon_1)
taskIcon_1.name = 'close_btn'
taskIcon_1.width = '50px'
taskIcon_1.height = '50px'
taskIcon_1.sourceWidth = 112
taskIcon_1.sourceHeight = 112
taskIcon_1.positionX = 1300
taskIcon_1.positionY = -550

// task_2
let imgTaskIcon_2 = new Texture("images/button-close.png")
const taskIcon_2 = new UIImage(rect, imgTaskIcon_2)
taskIcon_2.name = 'close_btn'
taskIcon_2.width = '50px'
taskIcon_2.height = '50px'
taskIcon_2.sourceWidth = 112
taskIcon_2.sourceHeight = 112
taskIcon_2.positionX = 1380
taskIcon_2.positionY = -550


// task_3
let imgTaskIcon_3 = new Texture("images/button-close.png")
const taskIcon_3 = new UIImage(rect, imgTaskIcon_3)
taskIcon_3.name = 'close_btn'
taskIcon_3.width = '50px'
taskIcon_3.height = '50px'
taskIcon_3.sourceWidth = 112
taskIcon_3.sourceHeight = 112
taskIcon_3.positionX = 1460
taskIcon_3.positionY = -550


// group UIs
const staticScreenGroup = {
    "sun": sunImgScreen,
 }

const testIcon = {
    "task_1": taskIcon_1,
    "task_2": taskIcon_2,
    "task_3": taskIcon_3
}

// const planetMenuGroup = {
//     "factTxt" : factTxt
// }


 // handle UI Objects
 function stateDynamicUI(bPlanetMenu: boolean, staticScreen: boolean) {

    for (let key in staticScreenGroup) {
        staticScreenGroup[key].visible = staticScreen
    }

    // for (let key in planetMenuGroup) {
    //    planetMenuGroup[key].visible = bPlanetMenu
    // }

 }

 const stateInfoUI = (
    function () {
      let UI_show: UIImage
      return {
         changeCurrentUI: function(ui_screen) {
            if (UI_show) {
               UI_show.visible = false
            }
            UI_show = ui_screen
            UI_show.visible = true
            canvas.visible = true
         },
         getCurrentUI: function () {
            return UI_show
         }
      }
 }())


