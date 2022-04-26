canv = document.getElementById("content_canv")
ctx = canv.getContext('2d')


let pig_froog = [1,1]
let pig_sheep = [1,1]
let froog_sheep = [1,1]

ctx.fillStyle = "white"
//Свинья
ctx.beginPath()
ctx.arc(125,475,74,0,2*Math.PI,true)
let img = new Image()
img.src = 'img\\pig_diplomacy.png'
img.onload = function() { 
    ctx.drawImage(img, 80, 410)
}
ctx.stroke()
ctx.fill()

ctx.beginPath()
if(pig_froog[0]){
    if(pig_froog[1]){
        ctx.strokeStyle = "green"
        ctx.moveTo(115,400)
        ctx.lineTo(325,120)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = "blue"
        ctx.moveTo(144,401)  
        ctx.lineTo(330,150)
    }else{
        ctx.strokeStyle = "green"
        ctx.moveTo(125,400)
        ctx.lineTo(325,125)
    }
}else{
    ctx.strokeStyle = "red"
    ctx.moveTo(125,400)
    ctx.lineTo(325,125)
}
ctx.stroke()
ctx.fill()

ctx.strokeStyle = "black"
//Лягушка
ctx.beginPath()
ctx.arc(400,125,74,0,2*Math.PI,true)
let img2 = new Image()
img2.src = 'img\\frog_diplomacy.png'
img2.onload = function() { 
    ctx.drawImage(img2, 350, 55)
}
ctx.stroke()
ctx.fill()

ctx.beginPath()
if(froog_sheep[0]){
    ctx.strokeStyle = "blue"
    if(froog_sheep[1]){
        ctx.moveTo(471,149)
        ctx.lineTo(660,401)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = "green"
        ctx.moveTo(475,120)
        ctx.lineTo(685,400)

    }else{
        ctx.moveTo(475,120)
        ctx.lineTo(685,400)
    }
}else{
    ctx.strokeStyle = "red"
    ctx.moveTo(475,120)
    ctx.lineTo(685,400)
}

ctx.stroke()
ctx.fill()

ctx.fillStyle = "black";
ctx.font = "40px YanoneKaffeesatz";
ctx.fillText("Жевуны", 70, 590);

ctx.strokeStyle = "black"
ctx.fillStyle = "white" 

ctx.fillStyle = "black";
ctx.font = "40px YanoneKaffeesatz";
ctx.fillText("Мигуны", 350, 30);

ctx.strokeStyle = "black"
ctx.fillStyle = "white" 
//Овца
ctx.beginPath()
ctx.arc(675,475,74,0,2*Math.PI,true)
let img3 = new Image()
img3.src = 'img\\sheep_diplomacy.png'
img3.onload = function() { 
    ctx.drawImage(img3, 630, 414)
}
ctx.stroke()
ctx.fill()

ctx.beginPath()
if(pig_sheep[0]){
    ctx.strokeStyle = "blue"
    if(pig_sheep[1]){
        ctx.moveTo(600,465)
        ctx.lineTo(200,465)
        ctx.stroke()
        ctx.beginPath()
        ctx.strokeStyle = "green"
        ctx.moveTo(600,485)
        ctx.lineTo(200,485)
    }else{
        ctx.moveTo(600,485)
        ctx.lineTo(200,485)
    }
}else{
    ctx.strokeStyle = "red"
    ctx.moveTo(600,485)
    ctx.lineTo(200,485)
}
ctx.stroke()

ctx.strokeStyle = "black"
ctx.fillStyle = "white" 

ctx.fillStyle = "black";
ctx.font = "40px YanoneKaffeesatz";
ctx.fillText("Болтуны", 630, 590);
