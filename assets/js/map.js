//Google Maps JS for API Key : Zooms in on location & adds Marker, code used from Google Maps Documentation 

function initMap() {

    //Location
    var jpTrading =   {lat: 51.91828, 
                        lng: -8.18917};

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

