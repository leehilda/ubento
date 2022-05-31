
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

//Setup search function for the user by clicking on the search button or pressing the enter key

//1) Search with button function

    function searchButtonClicked() {

        let searchInput = document.getElementById("searchText").value;    //Return user's input from the search bar
        products.searchProduct(searchInput);

    }

//2) Search with enter key

    // Get the user's input field from the search bar
    let searchField = document.getElementById("searchText");

    // Execute a function when the user presses a key on the keyboard
    searchField.addEventListener("keypress", function(event) {

        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {

            // Cancel the default action, if needed
            event.preventDefault();

            // Trigger the button element with a click
            document.getElementById("btnSearch").click();

            // Clear input field after performing search
            searchField.value = "";
        }
    });