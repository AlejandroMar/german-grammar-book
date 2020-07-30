const verbs = [
  {
    name: 'vivir',
    conjugation: {
      p1_s: 'vivo',
      p2_s: 'vives',
      p3_s: 'vive',
      p1_p: 'vivimos',
      p2_p: 'vivís',
      p3_p: 'viven',
    },

    complements: ['lugar', 'acompañante', 'modo'],
  },
  {
    name: 'beber',
    conjugation: {
      p1_s: 'bebo',
      p2_s: 'bebes',
      p3_s: 'bebe',
      p1_p: 'bebemos',
      p2_p: 'bebéis',
      p3_p: 'beben',
    },

    complements: ['líquido', 'cantidad'],
  },
  {
    name: 'comer',
    conjugation: {
      p1_s: 'como',
      p2_s: 'comes',
      p3_s: 'come',
      p1_p: 'comemos',
      p2_p: 'coméis',
      p3_p: 'comen',
    },

    complements: [
      'comida',
      'cantidad',
      'acompañante',
      'lugar',
      'tiempo',
      'modo',
    ],
  },
  {
    name: 'ver',
    conjugation: {
      p1_s: 'veo',
      p2_s: 'ves',
      p3_s: 've',
      p1_p: 'vemos',
      p2_p: 'veis',
      p3_p: 'ven',
    },

    complements: ['objeto-directo', 'cantidad', 'líquido', 'comida'],
  },
  {
    name: 'buscar',
    conjugation: {
      p1_s: 'busco',
      p2_s: 'buscas',
      p3_s: 'busca',
      p1_p: 'buscamos',
      p2_p: 'buscáis',
      p3_p: 'buscan',
    },

    complements: [
      'objeto-directo',
      'cantidad',
      'lugar',
      'modo',
      'comida',
      'líquido',
    ],
  },
  {
    name: 'mandar',
    conjugation: {
      p1_s: 'mando',
      p2_s: 'mandas',
      p3_s: 'manda',
      p1_p: 'mandamos',
      p2_p: 'mandáis',
      p3_p: 'mandan',
    },

    complements: ['objeto-directo', 'cantidad'],
  },
];

const subjects = [
  {
    name: 'Yo',
    p: 'p1_s',
  },

  {
    name: 'Alba',
    p: 'p3_s',
  },

  {
    name: 'Nosotros',
    p: 'p1_p',
  },
  {
    name: 'Tú',
    p: 'p2_s',
  },
  {
    name: 'Los chicos',
    p: 'p3_p',
  },
  {
    name: 'Vosotros',
    p: 'p2_p',
  },
];

const complements = [
  {
    category: 'lugar',
    text: 'en Madrid',
  },
  {
    category: 'objeto-directo',
    text: 'un mensaje',
  },
  {
    category: 'líquido',
    text: 'un zumo',
  },
  {
    category: 'objeto-directo',
    text: 'una película',
  },
  {
    category: 'comida',
    text: 'bocadillos',
  },
  {
    category: 'objeto-directo',
    text: 'mi móvil',
  },
];

const predefinedVerbs = [
  'vivimos',
  'bebes',
  'coméis',
  'busco',
  'manda',
  'ven',
];

export { verbs, subjects, complements, predefinedVerbs };
