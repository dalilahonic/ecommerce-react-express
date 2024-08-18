import { useSelector } from 'react-redux';
import classes from './TipCard.module.css';

function TipCard({ content, onChangeTip, selected }) {
  const totalPrice = useSelector(
    (state) => state.order.totalPrice
  );

  const tip = totalPrice * (parseInt(content) / 100);

  function handleClick() {
    onChangeTip(content);
  }

  return (
    <>
      <div
        className={`${classes.tipDiv} ${
          selected ? classes.black : ''
        }`}
        onClick={handleClick}
      >
        <p>{content}</p>
        {content !== 'other' && <p>${tip?.toFixed(2)}</p>}
      </div>
    </>
  );
}
export default TipCard;
