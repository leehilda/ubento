const messageForm = document.getElementById("message-form")
const submitButton = document.querySelector('#messageBtn');


function clearField() {
    document.getElementById('first').value = "";
    document.getElementById('lName').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mobile').value = "";
    document.getElementById('feedback').value = "";
}   
//console.log(clearField)

let allMessages = [];
let x = 0;
//let obj = Array();    

 //submitButton.addEventListener('click', submitMessage);

    function submitMessage()
    {
        // let x = 0;
        //let allMessages = [];
        let obj = {}

        //create variables for each input field
        let firstName = document.getElementById('first').value;        
        let lastName = document.getElementById('lName').value;
        let email = document.getElementById('email').value;
        let mobile = document.getElementById('mobile').value;
        let feedback = document.getElementById('feedback').value;

        obj = {firstName, lastName, email, mobile, feedback};

        allMessages.push(obj);

        console.log(allMessages)

        clearField();
    }
        
        
        

        
 





// class Message{
//     constructor() {
//         this.allMessages = [];
//     }

//      addMessage(firstName, lastName, email, mobile, feedback)
//      {
//         const info = {
//             _firstName : document.querySelector('#fName').value,
//             _lastName : document.querySelector('#lName').value,
//             _email : document.querySelector('#email').value,
//             _mobile : document.querySelector('#mobile').value,
//             feedback : document.querySelector('.feedback').value
//         }
//         this.allMessages.push(info);
//     } 
    
// }
