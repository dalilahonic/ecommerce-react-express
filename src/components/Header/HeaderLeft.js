
import classes from './HeaderLeft.module.css'
function HeaderLeft() {
  return (
    <nav className={classes.header}>
      <ul>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>Menu</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderLeft;
