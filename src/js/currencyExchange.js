export default class CurrencyExchange {
  static async getCurrency(currency) {
    try{
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`);
      const jasonResponse = await response.json();
      console.log(jasonResponse);
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