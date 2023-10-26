import { useState } from 'react';
import Header from './components/Header/Header';
import ImageComponent from './components/Image Component/ImageComponent';
import SectionsContext from './context/SectionsContext';
import useFetch from './hooks/useFetch';
import useTransformText from './hooks/useTransformText';
import MainSearch from './components/Search Bar/Main/MainSearch';
import MenuDisplay from './components/Meal Card/Menu Display/MenuDisplay';

const sectionNames = [
  'starters',
  'burgers_and_sandwiches',
  'salads',
  'noodles_and_pasta',
  'main_courses',
  'specialties',
  'sides',
  'desserts',
  'beverages',
];

function App() {
  const [inputValue, setInputValue] = useState('');

  const [mealsData] = useFetch(
    'https://react-10d3f-default-rtdb.firebaseio.com/meals.json'
  );

  const transformedHeading = useTransformText(sectionNames);

  function onChangeInputValue(value) {
    setInputValue(value);
  }

  return (
    <>
      <Header />
      <ImageComponent />
      <SectionsContext.Provider value={sectionNames}>
        <MainSearch
          onChangeInputValue={onChangeInputValue}
        />
      </SectionsContext.Provider>
      {sectionNames.map((el, index) => (
        <MenuDisplay
          id={`meal${index}`}
          key={index}
          mealsData={mealsData}
          heading={el}
          sectionNames={sectionNames}
          transformedHeading={transformedHeading[index]}
          inputValue={inputValue}
        />
      ))}
    </>
  );
}

export default App;
