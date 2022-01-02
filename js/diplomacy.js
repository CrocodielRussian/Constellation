canv = document.getElementById("content_canv")
ctx = canv.getContext('2d')

ctx.beginPath()
ctx.arc(75,425,75,0,2*Math.PI,true)
let img = new Image()
img.src = '../img/pig.png'
img.onload = function() { 
    ctx.drawImage(img, 50, 425)
}
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.moveTo(75,350)
ctx.lineTo(275,75)
ctx.stroke()

ctx.strokeStyle = "black"

ctx.beginPath()
ctx.arc(350,75,75,0,2*Math.PI,true)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.moveTo(425,75)
ctx.lineTo(625,350)
ctx.stroke()

ctx.strokeStyle = "black"

ctx.beginPath()
ctx.arc(625,425,75,0,2*Math.PI,true)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = "green"
ctx.moveTo(550,425)
ctx.lineTo(150,425)
ctx.stroke()