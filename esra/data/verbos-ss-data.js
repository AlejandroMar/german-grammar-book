const verbos = [
  {
    nombre: 'vivir',
    conjugacion: {
      p1_s: 'vivo',
      p2_s: 'vives',
      p3_s: 'vive',
      p1_p: 'vivimos',
      p2_p: 'vivís',
      p3_p: 'viven',
    },

    complementos: ['lugar', 'acompañante', 'modo'],
  },
  {
    nombre: 'beber',
    conjugacion: {
      p1_s: 'bebo',
      p2_s: 'bebes',
      p3_s: 'bebe',
      p1_p: 'bebemos',
      p2_p: 'bebéis',
      p3_p: 'beben',
    },

    complementos: ['líquido', 'cantidad'],
  },
  {
    nombre: 'comer',
    conjugacion: {
      p1_s: 'como',
      p2_s: 'comes',
      p3_s: 'come',
      p1_p: 'comemos',
      p2_p: 'coméis',
      p3_p: 'comen',
    },

    complementos: [
      'comida',
      'cantidad',
      'acompañante',
      'lugar',
      'tiempo',
      'modo',
    ],
  },
  {
    nombre: 'ver',
    conjugacion: {
      p1_s: 'veo',
      p2_s: 'ves',
      p3_s: 've',
      p1_p: 'vemos',
      p2_p: 'veis',
      p3_p: 'ven',
    },

    complementos: ['objeto-directo', 'cantidad', 'líquido', 'comida'],
  },
  {
    nombre: 'buscar',
    conjugacion: {
      p1_s: 'busco',
      p2_s: 'buscas',
      p3_s: 'busca',
      p1_p: 'buscamos',
      p2_p: 'buscáis',
      p3_p: 'buscan',
    },

    complementos: [
      'objeto-directo',
      'cantidad',
      'lugar',
      'modo',
      'comida',
      'líquido',
    ],
  },
  {
    nombre: 'mandar',
    conjugacion: {
      p1_s: 'mando',
      p2_s: 'mandas',
      p3_s: 'manda',
      p1_p: 'mandamos',
      p2_p: 'mandáis',
      p3_p: 'mandan',
    },

    complementos: ['objeto-directo', 'cantidad'],
  },
  {
    nombre: 'comprar',
    conjugacion: {
      p1_s: 'compro',
      p2_s: 'compras',
      p3_s: 'compra',
      p1_p: 'compramos',
      p2_p: 'compráis',
      p3_p: 'compran',
    },

    complementos: ['objeto-directo', 'cantidad', 'comida', 'bebida'],
  },
  {
    nombre: 'leer',
    conjugacion: {
      p1_s: 'leo',
      p2_s: 'lees',
      p3_s: 'lee',
      p1_p: 'leemos',
      p2_p: 'leéis',
      p3_p: 'leen',
    },

    complementos: ['objeto-directo', 'acompañante', 'lugar', 'tiempo'],
  },
]

const sujetos = [
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
]

const complementos = [
  {
    categoria: 'lugar',
    texto: 'en Madrid',
  },
  {
    categoria: 'objeto-directo',
    texto: 'un mensaje',
  },
  {
    categoria: 'líquido',
    texto: 'un zumo',
  },
  {
    categoria: 'objeto-directo',
    texto: 'una película',
  },
  {
    categoria: 'comida',
    texto: 'bocadillos',
  },
  {
    categoria: 'objeto-directo',
    texto: 'mi móvil',
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

export { verbos, sujetos, complementos, verbosPredeterminados }
