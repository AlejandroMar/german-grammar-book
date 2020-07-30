import React from 'react';
import InputGrid from './input-grid';
import PoolGrid from './pools';

const Exercise = ({ predefinedVerbs, verbs, complements, subjects }) => {
  return predefinedVerbs
    ? predefinedVerbs.map((verb, i) => (
        <InputGrid
          key={i}
          predefinedVerb={verb}
          verbs={verbs}
          complements={complements}
          subjects={subjects}
        />
      ))
    : // if verbs are dynamic
      subjects.map((subject, i) => (
        <InputGrid
          key={i}
          verbs={verbs}
          complements={complements}
          subjects={subjects}
        />
      ));
};

const SentenceSwitchComp = ({
  predefinedVerbs,
  verbs,
  subjects,
  complements,
}) => {
  return (
    <>
      <PoolGrid
        predefinedVerbs={predefinedVerbs}
        subjects={subjects}
        verbs={verbs}
        complements={complements}
      />

      <Exercise
        predefinedVerbs={predefinedVerbs}
        verbs={verbs}
        complements={complements}
        subjects={subjects}
      />
    </>
  );
};

export default SentenceSwitchComp;
