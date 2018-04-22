var ctx = document.getElementById("myCardChart2").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["", "", "", "", "", ""],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

        }]
    },
    options: {
        scales: {
            xAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,1.0)",
                    zeroLineColor: "rgba(254,254,254, 1.0)"
                }
            }],
            yAxes: [{
                ticks: {
                    display:false
                },
                gridLines: {
                    color: "rgba(255,255,255,1.0)",
                    zeroLineColor: "rgba(254,254,254, 1.0)"
                }
            }]
        },
        legend: {
            display:false,
            labels: {
                
            },
            title: {
                display: true,
                text: 'Custom Chart Title'
            },
        },
        layout: {
            padding: {
                left:0,
                right: 10,
                top: 0,
                bottom: 0
            }
        },
        tooltips:{
            enabled:false
        }
    }
});