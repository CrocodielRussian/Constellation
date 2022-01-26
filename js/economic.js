canv = document.getElementById("pie_income")
ctx = canv.getContext('2d')

let color = [
	'rgb(102, 165, 52)',
	'rgb(232, 161, 23)',
	'rgb(22, 50, 192)',
]

const data = {
	labels: ['Здания', 'Торговля', 'Инвестиции'],
  	datasets: [{
    	label: 'DataSet',
    	data: [34,33,33],	
    	backgroundColor: color,
		borderColor: color,
 	 }]
}

const config = {
	type: 'pie',
	data: data,
	options: {
		responsive: true,
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Доходы'
			}
		}
	}
}
const myChart = new Chart(ctx,config)