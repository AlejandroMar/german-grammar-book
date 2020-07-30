export const setDisplayCharsOnBlurOrFocus = (
  e,
  shouldDisplayChars,
  options
) => {
  const trueOrFalse = shouldDisplayChars;
  if (e.target.name === 'localSubject') {
    options.setDisplayCharsSubject(trueOrFalse);
  } else if (e.target.name === 'localVerb') {
    options.setDisplayCharsVerb(trueOrFalse);
  } else if (e.target.name === 'localComplement') {
    options.setDisplayCharsComplement(trueOrFalse);
  }
};
