//imports custom element
import './application-card.js';

//grabs JSON data from local file
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       const response = JSON.parse(xhttp.responseText);
       const json = response.applications;
    
       //selects "main" tag and sets it as main variable
       const main = document.querySelector('main');
       //for each result from the JSON, create a custom element called "application-card"
       //append elements to main tag in index.html 
       json.forEach(application => {
           const el = document.createElement('application-card');
           el.application = application;
           main.appendChild(el);
       })
    }
};
xhttp.open("GET", "applications.json", true);
xhttp.send();