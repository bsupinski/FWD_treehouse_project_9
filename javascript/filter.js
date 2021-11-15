const codeChoice = document.querySelectorAll(".code_choice")
const cards = document.querySelectorAll(".card");
const wholePage = document.querySelector("html");
const testOne = document.getElementById("html-5_filter");
const searchBar = document.getElementById("searchBox");

//filter by code Function
function search(searchFrom, searchTo){
    searchFrom.addEventListener("keyup", (e) => {    
        userInput = e.target.value.toLowerCase();
        searchTo.forEach(card => {
            filter = card.textContent.toLocaleLowerCase();
            if(filter.includes(userInput)){
                card.parentNode.style.display = "flex";
            }
            else{
                card.parentNode.style.display = "none";
            }
        })
    })
}

//Search bar function
function imageFilter(filter){
    cards.forEach(card =>{
        if(card.innerHTML.includes(filter)){
            card.parentNode.style.display = "flex";
        }
        else{
            card.parentNode.style.display = "none";
        }
    }) 
}




codeChoice.forEach(choice => {
    choice.addEventListener("click",()=> {
        if(choice.id ==="html-5_filter"){
            imageFilter("HTML")
        }

        else if(choice.id ==="css_filter"){
            imageFilter("CSS");
        }

        else if(choice.id ==="sass_filter"){
            imageFilter("Sass");
        }

        else if(choice.id ==="javascript_filter"){
            imageFilter("Javascript");
        }

        else if(choice.id ==="bootstrap_filter"){
            imageFilter("Bootstrap");
        }
    })
})


wholePage.addEventListener("click", (e) =>{
    if(e.target !== cards){
        cards.forEach(card =>{
            card.style.display = "flex";
        })
    }
    
}, true)



// wholePage.addEventListener("click", (e) =>{
//     cards.forEach(card =>{
//         card.parentNode.style.display = "flex";
//     })
// }, true)



search(searchBar, cards)