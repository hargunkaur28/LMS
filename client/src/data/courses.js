export const courses = [
  {
    id: 'pw-udaan-class-10',
    provider: 'Physics Wallah',
    title: { en: 'Udaan Class 10 Science Foundation', hi: 'उड़ान कक्षा 10 विज्ञान फाउंडेशन' },
    summary: { en: 'CBSE Class 10 Science revision and foundation practice for students moving toward higher secondary science.', hi: 'CBSE कक्षा 10 विज्ञान रिवीज़न और उच्च माध्यमिक विज्ञान की ओर बढ़ने वाले छात्रों के लिए फाउंडेशन प्रैक्टिस।' },
    longDescription: {
      en: 'A Class 10 science-focused pathway inspired by Physics Wallah Udaan-style YouTube learning. It is suitable for board exam preparation and for students planning a JEE or NEET foundation track after Grade 10.',
      hi: 'Physics Wallah उड़ान-शैली YouTube लर्निंग से प्रेरित कक्षा 10 विज्ञान-केंद्रित पाथवे। यह बोर्ड परीक्षा की तैयारी और कक्षा 10 के बाद JEE या NEET फाउंडेशन ट्रैक की योजना बनाने वाले छात्रों के लिए उपयुक्त है।'
    },
    duration: { en: '10 weeks', hi: '10 सप्ताह' },
    image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=900&q=85',
    imageAlt: { en: 'Indian school student studying science', hi: 'विज्ञान पढ़ता भारतीय स्कूल छात्र' },
    youtubeUrl: 'https://www.youtube.com/results?search_query=Physics+Wallah+Udaan+Class+10+Science+playlist',
    tags: ['Class 10', 'CBSE Science', 'Foundation'],
    modules: {
      en: ['Chemical reactions and equations', 'Acids, bases and salts', 'Life processes', 'Electricity', 'Light and human eye'],
      hi: ['रासायनिक अभिक्रियाएँ और समीकरण', 'अम्ल, क्षार और लवण', 'जैव प्रक्रियाएँ', 'विद्युत', 'प्रकाश और मानव नेत्र']
    },
    quizTitle: { en: 'Class 10 Science Readiness Quiz', hi: 'कक्षा 10 विज्ञान तैयारी क्विज़' },
    quiz: [
      {
        id: 'u1',
        prompt: { en: 'In a balanced chemical equation, the total number of atoms of each element is equal on both sides because of:', hi: 'एक संतुलित रासायनिक समीकरण में, प्रत्येक तत्व के परमाणुओं की कुल संख्या दोनों पक्षों में बराबर होती है क्योंकि:' },
        options: {
          en: ['law of conservation of mass', 'law of reflection', 'law of gravitation', 'law of dominance'],
          hi: ['द्रव्यमान संरक्षण का नियम', 'परावर्तन का नियम', 'गुरुत्वाकर्षण का नियम', 'प्रभाविता का नियम']
        },
        correctIndex: 0,
        explanation: { en: 'Balancing equations follows conservation of mass: atoms are rearranged, not created or destroyed.', hi: 'समीकरण संतुलित करना द्रव्यमान संरक्षण का पालन करता है: परमाणु पुनर्व्यवस्थित होते हैं, न बनाए जाते हैं न नष्ट।' }
      },
      {
        id: 'u2',
        prompt: { en: 'A solution turns blue litmus red. The solution is most likely:', hi: 'एक विलयन नीले लिटमस को लाल कर देता है। विलयन संभवतः है:' },
        options: {
          en: ['acidic', 'basic', 'neutral', 'saline only'],
          hi: ['अम्लीय', 'क्षारीय', 'उदासीन', 'केवल लवणीय']
        },
        correctIndex: 0,
        explanation: { en: 'Acids turn blue litmus red, while bases turn red litmus blue.', hi: 'अम्ल नीले लिटमस को लाल करते हैं, जबकि क्षार लाल लिटमस को नीला करते हैं।' }
      },
      {
        id: 'u3',
        prompt: { en: 'The functional unit of the kidney is called:', hi: 'गुर्दे की कार्यात्मक इकाई कहलाती है:' },
        options: {
          en: ['neuron', 'nephron', 'alveolus', 'villus'],
          hi: ['न्यूरॉन', 'नेफ्रॉन', 'एल्वियोलस', 'विलस']
        },
        correctIndex: 1,
        explanation: { en: 'Nephrons filter blood and form urine in the kidneys.', hi: 'नेफ्रॉन गुर्दों में रक्त छानते हैं और मूत्र बनाते हैं।' }
      },
      {
        id: 'u4',
        prompt: { en: 'For a metallic conductor at constant temperature, current is directly proportional to:', hi: 'स्थिर तापमान पर धातु चालक के लिए, धारा सीधे अनुपाती होती है:' },
        options: {
          en: ['resistance', 'voltage', 'length only', 'density'],
          hi: ['प्रतिरोध', 'वोल्टेज', 'केवल लंबाई', 'घनत्व']
        },
        correctIndex: 1,
        explanation: { en: 'Ohm\'s law states V = IR, so current varies directly with potential difference when resistance is constant.', hi: 'ओम का नियम V = IR कहता है, इसलिए प्रतिरोध स्थिर होने पर धारा विभवांतर के साथ सीधे बदलती है।' }
      },
      {
        id: 'u5',
        prompt: { en: 'The image formed by a plane mirror is always:', hi: 'समतल दर्पण द्वारा बनाया गया प्रतिबिंब हमेशा होता है:' },
        options: {
          en: ['real and inverted', 'virtual and erect', 'real and enlarged', 'virtual and diminished'],
          hi: ['वास्तविक और उल्टा', 'आभासी और सीधा', 'वास्तविक और बड़ा', 'आभासी और छोटा']
        },
        correctIndex: 1,
        explanation: { en: 'A plane mirror forms a virtual, erect image of the same size behind the mirror.', hi: 'समतल दर्पण दर्पण के पीछे समान आकार का आभासी, सीधा प्रतिबिंब बनाता है।' }
      },
      {
        id: 'u6',
        prompt: { en: 'In human digestion, bile helps mainly in the digestion of:', hi: 'मानव पाचन में, पित्त मुख्य रूप से किसके पाचन में सहायक होता है:' },
        options: {
          en: ['fats', 'proteins', 'starch', 'vitamins'],
          hi: ['वसा', 'प्रोटीन', 'स्टार्च', 'विटामिन']
        },
        correctIndex: 0,
        explanation: { en: 'Bile emulsifies fats, breaking them into smaller droplets for enzyme action.', hi: 'पित्त वसा का इमल्सीकरण करता है, उन्हें एंज़ाइम क्रिया के लिए छोटी बूंदों में तोड़ता है।' }
      }
    ]
  },
  {
    id: 'pw-arjuna-jee',
    provider: 'Physics Wallah',
    title: { en: 'Arjuna JEE Class 11 Physics & Maths', hi: 'अर्जुन JEE कक्षा 11 भौतिकी और गणित' },
    summary: { en: 'A JEE foundation course path for Class 11 learners covering mechanics, algebra and calculus essentials.', hi: 'कक्षा 11 के छात्रों के लिए JEE फाउंडेशन कोर्स — मैकेनिक्स, बीजगणित और कैलकुलस की बुनियादी बातें।' },
    longDescription: {
      en: 'A JEE Class 11 pathway based on Physics Wallah Arjuna-style YouTube preparation. It targets early JEE Main and Advanced concepts with quizzes designed around standard entrance exam fundamentals.',
      hi: 'Physics Wallah अर्जुन-शैली YouTube तैयारी पर आधारित JEE कक्षा 11 पाथवे। यह मानक प्रवेश परीक्षा बुनियादी बातों के इर्द-गिर्द डिज़ाइन की गई क्विज़ के साथ शुरुआती JEE Main और Advanced अवधारणाओं को लक्षित करता है।'
    },
    duration: { en: '14 weeks', hi: '14 सप्ताह' },
    image: 'https://images.unsplash.com/photo-1600195077077-7c815f540a3d?auto=format&fit=crop&w=900&q=85',
    imageAlt: { en: 'Indian online teacher preparing JEE students', hi: 'JEE छात्रों को तैयार करता ऑनलाइन शिक्षक' },
    youtubeUrl: 'https://www.youtube.com/results?search_query=Physics+Wallah+Arjuna+JEE+Class+11+playlist',
    tags: ['Class 11', 'JEE Main', 'JEE Advanced'],
    modules: {
      en: ['Units and dimensions', 'Kinematics', 'Newton\'s laws', 'Work, energy and power', 'Quadratic equations', 'Limits and derivatives'],
      hi: ['मात्रक और विमाएँ', 'गतिविज्ञान', 'न्यूटन के नियम', 'कार्य, ऊर्जा और शक्ति', 'द्विघात समीकरण', 'सीमाएँ और अवकलज']
    },
    quizTitle: { en: 'JEE Class 11 Concept Quiz', hi: 'JEE कक्षा 11 अवधारणा क्विज़' },
    quiz: [
      {
        id: 'j1',
        prompt: { en: 'The dimensional formula of force is:', hi: 'बल का विमीय सूत्र है:' },
        options: {
          en: ['MLT^-2', 'ML^2T^-2', 'ML^-1T^-2', 'M^0LT^-1'],
          hi: ['MLT^-2', 'ML^2T^-2', 'ML^-1T^-2', 'M^0LT^-1']
        },
        correctIndex: 0,
        explanation: { en: 'Force equals mass times acceleration, so its dimensions are M x LT^-2.', hi: 'बल = द्रव्यमान × त्वरण, इसलिए इसकी विमाएँ M × LT^-2 हैं।' }
      },
      {
        id: 'j2',
        prompt: { en: 'If acceleration is constant, the graph of velocity versus time is:', hi: 'यदि त्वरण स्थिर है, तो वेग बनाम समय का ग्राफ है:' },
        options: {
          en: ['a straight line', 'a circle', 'a parabola always', 'a hyperbola'],
          hi: ['एक सरल रेखा', 'एक वृत्त', 'हमेशा एक परवलय', 'एक अतिपरवलय']
        },
        correctIndex: 0,
        explanation: { en: 'Constant acceleration means velocity changes uniformly with time.', hi: 'स्थिर त्वरण का मतलब है कि वेग समय के साथ समान रूप से बदलता है।' }
      },
      {
        id: 'j3',
        prompt: { en: 'For a projectile launched on level ground, maximum range occurs at:', hi: 'समतल भूमि पर छोड़े गए प्रक्षेप्य की अधिकतम परास किस कोण पर होती है:' },
        options: {
          en: ['30 degrees', '45 degrees', '60 degrees', '90 degrees'],
          hi: ['30 डिग्री', '45 डिग्री', '60 डिग्री', '90 डिग्री']
        },
        correctIndex: 1,
        explanation: { en: 'Range is proportional to sin 2 theta, which is maximum when 2 theta is 90 degrees.', hi: 'परास sin 2θ के अनुपाती है, जो तब अधिकतम होती है जब 2θ = 90 डिग्री।' }
      },
      {
        id: 'j4',
        prompt: { en: 'The roots of x^2 - 5x + 6 = 0 are:', hi: 'x^2 - 5x + 6 = 0 के मूल हैं:' },
        options: {
          en: ['1 and 6', '2 and 3', '-2 and -3', '0 and 5'],
          hi: ['1 और 6', '2 और 3', '-2 और -3', '0 और 5']
        },
        correctIndex: 1,
        explanation: { en: 'The expression factors as (x - 2)(x - 3).', hi: 'व्यंजक (x - 2)(x - 3) के रूप में गुणनखंडित होता है।' }
      },
      {
        id: 'j5',
        prompt: { en: 'The derivative of x^2 with respect to x is:', hi: 'x के सापेक्ष x^2 का अवकलज है:' },
        options: {
          en: ['x', '2x', 'x^3', '2'],
          hi: ['x', '2x', 'x^3', '2']
        },
        correctIndex: 1,
        explanation: { en: 'Using d(x^n)/dx = nx^(n-1), d(x^2)/dx = 2x.', hi: 'd(x^n)/dx = nx^(n-1) का उपयोग करते हुए, d(x^2)/dx = 2x।' }
      },
      {
        id: 'j6',
        prompt: { en: 'Work done by a force is zero when force and displacement are:', hi: 'बल द्वारा किया गया कार्य शून्य होता है जब बल और विस्थापन होते हैं:' },
        options: {
          en: ['parallel', 'anti-parallel', 'perpendicular', 'equal in magnitude'],
          hi: ['समानांतर', 'प्रतिसमानांतर', 'लंबवत', 'परिमाण में बराबर']
        },
        correctIndex: 2,
        explanation: { en: 'Work is FS cos theta. At 90 degrees, cos theta is zero.', hi: 'कार्य = FS cos θ। 90 डिग्री पर, cos θ शून्य होता है।' }
      }
    ]
  },
  {
    id: 'unacademy-neet-biology',
    provider: 'Unacademy',
    title: { en: 'NEET Biology Complete Preparation', hi: 'NEET जीव विज्ञान पूर्ण तैयारी' },
    summary: { en: 'A NEET UG Biology course path covering NCERT-heavy Botany and Zoology practice for aspirants.', hi: 'NEET UG जीव विज्ञान कोर्स — एस्पिरेंट्स के लिए NCERT-आधारित वनस्पति विज्ञान और प्राणि विज्ञान अभ्यास।' },
    longDescription: {
      en: 'A NEET Biology pathway based on Unacademy YouTube preparation, focused on NCERT concepts, high-yield definitions and exam-style biology recall for medical aspirants.',
      hi: 'Unacademy YouTube तैयारी पर आधारित NEET जीव विज्ञान पाथवे, NCERT अवधारणाओं, उच्च-उपज परिभाषाओं और मेडिकल एस्पिरेंट्स के लिए परीक्षा-शैली जीव विज्ञान रिकॉल पर केंद्रित।'
    },
    duration: { en: '12 weeks', hi: '12 सप्ताह' },
    image: 'https://images.unsplash.com/photo-1596496050827-8299e0220de1?auto=format&fit=crop&w=900&q=85',
    imageAlt: { en: 'Indian NEET aspirant studying biology', hi: 'जीव विज्ञान पढ़ता NEET एस्पिरेंट' },
    youtubeUrl: 'https://www.youtube.com/results?search_query=Unacademy+NEET+Biology+complete+course+playlist',
    tags: ['NEET UG', 'Biology', 'Class 11-12'],
    modules: {
      en: ['Cell structure', 'Biomolecules', 'Plant physiology', 'Human physiology', 'Genetics', 'Ecology'],
      hi: ['कोशिका संरचना', 'जैव अणु', 'पादप शरीर क्रिया विज्ञान', 'मानव शरीर क्रिया विज्ञान', 'आनुवंशिकी', 'पारिस्थितिकी']
    },
    quizTitle: { en: 'NEET Biology NCERT Quiz', hi: 'NEET जीव विज्ञान NCERT क्विज़' },
    quiz: [
      {
        id: 'n1',
        prompt: { en: 'The powerhouse of the cell is the:', hi: 'कोशिका का पावरहाउस है:' },
        options: {
          en: ['ribosome', 'mitochondrion', 'Golgi body', 'lysosome'],
          hi: ['राइबोसोम', 'माइटोकॉन्ड्रिया', 'गॉल्जी बॉडी', 'लाइसोसोम']
        },
        correctIndex: 1,
        explanation: { en: 'Mitochondria generate ATP through cellular respiration.', hi: 'माइटोकॉन्ड्रिया कोशिकीय श्वसन के माध्यम से ATP उत्पन्न करते हैं।' }
      },
      {
        id: 'n2',
        prompt: { en: 'The primary pigment involved in photosynthesis is:', hi: 'प्रकाश संश्लेषण में शामिल प्राथमिक वर्णक है:' },
        options: {
          en: ['chlorophyll a', 'xanthophyll', 'carotene', 'anthocyanin'],
          hi: ['क्लोरोफिल a', 'ज़ैंथोफिल', 'कैरोटीन', 'एंथोसायनिन']
        },
        correctIndex: 0,
        explanation: { en: 'Chlorophyll a is the main reaction-center pigment in photosynthesis.', hi: 'क्लोरोफिल a प्रकाश संश्लेषण में मुख्य प्रतिक्रिया-केंद्र वर्णक है।' }
      },
      {
        id: 'n3',
        prompt: { en: 'The functional unit of heredity is:', hi: 'आनुवंशिकता की कार्यात्मक इकाई है:' },
        options: {
          en: ['gene', 'ribosome', 'nucleus', 'chromatid'],
          hi: ['जीन', 'राइबोसोम', 'केंद्रक', 'क्रोमैटिड']
        },
        correctIndex: 0,
        explanation: { en: 'A gene is a DNA segment that influences a trait or functional product.', hi: 'जीन DNA का एक खंड है जो किसी लक्षण या कार्यात्मक उत्पाद को प्रभावित करता है।' }
      },
      {
        id: 'n4',
        prompt: { en: 'In humans, oxygen is transported mainly by:', hi: 'मनुष्यों में, ऑक्सीजन मुख्य रूप से किसके द्वारा परिवहन होती है:' },
        options: {
          en: ['plasma water', 'haemoglobin', 'platelets', 'lymphocytes'],
          hi: ['प्लाज़्मा जल', 'हीमोग्लोबिन', 'प्लेटलेट्स', 'लिम्फोसाइट्स']
        },
        correctIndex: 1,
        explanation: { en: 'Haemoglobin in red blood cells binds and transports oxygen.', hi: 'लाल रक्त कोशिकाओं में हीमोग्लोबिन ऑक्सीजन से जुड़ता है और उसका परिवहन करता है।' }
      },
      {
        id: 'n5',
        prompt: { en: 'The enzyme that begins starch digestion in the mouth is:', hi: 'मुँह में स्टार्च पाचन शुरू करने वाला एंज़ाइम है:' },
        options: {
          en: ['pepsin', 'trypsin', 'salivary amylase', 'lipase'],
          hi: ['पेप्सिन', 'ट्रिप्सिन', 'लार एमाइलेज़', 'लाइपेज़']
        },
        correctIndex: 2,
        explanation: { en: 'Salivary amylase breaks starch into simpler sugars in the mouth.', hi: 'लार एमाइलेज़ मुँह में स्टार्च को सरल शर्करा में तोड़ता है।' }
      },
      {
        id: 'n6',
        prompt: { en: 'A group of individuals of the same species living in an area is called a:', hi: 'एक क्षेत्र में रहने वाली समान प्रजाति के जीवों का समूह कहलाता है:' },
        options: {
          en: ['community', 'population', 'biome', 'ecosystem'],
          hi: ['समुदाय', 'जनसंख्या', 'बायोम', 'पारिस्थितिक तंत्र']
        },
        correctIndex: 1,
        explanation: { en: 'A population is made of organisms of the same species in a defined area.', hi: 'जनसंख्या एक परिभाषित क्षेत्र में समान प्रजाति के जीवों से बनी होती है।' }
      }
    ]
  }
];
