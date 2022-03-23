import Phaser from "../lib/phaser.js";


export class Preloader extends Phaser.Scene{
    constructor(){
        super("preloader")
        this.text
    }
    preload(){
        this.load.image('pic', '../assets/map_l.jpg')
    }
    create(){
        this.scene.start("life")
        
        // this.text.anchor.setTo(0.5, 0.5)

    }   
    update(){

    }
}