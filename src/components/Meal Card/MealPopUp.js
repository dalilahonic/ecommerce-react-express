import classes from './MealPopUp.module.css';
import MinusAndPlusButtons from '../Buttons/MinusAndPlusButtons';
import OrderButton from '../Buttons/OrderButton';
import BtnExit from '../Buttons/BtnExit';
import Seperator from '../Seperator/Separator';
import SauceMain from '../Sauce Options/SauceMain';

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
        <Seperator classClr='grey' />
        <SauceMain data={data} title={title} />
        <BtnExit setIsMealOpen={setIsMealOpen} />
        <Seperator classClr='grey' />
        <Seperator classClr='white' />
        <OrderButton price={price} />
      </div>
    </div>
  );
}

export default MealPopUp;
