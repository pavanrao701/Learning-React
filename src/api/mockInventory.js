import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const inventories = [
  {
    items: "OIL",
    measurements: "2",
    prices: "130",
    
  },
  {
    items: "RICE",
    measurements: "3",
    prices: "120",
    
  },
  {
    items: "WHEAT",
    measurements: "4",
    prices: "160",
    
  },
  {
    items: "COLA",
    measurements: "5",
    prices: "50",
    
  },
  {
    items: "SALT",
    measurements: "3",
    prices: "100",
    
  },
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (inventory) => {
  return replaceAll(inventory.item, ' ', '-');
};

class InventoryApi {
  static getAllInventories() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], inventories));
      }, delay);
    });
  }

  static saveInventory(inventory) {
    // clone to avoid mutating reference passed in.
    inventory = Object.assign({}, inventory);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        
       // Just return here, since cloning at the beginning of the function instead.
        resolve(inventory);
      }, delay);
    });
  }

  static deleteInventory(inventoryId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Bug fix for issue #6 - Now returns since return is implied on arrow funcs without braces.
        const indexOfInventoryToDelete = inventories.findIndex(inventory => inventory.inventoryId == inventoryId );
        inventories.splice(indexOfInventoryToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default InventoryApi;