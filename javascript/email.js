const userName = document.getElementById('user_name');
const userEmail = document.getElementById("user_email");
const userMessage = document.getElementById("user_message");
const submitButton = document.getElementById("submit_button");



submitButton.addEventListener("click", (e) =>{
    e.preventDefault();
    if(userName.value === "" || userEmail.value === "" || userMessage.value === ""){
        alert("Please fill out all sections.(Name, Email address, and Message");
    }
    else{
        alert("Your email has been sent.")
        userName.value = null;
        userEmail.value = null;
        userMessage.value = null;
    }
    
    
})
