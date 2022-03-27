import Phaser from "../lib/phaser.js";
import {game} from "../main.js"

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
    }   
    update(){

    }
}