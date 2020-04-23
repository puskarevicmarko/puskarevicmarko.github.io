const CHART = document.getElementById("lineChart");
console.log(CHART);
0
setTimeout(function(){
    odometer.innerHTML = 233;
}, 0);

window.odometerOptions = {
    duration: 5000 // duration in milliseconds
  };

Chart.defaults.global.defaultFontFamily = "'-apple-system', 'BlinkMacSystemFont', sans-serif";
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["16-Mar", "17-Mar", "18-Mar", "19-Mar", "20-Mar", "21-Mar", "22-Mar", "23-Mar", "24-Mar", "25-Mar", "26-Mar", "27-Mar", "28-Mar", "29-Mar", "30-Mar", "31-Mar", "1-Apr", "2-Apr", "3-Apr", "4-Apr", "5-Apr", "6-Apr", "7-Apr", "8-Apr", "9-Apr", "10-Apr", "11-Apr", "12-Apr", "13-Apr", "14-Apr", "15-Apr","16-Apr", "17-Apr", "18-Apr", "19-Apr", "20-Apr", "21-Apr", "22-Apr", "23-Apr"],
        datasets: [
            {
                label: "Lexington COVID-19 Confirmed Cases",
                fill: true,
                lineTension: 0.0,
                backgroundColor: "rgba(166, 25, 46, 0.4)",
                borderColor: "rgba(166, 25, 46, 1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(166, 25, 46,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHitRadius: 10,
                data: [6, 6, 6, 7, 8, 8, 8, 9, 11, 14, 17, 19, 21, 25, 25, 27, 28, 33, 36, 37, 41, 47, 47, 62, 80, 80, 87, 130, 139, 150, 151, 160, 171, 174, 181, 200, 202, 206, 233],
                spanGaps: true,
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});