import classes from './Separator.module.css';

function Seperator({ classClr }) {
  return (
    <div
      className={`${classes.seperator} ${classes[classClr]}`}
    ></div>
  );
}

export default Seperator;
