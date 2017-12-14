export function inventoriesFormattedForDropdown(inventories) {
    return inventories.map(inventory => {
      return {
        value: inventory.item,
        text : inventory.item
      };
    });
  }
  