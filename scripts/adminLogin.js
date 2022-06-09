const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.querySelector("#login-container > p");

function clearInput() {
    document.querySelector("#username").value = "";
    document.querySelector("#password").value  = "";
    

}

loginButton.addEventListener('click', loginCheck);

    function loginCheck(){

        const username = document.querySelector("#username").value;
        const password = document.querySelector("#password").value;
        console.log(username);

        if (username == "admin" && password == "123456") 
        {
            location.replace("productDb.html")
        } else {
            document.querySelector("#login-error-msg").style.display = "block"; 
            
        }

        clearInput();
    }


    
let forgetPwButton = document.getElementById('btnSave')
let displayMessage = document.querySelector('#emailHelp > p');




forgetPwButton.addEventListener('click', sendEmail);

function sendEmail() {

    let inputBox = document.querySelector('.form-control').value;
    let pattern = /\W/g;
    let result = pattern.test(inputBox);
    console.log(result)

    if (result == true && inputBox.includes('@') ) {
        displayMessage.innerHTML = 'an email will be send shortly'
        setTimeout(function(){location.reload()}, 1000)
    } else {
        displayMessage.innerHTML = "error"
        clearInput()
    }
}
    

 const rmCheck = document.getElementById("remember")
    

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  username.value = localStorage.username;
  password.value = localStorage.password;
} else {
  rmCheck.removeAttribute("checked");
  username.value = "";
}

function rememberMe() {
  if (rmCheck.checked && username.value !== "") {
    localStorage.username = username.value;
    localStorage.password = password.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.password = "";
    localStorage.checkbox = "";
  }
}

