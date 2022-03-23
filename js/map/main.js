import Phaser from "./lib/phaser.js"
import { Preloader } from "./scenes/Preloader.js"
import { Life } from "./scenes/Life.js"
import { mapWar } from "./scenes/mapWar.js"
import { mapWorld } from "./scenes/mapWorld.js"

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1024,
    parent: "map_id",
    dom: {
        createContainer: true
    },
    height: 750,
    backgroundColor : "#e3f0ec",
    scale: {
        zoom: 2
    },

    scene: [Preloader,Life,mapWar,mapWorld]
})