function useFindIndex(obj, arr, fn) {
  const index = arr.findIndex(
    (item) => item.title === arr.title
  );

  if (index !== -1) {
    fn((prev) => {
      const newObj = [...prev];
      newObj[index].amount =
        newObj[index].amount + obj.amount;
      return newObj;
    });
  } else fn((prev) => [...prev, { ...obj }]);
}

export default useFindIndex;
