function useCalculatePrice(price, arr) {
  let finalPrice = price;

  let priceOfOptions = 0;

  if (arr && arr.length >= 1) {
    priceOfOptions = arr.reduce((acc, curr) => {
      return curr.isChecked && curr.price
        ? (acc += curr.price)
        : acc;
    }, 0);
  }

  return (finalPrice += priceOfOptions);
}

export default useCalculatePrice;
