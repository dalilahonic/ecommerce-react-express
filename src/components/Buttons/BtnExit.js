import { useNavigate } from 'react-router';
import classes from './BtnExit.module.css';

function BtnExit() {
  const navigate = useNavigate('');
  function handleClick() {
    navigate('/');
    document.body.classList.remove('scrollLock');
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
