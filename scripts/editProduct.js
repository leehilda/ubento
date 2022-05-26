

//step 1 to display the information according to the form.

//step 2 allow to edit the Form
//step 3 to update the array list - can make use of the product ID to grab the replace()?

//Step 1


//let imageURL = document.getElementById("prodImage").src;

console.log("hello")

const bento =[{
    productID : "577",
    productName : "Kidz Starter",
    category : "kids",
    details : "Eggs, Cheese, Cucumber, Tomatoes, Rice",
    price : 12
},
{
    productID : "3001",
    productName : "Classic Basic",
    category : "Chicken",
    details : "Baked Seasalt Chicken Breast with Roasted and Peppered Potatoes with White Rice",
    price : 13
},
{
    productID : "4001",
    productName : "Vitamin KV",
    category : "Greens",
    details : "Cucumber, Leek, Carrots, Tomatoes and Capsicum",
    price : 9.50
}]

console.log(bento);

for(i=0; i<bento.length; i++){
    console.log( bento[i]);
}



//document.getElementById("editProductID").innerHTML = productID;
document.getElementById("editProductName").innerHTML = bento.productName;
