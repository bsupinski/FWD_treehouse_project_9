const codeChoices = document.getElementById("code_choices");
const codeChoice = document.getElementsByClassName("code_choice")
const svgCode = document.getElementsByClassName("svg_container")
const bG = document.querySelector("body");


bG.style.backgroundColor="yellow";


codeChoices.addEventListener("click", (e) =>{
    let target = e.target;
    if(target === codeChoice[0] || target === svgCode[0]) {
        bG.style.backgroundColor="blue";
    }
})