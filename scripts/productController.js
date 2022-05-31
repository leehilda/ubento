class ProductController {

    /* --------- Constructor --------- */

	constructor() {
		this.allProductItems = [];
        this.filterCategory = [];
	}

	/* ----------- Methods ----------- */

    //addProduct method

        addProduct(name, category, details, price, imageURL) 
        {   
            const productItem = 
            {
                name: name,
                category: category,
                details: details,
                price: price,
                imageURL: imageURL
            }

            this.allProductItems.push(productItem);

        }

    //displayProduct Method

        displayProduct(category) 
        {
            let showProductItem = "";
            let moreBtnId = "";

            //Create array for filtered product list
            let getProduct = [];

            //Displayed products result = 1) by default, show all categories, 2) else if search bar contains input, filter based on search input value, 3) else filter based on the filter button selected
            if (category == "All") { getProduct = this.allProductItems; }
            else if (!this.searchCategory == "") { getProduct = this.searchCategory; }
            else  { getProduct = this.filterCategory; }

            getProduct.forEach ((item, index) => {

                moreBtnId = "item" + index;
                //item0, item1....... item6
                
                showProductItem += 
                `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-5">
                    <div class="card bento-card bento-card-hover mx-auto sm-card-width" style="max-width: 20em; border-radius: 0%">
                        
                        <div id="${moreBtnId}" class="d-flex align-items-center" style="height: 300px; cursor: zoom-in" data-bs-toggle="modal" data-bs-target="#productModal">
                            <img src="${item.imageURL}" class="card-img-top item-img" alt="Bento Image">
                        </div>

                        <div class="card-body item-card">
                            <img src="${item.imageURL}" class="card-img-top item-img" style="display: none" alt="Bento Image">
                            <h3 class="card-title item-name">${item.name}</h3>
                            <p class="card-price item-price">$ ${item.price.toFixed(2)}</p>
                            <span><i class="bi bi-cart-plus-fill addToCart"></i></span>
                        </div>

                    </div>
                </div>
                `    

            });
        
            document.getElementById("row").innerHTML = showProductItem;

            //EventListener for product modal
            getProduct.forEach ((item, index) => {
                moreBtnId = "item" + index;
                document.getElementById(moreBtnId).addEventListener("click", function(){ displayItemDetail(item) });
            
            });
        
        }

    //filterProduct Method
    
        filterProduct(getSelectedCategory) 
        {
            //filterProduct Method will take in which filter category that the user selects (e.g. Greens should pass in as a parameter to this method)
            //Class method should only perform one action
            //addEventListener of all categories can be performed in the displayProduct.js

            //1) Based on the getSelectedCategory, do an Array filter method to check if an item category == getSelectedCategory
            this.filterCategory = this.allProductItems.filter(productItem => productItem.category.includes(getSelectedCategory));
            console.log(this.filterCategory);

            //2) Display the filtered category items
            this.displayProduct(getSelectedCategory);

        }

    //searchProduct Method
    
    searchProduct(getSearchInput) 
        {
            //searchProduct Method will take in the input entered by the user in the search bar and pass it in as a parameter to this method

            //1) Based on the getSearchInput, do an Array filter method to check if an item category == getSearchInput
            this.searchCategory = this.allProductItems.filter(productItem => productItem.category.toLowerCase().includes(getSearchInput.toLowerCase()));
            console.log(this.searchCategory);

            //2) Display the filtered category items
            this.displayProduct(getSearchInput);

        }
        
} //End of ProductController class


//Display product array information on product modal
function displayItemDetail(item) {
	document.querySelector("#itemTitle").innerHTML = item.name;
	document.querySelector("#itemCategory").innerHTML = item.category;
    document.querySelector("#itemDetails").innerHTML = item.details;
	document.querySelector("#itemPrice").innerHTML = `$ ${item.price.toFixed(2)}`;
    document.querySelector("#itemImage").src = item.imageURL;
}