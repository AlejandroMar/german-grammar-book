import { Input } from './input-component';
import { DisplayChars } from '../common-components/specialLettersToolTip/displayChars';
import { letters } from '../common-components/specialLettersToolTip/spanish-letters';
import React from 'react';

export const ComplementComponent = props => (
  <div className={props.classes.inputAndLettersWrap}>
    <Input
      label="complemento"
      name="localComplement"
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />

    <DisplayChars
      letters={letters}
      displayChars={props.displayChars}
      addCharacterToState={props.addCharacterToState}
      name="localComplement"
    />
  </div>
);
