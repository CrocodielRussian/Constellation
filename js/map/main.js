import Phaser from "./lib/phaser.js"
import { Preloader } from "./scenes/Preloader.js"
import { Life } from "./scenes/Life.js"
import { mapWar } from "./scenes/mapWar.js"
import { mapWorld } from "./scenes/mapWorld.js"

export default new Phaser.Game({
    type: Phaser.WEBGL,
    width: 1024,
    parent: "map_map",
    height: 600,
    scale: {
        zoom: 2
    },
    useTicker: true,
    scene: [Preloader,Life,mapWar,mapWorld]
})