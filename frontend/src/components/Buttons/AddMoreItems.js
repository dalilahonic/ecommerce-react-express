import { useNavigate } from 'react-router';
import classes from './AddMoreItems.module.css';

function AddMoreItems() {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className={classes.addMoreItems}
    >
      Add More Items
    </button>
  );
}

export default AddMoreItems;
