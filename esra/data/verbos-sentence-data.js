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
    name: 'escribir',
    conjugation: {
      p1_s: 'escribo',
      p2_s: 'escribes',
      p3_s: 'escribe',
      p1_p: 'escribimos',
      p2_p: 'escribís',
      p3_p: 'escriben',
    },

    complements: ['objeto-escrito', 'acompañante', 'modo'],
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
    name: 'hacer',
    conjugation: {
      p1_s: 'hago',
      p2_s: 'haces',
      p3_s: 'hace',
      p1_p: 'hacemos',
      p2_p: 'hacéis',
      p3_p: 'hacen',
    },

    complements: ['comida', 'líquido', 'cantidad', 'objeto-directo'],
  },
  {
    name: 'tener',
    conjugation: {
      p1_s: 'tengo',
      p2_s: 'tienes',
      p3_s: 'tiene',
      p1_p: 'tenemos',
      p2_p: 'tenéis',
      p3_p: 'tienen',
    },

    complements: ['comida', 'líquido', 'objeto-directo', 'objeto-escrito'],
  },
  {
    name: 'querer',
    conjugation: {
      p1_s: 'quiero',
      p2_s: 'quieres',
      p3_s: 'quiere',
      p1_p: 'queremos',
      p2_p: 'queréis',
      p3_p: 'quieren',
    },

    complements: ['comida', 'líquido', 'objeto-directo', 'objeto-escrito'],
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
      'objeto-escrito',
    ],
  },
  {
    name: 'llevar',
    conjugation: {
      p1_s: 'llevo',
      p2_s: 'llevas',
      p3_s: 'lleva',
      p1_p: 'llevamos',
      p2_p: 'lleváis',
      p3_p: 'llevan',
    },

    complements: ['objeto-directo', 'cantidad', 'comida', 'líquido'],
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

    complements: ['objeto-directo', 'objeto-escrito', 'cantidad'],
  },
  {
    name: 'comprar',
    conjugation: {
      p1_s: 'compro',
      p2_s: 'compras',
      p3_s: 'compra',
      p1_p: 'compramos',
      p2_p: 'compráis',
      p3_p: 'compran',
    },

    complements: ['objeto-directo', 'cantidad', 'comida', 'bebida'],
  },
  {
    name: 'leer',
    conjugation: {
      p1_s: 'leo',
      p2_s: 'lees',
      p3_s: 'lee',
      p1_p: 'leemos',
      p2_p: 'leéis',
      p3_p: 'leen',
    },

    complements: ['objeto-escrito', 'acompañante', 'lugar', 'tiempo'],
  },
]

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
    name: 'Mi amiga',
    p: 'p3_s',
  },
  {
    name: 'El padre de mi amigo',
    p: 'p3_s',
  },

  {
    name: 'Nosotros',
    p: 'p1_p',
  },
  {
    name: 'Mi amigo y yo',
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
    name: 'Mis padres y yo',
    p: 'p1_p',
  },
  {
    name: 'Vosotros',
    p: 'p2_p',
  },
  {
    name: 'Tus amigas y tú',
    p: 'p2_p',
  },
]

const complements = [
  {
    category: 'lugar',
    text: 'en Madrid',
  },
  {
    category: 'lugar',
    text: 'en el colegio',
  },
  {
    category: 'lugar',
    text: 'en casa',
  },
  {
    category: 'objeto-escrito',
    text: 'un mensaje',
  },
  {
    category: 'objeto-escrito',
    text: 'un libro',
  },
  {
    category: 'objeto-directo',
    text: 'unas gafas',
  },
  {
    category: 'objeto-directo',
    text: 'ropa de verano',
  },
  {
    category: 'líquido',
    text: 'un zumo',
  },
  {
    category: 'líquido',
    text: 'un chocolate caliente',
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
    category: 'comida',
    text: 'manzanas',
  },
  {
    category: 'comida',
    text: 'helados',
  },
  {
    category: 'objeto-directo',
    text: 'el móvil de Marta',
  },
]

const verbosPredeterminados = [
  'vivimos',
  'bebes',
  'coméis',
  'busco',
  'manda',
  'ven',
]

export { verbs, subjects, complements, verbosPredeterminados }
