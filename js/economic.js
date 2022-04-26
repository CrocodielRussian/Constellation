// Общие сведения
ctx = document.getElementById("pie_income").getContext('2d')
ctx2 = document.getElementById("pie_expenses").getContext('2d')
ctx3 = document.getElementById("line_soldo").getContext('2d')
const labelsPieIncome = ['Здания', 'Торговля', 'Инвестиции']
const dataPieIncome = [100,94,33]
const labelsPieExpenses = ['Армия', 'Правительство']
const dataPieExpenses = [56,52]
const labelsLineSoldo = ['2022-11-05','2022-11-06','2022-11-07','2022-11-08','2022-11-09','2022-11-10','2022-11-11','2022-11-12','2022-11-13','2022-11-14','2022-11-15']

const durationStart = document.getElementById("startdate")
const durationEnd = document.getElementById("enddate")

durationStart.value = labelsLineSoldo[0]
durationStart.min = labelsLineSoldo[0]
durationStart.max = labelsLineSoldo[labelsLineSoldo.length-1]
durationEnd.value = labelsLineSoldo[labelsLineSoldo.length-1]
durationEnd.min = labelsLineSoldo[0]
durationEnd.max = labelsLineSoldo[labelsLineSoldo.length-1]

const dataLineSoldo = [30,10,20,20,50,-20,0,-10,8,10,20]
let colorPieIncome = [
	'rgb(102, 165, 52)',
	'rgb(232, 161, 23)',
	'rgb(22, 50, 192)',
]
let colorpPieExpenses = [	
	'rgb(223, 117, 20)',
	'rgb(212, 29, 29)'
]

const dataPieIncomeConfig = {
	labels: labelsPieIncome,
  	datasets: [{
    	data: dataPieIncome,
    	backgroundColor: colorPieIncome,
		borderColor: "white",
		hoverOffset: 4
 	 }]
}

const dataPieExpensesConfig = {
	labels: labelsPieExpenses,
  	datasets: [{
    	data: dataPieExpenses,	
    	backgroundColor: colorpPieExpenses,
		borderColor: "white",
		hoverOffset: 4
 	 }]
}
const configPieIncome = {
	type: 'doughnut',
	data: dataPieIncomeConfig,
	options: {
		responsive: true,
		plugins: getPlugins("Доходы")
	}
}
const configPieExpenses = {
	type: 'doughnut',
	data: dataPieExpensesConfig,
	options: {
		responsive: true,
		plugins: getPlugins("Расходы")
	}
}
function getPlugins(subText){
	allPlugins = {
		legend: {
			labels: {
				font: {
					size: 18,
					family: "YanoneKaffeesatz"
				}
			},
			title:{
				display: true,
				font: {
					size: 30,
					family: "YanoneKaffeesatz",
				},
				fullSize: true,
				text: subText
			}
		}
	}
	return allPlugins
}
function durationDate(){
	const dates = [...labelsLineSoldo]

	const start = document.getElementById('startdate')
	const end = document.getElementById('enddate')

	const indexStart = dates.indexOf(start.value)
	const indexEnd = dates.indexOf(end.value)

	const durationDate = dates.slice(indexStart,indexEnd + 1)

	lineSoldo.config._config.data.labels = durationDate

	lineSoldo.update()

}
let maxSoldo = Math.max(dataLineSoldo)
const totalDuration = 1000;
const delayBetweenPoints = totalDuration / dataLineSoldo.length;
const previousY = (ctx) => ctx.index === 0 ? ctx.chart.scales.y.getPixelForValue(maxSoldo) : ctx.chart.getDatasetMeta(ctx.datasetIndex).data[ctx.index - 1].getProps(['y'], true).y;
const animation = {
	x: {
		type: 'number',
		easing: 'linear',
		duration: delayBetweenPoints,
		from: NaN,
		delay(ctx) {
		if (ctx.type !== 'data' || ctx.xStarted) {
			return 0;
		}
		ctx.xStarted = true;
		return ctx.index * delayBetweenPoints;
		}
	},
	y: {
		type: 'number',
		easing: 'linear',
		duration: delayBetweenPoints,
		from: previousY,
		delay(ctx) {
		if (ctx.type !== 'data' || ctx.yStarted) {
			return 0;
		}
		ctx.yStarted = true;
		return ctx.index * delayBetweenPoints;
		}
	}
}
const configLineSoldo = {
	type: 'line',
	data:{
		labels: labelsLineSoldo,
		datasets: [{
			label: "Доходы",
			data: dataLineSoldo,
			borderColor: "red",
			fill: {
				above: '#70C852',
                below: '#FF1212',
				value: 0	
			},
			backgroundColor: "transparent",
			pointRadius: 4,
      		pointBorderColor: 'rgb(255, 10, 10)'
		}]
	},
	options: {
		animation,
		interaction: {
			intersect: false
		},
		scales: {
			x: {
                type: 'time',
                time: {
                    unit: 'day',
                }
            }
		},
		responsive: true,
		plugins: {
			legend:{
				labels:{
					usePointStyle: true,
				},
				title:{
					display: true,
					font: {
						size: 30,
						family: "YanoneKaffeesatz",
					},
					fullSize: true,
					text: "Чистый доход"
				}
			}
		},
	}	
}

