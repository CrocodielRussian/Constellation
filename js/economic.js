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
allPlugins = {
	legend: {
		labels: {
			font: {
				size: 15
			}
		}
	}
}
const configPieIncome = {
	type: 'doughnut',
	data: dataPieIncome,
	options: {
		responsive: true,
		title: {
		  display: true,
		  text: "Доходы"
		},
		plugins: allPlugins
	  }
}
const configPieExpenses = {
	type: 'doughnut',
	data: dataPieExpenses,
	options: {
		responsive: true,
		title: {
		  display: true,
		  text: "Расходы",
		},
		plugins: allPlugins
	  }
}

ctx2 = document.getElementById("pie_expenses").getContext('2d')

const pieIncome = new Chart(ctx,configPieIncome)
const pieExpenses = new Chart(ctx2,configPieExpenses)