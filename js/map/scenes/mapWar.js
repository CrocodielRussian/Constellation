import Phaser from "../lib/phaser.js"
// import eventsCenter from './EventsCenter.js'

export class mapWar extends Phaser.Scene{
    constructor ()
    {
        super("mapWar")
    }
    preload(){
        this.load.image('pic', '../assets/map_l.jpg');
        this.r = 620
        this.war = true
    }

    create (){ 
        this.text = this.add.text(300, 30,'Наступление злых злодеев', { color: 'red', align: 'center', font:'4.5em MoshitaMono'})
    }   
    update(){   
        if(this.war == true){
            if(this.r < 0){
                this.scene.pause("mapWar")
                setTimeout(()=>this.scene.start("mapWorld"),2000)
            }
            this.add.image(0, 76, 'pic').setTint(0xff3333).setOrigin(0,0)
            const pic = this.add.image(0, 76, 'pic').setOrigin(0,0)
            let mask = this.make.graphics({fillStyle: {color: 0xebebeb }, add: false}).fillCircleShape(new Phaser.Geom.Circle(512, 400, this.r))
            pic.setMask(new Phaser.Display.Masks.BitmapMask(this, mask))
            this.r-=5
        }
    }
}
