import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import MealsContainer from './components/Meals Container/MealsContainer';
import SearchBar from './components/Search Bar/SearchBar';
import ImageComponent from './components/Image Component/ImageComponent';

function App() {
  const [mealsData, setMealsData] = useState({});
  const [inputValue, setInputValue] = useState('');

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

  const sectionNames = [
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

  function onChangeInputValue(value) {
    setInputValue(value);
  }

  return (
    <>
      <Header />
      <ImageComponent />
      <SearchBar
        links={sectionNames}
        onChangeInputValue={onChangeInputValue}
      />

      {sectionNames.map((el, index) => (
        <MealsContainer
          id={`meal${index}`}
          key={index}
          mealsData={mealsData}
          heading={el}
          sectionNames={sectionNames}
          transformedHeading={transformHeading(el)}
          inputValue={inputValue}
        />
      ))}
    </>
  );
}

export default App;
