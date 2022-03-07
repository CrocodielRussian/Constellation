import Phaser from "../lib/phaser.js"
// import eventsCenter from './EventsCenter.js'

export class mapWar extends Phaser.Scene{
    constructor ()
    {
        super("mapWar")
    }
    preload(){
        this.load.image('pic', '../assets/map_l.jpg');
        this.r = 500
        this.war = false
    }

    create (){ 
        // this.update()
    }   
    update(){
        if(this.war == true){
            if(this.r < -2){
                this.scene.pause("mapWar")
                setTimeout(()=>this.scene.start("mapWorld"),2000)
            }
            this.add.image(512, 300, 'pic').setTint(0xff3333);
            const pic = this.add.image(512, 300, 'pic')
            let mask = this.make.graphics({fillStyle: {color: 0xebebeb }, add: false}).fillCircleShape(new Phaser.Geom.Circle(512, 300, this.r))
            pic.setMask(new Phaser.Display.Masks.BitmapMask(this, mask))
            this.r-=5
        }
    }
}
