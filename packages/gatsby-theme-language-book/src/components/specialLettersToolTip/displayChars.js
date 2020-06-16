import SpecialLettersToolTip from './index';
import React from 'react';

export const DisplayChars = ({
  isTouchDevice,
  displayChars,
  addCharacterToState,
  letters,
}) => {
  return (
    !isTouchDevice() &&
    displayChars && (
      <SpecialLettersToolTip fun={addCharacterToState} letters={letters} />
    )
  );
};
