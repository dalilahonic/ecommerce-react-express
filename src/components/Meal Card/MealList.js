import MealCardContainer from './MealCardContainer';
import MealPopUp from './MealPopUp';
import { useState } from 'react';

function MealList({
  data,
  title,
  description,
  price,
  imgUrl,
  alt,
  id,
}) {
  const [isMealOpen, setIsMealOpen] = useState(false);

  function openPopUp() {
    setIsMealOpen(true);
    document.body.classList.add('scrollLock');
  }
  return (
    <>
      <MealCardContainer
        id={id}
        openPopUp={openPopUp}
        price={price}
        title={title}
        description={description}
        imgUrl={imgUrl}
        alt={alt}
      />
      {isMealOpen && (
        <MealPopUp
          data={data}
          title={title}
          description={description}
          price={price}
          imgUrl={imgUrl}
          alt={alt}
          setIsMealOpen={setIsMealOpen}
        />
      )}
    </>
  );
}

export default MealList;
