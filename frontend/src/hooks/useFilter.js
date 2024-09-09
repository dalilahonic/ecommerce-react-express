import { useState, useEffect } from 'react';

function useFilter(data, inputValue) {
  const [filteredData, setFilteredData] = useState({});

  useEffect(() => {
    const filtered = data.filter((el) => {
      const mealNameMatch = el.mealName
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      const descriptionMatch = el.description
        .toLowerCase()
        .includes(inputValue.toLowerCase());

      return mealNameMatch || descriptionMatch;
    });

    setFilteredData(filtered);
  }, [inputValue, data]);

  return [filteredData];
}

export default useFilter;
