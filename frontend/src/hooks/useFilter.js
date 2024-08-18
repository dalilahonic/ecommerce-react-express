import { useState, useEffect } from 'react';

function useFilter(data, identefier, inputValue, key) {
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const filtered = data[identefier]?.filter((el) => {
      return el[key]
        .toLowerCase()
        .includes(inputValue.toLowerCase());
    });

    setFilteredData((prevState) => ({
      ...prevState,
      [identefier]: filtered,
    }));
  }, [inputValue, data, identefier, key]);

  return [filteredData];
}

export default useFilter;

  // const [filteredData, setFilteredData] = useState({});
  // useEffect(() => {
  //   const filtered = mealsData[heading]?.filter((el) => {
  //     return el.mealName
  //       .toLowerCase()
  //       .includes(inputValue.toLowerCase());
  //   });

  //   setFilteredData((prevState) => ({
  //     ...prevState,
  //     [heading]: filtered,
  //   }));
  // }, [inputValue, mealsData, heading]);