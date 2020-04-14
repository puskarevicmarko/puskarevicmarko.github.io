const CHART = document.getElementById("lineChart");
console.log(CHART);

setTimeout(function(){
    odometer.innerHTML = 150;
}, 0);

window.odometerOptions = {
    duration: 5000 // duration in milliseconds
  };

Chart.defaults.global.defaultFontFamily = "'-apple-system', 'BlinkMacSystemFont', sans-serif";
let lineChart = new Chart(CHART, {
    type: 'line',
    data: {
        labels: ["16-Mar", "17-Mar", "18-Mar", "19-Mar", "20-Mar", "21-Mar", "22-Mar", "23-Mar", "24-Mar", "25-Mar", "26-Mar", "27-Mar", "28-Mar", "29-Mar", "30-Mar", "31-Mar", "1-Apr", "2-Apr", "3-Apr", "4-Apr", "5-Apr", "6-Apr", "7-Apr", "8-Apr", "9-Apr", "10-Apr", "11-Apr", "12-Apr", "13-Apr", "14-Apr"],
        datasets: [
            {
                label: "Lexington COVID-19 Confirmed Cases",
                fill: true,
                lineTension: 0.2,
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
                data: [3, null, null, null, null, null, 8, null, null, null, null, null, 25, 25, 25, null,null,33,36,null,null,null,47,62,null,null,null,130,139,150],
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