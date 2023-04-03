const streetNumberInput = document.getElementById("Numero-de-rue");
const streetInput = document.getElementById("Rue");
const addressInput = document.getElementById("Adresse");
const cityInput = document.getElementById("Ville");
const zipInput = document.getElementById("Code-Postal");
//const countryInput = document.getElementById("Pays");

// Autocomplete functionality using the Google Maps Places API
const autocomplete = new google.maps.places.Autocomplete(addressInput, {
  fields: ["address_components", "formatted_address", "geometry"],
  componentRestrictions: { country: "fr" } // Add this line to restrict search to France
});


// When a place is selected, populate the address field and corresponding form fields
autocomplete.addListener("place_changed", () => {
  const place = autocomplete.getPlace();



  // Populate the address field with the formatted address
  addressInput.value = place.formatted_address;

  // Get the street number, street name, city, zip code, and country from the address_components array
  let streetNumber, street, city, zip;
  const addressComponents = place.address_components;

  for (let i = 0; i < addressComponents.length; i++) {
    const types = addressComponents[i].types;
    if (types.includes("street_number")) {
      streetNumber = addressComponents[i].long_name;
    } else if (types.includes("route")) {
      street = addressComponents[i].long_name;
    } else if (types.includes("locality")) {
      city = addressComponents[i].long_name;
    } else if (types.includes("postal_code")) {
      zip = addressComponents[i].long_name;
    }
  }

  // Populate the corresponding street number, street name, city, zip code, and country fields
  streetNumberInput.value = streetNumber || "";
  streetInput.value = street || "";
  cityInput.value = city || "";
  zipInput.value = zip || "";
  
});

const geocoder = new google.maps.Geocoder();
const address = streetNumberInput.value + " " + streetInput.value + " " + addressInput.value;
geocoder.geocode({ address: address }, (results, status) => {
  if (status === "OK") {
    const location = results[0].geometry.location;
    console.log("Latitude: " + location.lat());
    console.log("Longitude: " + location.lng());
  } else {
    console.error("Geocode was not successful for the following reason: " + status);
  }
});

