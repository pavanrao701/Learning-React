import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const prices = [
  { id: '50' },{ id: '100'  }, {id: '300'} ,{id:'400'},{id:'600'},{id:'1000'}
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (price) => {
  return price.id;
};

class PriceApi {
  static getAllPrices() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], prices));
      }, delay);
    });
  }

  static savePrice(price) {
    // clone to avoid mutating reference passed in.
    price = Object.assign({}, price);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
       

        if (price.id) {
          const existingPriceIndex = prices.findIndex(a => a.id == price.id);
          prices.splice(existingPriceIndex, 1, price);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          price.id = generateId(price);
          prices.push(price);
        }

        // Just return here, since cloning at the beginning of the function instead.
        resolve(price);
      }, delay);
    });
  }

  static deletePrice(PriceId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bug fix for issue #6 - Now returns since return is implied on arrow funcs without braces.
        const indexOfPriceToDelete = prices.findIndex(price => price.id == PriceId );
        prices.splice(indexOfPriceToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PriceApi;
