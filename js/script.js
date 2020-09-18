const miniChartCTX = document.getElementById('mini-chart').getContext('2d');

const miniChart = new Chart(miniChartCTX, {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [33, 11, 26],
        backgroundColor: ['#acffe3', '#889aff', '#c55181'],
        borderColor: '#2e3035',
      },
    ],
    labels: ['Clothes', 'Medicine', 'Food'],
  },
  options: {
    legend: {
      display: false,
    },
  },
});

const mainChartCTX = document.getElementById('main-chart').getContext('2d');

const blueGradient = mainChartCTX.createLinearGradient(0, 0, 0, 400);
blueGradient.addColorStop(0, '#96A6FF');
blueGradient.addColorStop(0.3, '#96A6FF');
blueGradient.addColorStop(1, '#00000019');

const redGradient = mainChartCTX.createLinearGradient(0, 0, 0, 400);
redGradient.addColorStop(0, '#d84e85');
redGradient.addColorStop(0.3, '#d84e85');
redGradient.addColorStop(1, '#00000019');

const mainChart = new Chart(mainChartCTX, {
  type: 'line',
  data: {
    datasets: [
      {
        label: '2019',
        data: [12, 15, 25, 10, 12, 11, 18, 15, 11, 15, 20, 25],
        backgroundColor: blueGradient,
        pointRadius: 0,
        pointHoverRadius: 0,
        lineTension: 0.5,
      },
      {
        label: '2020',
        data: [25, 20, 10, 16, 13, 14, 5, 10, 25, 20, 10, 8],
        backgroundColor: redGradient,
        pointRadius: 0,
        pointHoverRadius: 0,
        lineTension: 0.5,
      },
    ],
    labels: [
      'Janaury',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  },
  options: {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          display: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
