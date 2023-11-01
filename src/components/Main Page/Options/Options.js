import classes from './Options.module.css';

function Options({ name, price, onChecked }) {
  function handleChange(e) {
    onChecked(e.target.checked, price, name);

  }
  return (
    <div className={classes.option}>
      <label>
        <input
          type='checkbox'
          onChange={(e) => handleChange(e)}
        />
        {name}
      </label>
      {price !== undefined && <p>${price.toFixed(2)}</p>}
    </div>
  );
}

export default Options;
