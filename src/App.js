import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MealsContainer from './components/Meals Container/MealsContainer';
import SearchBar from './components/Search Bar/SearchBar';
import ImageComponent from './components/Image Component/ImageComponent';

function App() {
  const [mealsData, setMealsData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(
          'https://react-10d3f-default-rtdb.firebaseio.com/meals.json'
        );

        if (!res.ok) {
          throw new Error('something went wrong');
        }

        let data = await res.json();

        for (let obj of Object.values(data)) {
          setMealsData(obj);
        }
      } catch (err) {
        console.log(err);
      }
    }
    getData();
  }, []);

  function transformHeading(heading) {
    return heading
      .split('_')
      .map(
        (el) =>
          el.slice(0, 1).toUpperCase() +
          el.slice(1).toLowerCase()
      )
      .join(' ');
  }

  const arr = [
    'starters',
    'burgers_and_sandwiches',
    'salads',
    'noodles_and_pasta',
    'mainCourses',
    'specialties',
    'sides',
    'desserts',
    'beverages',
  ];
  console.log(mealsData);
  return (
    <>
      <Header />
      <ImageComponent />
      <SearchBar links={arr} />
      <div
        style={{
          backgroundColor: 'var(main)',
          paddingTop: '50px',
        }}
      >
        {arr.map((el, index) => (
          <MealsContainer
            key={index}
            mealsData={mealsData}
            heading={el}
            transformedHeading={transformHeading(el)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
