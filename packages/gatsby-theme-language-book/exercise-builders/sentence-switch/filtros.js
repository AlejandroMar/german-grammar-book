export const getVerb = (verbos, verboLocal) => {
  // encuentra el verbo que dió el usuario
  const filtraVerbo = verbos.reduce((result, verbo) => {
    const { conjugacion } = verbo;
    Object.keys(conjugacion).forEach(item => {
      if (conjugacion[item] === verboLocal.trim()) {
        result.push(verbo);
      }
    });
    return result;
  }, []);

  const verboListo = filtraVerbo.length
    ? filtraVerbo[0]
    : {
        nombre: null,
        conjugacion: {
          p1_s: null,
          p2_s: null,
          p3_s: null,
          p1_p: '',
          p2_p: '',
          p3_p: '',
        },

        complementos: [],
      };

  return verboListo;
};

export const getComplement = (complementos, complementoLocal) => {
  const buscaComplemento = complementos.filter(comp => {
    return comp.texto === complementoLocal.trim();
  });

  const complementoListo = buscaComplemento.length
    ? buscaComplemento[0]
    : {
        categoria: null,
        texto: null,
      };
  return complementoListo;
};

export const getSubject = (sujetos, sujetoLocal) => {
  const buscaSujeto = sujetos.filter(sujeto => {
    return sujeto.name === sujetoLocal.trim();
  });

  const sujetoListo = buscaSujeto.length
    ? buscaSujeto[0]
    : {
        name: null,
        p: null,
      };
  return sujetoListo;
};
