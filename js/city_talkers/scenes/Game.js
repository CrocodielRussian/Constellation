import Phaser from "../lib/phaser.js";

export class Game extends Phaser.Scene{
    constructor(){
        super('game')
    }
    preload(){
        this.load.image('tiles', '../Constellation/assets/tile_pack_talkers.png');
        this.load.tilemapTiledJSON('karta', '../Constellation/assets/json/map.json');
        this.load.image('house_s',"../Constellation/assets/house_talkers.png")
        this.load.image('house_u',"../Constellation/assets/house_update_talkers.png")
    }
    create(){  
        const map = this.make.tilemap({ key: 'karta' })
        const tiles = map.addTilesetImage('tile', 'tiles')
        map.objects.forEach(element => {
            element.objects.forEach(el =>{
                const table_inf = document.createElement('div')
                table_inf.className = "table_info"

                const table = this.add.dom(0,0, table_inf);
                const info = document.createElement('div')
                const close = document.createElement('div')
                const titleBuilding = document.createElement('div')
                const healthBar = document.createElement('div')
                const img = document.createElement('div')

                var wrrap = document.createElement('div')

                wrrap.className = "wrrap_info"
                close.className = "close"
                img.className = "img_building"

                if(element.name == "house_obj"){
                    img.setAttribute("style",`--image:${`url("assets/house_talkers.png")`}`)
                }else{
                    img.setAttribute("style",`--image:${`url("assets/house_update_talkers.png")`}`)
                }
                healthBar.setAttribute("style",`--width: ${element.properties[2].value}`)
                healthBar.className = "hp"
                titleBuilding.innerText = element.properties[0].value
                titleBuilding.className = "title_building"
                titleBuilding.append(healthBar)
                info.className = "info"
                const level = document.createElement('div')
                level.innerText =  "Уровень " + element.properties[1].value
                level.className = "level"
                var ul = document.createElement('ul')
                for(let i = 3;i <  element.properties.length;i++){    
                    let li = document.createElement('li')
                    const title = document.createElement('span')
                    const value = document.createElement('span')
                    li.className = "info_li"
                    title.className = "title"
                    value.className = "value"
                    title.innerText = element.properties[i].name + ": "
                    value.innerText = element.properties[i].value
                    li.style.listStyleType = "none"
                    li.append(title)
                    li.append(value)
                    ul.append(li)
                }
                info.append(titleBuilding)
                info.append(level)
                wrrap.append(ul)
                wrrap.append(img)
                info.append(wrrap)

                const close_icon = this.add.dom(0,0, close)
                const info_table = this.add.dom(0,0, info)

                if(el.y < 200){
                    var container = this.add.container(el.x, el.y,[table,info_table,close_icon])
                }else{
                    var container = this.add.container(el.x, el.y-75,[table,info_table,close_icon])
                }
                close_icon.setVisible(false)
                table.setVisible(false)
                info_table.setVisible(false)
                if(element.name == "house_obj"){
                    var im = this.add.image(el.x,el.y+50,'house_s').setInteractive().setScale(0.6)
                }else{
                    var im = this.add.image(el.x,el.y,'house_u').setInteractive().setScale(0.6)
                }
                im.on('pointerdown', function (pointer) {
                    table.setVisible(true)
                    close_icon.setVisible(true)
                    info_table.setVisible(true)
                });

                close.addEventListener('click',(event)=>{
                    table.setVisible(false)
                    console.log("12")
                    close_icon.setVisible(false)
                    info_table.setVisible(false)
                });
                info.addEventListener('click',(event)=>{
                    table.setVisible(false)
                    close_icon.setVisible(false)
                    info_table.setVisible(false)
                });
                table.addListener('click');
                table.on('click',(event)=>{
                    table.setVisible(false)
                    close_icon.setVisible(false)
                    info_table.setVisible(false)
                })
            })
        });     
        const layer = map.createLayer('ground', tiles, 0, 0);
        const see = map.createLayer('see',tiles,0,0)
        const street = map.createLayer('street',tiles,0,0)
        const house = map.createLayer('house', tiles, 0, 0);
        const boat = map.createLayer('boat', tiles, 0,0)
        const trees = map.createLayer('trees', tiles, 0,0)
    }
    update(){

    }
}