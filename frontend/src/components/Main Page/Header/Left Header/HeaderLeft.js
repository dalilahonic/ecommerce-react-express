import classes from './HeaderLeft.module.css';
function HeaderLeft() {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/menu'>Menu</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/contacct'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderLeft;
