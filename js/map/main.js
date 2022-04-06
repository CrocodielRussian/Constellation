import Phaser from "./lib/phaser.js"
import { Preloader } from "./scenes/Preloader.js"
import { Life } from "./scenes/Life.js"
import { mapWar } from "./scenes/mapWar.js"
import { mapWorld } from "./scenes/mapWorld.js"

export const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 1024,
    height: 750,
    parent: "map_id",
    dom: {
        createContainer: true
    },
    scene: [Preloader,Life,mapWar,mapWorld],
    backgroundColor : "#e3f0ec",
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scale: {
        zoom: 1
    },
})
