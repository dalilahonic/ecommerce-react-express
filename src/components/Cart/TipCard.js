import classes from './TipCard.module.css';

function TipCard({
  content,
  onSelect,
  isSelected,
  orderInfo,
}) {
  let price = orderInfo?.reduce(
    (acc, obj) => (acc += obj?.amount * obj?.price),
    0
  );
  let percent = (Number(content.slice(0, 2)) / 100) * price;

  return (
    <div
      className={`${classes.tipDiv} ${
        isSelected ? classes.black : ''
      }`}
      onClick={(e) =>
        onSelect(
          e.target.parentElement.innerText.split('\n')[0]
        )
      }
    >
      <p>{content}</p>
      {content !== 'other' && <p>${percent.toFixed(2)}</p>}
    </div>
  );
}
export default TipCard;
