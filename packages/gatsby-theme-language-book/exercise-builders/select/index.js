import React, { useState } from 'react';
import { answer as cssAnswer } from '../input/input.module.css';

const SelectComp = ({ root, options, answer }) => {
  const [selectValue, setSelectValue] = useState('   ');

  const handleChange = e => {
    setSelectValue(e.target.value);
  };

  const renderTextOrSelect = () => {
    if (selectValue === answer) {
      return <span className={cssAnswer}>{answer}</span>;
    }
    return (
      <label htmlFor="prueba">
        <select value={selectValue} id="prueba" onChange={handleChange}>
          <option value={selectValue}>{selectValue}</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  };

  return renderTextOrSelect();
};

export default SelectComp;
