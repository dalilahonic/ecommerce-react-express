import { useState } from 'react';
import SauceHeader from './SauceHeader';
import SauceOptions from './SauceOptions';

function SauceMain({ data, title, options }) {
  const [isDropDownOpen, setIsDropDownOpen] =
    useState(false);

  function openDropDown() {
    setIsDropDownOpen((prev) => !prev);
  }

  return (
    <>
      <SauceHeader
        text={options.write}
        openDropDown={openDropDown}
      />
      <SauceOptions
        options={options}
        data={data}
        title={title}
        isDropDownOpen={isDropDownOpen}
      />
    </>
  );
}

export default SauceMain;
