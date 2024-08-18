import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error('something went wrong');
        }

        let data = await res.json();

        for (let obj of Object.values(data)) {
          setData(obj);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, [url]);

  return [data];
}

export default useFetch;
