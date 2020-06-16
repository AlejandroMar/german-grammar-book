import React, { useState } from 'react';

import Select from '@material-ui/core/Select';

import CorrectAnswer from '../common-components/correct-answer';

const SelectComp = ({ options, answer }) => {
  const [selectValue, setSelectValue] = useState('   ');

  const handleChange = e => {
    setSelectValue(e.target.value);
  };

  const renderTextOrSelect = () => {
    if (selectValue === answer) {
      return <CorrectAnswer answer={answer} />;
    }
    return (
      <label htmlFor="prueba">
        <Select value={selectValue} id="prueba" native onChange={handleChange}>
          <option value={selectValue}>{selectValue}</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </label>
    );
  };

  return renderTextOrSelect();
};

export default SelectComp;
