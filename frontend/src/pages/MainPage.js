import { useContext, useState } from 'react';
import Header from '../components/Main Page/Header/Header';
import ImageComponent from '../components/Main Page/Image Component/ImageComponent';
import MenuDisplay from '../components/Main Page/Meal Card/Menu Display/MenuDisplay';
import MainSearch from '../components/Main Page/Search Bar/Main/MainSearch';
import SectionsContext from '../context/SectionsContext';
import useTransformText from '../hooks/useTransformText';

function MainPage() {
  const sectionNames = useContext(SectionsContext);
  const [inputValue, setInputValue] = useState('');

  const transformedHeading = useTransformText(sectionNames);

  function onChangeInputValue(value) {
    setInputValue(value);
  }

  return (
    <>
      <Header />
      <ImageComponent />
      <MainSearch
        onChangeInputValue={onChangeInputValue}
        setInputValue={setInputValue}
      />
      {sectionNames.map((el, index) => (
        <MenuDisplay
          id={`meal${index}`}
          key={index}
          heading={el}
          transformedHeading={transformedHeading[index]}
          inputValue={inputValue}
        />
      ))}
    </>
  );
}

export default MainPage;
