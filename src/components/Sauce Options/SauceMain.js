import { useState } from 'react';
import SauceHeader from './SauceHeader';
import SauceOptions from './SauceOptions';

function SauceMain({ data, title }) {
  const [isDropDownOpen, setIsDropDownOpen] =
    useState(false);

  function openDropDown() {
    setIsDropDownOpen((prev) => !prev);
  }

  return (
    <>
      <SauceHeader openDropDown={openDropDown} />
      <SauceOptions
        data={data}
        title={title}
        isDropDownOpen={isDropDownOpen}
      />
    </>
  );
}

export default SauceMain;
