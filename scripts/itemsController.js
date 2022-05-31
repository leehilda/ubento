 class ItemsController {

    constructor() {
        this.allItems = [];
    }

    //methods
    addItem(id, name, imageURL, price) {

        //we will edit the methods when we have done our own API in Java
        const item = {
            id: id,
            name: name,
            imageURL: imageURL, 
            price: price
        }
        this.allItems.push(item);
    }

    displayItem() {
        let showItem = "";
        this.allItems.forEach (item => {     
            showItem +=
                    // <!-- item card-->
            `
                <div class="col">
                  <div class="item-card">
                    <img src="${item.imageURL}" class="img-fluid item-img">
                    <h4 class="item-name">${item.name}</h2>
                    <span class="item-price">${item.price}</span>
                    <span><i class="bi bi-cart-plus-fill addToCart" id="${item.id}"></i></span>
                  </div>
                </div>      
            `
        });
        document.querySelector("#itemize").innerHTML =  showItem;
    }

    getItems() {
        return this.allItems;
    }
}





// OLD constructor placeholder
// `
// <div  class="col-lg-4">
//    <div class="card" style="width: 18rem;">
//        <img src="${item.imageURL}" class="card-img-top"
//            alt="image">
//        <div class="card-body">
//            <h5 class="card-title">${item.name}</h5>
//            <p class="card-text">${item.desciption}</p>
//            <a href="#" class="btn btn-primary" data-toggle="modal" data-target="#productModal">More</a>
//        </div>
//    </div>
// </div>           
// `