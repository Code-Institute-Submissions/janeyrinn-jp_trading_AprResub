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