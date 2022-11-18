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

function printError(error, initialCurrency, wantedCurrency) {
  let output = document.getElementById('output');
  if (error.toString().includes('404')) {
    output.innerHTML = `${error} \n Either ${initialCurrency} or ${wantedCurrency} do not exist \n Please try again.`
  } else {
    output.innerHTML = `There was an error accessing the currency exchange for ${initialCurrency}: ${error}`;
  }
}

function handleFormSubmission(event) {
  event.preventDefault();
  const initialCurrency = document.getElementById("initialCurrency").value;
  const wantedCurrency = document.getElementById("wantedCurrency").value;
  const amount = document.getElementById("amountChoice").value;
  document.getElementById('initialCurrency').value = null;
  document.getElementById('wantedCurrency').value = null;
  document.getElementById('amountChoice').value = null;
  getCurrency(initialCurrency, wantedCurrency, amount);
}

window.addEventListener("load", function () {
  this.document.getElementById('form').addEventListener('submit', handleFormSubmission);
});