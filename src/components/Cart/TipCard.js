import { useEffect, useState } from 'react';
import classes from './TipCard.module.css';

function TipCard({
  content,
  onSelect,
  isSelected,
  orderInfo,
  onChangeTip,
  price,
}) {
  const [tip, setTip] = useState((15 / 100) * price);

  useEffect(() => {
    setTip((Number(content.slice(0, 2)) / 100) * price);
  }, [orderInfo, price, content, onChangeTip, tip]);

  return (
    <div
      className={`${classes.tipDiv} ${
        isSelected ? classes.black : ''
      }`}
      onClick={(e) => onSelect(content, tip.toFixed(2))}
    >
      <p>{content}</p>
      {content !== 'other' && <p>${tip?.toFixed(2)}</p>}
    </div>
  );
}
export default TipCard;
