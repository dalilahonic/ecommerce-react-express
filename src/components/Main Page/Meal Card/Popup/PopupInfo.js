import classes from './PopupInfo.module.css';

function PopupInfo({
  imgUrl,
  alt,
  title,
  price,
  description,
}) {
  return (
    <>
      <img src={imgUrl} alt={alt} />
      <h1>{title}</h1>
      <p className={classes.price}>${price?.toFixed(2)}</p>
      <p>{description}</p>
    </>
  );
}

export default PopupInfo;
