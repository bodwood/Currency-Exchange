export default class CurrencyExchange {
  static async getCurrency(initialCurrency, wantedCurrency, amount) {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${initialCurrency}/${wantedCurrency}/${amount}`);
      const jasonResponse = await response.json();
      if(!response.ok) {
        const errorMessage = `${response.status} ${response.statusText} ${jasonResponse.message}`;
        throw new Error(errorMessage);
      }
      return jasonResponse;
    } catch(error) {
      return error;
    }
  }
}