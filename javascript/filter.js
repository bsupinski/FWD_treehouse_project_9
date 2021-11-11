const codeChoice = document.querySelectorAll(".code_choice")
const svgCode = document.querySelectorAll(".code")
const bG = document.querySelector("body");


bG.style.backgroundColor="yellow";


svgCode.forEach(choice => {
    choice.addEventListener("click", (e)=> {
        target = e.target;
        console.log(target);
        if(target === choice[0]){
            bG.style.backgroundColor="green";
        }
    })
})