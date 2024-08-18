function useTransformText(arr) {
  return arr.map((el) => {
    return el
      .split('_')
      .map(
        (el) =>
          el.slice(0, 1).toUpperCase() +
          el.slice(1).toLowerCase()
      )
      .join(' ');
  });
}

export default useTransformText;
