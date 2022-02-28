
//DOM-selector for the canvas 👇
const ctx = document.getElementById('myChart')

//"Draw" the chart here 👇
const labels = [
    'Finished projects',
    'Unfinished projects',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Bootcamp progress',
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(88, 99, 243)'],
      data: [6, 11],
    }]
  };

  const config = {
    type: 'doughnut',
    data: data,
    options: {}
  };

  const myChart = new Chart(
    document.getElementById('chart'),
    config
  );
