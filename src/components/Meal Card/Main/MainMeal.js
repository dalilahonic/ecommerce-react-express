import MealItem from '../Card/MealItem';
import MealPopup from '../Popup/MealPopup';
import { useState } from 'react';

function MainMeal({
  title,
  description,
  price,
  imgUrl,
  alt,
  id,
  options,
}) {
  const [isMealOpen, setIsMealOpen] = useState(false);

  function openPopUp() {
    setIsMealOpen(true);
    document.body.classList.add('scrollLock');
  }
  return (
    <>
      <MealItem
        id={id}
        openPopUp={openPopUp}
        price={price}
        title={title}
        description={description}
        imgUrl={imgUrl}
        alt={alt}
      />
      {isMealOpen && (
        <MealPopup
          title={title}
          description={description}
          price={price}
          imgUrl={imgUrl}
          alt={alt}
          setIsMealOpen={setIsMealOpen}
          options={options}
        />
      )}
    </>
  );
}

export default MainMeal;
