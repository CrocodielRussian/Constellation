import Phaser from "../lib/phaser.js"
// import eventsCenter from './EventsCenter.js'

export class mapWorld extends Phaser.Scene{
    constructor ()
    {
        super("mapWorld")
    }
    preload (){
        this.load.image('pic', '../assets/map_l.jpg');
        this.r = 0
        
    }

    create (){
        // this.update()
    }   
    update(){
        if(this.r>800){
            this.scene.pause("mapWorld")
            this.scene.start("Life")
        }
        this.add.image(512, 300, 'pic').setTint(0xff3333);
        const pic = this.add.image(512, 300, 'pic')
        let mask = this.make.graphics({fillStyle: {color: 0xebebeb }, add: false}).fillCircleShape(new Phaser.Geom.Circle(512, 300, this.r))
        pic.setMask(new Phaser.Display.Masks.BitmapMask(this, mask))
        this.r+=5
    }


    
}
