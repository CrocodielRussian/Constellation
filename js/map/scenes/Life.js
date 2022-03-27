import Phaser from "../lib/phaser.js";
import {game} from "../main.js"

export class Life extends Phaser.Scene{
    constructor(){
        super('life')
        this.cloud
        this.bg
        this.clouds = []
        this.countClouds = 8
        this.timer = 300000 * 12 * 60 * 24 * 2
    }
    preload(){
        this.load.image('cloud', '../assets/cloud.png')
        this.load.image('pic', '../assets/map_l.jpg')
    }
    create ()
    {   
        // this.el = this.add.dom(300,100,'div','Phaser') // Проблема!!! Отказывается видеть add.dom :(
        console.log(game.config.width)
        this.bg = this.add.image(0,76,'pic')
        this.bg.setOrigin(0,0)
        this.text = this.add.text(410, 30, '0', { color: 'red', align: 'center', font:'4.5em MoshitaMono'})
        for (let i = 0; i < this.countClouds; i++)
        {
            this.x = Phaser.Math.Between(1200, 1800)
            this.y = Phaser.Math.Between(250, 500)
            this.clouds.push(this.add.image(this.x,this.y,"cloud"))
        }
    }
    update(){
        this.dateTimer()
        this.flyCloouds()
    }
    flyCloouds(){
        for(let i = 0; i<this.clouds.length;i++){
            this.clouds[i].x -= 0.5
            if (this.clouds[i].x < -100){
                this.clouds[i].x = Phaser.Math.Between(1200, 1800)
                this.clouds[i].y = Phaser.Math.Between(250, 500)
            }
        }
    }
    getDate(date){
        let d = this.addNull(Math.floor(((date/1000)/60)/3600/24))
        let h = this.addNull(Math.floor(((date/1000)/60)/3600%24))
        let m = this.addNull(Math.floor(((date/1000)/60)/60%60))
        let s = this.addNull(Math.floor((date/1000)/60)%60)

        return `${d}:${h}:${m}:${s}`
    }
    dateTimer(){
        if(this.timer > 0){
            this.text.setText(this.getDate(this.timer))
            
        }else{
            this.text.setText("Наступление злых злодеев!")
            this.scene.start("mapWar")
            this.scene.pause("life")
            this.timer = 1000000
        }
        this.timer-=1000
    }
    addNull(t){
        return (t<10) ? "0" + t : t 
    }

}
