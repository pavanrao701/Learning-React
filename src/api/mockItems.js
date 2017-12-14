import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.



const items = [
  { id: 'OIL' },{ id: 'SUGAR'  }, {id: 'WHEAT'} ,{id:'SALT'},{id:'RICE'}
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (item) => {
  return item.id;
};

class ItemApi {
  static getAllItems() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(item) {
    // clone to avoid mutating reference passed in.
    item = Object.assign({}, item);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
       

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id == item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId(item);
          items.push(item);
        }

        // Just return here, since cloning at the beginning of the function instead.
        resolve(item);
      }, delay);
    });
  }

  static deleteItem(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bug fix for issue #6 - Now returns since return is implied on arrow funcs without braces.
        const indexOfItemToDelete = items.findIndex(item => item.id == itemId );
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default ItemApi;
