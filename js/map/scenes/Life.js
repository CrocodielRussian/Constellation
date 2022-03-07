import Phaser from "../lib/phaser.js";


export class Life extends Phaser.Scene{
    constructor(){
        super('life')
        this.cloud
        this.bg
        this.clouds = []
        this.countClouds = 8
    }
    preload(){
        this.load.image('cloud', '../assets/cloud.png')
        this.load.image('pic', '../assets/map_l.jpg')
    }
    create ()
    {   
        this.bg = this.add.image(512,300,'pic')

        for (let i = 0; i < this.countClouds; i++)
        {
            this.x = Phaser.Math.Between(1200, 1800)
            this.y = Phaser.Math.Between(50, 500)
            this.clouds.push(this.add.image(this.x,this.y,"cloud"))
        }
    }
    update(){
        for(let i = 0; i<this.clouds.length;i++){
            this.clouds[i].x -= 0.5
            if (this.clouds[i].x < -100){
                this.clouds[i].x = Phaser.Math.Between(1200, 1800)
                this.clouds[i].y = Phaser.Math.Between(50, 500)
            }
        }
    }
}
