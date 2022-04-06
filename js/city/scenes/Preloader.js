import Phaser from "../lib/phaser.js";


export class Preloader extends Phaser.Scene{
    constructor(){
        super("preloader")
    }
    preload(){

    }
    create(){
        this.scene.start("game")
    }
    update(){

    }
}