import classes from './Options.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Options({ title, onOpen, index }) {
  const [isOpen, setIsOpen] = useState(true);

  async function handleClick() {
    await setIsOpen((prev) => !prev);
    onOpen(isOpen, index);
  }

  return (
    <div className={classes.options}>
      <p>{title}</p>
      <span onClick={handleClick}>
        <p>Optional</p>
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{ color: 'black' }}
        />
      </span>
    </div>
  );
}

export default Options;
