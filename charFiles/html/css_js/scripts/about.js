const aboutChartCont = document.getElementById("myChart");
let aboutChart  = new Chart(aboutChartCont, {
    type: 'bar',
    data: {
      labels:  ["X axis value 1", "X axis value  2"],
      datasets: [{
        label:  "Enter chart label here(for y axis values)",
        data: [20, 10],
        borderWidth: 1,
        backgroundColor: "blue",
        hoverBackgroundColor: "orange"
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });