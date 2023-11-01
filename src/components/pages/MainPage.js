import { useContext, useState } from 'react';
import Header from '../Main Page/Header/Header';
import ImageComponent from '../Main Page/Image Component/ImageComponent';
import MenuDisplay from '../Main Page/Meal Card/Menu Display/MenuDisplay';
import MainSearch from '../Main Page/Search Bar/Main/MainSearch';
import SectionsContext from '../../context/SectionsContext';
import useTransformText from '../../hooks/useTransformText';
import useFetch from '../../hooks/useFetch';

function MainPage({
  orderInfo,
  setOrderInfo,
  setIsCartOpen,
  onOrder,
}) {
  const sectionNames = useContext(SectionsContext);
  const [inputValue, setInputValue] = useState('');
  
  const transformedHeading = useTransformText(sectionNames);

  const [mealsData] = useFetch(
    'https://react-10d3f-default-rtdb.firebaseio.com/meals.json'
  );

  function onChangeInputValue(value) {
    setInputValue(value);
  }

  return (
    <>
      <Header
        orderInfo={orderInfo}
        setOrderInfo={setOrderInfo}
        setIsCartOpen={setIsCartOpen}
      />
      <ImageComponent />
      <MainSearch
        onChangeInputValue={onChangeInputValue}
        setInputValue={setInputValue}
      />
      {sectionNames.map((el, index) => (
        <MenuDisplay
          id={`meal${index}`}
          key={index}
          mealsData={mealsData}
          heading={el}
          transformedHeading={transformedHeading[index]}
          inputValue={inputValue}
          onOrder={onOrder}
        />
      ))}
    </>
  );
}

export default MainPage;
