// Общие сведения
ctx = document.getElementById("pie_income").getContext('2d')
ctx2 = document.getElementById("pie_expenses").getContext('2d')
ctx3 = document.getElementById("line_soldo").getContext('2d')

const labelsPieIncome = ['Здания', 'Торговля', 'Инвестиции']
const dataPieIncome = [100,94,33]
const labelsPieExpenses = ['Армия', 'Правительство']
const dataPieExpenses = [56,52]
const labelsLineSoldo = [22.03,23.03,24.03,25.03,26.03,27.03,28.03,29.03,30.03,31.03]
const dataLineSoldo = [10,20,20,50,28,30,-20,102,80,-150]

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
					family: "MoshitaMono"
				}
			},
			title:{
				display: true,
				font: {
					size: 30,
					family: "MoshitaMono",
				},
				fullSize: true,
				text: subText
			}
		}
	}
	return allPlugins
}

let maxSoldo = Math.max(dataLineSoldo)
const totalDuration = 500;
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
const drawRect = {
	id: 'rect',
	beforeDraw: (chart) => {
	  const ctx = chart.canvas.getContext('2d');
	  ctx.save();
	  ctx.globalCompositeOperation = 'destination-over';
	  ctx.fillStyle = 'lightGreen';
	  ctx.fillRect(0, 0, chart.width/2, chart.height/2);
	  ctx.restore();
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
				above: 'rgb(20, 205, 10)',
                below: 'rgb(255, 0, 0)',
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
			type: 'linear'
			}
		},
		responsive: true,
		plugins: {
			quadrants: {
				t: "green",
				b: "red",
			},
			legend:{
				labels:{
					usePointStyle: true,
				},
				title:{
					display: true,
					font: {
						size: 30,
						family: "MoshitaMono",
					},
					fullSize: true,
					text: "Чистый доход"
				}
			}
		},
		plugins: [drawRect]
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
		console.log(this.all_transfers)
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
		this.direction_trade.innerText = ">>"
		

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
const trans = new Transfer("frog_diplomacy", 12, 'airplane', "frog_diplomacy", 12, 'airplane')
trans.createEl()
trans.createEl()
trans.createEl()