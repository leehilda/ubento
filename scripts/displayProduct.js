
//An instance of the ProductController class object

    const products = new ProductController();   //For product menu

/* --------------- addProduct() --------------- */

    products.addProduct(
        //id
        1001,
        //imageURL
        "images/bentos/Product1.png", 
        //name
        "Garden Salad", 
        //category
        "Greens", 
        //details
        "Tomato, Lettuce, Mango, Brocolli Florets, Sesame Toppings",
        //price
        12.00
    );

    products.addProduct(
        //id
        1002,
        //imageURL
        "images/bentos/Product2.png", 
        //name
        "Vitamin V", 
        //category
        "Greens", 
        //details
        "Cucumber, Leek, Carrots, Tomatoes and Capsicum",
        //price
        9.50
    );

    products.addProduct(
        //id
        1003,
        //imageURL
        "images/bentos/Product3.png", 
        //name
        "Afternoon Booster", 
        //category
        "Greens", 
        //details
        "Lettuce, Strawberry, Ricotta, Aglio olio orecchiette",
        //price
        10.50
    );

    products.addProduct(
        //id
        1004,
        //imageURL
        "images/bentos/Product4.png", 
        //name
        "Classic Basic", 
        //category
        "Chicken", 
        //details
        "Baked Seasalt Chicken Breast with Roasted and Peppered Potatoes with White Rice",
        //price
        13.00
    );

    products.addProduct(
        //id
        1005,
        //imageURL
        "images/bentos/Product5.png", 
        //name
        "Prawn Fiesta", 
        //category
        "Seafood", 
        //details
        "Green Peas, Olives, Corn, Tomatoes, Shrimp, Olive Oil",
        //price
        14.50
    );

    products.addProduct(
        //id
        1006,
        //imageURL
        "images/bentos/Product6.png", 
        //name
        "Shrimp Fiesta", 
        //category
        "Seafood", 
        //details
        "Spaghetti, Shrimp, Egg, Olives, Lettuce, Tomatoes",
        //price
        17.00
    );

    products.addProduct(
        //id
        1007,
        //imageURL
        "images/bentos/Product7.png", 
        //name
        "Kidz Starter", 
        //category
        "Chicken, Kids", 
        //details
        "Eggs, Cheese, Cucumber, Tomatoes, Rice",
        //price
        12.00
    );

    products.addProduct(
        //id
        1008,
        //imageURL
        "images/bentos/Product8.png", 
        //name
        "Kidz Booster", 
        //category
        "Chicken, Kids", 
        //details
        "Brocolli, Egg, Quail Eggs, Tomatoes, Cheese",
        //price
        12.50
    );

    products.addProduct(
        //id
        1009,
        //imageURL
        "images/bentos/Product9.png", 
        //name
        "Fun Lunch", 
        //category
        "Chicken, Lunch", 
        //details
        "Tomatoes, Rice, Beans, Butter, Egg Omellete",
        //price
        9.50
    );

    products.addProduct(
        //id
        1010,
        //imageURL
        "images/bentos/Product10.png", 
        //name
        "Complete Lunch", 
        //category
        "Seafood, Lunch", 
        //details
        "Rice, Shrimp, Corn Peas, Carrots",
        //price
        13.00
    );

    products.addProduct(
        //id
        1011,
        //imageURL
        "images/bentos/Product11.png", 
        //name
        "Toddler Takeaway", 
        //category
        "Greens", 
        //details
        "Toamtoes, Rice, Brocolli, Toamtoes, Corn, Olives, Lettuce",
        //price
        12.00
    );

    products.addProduct(
        //id
        1012,
        //imageURL
        "images/bentos/Product12.png", 
        //name
        "Guilt-Free Snacker", 
        //category
        "Chicken", 
        //details
        "Ham, Rice, Peas, Peas, Egg",
        //price
        10.50
    );

    products.addProduct(
        //id
        9999,
        //imageURL
        "images/bentos/productCustom.png", 
        //name
        "Create Your Own Bento", 
        //category
        "Custom", 
        //details
        "Will add the codes for ingredient selections later",
        //price
        15.00
    );

/* --------------- Methods/Functions --------------- */

//First launch is to display all products
    
    products.displayProduct("All");

//Setup the EventListener for all the product category buttons

    const categories = document.getElementsByClassName("btnFilter");    //Return 7 HTML elements in an array

    for (let i=0;i<categories.length;i++)
    {
        categories[i].addEventListener("click", categoryClicked);
    }    

    function categoryClicked(event) {

        products.filterProduct(event.target.innerText);

    }

//Setup the function for the search product button

    function searchButtonClicked() {

        let searchInput = document.getElementById("searchText").value;    //Return user's input from the search bar
        products.searchProduct(searchInput);

    }

