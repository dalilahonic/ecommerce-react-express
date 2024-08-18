import { useNavigate } from 'react-router';
import classes from './ContinueShopping.module.css';

function ContinueShopping() {
  const navigate = useNavigate();
  return (
    <button
      className={classes.continueShopping}
      onClick={() => navigate('/')}
    >
      <span> {'<'}</span> <span>Continiue Shopping </span>
    </button>
  );
}

export default ContinueShopping;
