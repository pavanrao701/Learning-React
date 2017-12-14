export function itemsFormattedForDropdown(items) {
  return items.map(item => {
    return {
      value: item.id,
      text: item.id
    };
  });
}