let userinput = document.getElementById("username")
userinput.setAttribute('required', 'required');

document.getElementById("button").addEventListener("click", (event)=>{
    event.preventDefault();


const username = document.getElementById('username').value;
const email = document.getElementById('email').value;

const requiredInputs = document.getElementsByClassName('error')[0];
if(username === "" || email === ""){
    requiredInputs.innerText = "Please enter both fields"
    requiredInputs.style.color = "white"
} else{
    requiredInputs.innerText =""
}

const isEmailValid = document.getElementsByClassName('error')[1];
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (!emailRegex.test(email)){
    isEmailValid.innerText = "That's not a valid email"
    isEmailValid.style.color = "white"
}else{
    isEmailValid.innerText = ''
    
}

console.log(`User's name is ${username}. User's email is ${email}`);

const formSubmit = document.getElementByClassName("thankyou");
if (username && email){
    formSubmit.innerText = "Thanks for stopping by! I'll get back to you soon"
    // formSubmit.style.color = "white"
}

})