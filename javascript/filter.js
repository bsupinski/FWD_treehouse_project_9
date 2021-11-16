const codeChoice = document.querySelectorAll(".code_choice")
const cards = document.querySelectorAll(".card");
const wholePage = document.querySelector("html");
const testOne = document.getElementById("html-5_filter");
const searchBar = document.getElementById("searchBox");
const portfolioToggle = document.querySelectorAll(".carrot");

//Searchbar function
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

//Filter by code function
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



//Code filter event listeners
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

// Resetting code filter
window.addEventListener("click", (e) =>{
    if(e.target.classList.contains("card") || (e.target.parentNode.classList.contains("card")) || (e.target.parentNode.parentNode.classList.contains("card")) || (e.target === searchBar) || (e.target.classList.contains("carrot"))) {
        return;
    }
    else{
        cards.forEach(card => {
            card.parentNode.style.display = "flex";
            searchBar.value=""
        })
    }
}, true)


//Searchbar call
search(searchBar, cards)

portfolioToggle.forEach(carrot => {
    carrot.addEventListener("click", ()=> {
        if(carrot.classList.contains("carrot-open")){
            console.log("hello");
            carrot.style.transform = "rotate(0deg)";
            carrot.classList.remove("carrot-open");
            carrot.classList.add("carrot-close");
            carrot.parentNode.nextSibling.nextSibling.style.display ="none"
            
        }
        else{
            carrot.style.transform = "rotate(90deg)";
            carrot.classList.remove("carrot-close");
            carrot.classList.add("carrot-open");
            carrot.parentNode.nextSibling.nextSibling.style.display ="flex";
        }
    })
})



