import { wearableData } from "./wearableData"

export class InfoPanel {
  private container: UIContainerRect
  private dropShadow: UIImage
  private mainPanel: UIImage
  private wearableImage_1: UIImage
  private wearableImage_2: UIImage
  private wearableName: UIText
  private wearableDescription: UIText
  private wearableRevealTime: UIText
  private wearableDesigner: UIText
  private wearableSupply: UIText
  private sound: Entity = new Entity()

  constructor(canvas: UICanvas) {
    // Container
    this.container = new UIContainerRect(canvas)
    this.container.width = "100%"
    this.container.height = "100%"
    this.container.positionY = 25
    this.container.visible = false

    // Drop Shadow
    this.dropShadow = new UIImage(
      this.container,
      new Texture("images/shadow.png")
    )
    this.dropShadow.sourceWidth = 960
    this.dropShadow.sourceHeight = 1200
    this.dropShadow.width = 485
    this.dropShadow.height = 606
    this.dropShadow.opacity = 0.2

    // Main Panel
    this.mainPanel = new UIImage(
      this.container,
      new Texture("images/mainPanel.png")
    )
    this.mainPanel.sourceWidth = 960
    this.mainPanel.sourceHeight = 1200
    this.mainPanel.width = 480
    this.mainPanel.height = 600

    // wearable Name
    this.wearableName = new UIText(this.container)
    this.wearableName.hAlign = "center"
    this.wearableName.vAlign = "center"
    this.wearableName.positionX = -143
    this.wearableName.positionY = 233
    this.wearableName.fontSize = 25
    this.wearableName.color = Color4.Black()
    this.wearableName.value = "Not Found"
    this.wearableName.visible = false

    // Image_1
    this.wearableImage_1 = new UIImage(
      this.container,
      new Texture("images/mainPanel.png") // Default image if nothing is found ...
    )
    this.wearableImage_1.sourceWidth = 1024
    this.wearableImage_1.sourceHeight = 1024
    this.wearableImage_1.width = 384
    this.wearableImage_1.height = 384
    this.wearableImage_1.visible = false

    // Image_2
    this.wearableImage_2 = new UIImage(
      this.container,
      new Texture("images/mainPanel.png") // Default image if nothing is found ...
    )
    this.wearableImage_2.sourceWidth = 1024
    this.wearableImage_2.sourceHeight = 1024
    this.wearableImage_2.width = 384
    this.wearableImage_2.height = 384
    this.wearableImage_2.visible = false


    // Close button to the top right
    const closeButton = new UIImage(
      this.container,
      new Texture("images/closeButton.png")
    )
    closeButton.sourceWidth = 50
    closeButton.sourceHeight = 50
    closeButton.width = 37.5
    closeButton.height = 37.5
    closeButton.positionX = 206
    closeButton.positionY = 265
    closeButton.isPointerBlocker = true
    closeButton.onClick = new OnClick((): void => {
      this.closeInfoPanel()
    })

    // wearable description
    this.wearableDescription = new UIText(this.container)
    this.wearableDescription.adaptWidth = true
    this.wearableDescription.hAlign = "center"
    this.wearableDescription.vAlign = "center"
    this.wearableDescription.positionY = -208
    this.wearableDescription.fontSize = 18
    this.wearableDescription.color = Color4.Black()
    this.wearableDescription.value = "Not Found"
    this.wearableDescription.visible = false

    // wearable RevealTime
    this.wearableRevealTime = new UIText(this.container)
    this.wearableRevealTime.adaptWidth = true
    this.wearableRevealTime.hAlign = "center"
    this.wearableRevealTime.vAlign = "center"
    this.wearableRevealTime.positionY = -233
    this.wearableRevealTime.fontSize = 10
    this.wearableRevealTime.color = Color4.Red()
    this.wearableRevealTime.value = "Not Found"
    this.wearableRevealTime.visible = false

    // wearable designer
    this.wearableDesigner = new UIText(this.container)
    this.wearableDesigner.adaptWidth = true
    this.wearableDesigner.hAlign = "center"
    this.wearableDesigner.vAlign = "center"
    this.wearableDesigner.positionY = -233
    this.wearableDesigner.fontSize = 10
    this.wearableDesigner.color = Color4.Red()
    this.wearableDesigner.value = "Not Found"
    this.wearableDesigner.visible = false

    // wearable supply
    this.wearableSupply = new UIText(this.container)
    this.wearableSupply.adaptWidth = true
    this.wearableSupply.hAlign = "center"
    this.wearableSupply.vAlign = "center"
    this.wearableSupply.positionY = -233
    this.wearableSupply.fontSize = 10
    this.wearableSupply.color = Color4.Red()
    this.wearableSupply.value = "Not Found"
    this.wearableSupply.visible = false

    // Sound
    this.sound.addComponent(
      new Transform({
        position: new Vector3(8, 0, 8),
      })
    )
    this.sound.addComponent(
      new AudioSource(
        new AudioClip("sounds/navigation_backward-selection-minimal.mp3")
      )
    )
    engine.addEntity(this.sound)
  }

  public openInfoPanel(id: number): void {
    for (let i = 0; i < wearableData.length; i++) {
      if (id == wearableData[i].id) {
        log(wearableData[i].imageLink)
        this.wearableName.value = wearableData[i].wearableDetails.name
        this.wearableImage_1.source = new Texture(wearableData[i].imageLink.imageLink_1)
        this.wearableImage_2.source = new Texture(wearableData[i].imageLink.imageLink_2)
        this.wearableDescription.value = wearableData[i].description
        this.wearableRevealTime.value = wearableData[i].revealTime
        this.wearableDesigner.value = wearableData[i].designer
      }
    }

    this.container.visible = true
    this.wearableName.visible = true
    this.wearableImage_1.visible = true
    this.wearableImage_2.visible = true
    this.wearableDescription.visible = true
    this.wearableRevealTime.visible = true
    this.wearableDesigner.visible = true
    this.wearableSupply.visible = true
  }

  private closeInfoPanel(): void {
    this.container.visible = false
    this.wearableName.visible = false
    this.wearableImage_1.visible = false
    this.wearableImage_2.visible = false
    this.wearableDescription.visible = false
    this.wearableRevealTime.visible = false
    this.wearableDesigner.visible = false
    this.wearableSupply.visible = false
    this.sound.getComponent(AudioSource).playOnce()
  }
}
