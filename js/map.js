
const div = document.querySelector(".time_timer")

class Timer{
    constructor(timer,div){
        this.timer = timer
        this.div = div
    }
    addNull(t){
        return (t<10) ? "0" + t : t 
    }

    getDate(date){
        let h = this.addNull(Math.floor(((date/1000)/60)/60))
        let m = this.addNull(Math.floor((((date/1000)/60)%60)))
        let s = this.addNull(Math.floor(date/1000)%60)

        return `${h}:${m}:${s}`
    }
    dateTimer(){
        setInterval(()=>{
            if(this.timer > 0){
                this.div.textContent = this.getDate(this.timer)
            }else{
                this.div.textContent = "Наступление злых злодеев!"
                this.text_time = document.querySelector(".time_text")
                this.text_time.style.display = "none"
            }
            this.timer-=1000
        }, 1000)
    }
}
const t = new Timer(2000,div)
const a = t.dateTimer()