// document.write("<pre>");
//   asterisk = function(){
//     document.write("***********" + "<br>");
//   }
//   asterisk()
//   for(let i = 0; i < 8; i++){
//     document.write("*         *" + "<br>");
//   }
//   asterisk()
  
// document.write("</pre>");
import Chart from 'chart.js/auto';

const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              borderWidth: 1
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