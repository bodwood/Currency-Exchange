import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchange from './js/currencyExchange.js'


async function getCurrency(currencyUSD, currencyChoice, amount) {
  const response = await CurrencyExchange.getCurrency(currencyUSD, currencyChoice, amount);
  if (response.conversion_result) {
    printElements(response, currencyChoice);
  } else {
    printError(response, currencyUSD);
  }

}


//UI Logic
function printElements(response, currencyChoice) {
  let finalConversion = response.conversion_result;
  const output = document.getElementById("output");
  output.innerHTML = `The currency exchange from US dollars to ${currencyChoice} is ${finalConversion}`;
}

function printError(error, currencyUSD) {
  const output = document.getElementById("output");
  output.innerHTML = `There was an error accessing the currency exchange for ${currencyUSD}: ${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const currencyUSD = 'USD';
  const currencyChoice = document.getElementById("currencyChoice").value;  
  document.getElementById('currencyChoice').value = null;
  const amount = document.getElementById("amountChoice").value;
  document.getElementById('amountChoice').value = null;
  getCurrency(currencyUSD, currencyChoice, amount);
}

window.addEventListener("load", function () {
  this.document.getElementById('form').addEventListener('submit', handleFormSubmission);
});