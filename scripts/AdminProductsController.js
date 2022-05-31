// class AdminProductsController {

//     constructor() {
//         this.AdminProducts = [];
//     }

//     //methods

//     addProduct(name, category, details, price, imageURL) {

//         //we will edit the methods when we have done our own API in Java
//         const product = {
//             name: name,
//             category: category,
//             details: details,
//             price: price,
//             imageURL: imageURL
//         }
//         this.AdminProducts.push(product);
//     }

//     displayAdminProducts() {
//         let insertProduct = "";
//         this.AdminProducts.forEach (product => {     
//             insertProduct +=
//                     // <!-- item card-->
//             `
//                 <div class="col">
//                   <div class="item-card">
//                     <img src="${product.imageURL}" class="img-fluid item-img">
//                     <h4 class="item-name">${product.name}</h2>
//                     <span class="item-price">${product.price}</span>
//                     <span><i class="bi bi-cart-plus-fill addToCart" id="${product.category}"></i></span>
//                   </div>
//                 </div>      
//             `

//         });
//         document.getElementById("itemize").innerHTML =  insertProduct;
//     }

//     displayAdminProductsTable() {
//         let insertProduct = "";
//         this.AdminProducts.forEach (product => {     
//             insertProduct +=
//                     // <!-- product item row-->
//             `
//             <tr>
//             <td>${product.name}</td>
//             <td>${product.category}</td>
//             <td>${product.details}</td>
//             <td>${product.price}</td>
//             <td>${product.imageURL}</td>
//             <td><a onclick="onEdit(this)" id="editBtn">Edit</a>
//             <a onclick="onDelete(this)" id="deleteBtn">Delete</a></td>
//             </tr>
//             `

//         });
//         document.getElementById("productList").getElementsByTagName('tbody')[0].innerHTML =  insertProduct;
//     }

// }



//An instance of the ProductController class object

const products = new ProductController();   //For product menu

/* --------------- addProduct() --------------- */

    products.addProduct(
        //name
        "Garden Salad", 
        //category
        "Greens", 
        //details
        "Tomato, Lettuce, Mango, Brocolli Florets, Sesame Toppings",
        //price
        12.00,
        //imageURL
        "images/bentos/Product1.png"
    );

    products.addProduct(
        //name
        "Vitamin V", 
        //category
        "Greens", 
        //details
        "Cucumber, Leek, Carrots, Tomatoes and Capsicum",
        //price
        9.50,
        //imageURL
        "images/bentos/Product2.png"
    );

    products.addProduct(
        //name
        "Afternoon Booster", 
        //category
        "Greens", 
        //details
        "Lettuce, Strawberry, Ricotta, Aglio olio orecchiette",
        //price
        10.50,
        //imageURL
        "images/bentos/Product3.png"
    );

    products.addProduct(
        //name
        "Classic Basic", 
        //category
        "Chicken", 
        //details
        "Baked Seasalt Chicken Breast with Roasted and Peppered Potatoes with White Rice",
        //price
        13.00,
        //imageURL
        "images/bentos/Product4.png"
    );

    products.addProduct(
        //name
        "Prawn Fiesta", 
        //category
        "Seafood", 
        //details
        "Green Peas, Olives, Corn, Tomatoes, Shrimp, Olive Oil",
        //price
        14.50,
        //imageURL
        "images/bentos/Product5.png"
    );

    products.addProduct(
        //name
        "Shrimp Fiesta", 
        //category
        "Seafood", 
        //details
        "Spaghetti, Shrimp, Egg, Olives, Lettuce, Tomatoes",
        //price
        17.00,
        //imageURL
        "images/bentos/Product6.png"
    );

    products.addProduct(
        //name
        "Kidz Starter", 
        //category
        "Chicken, Kids", 
        //details
        "Eggs, Cheese, Cucumber, Tomatoes, Rice",
        //price
        12.00,
        //imageURL
        "images/bentos/Product7.png"
    );

    products.addProduct(
        //name
        "Kidz Booster", 
        //category
        "Chicken, Kids", 
        //details
        "Brocolli, Egg, Quail Eggs, Tomatoes, Cheese",
        //price
        12.50,
        //imageURL
        "images/bentos/Product8.png"
    );

    products.addProduct(
        //name
        "Fun Lunch", 
        //category
        "Chicken, Lunch", 
        //details
        "Tomatoes, Rice, Beans, Butter, Egg Omellete",
        //price
        9.50,
        //imageURL
        "images/bentos/Product9.png"
    );

    products.addProduct(
        //name
        "Complete Lunch", 
        //category
        "Seafood, Lunch", 
        //details
        "Rice, Shrimp, Corn Peas, Carrots",
        //price
        13.00,
        //imageURL
        "images/bentos/Product10.png"
    );

    products.addProduct( 
        //name
        "Toddler Takeaway", 
        //category
        "Greens", 
        //details
        "Toamtoes, Rice, Brocolli, Toamtoes, Corn, Olives, Lettuce",
        //price
        12.00,
        //imageURL
        "images/bentos/Product11.png"
    );

    products.addProduct(
        //name
        "Guilt-Free Snacker", 
        //category
        "Chicken", 
        //details
        "Ham, Rice, Peas, Peas, Egg",
        //price
        10.50,
        //imageURL
        "images/bentos/Product12.png"
    );

    products.addProduct(
        //name
        "Create Your Own Bento", 
        //category
        "Custom", 
        //details
        "Will add the codes for ingredient selections later",
        //price
        15.00,
        //imageURL
        "images/bentos/productCustom.png"
    );

/* --------------- Display Product Rows--------------- */


products.displayAdminProductsTable();
// products.displayAdminProducts();
