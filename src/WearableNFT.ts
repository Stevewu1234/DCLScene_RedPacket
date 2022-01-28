
import { InfoPanel } from './wearableDetailPanel';

export class WearableNFT extends Entity {
    public id: number
  
    constructor(
      WearableNFT: GLTFShape,
      transform: Transform,
      id: number,
      infoPanel: InfoPanel,
    ) {
      super()
      engine.addEntity(this)
      this.addComponent(WearableNFT)
      this.addComponent(transform)
      this.id = id
  
      // Sound
      this.addComponent(
        new AudioSource(
          new AudioClip("sounds/navigation_forward-selection-minimal.mp3")
        )
      )
  
      this.addComponent(
        new OnPointerDown(
          (): void => {
            this.getComponent(AudioSource).playOnce()
            infoPanel.openInfoPanel(this.id)
          },
          {
            button: ActionButton.POINTER,
            showFeedback: true,
            hoverText: "More Info",
            distance: 8,
          }
        )
      )


      
    }
}