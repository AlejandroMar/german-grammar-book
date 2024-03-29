import { Box } from '@material-ui/core';
import cx from 'classnames';
import React from 'react';
import { DisplayChars } from '../common-components/specialLettersToolTip/displayChars';
import { Input } from './input-component';

export function VerbComponent(props) {
  return (
    <>
      {props.predefinedVerb ? (
        <Box
          boxShadow={1}
          component="span"
          style={{ margin: '0 5px' }}
          className={`${cx(props.classes.verb, props.classes.answerPart)}`}
        >
          {props.predefinedVerb}
        </Box>
      ) : (
        <div className={props.classes.inputAndLettersWrap}>
          <Input
            label="verbo"
            name="localVerb"
            value={props.value}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onBlur={props.onBlur}
          />

          <DisplayChars
            letters={props.letters}
            displayChars={props.displayChars}
            addCharacterToState={props.addCharacterToState}
            name="localVerb"
          />
        </div>
      )}
    </>
  );
}
