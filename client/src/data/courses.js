export const courses = [
  {
    id: 'pw-udaan-class-10',
    provider: 'Physics Wallah',
    title: 'Udaan Class 10 Science Foundation',
    summary: 'CBSE Class 10 Science revision and foundation practice for students moving toward higher secondary science.',
    longDescription:
      'A Class 10 science-focused pathway inspired by Physics Wallah Udaan-style YouTube learning. It is suitable for board exam preparation and for students planning a JEE or NEET foundation track after Grade 10.',
    duration: '10 weeks',
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Indian school student studying science',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Physics+Wallah+Udaan+Class+10+Science+playlist',
    tags: ['Class 10', 'CBSE Science', 'Foundation'],
    modules: ['Chemical reactions and equations', 'Acids, bases and salts', 'Life processes', 'Electricity', 'Light and human eye'],
    quizTitle: 'Class 10 Science Readiness Quiz',
    quiz: [
      {
        id: 'u1',
        prompt: 'In a balanced chemical equation, the total number of atoms of each element is equal on both sides because of:',
        options: ['law of conservation of mass', 'law of reflection', 'law of gravitation', 'law of dominance'],
        answer: 'law of conservation of mass',
        explanation: 'Balancing equations follows conservation of mass: atoms are rearranged, not created or destroyed.'
      },
      {
        id: 'u2',
        prompt: 'A solution turns blue litmus red. The solution is most likely:',
        options: ['acidic', 'basic', 'neutral', 'saline only'],
        answer: 'acidic',
        explanation: 'Acids turn blue litmus red, while bases turn red litmus blue.'
      },
      {
        id: 'u3',
        prompt: 'The functional unit of the kidney is called:',
        options: ['neuron', 'nephron', 'alveolus', 'villus'],
        answer: 'nephron',
        explanation: 'Nephrons filter blood and form urine in the kidneys.'
      },
      {
        id: 'u4',
        prompt: 'For a metallic conductor at constant temperature, current is directly proportional to:',
        options: ['resistance', 'voltage', 'length only', 'density'],
        answer: 'voltage',
        explanation: 'Ohm’s law states V = IR, so current varies directly with potential difference when resistance is constant.'
      },
      {
        id: 'u5',
        prompt: 'The image formed by a plane mirror is always:',
        options: ['real and inverted', 'virtual and erect', 'real and enlarged', 'virtual and diminished'],
        answer: 'virtual and erect',
        explanation: 'A plane mirror forms a virtual, erect image of the same size behind the mirror.'
      },
      {
        id: 'u6',
        prompt: 'In human digestion, bile helps mainly in the digestion of:',
        options: ['fats', 'proteins', 'starch', 'vitamins'],
        answer: 'fats',
        explanation: 'Bile emulsifies fats, breaking them into smaller droplets for enzyme action.'
      }
    ]
  },
  {
    id: 'pw-arjuna-jee',
    provider: 'Physics Wallah',
    title: 'Arjuna JEE Class 11 Physics & Maths',
    summary: 'A JEE foundation course path for Class 11 learners covering mechanics, algebra and calculus essentials.',
    longDescription:
      'A JEE Class 11 pathway based on Physics Wallah Arjuna-style YouTube preparation. It targets early JEE Main and Advanced concepts with quizzes designed around standard entrance exam fundamentals.',
    duration: '14 weeks',
    image: 'https://images.unsplash.com/photo-1600195077077-7c815f540a3d?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Indian online teacher preparing JEE students',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Physics+Wallah+Arjuna+JEE+Class+11+playlist',
    tags: ['Class 11', 'JEE Main', 'JEE Advanced'],
    modules: ['Units and dimensions', 'Kinematics', 'Newton’s laws', 'Work, energy and power', 'Quadratic equations', 'Limits and derivatives'],
    quizTitle: 'JEE Class 11 Concept Quiz',
    quiz: [
      {
        id: 'j1',
        prompt: 'The dimensional formula of force is:',
        options: ['MLT^-2', 'ML^2T^-2', 'ML^-1T^-2', 'M^0LT^-1'],
        answer: 'MLT^-2',
        explanation: 'Force equals mass times acceleration, so its dimensions are M x LT^-2.'
      },
      {
        id: 'j2',
        prompt: 'If acceleration is constant, the graph of velocity versus time is:',
        options: ['a straight line', 'a circle', 'a parabola always', 'a hyperbola'],
        answer: 'a straight line',
        explanation: 'Constant acceleration means velocity changes uniformly with time.'
      },
      {
        id: 'j3',
        prompt: 'For a projectile launched on level ground, maximum range occurs at:',
        options: ['30 degrees', '45 degrees', '60 degrees', '90 degrees'],
        answer: '45 degrees',
        explanation: 'Range is proportional to sin 2 theta, which is maximum when 2 theta is 90 degrees.'
      },
      {
        id: 'j4',
        prompt: 'The roots of x^2 - 5x + 6 = 0 are:',
        options: ['1 and 6', '2 and 3', '-2 and -3', '0 and 5'],
        answer: '2 and 3',
        explanation: 'The expression factors as (x - 2)(x - 3).'
      },
      {
        id: 'j5',
        prompt: 'The derivative of x^2 with respect to x is:',
        options: ['x', '2x', 'x^3', '2'],
        answer: '2x',
        explanation: 'Using d(x^n)/dx = nx^(n-1), d(x^2)/dx = 2x.'
      },
      {
        id: 'j6',
        prompt: 'Work done by a force is zero when force and displacement are:',
        options: ['parallel', 'anti-parallel', 'perpendicular', 'equal in magnitude'],
        answer: 'perpendicular',
        explanation: 'Work is FS cos theta. At 90 degrees, cos theta is zero.'
      }
    ]
  },
  {
    id: 'unacademy-neet-biology',
    provider: 'Unacademy',
    title: 'NEET Biology Complete Preparation',
    summary: 'A NEET UG Biology course path covering NCERT-heavy Botany and Zoology practice for aspirants.',
    longDescription:
      'A NEET Biology pathway based on Unacademy YouTube preparation, focused on NCERT concepts, high-yield definitions and exam-style biology recall for medical aspirants.',
    duration: '12 weeks',
    image: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=900&q=85',
    imageAlt: 'Indian NEET aspirant studying biology',
    youtubeUrl: 'https://www.youtube.com/results?search_query=Unacademy+NEET+Biology+complete+course+playlist',
    tags: ['NEET UG', 'Biology', 'Class 11-12'],
    modules: ['Cell structure', 'Biomolecules', 'Plant physiology', 'Human physiology', 'Genetics', 'Ecology'],
    quizTitle: 'NEET Biology NCERT Quiz',
    quiz: [
      {
        id: 'n1',
        prompt: 'The powerhouse of the cell is the:',
        options: ['ribosome', 'mitochondrion', 'Golgi body', 'lysosome'],
        answer: 'mitochondrion',
        explanation: 'Mitochondria generate ATP through cellular respiration.'
      },
      {
        id: 'n2',
        prompt: 'The primary pigment involved in photosynthesis is:',
        options: ['chlorophyll a', 'xanthophyll', 'carotene', 'anthocyanin'],
        answer: 'chlorophyll a',
        explanation: 'Chlorophyll a is the main reaction-center pigment in photosynthesis.'
      },
      {
        id: 'n3',
        prompt: 'The functional unit of heredity is:',
        options: ['gene', 'ribosome', 'nucleus', 'chromatid'],
        answer: 'gene',
        explanation: 'A gene is a DNA segment that influences a trait or functional product.'
      },
      {
        id: 'n4',
        prompt: 'In humans, oxygen is transported mainly by:',
        options: ['plasma water', 'haemoglobin', 'platelets', 'lymphocytes'],
        answer: 'haemoglobin',
        explanation: 'Haemoglobin in red blood cells binds and transports oxygen.'
      },
      {
        id: 'n5',
        prompt: 'The enzyme that begins starch digestion in the mouth is:',
        options: ['pepsin', 'trypsin', 'salivary amylase', 'lipase'],
        answer: 'salivary amylase',
        explanation: 'Salivary amylase breaks starch into simpler sugars in the mouth.'
      },
      {
        id: 'n6',
        prompt: 'A group of individuals of the same species living in an area is called a:',
        options: ['community', 'population', 'biome', 'ecosystem'],
        answer: 'population',
        explanation: 'A population is made of organisms of the same species in a defined area.'
      }
    ]
  }
];
