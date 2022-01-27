
// metaopera直播
export function metaOperaLiveStreaming() {
    // https://dacastmmd.mmdlive.lldns.net/dacastmmd/275d8ce8f5d146269436e612499d7d55/manifest.m3u8?p=79&h=24c43c1039ea345302a4f63424e0dfcf
    const myVideoClip = new VideoClip("https://dacastmmd.mmdlive.lldns.net/dacastmmd/275d8ce8f5d146269436e612499d7d55/manifest.m3u8?p=79&h=24c43c1039ea345302a4f63424e0dfcf")
    const myVideoTexture = new VideoTexture(myVideoClip)
    const myMaterial = new BasicMaterial()
    myMaterial.texture = myVideoTexture

    myVideoTexture.playing = true

    // metaopera直播
    const screen= new Entity()
    screen.addComponent(new PlaneShape())
    screen.addComponent(
    new Transform({
        position: new Vector3(933.74-800, 14.378, 799.92-656),
        scale: new Vector3(32,18, 1),
        rotation: Quaternion.Euler(0,-90, 0)
    })
    )

    screen.addComponent(myMaterial)
    engine.addEntity(screen)
}



