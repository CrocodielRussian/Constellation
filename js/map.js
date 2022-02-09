const div = document.querySelector(".time_timer")

let timer =  5000

function addNull(t){
    return (t<10) ? "0" + t : t 
}
function atack(){

}

function getDate(date){
    let h = addNull(Math.floor(((date/1000)/60)/60))
    let m = addNull(Math.floor((((date/1000)/60)%60)))
    let s = addNull(Math.floor(date/1000)%60)

    return `${h}:${m}:${s}`
}
let dateTimer = setInterval(() => {
        if(timer > 0){
            div.textContent = getDate(timer)
        }else{
            div.textContent = "Наступление злых злодеев!"
            text_time = document.querySelector(".time_text")
            text_time.style.display = "none"
            clearTimeout(dateTimer)
        }
        console.log("3")
        timer-=1000
}, 1000)

let draw = document.getElementById("circle_map")
let map = document.getElementsByClassName("map_map")

let ctx = draw.getContext("2d")
