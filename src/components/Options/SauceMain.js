import { useState } from 'react';
import SauceHeader from './SauceHeader';
import SauceOptions from './SauceOptions';

function SauceMain({ options }) {
  const [isDropDownOpen, setIsDropDownOpen] =
    useState(false);

  function openDropDown() {
    setIsDropDownOpen((prev) => !prev);
  }
  console.log(options);

  return (
    <>
      <SauceHeader
        text={options.write}
        openDropDown={openDropDown}
      />
      <SauceOptions
        options={options}
        isDropDownOpen={isDropDownOpen}
      />
    </>
  );
}

export default SauceMain;
