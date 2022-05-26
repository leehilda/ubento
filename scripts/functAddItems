const addProdbtn = document.getElementById("addProdBtn");


function clearInput() {

    document.querySelector("#productID").value = "";
    document.querySelector("#productName").value  = "";
    document.querySelector("#category").value  = "";
    document.querySelector("#details").value  = "";
    document.querySelector("#price").value  = "";
}



//add button declaration and function

addProdbtn.addEventListener('click', addProductForm);

let x = 0;
let product = [];


function addProductForm()
{

let obj = {};

let productName = document.getElementById("productName").value;
let category = document.getElementById("category").value;
let details = document.getElementById("details").value;
let price = document.getElementById("price").value;
let imageURL = document.getElementById("prodImage").src;

obj = {productName, category, details, price, imageURL};
product.push(obj);

console.log(product);

clearInput();


}
let random = Math.floor(Math.random()*400);
document.getElementById("productID").value = random;

//document.getElementById("prodImage").innerHTML 
