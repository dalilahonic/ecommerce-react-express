import { useContext, useState } from 'react';
import Header from './components/Header/Header';
import ImageComponent from './components/Image Component/ImageComponent';
import SectionsContext from './context/SectionsContext';
import useFetch from './hooks/useFetch';
import useTransformText from './hooks/useTransformText';
import MainSearch from './components/Search Bar/Main/MainSearch';
import MenuDisplay from './components/Meal Card/Menu Display/MenuDisplay';

function App() {
  const [inputValue, setInputValue] = useState('');
  const sectionNames = useContext(SectionsContext);

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
      <MainSearch onChangeInputValue={onChangeInputValue} />
      {sectionNames.map((el, index) => (
        <MenuDisplay
          id={`meal${index}`}
          key={index}
          mealsData={mealsData}
          heading={el}
          transformedHeading={transformedHeading[index]}
          inputValue={inputValue}
        />
      ))}
    </>
  );
}

export default App;
