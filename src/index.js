import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/styles.css'
import CurrencyExchange from './js/currencyExchange.js'


async function getCurrency(initialCurrency, wantedCurrency, amount) {
  const response = await CurrencyExchange.getCurrency(initialCurrency, wantedCurrency, amount);
  if (response.conversion_result) {
    printElements(response, wantedCurrency);
  } else {
    printError(response, initialCurrency);
  }

}


//UI Logic
function printElements(response, wantedCurrency) {
  let finalConversion = response.conversion_result;
  console.log(response)
  const output = document.getElementById("output");
  output.innerHTML = `The currency exchange from US dollars to ${wantedCurrency} is ${finalConversion}`;
}

function printError(error, initialCurrency) {
  const output = document.getElementById("output");
  output.innerHTML = `There was an error accessing the currency exchange for ${initialCurrency}: ${error}`;
}

function handleFormSubmission(event) {
  event.preventDefault();
  const initialCurrency = document.getElementById("initialCurrency").value;
  const wantedCurrency = document.getElementById("wantedCurrency").value;  
  document.getElementById('wantedCurrency').value = null;
  const amount = document.getElementById("amountChoice").value;
  document.getElementById('amountChoice').value = null;
  getCurrency(initialCurrency, wantedCurrency, amount);
}

window.addEventListener("load", function () {
  this.document.getElementById('form').addEventListener('submit', handleFormSubmission);
});