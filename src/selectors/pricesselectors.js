export function pricesFormattedForDropdown(prices) {
    return prices.map(price => {
      return {
        value: price.id,
        text : price.id
      };
    });
  }
  