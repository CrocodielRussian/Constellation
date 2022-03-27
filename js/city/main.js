import Phaser from "./lib/phaser.js"
import { City } from "./scenes/City.js"

export const game =  new Phaser.Game({
    type: Phaser.AUTO,
    width: 1024,
    parent: "city",
    dom: {
        createContainer: true
    },
    height: 750,
    backgroundColor : "#e3f0ec",
    scale: {
        zoom: 2
    },

    scene: [City]
})