//Google Maps JS for API Key : Zooms in on location & adds Marker, code used from Google Maps Documentation

function initMap() {
  //Location
  var jpTrading = {
    lat: 51.91828,
    lng: -8.18917,
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
  emailjs
    .send("queries_jptrading", "queries_general", {
      from_name: contactForm.name.value,
      from_email: contactForm.emailaddress.value,
      general_query: contactForm.generalquery.value,
    })
    //This section will call a modal on un/successful submission of the form
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
  document.getElementById("contact-form").reset();
}

//Below validates the name so that it must contain more than an escape/space

function validateContactForm() {
  var name = document.getElementById("name");
  var emailaddress = document.getElementById("emailaddress");
  var message = document.getElementById("generalquery");

  // if statement validates against empty input and special characters, regEx snippet found on stack overflow 
  if (name.value.trim() == ""|| !/^[a-zA-Z\s]*$/g.test(name.value) ) {
    errorModal("Name required, no special characters");
    name.focus();
    return false;
  }

  // if statement validates against empty input
  if (emailaddress.value == "") {
    errorModal("Email required");
    name.focus();
    return false;
  }

  if (message.value.trim() == "") {
    errorModal("Please enter your enquiry");
    message.focus();
    return false;
  }
  return true;
}

// Below will change the error message in the validation modal

function errorModal(errMsg) {
  document.getElementById("validationMessage").innerHTML = errMsg;
  $("#validationModal").modal("show");
}