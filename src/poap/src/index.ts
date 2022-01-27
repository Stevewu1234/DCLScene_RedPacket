import { Dispenser } from "./dispenser";
import { sceneMessageBus } from "./messageBus";

export const setUpPoapBooth = (payload) => {
  let POAPBooth = new Dispenser(payload);

  sceneMessageBus.on("activatePoap", () => {
    POAPBooth.activate();
    log("activated");
  });

  // POAP BANNER

  let POAPBanner = new Entity();
  POAPBanner.addComponent(
    new Transform({
      position: new Vector3(6, 0, 8),
    })
  );
  POAPBanner.addComponent(
    new GLTFShape("src/poap/models/poap/POAP_Banner.glb")
  );
  engine.addEntity(POAPBanner);

  POAPBanner.addComponent(
    new OnPointerDown(
      (e) => {
        openExternalURL("https://www.poap.xyz/");
      },
      { hoverText: "Learn More" }
    )
  );
};
