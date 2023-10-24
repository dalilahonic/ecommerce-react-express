import Options from './Options';
import { useState } from 'react';
import classes from './Options.module.css';

function MainOptions({ options }) {
  const [isOpenData, setIsOpenData] = useState([]);

  function onOpen(isOpen, index) {
    setIsOpenData((prev) => {
      const updatedData = [...prev];
      updatedData[index] = {
        ...updatedData[index],
        isOpen: isOpen,
        index: index,
      };

      return updatedData;
    });
  }

  return (
    <>
      {options.map((obj, index) => (
        <div key={index}>
          <Options
            onOpen={onOpen}
            title={obj.write}
            index={index}
          />
          {isOpenData[index]?.isOpen &&
            obj.options.map((option, index) => (
              <div className={classes.option} key={index}>
                <label>
                  <input type='checkbox' />
                  {option.name}
                </label>
                {option.price !== undefined && (
                  <p>${option.price}</p>
                )}
              </div>
            ))}
        </div>
      ))}
    </>
  );
}

export default MainOptions;
