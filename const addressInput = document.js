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

var Webflow = Webflow || [];
Webflow.push(function () {
  new AWF.MSF({hiddeButtonsOnSubmit: true, scrollTopOnStepChange: false, formSelector: '#email-form', nextSelector: '#next-id'});
  new AWF.Logic({logicList: [{conditions: [{selector: '#Domaine', operator: 'equal', value: 'Agent commercial/Apporteur d\'affaires'}], operator: 'and', actions: [{selector: '#Agent-Commercial', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Agent commercial/Apporteur d\'affaires'}], operator: 'and', actions: [{selector: '#Agent-Commercial', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Artisanat(Création, Fabrication, Réparation)'}], operator: 'and', actions: [{selector: '#Activites-Artisanat', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Artisanat(Création, Fabrication, Réparation)'}], operator: 'and', actions: [{selector: '#Activites-Artisanat', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Bâtiment/Gros œuvre/Second œuvre'}], operator: 'and', actions: [{selector: '#Activites-B-timent-Gros-oeuvre-Second-oeuvre', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Bâtiment/Gros œuvre/Second œuvre'}], operator: 'and', actions: [{selector: '#Activites-B-timent-Gros-oeuvre-Second-oeuvre', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Beauté/Bien-être/Esotérisme'}], operator: 'and', actions: [{selector: '#Activites-Beaut-Bien--tre-Esot-risme', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Beauté/Bien-être/Esotérisme'}], operator: 'and', actions: [{selector: '#Activites-Beaut-Bien--tre-Esot-risme', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Conseil/Expertise/Services aux entreprises'}], operator: 'and', actions: [{selector: '#Activites-Conseil-Expertise-Services-aux-entreprises', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Conseil/Expertise/Services aux entreprises'}], operator: 'and', actions: [{selector: '#Activites-Conseil-Expertise-Services-aux-entreprises', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Culture, Animation, Sports et Spectacles'}], operator: 'and', actions: [{selector: '#Activites-Culture-Animation-Sports-et-Spectacles', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Culture, Animation, Sports et Spectacles'}], operator: 'and', actions: [{selector: '#Activites-Culture-Animation-Sports-et-Spectacles', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Hôtellerie-Restauration, Tourisme'}], operator: 'and', actions: [{selector: '#Activites-H-tellerie-Restauration-Tourisme', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Hôtellerie-Restauration, Tourisme'}], operator: 'and', actions: [{selector: '#Activites-H-tellerie-Restauration-Tourisme', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Location d\'équipements et de matériel'}], operator: 'and', actions: [{selector: '#Activites-Location-d-quipements-et-de-mat-riel', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Location d\'équipements et de matériel'}], operator: 'and', actions: [{selector: '#Activites-Location-d-quipements-et-de-mat-riel', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Mécanique/Technique'}], operator: 'and', actions: [{selector: '#Activites-M-canique-Technique', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Mécanique/Technique'}], operator: 'and', actions: [{selector: '#Activites-M-canique-Technique', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Médical/Santé'}], operator: 'and', actions: [{selector: '#Activites-M-dical-Sant', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Médical/Santé'}], operator: 'and', actions: [{selector: '#Activites-M-dical-Sant', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Services à la personne et aux animaux'}], operator: 'and', actions: [{selector: '#Activites-Services-la-personne-et-aux-animaux', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Services à la personne et aux animaux'}], operator: 'and', actions: [{selector: '#Activites-Services-la-personne-et-aux-animaux', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Transport/Livraison/Logistique'}], operator: 'and', actions: [{selector: '#Activites-Transport-Livraison-Logistique', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Transport/Livraison/Logistique'}], operator: 'and', actions: [{selector: '#Activites-Transport-Livraison-Logistique', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Agricole'}], operator: 'and', actions: [{selector: '#Activites-Agricole', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Agricole'}], operator: 'and', actions: [{selector: '#Activites-Agricole', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Web/Informatique/Multimédias'}], operator: 'and', actions: [{selector: '#Activites-Web-Informatique-Multim-dias', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Web/Informatique/Multimédias'}], operator: 'and', actions: [{selector: '#Activites-Web-Informatique-Multim-dias', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Cours et Formation'}], operator: 'and', actions: [{selector: '#Activites-Cours-et-Formation', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Cours et Formation'}], operator: 'and', actions: [{selector: '#Activites-Cours-et-Formation', action: 'hide', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'equal', value: 'Achat-Revente'}], operator: 'and', actions: [{selector: '#Activites-Achat-Vente', action: 'show', clear: false}]}, {conditions: [{selector: '#Domaine', operator: 'not-equal', value: 'Achat-Revente'}], operator: 'and', actions: [{selector: '#Activites-Achat-Vente', action: 'hide', clear: false}]}], submitHiddenInputs: false, checkConditionsOnLoad: true});
});


$('[data-toggle="datepicker"]').datepicker({
    language: 'fr-FR',
    autoPick: true
});



  $( "#email-form option:first-child" ).attr("disabled","disabled");



  // Add an event listener to the select input to store the selected value in sessionStorage
document.querySelector('#Date').addEventListener('change', function() {
  sessionStorage.setItem('selectedValue', this.value);
});

// Add an event listener to the document to retrieve the selected value from sessionStorage and populate the text input
document.addEventListener('DOMContentLoaded', function() {
  var selectedValue = sessionStorage.getItem('selectedValue');
  if (selectedValue !== null) {
    document.querySelector('#date-previous').value = selectedValue;
  }
});