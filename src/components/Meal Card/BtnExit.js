import classes from './BtnExit.module.css';

function BtnExit({ setIsMealOpen }) {
  function handleClick() {
    setIsMealOpen(false);
  }

  return (
    <button
      onClick={handleClick}
      className={classes.btnExit}
    >
      X
    </button>
  );
}

export default BtnExit;
