import SpecialLettersToolTip from './index';
import React from 'react';
import isTouchDevice from 'is-touch-device/src';

export const DisplayChars = ({
  displayChars,
  addCharacterToState,
  letters,
  name = null,
}) => {
  return (
    !isTouchDevice() &&
    displayChars && (
      <SpecialLettersToolTip
        fun={addCharacterToState}
        letters={letters}
        name={name}
      />
    )
  );
};
