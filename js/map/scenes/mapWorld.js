import Phaser from "../lib/phaser.js"
import {game} from "../main.js"

export class mapWorld extends Phaser.Scene{
    constructor ()
    {
        super("mapWorld")
    }
    preload (){
        this.load.image('pic', '../assets/map_cities.png');
        this.r = 0
        
    }

    create (){
        this.text = this.add.text(300, 30,'Отсупление злых злодеев', { color: 'red', align: 'center', font:'4.5em MoshitaMono'})
    }   
    update(){
        if(this.r>630){
            this.scene.pause("mapWorld")
            this.scene.start("life")
        }
        this.add.image(0, 76, 'pic').setTint(0xff3333).setOrigin(0,0)
        const pic = this.add.image(0, 76, 'pic').setOrigin(0,0)
        let mask = this.make.graphics({fillStyle: {color: 0xebebeb }, add: false}).fillCircleShape(new Phaser.Geom.Circle(game.config.width/2, game.config.height/2, this.r))
        pic.setMask(new Phaser.Display.Masks.BitmapMask(this, mask))
        this.r+=5
    }


    
}
