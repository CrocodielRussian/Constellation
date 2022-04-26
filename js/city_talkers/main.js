import Phaser from "./lib/phaser.js"
import { Game } from "./scenes/Game.js"
import { Preloader } from "./scenes/Preloader.js"

export const game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 965,
    height: 385,
    parent: "city_id",
    dom: {
        createContainer: true
    },
    scene: [Preloader,Game],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scale: {
        zoom: 2
    },
})