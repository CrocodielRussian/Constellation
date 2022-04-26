import Phaser from "../lib/phaser.js"
import {game} from "../main.js"

export class mapWar extends Phaser.Scene{
    constructor ()
    {
        super("mapWar")
    }
    preload(){
        this.load.image('pic', '../Constellation/assets/map_cities.png');
        this.r = 600
    }

    create (){ 
        this.text = this.add.text(300, 30,'Наступление злых злодеев', { color: 'red', align: 'center', font:'4.5em YanoneKaffeesatz'})
    }   
    update(){ 
        this.bg = this.add.image(0,76,'pic')
        this.bg.setOrigin(0,0)
        if(this.r < 0){
            this.scene.pause("mapWar")
            setTimeout(()=>this.scene.start("mapWorld"),2000)
        }
        this.add.image(0, 76, 'pic').setTint(0xff3333).setOrigin(0,0)
        const pic = this.add.image(0, 76, 'pic').setOrigin(0,0)
        let mask = this.make.graphics({fillStyle: {color: 0xebebeb }, add: false}).fillCircleShape(new Phaser.Geom.Circle(game.config.width/2, game.config.height/2, this.r))
        pic.setMask(new Phaser.Display.Masks.BitmapMask(this, mask))
        this.r-=5
    }
}
