// The below will hide and show the search bar on clicking the magnifying glass

function toggleSearch() {
    var element = document.getElementById("search-menu");
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}


// The below was found at w3schools and customized.
//It will allow the search menu functionality, when the selected option value = fireFuels then display items with a class of fireFuels

filterCategories('allProducts') // Calls the function to display all containers of products

function filterCategories(category) {
    let x, i;

    x = document.getElementsByClassName("catalogue");
    if (category == "allProducts") category = "";

    for (i = 0; i < x.length; i++) { // Will add class to selected items allowing them to "display : block"
        removeClass(x[i], "result");
        if (x[i].className.indexOf(category) > -1) addClass(x[i], "result");
    }
}

// Show filtered categories

function addClass(element, name) {
    let i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        if (array1.indexOf(array2[i]) == -1) {
            element.className += " " + array2[i];
        }
    }
}

// Hide unrequired categories

function removeClass(element, name) {
    let i, array1, array2;
    array1 = element.className.split(" ");
    array2 = name.split(" ");
    for (i = 0; i < array2.length; i++) {
        while (array1.indexOf(array2[i]) > -1) {
            array1.splice(array1.indexOf(array2[i]), 1);
        }
    }
    element.className = array1.join(" ");
}

// Add active class to the current button (highlight it)
let searchCategories = document.getElementById("search-categories");
let option = searchCategories.getElementsByClassName("option");
for (let i = 0; i < option.length; i++) {
    option[i].addEventListener("click", function () {
        let current = searchCategories.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}