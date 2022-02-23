canv = document.getElementById("pie_income")
ctx = canv.getContext('2d')

labelsPieIncome = ['Здания', 'Торговля', 'Инвестиции']
labelsPieExpenses = ['Армия', 'Правительство']

let colorPieIncome = [
	'rgb(102, 165, 52)',
	'rgb(232, 161, 23)',
	'rgb(22, 50, 192)',
]
let colorpPieExpenses = [
	'rgb(223, 117, 20)',
	'rgb(212, 29, 29)'
]

const dataPieIncome = {
	labels: labelsPieIncome,
  	datasets: [{
    	data: [100,94,33],
    	backgroundColor: colorPieIncome,
		borderColor: colorPieIncome,
 	 }]
}

const dataPieExpenses = {
	labels: labelsPieExpenses,
  	datasets: [{
    	data: [56,52],	
    	backgroundColor: colorpPieExpenses,
		borderColor: colorpPieExpenses,
 	 }]
}
function getPlugins(subText){
	allPlugins = {
		legend: {
			labels: {
				font: {
					size: 20,
					family: "MoshitaMono"
				}
			},
			title:{
				display: true,
				font: {
					size: 40,
					family: "MoshitaMono",
				},
				fullSize: true,
				text: subText
			}
		}
	}
	return allPlugins
}
const configPieIncome = {
	type: 'doughnut',
	data: dataPieIncome,
	options: {
		responsive: true,
		plugins: getPlugins("Доходы")
	  }
}
const configPieExpenses = {
	type: 'doughnut',
	data: dataPieExpenses,
	options: {
		responsive: true,
		plugins: getPlugins("Расходы")
	}
}

ctx2 = document.getElementById("pie_expenses").getContext('2d')

const pieIncome = new Chart(ctx,configPieIncome)
const pieExpenses = new Chart(ctx2,configPieExpenses)

// Здания
class Building{
	constructor(title, img, li_data,group){
		this.title = title
		this.img = img
		this.li_data = li_data
		this.group = group
	}
	createEl(){
		let buildings = document.querySelector(".wrapper__buildings")
		let building__info = document.createElement("div")
		building__info.setAttribute("value",this.group)
		let building_title = document.createElement("span")
		let building__text = document.createElement("ul")
		let building_img = document.createElement("div")
		building_img.className = "building_img"
		building_img.innerHTML = `<img src="img/build/${this.img}.png">`
		building__text.className = "building__text"
		building_title.className = "building_title"
		building__info.className = "building__info"

		this.text_li = ["Производит: ","% от прибыли: ", "Доход: ","Всего зданий: ","Улучшение: "]
		for(let i=0;i<5;i++){
			let li = document.createElement("li")
			if(i == 2){
				li.innerHTML = `${this.text_li[i]}<span id="stonks" class="building_maintext">${this.li_data[i]}</span>`
			}else if(i == 4){
				li.innerHTML = `${this.text_li[i]}<span id="cost_upgrade" class="building_maintext">${this.li_data[i]}</span>`
			}else{
				li.innerHTML = `${this.text_li[i]}<span class="building_maintext">${this.li_data[i]}</span>`
			}
			building__text.append(li)
		}
		building_title.innerText = this.title
		building__info.append(building_title)
		building__info.append(building__text)
		building__info.append(building_img)
		buildings.append(building__info)
	}
}
	
li_data = ["Батончики","20%","10$","2/2","1000$"]
let a = new Building("А.П Мигунов","ap_migunov",li_data,"food")
let b = new Building("А.П Мигунов","ap_migunov",li_data,"solders")
let c = new Building("А.П Мигунов","ap_migunov",li_data,"solders")
a.createEl()
b.createEl()
c.createEl()

const building_list = []