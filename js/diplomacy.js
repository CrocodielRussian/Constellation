canv = document.getElementById("content_canv")
ctx = canv.getContext('2d')

let pig_froog = [1,1]
let pig_sheep = [1,1]
let froog_sheep = [1,1]

ctx.beginPath()
ctx.arc(75,425,75,0,2*Math.PI,true)
let img = new Image()
img.src = 'C:\\Users\\Слоник\\Documents\\GitHub\\Constellation\\img\\pig_diplomacy.png'
img.onload = function() { 
    ctx.drawImage(img, 30, 360)
}
ctx.stroke()

ctx.beginPath()
if(pig_froog[0]){
    if(pig_froog[1]){
        ctx.strokeStyle = "green"
        ctx.moveTo(65,350)
        ctx.lineTo(275,70)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = "blue"
        ctx.moveTo(94,351)  
        ctx.lineTo(280,100)
    }else{
        ctx.strokeStyle = "green"
        ctx.moveTo(75,350)
        ctx.lineTo(275,75)
    }
}else{
    ctx.strokeStyle = "red"
    ctx.moveTo(75,350)
    ctx.lineTo(275,75)
}
ctx.stroke()

ctx.strokeStyle = "black"

ctx.beginPath()
ctx.arc(350,75,75,0,2*Math.PI,true)
let img2 = new Image()
img2.src = 'C:\\Users\\Слоник\\Documents\\GitHub\\Constellation\\img\\frog_diplomacy.png'
img2.onload = function() { 
    ctx.drawImage(img2, 300, 5)
}
ctx.stroke()

ctx.beginPath()
if(froog_sheep[0]){
    ctx.strokeStyle = "blue"
    if(froog_sheep[1]){
        ctx.moveTo(421,99)
        ctx.lineTo(610,351)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = "green"
        ctx.moveTo(425,70)
        ctx.lineTo(635,350)

    }else{
        ctx.moveTo(425,75)
        ctx.lineTo(625,350)
    }
}else{
    ctx.strokeStyle = "red"
    ctx.moveTo(425,75)
    ctx.lineTo(625,350)
}

ctx.stroke()

ctx.strokeStyle = "black"

ctx.beginPath()
ctx.arc(625,425,75,0,2*Math.PI,true)
let img3 = new Image()
img3.src = 'C:\\Users\\Слоник\\Documents\\GitHub\\Constellation\\img\\sheep_diplomacy.png'
img3.onload = function() { 
    ctx.drawImage(img3, 580, 364)
}
ctx.stroke()

ctx.beginPath()
if(pig_sheep[0]){
    ctx.strokeStyle = "blue"
    if(pig_sheep[1]){
        ctx.moveTo(550,415)
        ctx.lineTo(150,415)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = "green"
        ctx.moveTo(550,435)
        ctx.lineTo(150,435)
    }else{
        ctx.moveTo(550,425)
        ctx.lineTo(150,425)
    }
}else{
    ctx.strokeStyle = "red"
    ctx.moveTo(550,425)
    ctx.lineTo(150,425)
}

ctx.stroke()