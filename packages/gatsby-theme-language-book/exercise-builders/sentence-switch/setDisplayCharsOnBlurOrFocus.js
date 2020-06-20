export const setDisplayCharsOnBlurOrFocus = (
  e,
  shouldDisplayChars,
  options
) => {
  const trueOrFalse = shouldDisplayChars;
  if (e.target.name === 'sujetoLocal') {
    options.setDisplayCharsSub(trueOrFalse);
  } else if (e.target.name === 'verboLocal') {
    options.setDisplayCharsVerb(trueOrFalse);
  } else if (e.target.name === 'complementoLocal') {
    options.setDisplayCharsComp(trueOrFalse);
  }
};
