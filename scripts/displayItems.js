//=============CLASS VERSION===========================
//An instance of the ItemaddItemController class object
const items = new ItemsController();


items.addItem(1001, "Garden Salad", "images/bentos/product1.png", "$12");
items.addItem(1002, "Vitamin V", "images/bentos/product2.png", "$9.5");
items.addItem(1003, "Afernoon Booster", "images/bentos/product3.png", "$10.5");
items.addItem(1004, "Classic Basic", "images/bentos/product4.png", "$13");
items.addItem(1005, "Prawn Fiesta", "images/bentos/product5.png", "$14.5");
items.addItem(1006, "Shrimp Pasta", "images/bentos/product6.png", "$17");
items.addItem(1007, "Kidz Starter", "images/bentos/product7.png", "$12");
items.addItem(1008, "Kidz Booster", "images/bentos/product8.png", "$12.5");
items.addItem(1009, "Fun Lunch", "images/bentos/product9.png", "$9.5");
items.addItem(1010, "Complete Lunch", "images/bentos/product10.png", "$13");
items.addItem(1011, "Toddler Takeaway", "images/bentos/product11.png", "$12.5");
items.addItem(1012, "Guilt-Free Snacker", "images/bentos/product12.png", "$10.5");

localStorage.setItem("items", JSON.stringify(items));
items.displayItem();