const pieIncome = new Chart(ctx,configPieIncome)
const pieExpenses = new Chart(ctx2,configPieExpenses)
const lineSoldo = new Chart(ctx3,configLineSoldo)

// Здания
class Building{
	constructor(title, img, li_data,group){
		this.title = title
		this.img = img
		this.li_data = li_data
		this.group = group
	}
	createEl(){
		const buildings = document.querySelector(".wrapper__buildings")
		const building__info = document.createElement("div")
		building__info.setAttribute("value",this.group)
		const building_title = document.createElement("span")
		const building__text = document.createElement("ul")
		const building_img = document.createElement("div")
		building_img.className = "building_img"
		building_img.innerHTML = `<img src="img/build/${this.img}.png" alt="Изображение">`
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
const a = new Building("А.П Мигунов","ap_migunov",li_data,"food")
const b = new Building("А.П Мигунов","ap_migunov",li_data,"solders")
const c = new Building("А.П Мигунов","ap_migunov",li_data,"solders")
a.createEl()
b.createEl()
c.createEl()
a.createEl()
b.createEl()
c.createEl()
a.createEl()
// Торговля
class Transfer{
	constructor(county_from,count_goods_from, goods_from,county_to,count_goods_to, goods_to){
		this.county_from = county_from
		this.county_to = county_to
		this.count_goods_from = count_goods_from
		this.count_goods_to = count_goods_to
		this.goods_from = goods_from
		this.goods_to = goods_to
		
	}
	createEl(){
		this.all_transfers = document.querySelector(".trade__transfers")

		this.body_transfer = document.createElement("div")
		this.body_transfer.className = "transfer"

		this.wrapp_country_from = document.createElement('span')
		this.wrapp_country_from.className = "transfer_country"
		this.icon_country_from = document.createElement('div')
		this.icon_country_from.className = "transfer_icon"
		this.icon_goods_from = document.createElement('div')
		this.icon_goods_from.className = "transfer_icon"
		this.wrap_count_goods_from = document.createElement('div')
		this.wrap_count_goods_from.className = "goods_count"

		this.wrapp_country_to = document.createElement('span')
		this.wrapp_country_to.className = "transfer_country"
		this.icon_country_to = document.createElement('div')
		this.icon_country_to.className = "transfer_icon"
		this.icon_goods_to = document.createElement('div')
		this.icon_goods_to.className = "transfer_icon"
		this.wrap_count_goods_to = document.createElement('div')
		this.wrap_count_goods_to.className = "goods_count"

		this.direction_trade = document.createElement('div')
		this.direction_trade.className = "trade_direction"
		

		this.icon_country_from.innerHTML = `<img src="img/${this.county_from}.png" alt="Изображение">`
		this.wrapp_country_from.append(this.icon_country_from)
		this.icon_goods_from.innerHTML = `<img src="img/goods/${this.goods_from}.png" alt="Изображение">`
		this.wrapp_country_from.append(this.icon_goods_from)
		this.wrap_count_goods_from.innerText = `${this.count_goods_from}`
		this.wrapp_country_from.append(this.wrap_count_goods_from)

		this.icon_country_to.innerHTML = `<img src="img/${this.county_to}.png" alt="Изображение">`
		this.wrapp_country_to.prepend(this.icon_country_to)	
		this.icon_goods_to.innerHTML = `<img src="img/goods/${this.goods_to}.png" alt="Изображение">`
		this.wrapp_country_to.prepend(this.icon_goods_to)
		this.wrap_count_goods_to.innerText = `${this.count_goods_to}`
		this.wrapp_country_to.prepend(this.wrap_count_goods_to)

		this.body_transfer.append(this.wrapp_country_from)
		this.body_transfer.append(this.direction_trade)
		this.body_transfer.append(this.wrapp_country_to)

		this.all_transfers.append(this.body_transfer)
	} 	
}
const trans = new Transfer("frog_diplomacy", 3, 'airplane', "sheep_diplomacy", 12, 'car')
const trans2 = new Transfer("pig_diplomacy", 55, 'fish', "frog_diplomacy", 2, 'airplane')
const trans3 = new Transfer("pig_diplomacy", 5, 'car', "sheep_diplomacy", 1, 'airplane')
trans.createEl()
trans2.createEl()
trans3.createEl()