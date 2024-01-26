import MealItem from '../Meal Item/MealItem';

function MainMeal({
  title,
  description,
  price,
  imgUrl,
  alt,
  id,
}) {
  return (
    <>
      <MealItem
        id={id}
        price={price}
        title={title}
        description={description}
        imgUrl={imgUrl}
        alt={alt}
      />
    </>
  );
}

export default MainMeal;
