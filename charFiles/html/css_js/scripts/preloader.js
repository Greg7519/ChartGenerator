var preloader = document.getElementById("preloader");
const navbar = document.getElementById("navbar");
setTimeout(hidePreloader, "1000");
const afterLoad = document.getElementById("AfterLoad");
const r = document.querySelector(":root");
const body = document.getElementsByTagName("BODY")[0];
const CreateBtn = document.getElementById("CreateChart");

function hidePreloader(){
    preloader.style.display = "none";
    afterLoad.style.display = "block";    
    navbar.style.display = "block";
    body.style.backgroundColor = "white";

}
function showPreloader(){
    preloader.style.display = "flex";
    afterLoad.style.display = "none";  
    navbar.style.display = "none";
    body.style.backgroundColor = "rgb(255, 60, 60)";
}