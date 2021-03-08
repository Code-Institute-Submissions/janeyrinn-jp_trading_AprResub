//Google Maps JS for API Key : Zooms in on location & adds Marker, code used from Google Maps Documentation 

function initMap() {

    //Location
    var jpTrading = {
        lat: 51.91828,
        lng: -8.18917
    };

    //Map view
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: jpTrading,
    });

    // The marker pin position
    var marker = new google.maps.Marker({
        position: jpTrading,
        map: map,
    });

}

//EmailJS SDK Code: Sends emails to business owner through contact form
// Code learned and customized from code used by Matt Rudge in "Using EmailJS" CI Tutuorial

function sendMail(contactForm) {
    emailjs.send("queries_jptrading", "queries_general", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "general_query": contactForm.generalquery.value
    })
        //This section will call a modal on un/successful submission of the form
        .then(
            function (response) {
                $('#successModal').modal('show');
            },
            function (error) {
                $('#errorModal').modal('show');
            });
    return false;
}

//Below validates the name so that it must contain more than an escape/space 

function validateName() {

    var x = document.getElementById("name").value;
    var nameFail = "Name must be filled out";
    var namePass = "";

    if (x == " ") {
        document.getElementById("nameMsg").innerHTML = nameFail;
    }
    else {
        document.getElementById("nameMsg").innerHTML = namePass;
    }
}