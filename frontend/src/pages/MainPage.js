import { useEffect, useState } from 'react';
import Header from '../components/Main Page/Header/Header';
import ImageComponent from '../components/Main Page/Image Component/ImageComponent';
import MenuDisplay from '../components/Main Page/Meal Card/Menu Display/MenuDisplay';
import MainSearch from '../components/Main Page/Search Bar/Main/MainSearch';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../store';

function MainPage() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  function onChangeInputValue(value) {
    setInputValue(value);
  }

  const { items, status, error } = useSelector(
    (state) => state.items
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchItems());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div> loading </div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <ImageComponent />
      <MainSearch
        onChangeInputValue={onChangeInputValue}
        setInputValue={setInputValue}
      />
      {items.map((category, id) => (
        <MenuDisplay
          key={id}
          categoryHeading={category.name}
          inputValue={inputValue}
          items={category.meals}
        />
      ))}
    </>
  );
}

export default MainPage;
