const subjects = document.getElementById('subjCont');
const grade = document.getElementById('gradeCont');
const ctx = document.getElementById('myChart');
const submitBtn = document.getElementById("submitBtn");
// const CreateBtn = document.getElementById("CreateChart");
const UserInputForm = document.getElementById("userInputForm");
const hideForm = document.getElementById("ChartForm");
const myCanvas = document.getElementById("myChart");
const CanvasCont = document.getElementById("ChartCont");
const LabelSpacer = document.getElementById("spacerToHide");
const ChartLabelContDiv = document.getElementById("ChartLabelCont");
// const afterLoad = document.getElementById("AfterLoad");
var bgImg = document.getElementById("bgImg");
const subjects_array = []
const grade_array = []
var chartLabels = []
submitBtn.onclick = function(){ 
    
    var ChartLabelCont = document.getElementById("labelCont");
    if(chartLabels.length === 0){
      testing = ChartLabelCont.value;
      
      // ChartLabelCont.textContent = "";
    
      
      if(ChartLabelCont.value != ""){
        chartLabels.push(testing);
        ChartLabelContDiv.style.display = "none";
        LabelSpacer.style.display = "none";
      }
        
    }
    else{
      ChartLabelContDiv.style.display = "none";

    }
    
    // hideForm.style.visibility = "none" 
    let temp_subject = subjects.value;
    subjects.value = "";
    if(subjects_array.includes(temp_subject)){
      alert("Subject already exist!")
      subjects.value = "";
      grade.value = "";
    }
    else if (temp_subject == ""){
      alert("Please enter a valid subject!");
    }
    else if(chartLabels.length == 0){
      window.alert("Please enter a chart label");
      subjects.value = "";
      grade.value = "";
    }
    else{
      subjects_array.push(temp_subject);
      subjects_array.toString();
      let gradeofsubj = grade.value;
      grade.value = "";
      // if (gradeofsubj == "" || gradeofsubj < 0 || gradeofsubj > 20  ){
      //   alert("Please enter a valid grade(between 0 and 20)!");
      // }
      // else{
      grade_array.push(gradeofsubj);
      
      console.log(grade_array);
      
    }
    console.log(subjects_array);  
  
}

// if(subjects_array.length != 0 && grade_array.length != 0 && chartLabels != 0){
  CreateBtn.onclick = function(){
    
    showPreloader()
    setTimeout(showCanvas, 1000);
    
    function showCanvas(){
      hidePreloader()
      CanvasCont.style.display = "flex";
      bgImg.style.backgroundImage = "url(chart_bg.jpg)";
      bgImg.style.display = "block";
      // CanvasCont.style.display = "block";
      myCanvas.style.display = "block";
      myCanvas.style.width = "1280px";
      // myCanvas.style.scale = 0.9;
      UserInputForm.style.display = "none";
      afterLoad.style.display = "none";
     
    }
    
    
    const median = subjects_array.length;
    let sumOfGrades = 0;
    for (let i = 0; i < grade_array.length; i++) {
      sumOfGrades += Number(grade_array[i]);
      console.log(sumOfGrades)
    }
    let median_grade = sumOfGrades / median;
    // grade_array.push(median_grade);
    let arrayofObj = subjects_array.map(function(d, i){
      return{
        label: d,
        data: grade_array[i] ||0 
      };
    });
    let arraySorted = arrayofObj.sort(function(a, b){
      return b.data - a.data;
    })
    let newArrayLabel = []
    let newArrayData = []
    arraySorted.forEach(function(d){
      newArrayLabel.push(d.label)
      newArrayData.push(d.data);
    });
    if (subjects_array.length > 1){
      newArrayLabel.push("median");
      newArrayData.push(median_grade);
    }
    console.log(newArrayData);
    let newChart  = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: newArrayLabel,
        datasets: [{
          label: testing,
          data: newArrayData, 
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
    myCanvas.onclick = function(){
      const myImg = newChart.toBase64Image();
      myCanvas.download = myImg;
  
    }
    
    // const myImage = newChart.toBase64Image();
    // const downButton = document.getElementById("downloadButton");
  
    // const ImageLink = document.getElementById("myChartDown");
    // const Header = document.getElementById("ChartFinished");
    // // Header.style.display = "block";
    // // ImageLink.href = myImage
    // // ImageLink.download = "myChart.png"
    // // downButton.style.display = "block";
  
  
  }   
  


