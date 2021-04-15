// The below was found at w3schools and customized.
//It will allow the category buttons functionality, e.g. when the selected option value = Firefuels then display items with a class of fireFuels

filterCategories("allProducts");

function filterCategories(category) {
  var x, i;

  x = document.getElementsByClassName("catalogue");
  if (category == "allProducts") category = "";

  for (i = 0; i < x.length; i++) {
    // Will add class to selected items allowing them to "display : block"
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
  option[i].addEventListener("click", function () {
  var current = searchCategories.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";

});
}

/*Below function auto-populates "Product Type" input field in the order form when
a "ORDER NOW" link is clicked on a product card. The product type specific to the card will show in the input field*/

function orderProductType(product) {
  document.getElementById("product").value = product;
}

//EmailJS SDK Code: Sends an order email to business owner
// Code learned and customized from code used by Matt Rudge in "Using EmailJS" CI Tutuorial

function sendMail(contactForm) {
  emailjs
    .send("orders_jptrading", "orders_jptrading", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      product: contactForm.product.value,
      quantity: contactForm.quantity.value,
      phone: contactForm.phone.value,
      order_notes: contactForm.ordernotes.value,
    })
    //This section will call a the modal on un/successful submission of the form
    .then(
      function (response) {
        $("#successModal").modal("show");
      },
      function (error) {
        $("#errorModal").modal("show");
      }
    );
  return false;
}

//Below will reset the input fields in the form after clicking the modal button
function resetForm() {
  document.getElementById("orderForm").reset();
}

//Below validates the Order Form

function validateForm() {
  var name = document.getElementById("name");
  var emailaddress = document.getElementById("email_address");
  var phone = document.getElementById("phone");
  var product = document.getElementById("product");
  var quantity = document.getElementById("quantity");

  // if statement validates against empty input and special characters
  if (name.value == "" || name.value == " ") {
    alert("First name required, no special characters or spaces permitted");
    name.focus();
    return false;
  }
  // if statement validates against empty input
  if (emailaddress.value == "") {
    alert("Email required");
    name.focus();
    return false;
  }
  // if statement validates against empty input, non number values and length of 10 digits only
  if (phone.value == "" || isNaN(phone.value) || phone.value.length != 10) {
    alert("Mobile number required (10 digits)");
    phone.focus();
    return false;
  }
  // if statement validates against empty input and special characters
  if (product.value == "" || product.value == "Please select") {
    alert("Product type required");
    product.focus();
    return false;
  }
  // if statement validates against empty input
  if (quantity.value == "") {
    alert("Quantity less than or equal to 10 required");
    quantity.focus();
    return false;
  }
  return true;
}

//Below validates quantity against the max attribute & displays a message if over the max allowed or under the minimum

function validateQuantity() {
  var txt = "";
  if (document.getElementById("quantity").validity.rangeOverflow) {
    txt =
      "Please call us for orders over 10 units, large orders can not be placed online";
  } else {
    txt = " ";
  }
  document.getElementById("quantityMsg").innerHTML = txt;
}
