var selectedRow = null

function onFormSubmit() {
    if (validate() && numCheck()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["category"] = document.getElementById("category").value;
    formData["details"] = document.getElementById("details").value;
    formData["price"] = document.getElementById("price").value;
    formData["imageURL"] = document.getElementById("imageURL").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.category;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.details;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.price;
    cell5 = newRow.insertCell(4);
    const productImage = document.createElement('img'); //todo to include width and height preset sizes
    productImage.src = `<img src="${data.imageURL}" width="100px" height="auto">`;
    // cell5.innerHTML = productImage.setAttribute('src', `'${data.imageURL}'`);
    cell5.innerHTML = productImage;
    // cell5.innerHTML = productImage;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<button class = "btn-warning" onClick="onEdit(this)">Edit</button>
    <button class = "btn-warning onClick="onDelete(this)">Delete</button>`; //Hilda edit here
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("category").value = "";
    document.getElementById("details").value = "";
    document.getElementById("price").value = "";
    document.getElementById("imageURL").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("category").value = selectedRow.cells[1].innerHTML;
    document.getElementById("details").value = selectedRow.cells[2].innerHTML;
    document.getElementById("price").value = selectedRow.cells[3].innerHTML;
    document.getElementById("imageURL").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.category;
    selectedRow.cells[2].innerHTML = formData.details;
    selectedRow.cells[3].innerHTML = formData.price;
    selectedRow.cells[4].innerHTML = formData.imageURL;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;

}

function numCheck(){

    let priceValidation = document.getElementById("price").value;
    let check = /\d/g    
    let result = check.test(priceValidation);

    if(result == false){
        document.getElementById('checkNum').innerHTML = "Invalid! Insert Number!";
        return false;
    } else {
        document.getElementById('checkNum').innerHTML = "";
        return true;
        
    }
    
}


    