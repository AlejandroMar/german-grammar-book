import React from 'react';
import { DisplayChars } from '../common-components/specialLettersToolTip/displayChars';
import { Input } from './input-component';

export const SubjectComponent = props => (
  <div className={props.classes.inputAndLettersWrap}>
    <Input
      label="sujeto"
      name="localSubject"
      value={props.value}
      onChange={props.onChange}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />

    <DisplayChars
      letters={props.letters}
      displayChars={props.displayChars}
      addCharacterToState={props.addCharacterToState}
      name="localSubject"
    />
  </div>
);
