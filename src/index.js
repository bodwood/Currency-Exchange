import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchange from './js/currencyExchange.js'


async function getCurrency(currency){
  const response = await CurrencyExchange.getCurrency(currency);
  if(response.conversion_rates) {
    printElements(response, currency);
  }else {
    printError(response, currency);
  }

}


//UI Logic

function printElements(response, currency){
  const output = document.getElementById("output");
  output.innerHTML = `The currency exchange from US dollars to ${currency} is ${response.conversion_rates}`
}

function printError(error, currency){
  const output = document.getElementById("output");
  output.innerHTML = `There was an error accessing the currency exchange for ${currency}: ${error}`;
}

function handleFormSubmission(event){
  event.preventDefault();
  const currency = document.getElementById("currencyChoice").value;
  document.getElementById('currencyChoice').value = null;
  getCurrency(currency);
}
