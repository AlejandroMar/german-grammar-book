export const getVerb = (verbs, localVerb) => {
  // find the verb that the user gave as inputed in the verbs array
  const filteredVerb = verbs.reduce((result, verbo) => {
    const { conjugation } = verbo;
    Object.keys(conjugation).forEach(item => {
      if (conjugation[item] === localVerb.trim()) {
        result.push(verbo);
      }
    });
    return result;
  }, []);

  const verbFilteredAndClean = filteredVerb.length
    ? filteredVerb[0]
    : {
        name: null,
        conjugation: {
          p1_s: null,
          p2_s: null,
          p3_s: null,
          p1_p: '',
          p2_p: '',
          p3_p: '',
        },

        complements: [],
      };

  return verbFilteredAndClean;
};

export const getComplement = (complements, localComplement) => {
  const filterComplement = complements.filter(comp => {
    return comp.text === localComplement.trim();
  });

  const cleanAndFilteredComplement = filterComplement.length
    ? filterComplement[0]
    : {
        category: null,
        text: null,
      };
  return cleanAndFilteredComplement;
};

export const getSubject = (subjects, localSubject) => {
  const filteredSubject = subjects.filter(subject => {
    return subject.name === localSubject.trim();
  });

  const cleanAndFilteredSubject = filteredSubject.length
    ? filteredSubject[0]
    : {
        name: null,
        p: null,
      };
  return cleanAndFilteredSubject;
};
