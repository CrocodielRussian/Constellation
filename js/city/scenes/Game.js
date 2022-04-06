import Phaser from "../lib/phaser.js";

export class Game extends Phaser.Scene{
    constructor(){
        super('game')
    }
    preload(){
        this.load.image('tiles', '../assets/tile_pack.png');
        this.load.tilemapTiledJSON('karta', '../assets/json/map.json');
        this.load.image('house_s',"../assets/house.png")
        this.load.image('house_u',"../assets/house_update.png")
    }
    create(){
        
        const map = this.make.tilemap({ key: 'karta' })
        const tiles = map.addTilesetImage('tile', 'tiles')
        const housesList = this.add.group()
        // map.createFromObjects('house_obj', [13,14], 'house_u', true,false, housesList)
        console.log(housesList)

        map.objects.forEach(element => {
            element.objects.forEach(el =>{
                const table = this.add.dom(0,0, 'div', 'background-color: #519723; width: 280px; height: 140px; border-radius: 12px;');
                const info = document.createElement('div')
                const titleBuilding = document.createElement('div')
                const healthBar = document.createElement('div')
                const img = document.createElement('div')
                var wrrap = document.createElement('div')
                wrrap.className = "wrrap_info"
                img.className = "img_building"
                if(element.name == "house_obj"){
                    img.setAttribute("style",`--image:${`url("assets/house.PNG")`}`)
                }else{
                    img.setAttribute("style",`--image:${`url("assets/house_update.PNG")`}`)
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
                const info_table = this.add.dom(0,0, info)
                if(el.y < 200){
                    var container = this.add.container(el.x, el.y,[table,info_table])
                }else{
                    var container = this.add.container(el.x, el.y-75,[table,info_table])
                }
               

                table.setVisible(false)
                info_table.setVisible(false)
                if(element.name == "house_obj"){
                    var im = this.add.image(el.x,el.y+50,'house_s').setInteractive().setScale(0.6)
                }else{
                    var im = this.add.image(el.x,el.y,'house_u').setInteractive().setScale(0.6)
                }
                    
                im.on('pointerdown', function (pointer) {
                    table.setVisible(true)
                    info_table.setVisible(true)
                });

                table.addListener('click');
                table.on('click',(event)=>{
                    table.setVisible(false)
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