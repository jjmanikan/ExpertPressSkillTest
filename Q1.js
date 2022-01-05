// line 2 and 3 only for nodejs, comment in if using nodejs with node-localstorage, will require node-localstorage
//var LocalStorage = require('node-localstorage').LocalStorage,
//localStorage = new LocalStorage("./personlocal");

//Q1 Solution - Write JavaScript to store and retrieve a JSON file on your local storage with the following information.
// person object
var person = {'Name' : 'John Doe', 
            'Age': 35, 
            'City': 'Collingwood'};

// convert person ojbect to json and save locally
localStorage.setItem('personJSON', JSON.stringify(person));

//retrieve variable to test
var retrievePerson = localStorage.getItem('personJSON');

//console log to verify
console.log('Person: ', JSON.parse(retrievePerson));