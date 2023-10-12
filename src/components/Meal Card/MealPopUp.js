import classes from './MealPopUp.module.css';
import SauceOptions from './SauceOptions';
import MinusAndPlusButtons from './MinusAndPlusButtons';
import OrderButton from './OrderButton';
import BtnExit from './BtnExit';

function MealPopUp({
  title,
  description,
  price,
  imgUrl,
  alt,
  setIsMealOpen,
  data,
}) {
  return (
    <div className={classes.mealOverlay}>
      <div className={classes.mealPopUp}>
        <img src={imgUrl} alt={alt} />
        <h1>{title}</h1>
        <p className={classes.price}>${price.toFixed(2)}</p>
        <p>{description}</p>
        <MinusAndPlusButtons />
        <div
          style={{
            height: '30px',
            width: '100%',
            backgroundColor: '#F1F1F1',
          }}
        ></div>
        <SauceOptions data={data} title={title} />
        <BtnExit setIsMealOpen={setIsMealOpen} />
        <div
          style={{
            height: '30px',
            width: '100%',
            backgroundColor: '#F1F1F1',
          }}
        ></div>
        <OrderButton price={price} />
      </div>
    </div>
  );
}

export default MealPopUp;
