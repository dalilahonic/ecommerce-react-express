function useCalculatePrice(price, amount, arr) {
  let finalPrice = price * amount;

  let priceOfOptions = 0;

  if (arr && arr.length >= 1) {
    priceOfOptions = arr.reduce((acc, curr) => {
      return curr.isChecked ? (acc += curr.price) : acc;
    }, 0);
  }

  return (finalPrice += priceOfOptions * amount);
}

export default useCalculatePrice;
