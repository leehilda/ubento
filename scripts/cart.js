// Cart Display Toggle Function

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
}

//Close Cart slider
closeCart.onclick = () => {
    cart.classList.remove("active");
}

// Cart on loading

if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}

//Function to listen for events -- DELETE LATER
function ready() {
    // remove items from cart listener
    let cartItemDeleteButtons = document.getElementsByClassName("cart-item-delete");
    console.log(cartItemDeleteButtons);
    for (let i = 0; i < cartItemDeleteButtons.length; i++) {
        let button = cartItemDeleteButtons[i];
        button.addEventListener("click", deleteCartItem);
        button.addEventListener("click", cartBadgeUpdate);
    }
    //quantity input listener
    let quantityInputs = document.getElementsByClassName("cart-item-quantity");
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener("change", quantityChanged)
    }
    // add to cart listener
    let addToCart = document.getElementsByClassName("addToCart");
    for (let i = 0; i < addToCart.length; i++) {
        let button = addToCart[i];
        button.addEventListener("click", addCartClicked);
        button.addEventListener("click", cartBadgeUpdate);
    }

    //hide cart-badge
    // document.getElementsByClassName("cart-badge").style.visibility = 'hidden';

    // Checkout
    document.getElementsByClassName("btn-secondary btn-checkout")[0].addEventListener("click", checkOutButtonClicked);
}



//Checkout Button click event handler
function checkOutButtonClicked() {
    alert("Your Bento order is on the way.");
    let cartList = document.getElementsByClassName("cart-list")[0];
    while (cartList.hasChildNodes()) {
        cartList.removeChild(cartList.firstChild);
    }
    getCartTotalAmount();
}


//event for delete from Cart button
function deleteCartItem(event) {
    cartBadgeUpdate();
    let buttonClicked = event.target;
    let cartItem = buttonClicked.closest(".container");
    cartItem.remove();
    getCartTotalAmount();
    cartBadgeUpdate();
}


//update cart badge items total
function cartBadgeUpdate() {
    let cartList = document.getElementsByClassName("cart-list")[0];
    let cartItems = cartList.getElementsByClassName("cart-item");
    let count = 0;
    for (let i = 0; i < cartItems.length; i++) {
        count = cartItems.length;
        document.getElementsByClassName("cart-badge")[0].innerText = count;
    }
    count = cartItems.length;
    document.getElementsByClassName("cart-badge")[0].innerText = count;
}

//Cart Item quantity number input change event handler
function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    getCartTotalAmount();
}

//Add to Cart from Items/Product grid
function addCartClicked(event) {
    let button = event.target;
    let bentoItems = button.closest("div.item-card");
    let bentoItemName = bentoItems.getElementsByClassName("item-name")[0].innerText;
    let bentoItemPrice = bentoItems.getElementsByClassName("item-price")[0].innerText;
    let bentoItemImg = bentoItems.getElementsByClassName("item-img")[0].src;
    addItemToCart(bentoItemName, bentoItemPrice, bentoItemImg);
    getCartTotalAmount();
    cartBadgeUpdate();
}

function addItemToCart(bentoItemName, bentoItemPrice, bentoItemImg) {

    // if (bentoItemName == cartItemsNames[i].innerText) {
    //     alert("That Bento is already in your cart.");
    // }
    let cartItemsContainer = document.createElement("div");
    cartItemsContainer.classList.add("container"); //append with cartAddedItem
    let cartItems = document.getElementsByClassName("cart-list")[0];
    let cartItemsNames = cartItems.getElementsByClassName("cart-item-name");
    for (let i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == bentoItemName) {
            alert(`${bentoItemName} is already in your cart.`);
            return;
        } 
    }



    let cartAddedItem = `
                    <div class="row gy-5 cart-item">
                        <img src=${bentoItemImg} alt="" class="col-4" id="cart-item-img">
                        <div class="col-6" id="cart-details">
                        <div class="cart-item-name">${bentoItemName}</div>
                        <div class="cart-item-price">${bentoItemPrice}</div>
                        <input type="number" value="1" class="cart-item-quantity">
                        </div>
                        <div class="col"><i class="bi bi-trash-fill cart-item-delete"></i></div>
                        <!-- </div> -->
                        </div>`;
         
    cartItemsContainer.innerHTML = cartAddedItem;
    cartItems.append(cartItemsContainer);
    cartItemsContainer.getElementsByClassName("cart-item-delete")[0].addEventListener("click", deleteCartItem);
    cartItemsContainer.getElementsByClassName("cart-item-quantity")[0].addEventListener("change", quantityChanged);

}


// update Cart Total amount
function getCartTotalAmount() {
    let cartList = document.getElementsByClassName("cart-list")[0];
    let cartItems = cartList.getElementsByClassName("cart-item");
    let total = 0;

    for (let i = 0; cartItems.length; i++) {
        let cartItem = cartItems[i];
        let cartItemPrice = cartItem.getElementsByClassName("cart-item-price")[0];
        let price = parseFloat(cartItemPrice.innerText.replace("$", ""));
        let cartQuantity = cartItem.getElementsByClassName("cart-item-quantity")[0];
        let quantity = cartQuantity.value;
        total = total + price * quantity;
        total = Math.round(total * 100) / 100; //for price with cents  value
        document.getElementsByClassName("total-amount")[0].innerText = "$" + total;
        cartBadgeUpdate();
    }
    total = Math.round(total * 100) / 100; //for price with cents  value
    document.getElementsByClassName("total-amount")[0].innerText = "$" + total;
    cartBadgeUpdate();
}


