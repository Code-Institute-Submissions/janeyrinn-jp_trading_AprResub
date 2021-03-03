// The below will hide and show the search bar on clicking

function toggleSearch() {
    var element = document.getElementById("search-menu");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

// The below was found at w3schools and customized.
//It will allow the filter buttons functionality, when the selected option value = Firefuels then display items with a class of fireFuels

filterCategories('allProducts') 

function filterCategories(category) {
    var x, i;

    x = document.getElementsByClassName("catalogue");
    if (category == "allProducts") category = "";

    for (i = 0; i < x.length; i++) { // Will add class to selected items allowing them to "display : block"
        removeClass(x[i], "result");
        if (x[i].className.indexOf(category) > -1) addClass(x[i], "result");
    }
}

// Below will show filtered categories

function addClass(element, name) {
    var i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) == -1) {
            element.className += " " + array2[i];
        }
    }
}

// Below will hide unrequired categories

function removeClass(element, name) {
    var i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        while (array1.indexOf(array2[i]) > -1) {
            array1.splice(array1.indexOf(array2[i]), 1);
        }
    }
    element.className = array1.join(" ");
}

// Below will add active class to the current button (highlight it)

var searchCategories = document.getElementById("search-categories");
var option = searchCategories.getElementsByClassName("option");
for (var i = 0; i < option.length; i++) {
    option[i].addEventListener("click", function () { // ASK ROHIt	Functions declared within loops referencing an outer scoped variable may lead to confusing semantics. 
        var current = searchCategories.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

//EmailJS SDK Code: Sends an order email to business owner
// Code learned and customized from code used by Matt Rudge in "Using EmailJS" CI Tutuorial

function sendMail(contactForm) {
    emailjs.send("orders_jptrading","orders_jptrading", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "product": contactForm.product.value,
        "quantity": contactForm.quantity.value,
        "phone": contactForm.phone.value,
        "order_notes": contactForm.ordernotes.value
    })
    //This section will call a the modal on un/successful submission of the form
        .then(
            function (response) {
                $('#successModal').modal('show');
            },
            function (error) {
                $('#errorModal').modal('show');
            });
    return false;
}



//Below validates quantity against the max attribute & displays a message if over the max allowed

function validateQuantity() {
    var txt = "";
    if (document.getElementById("quantity").validity.rangeOverflow) {
        txt = "Please call us for orders over 10 units, large orders can not be placed online";
    } else {
        txt = " ";
    }
    document.getElementById("quantityMsg").innerHTML = txt;
}

/*Below function auto-populates "Product Type" input field in the order form when
a "ORDER NOW" link is clicked on a product card. The product type specific to the card will show in the input field*/

function orderProductType(product) {

document.getElementById("product").value = product;   

}


