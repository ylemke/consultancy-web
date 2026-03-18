import { createContext, useContext, useState, useEffect } from 'react';

const translations = {
  en: {
    // Navigation
    nav: {
      mentoring: 'Mentoring',
      about: 'About',
      contact: 'Contact',
    },
    // Home Page
    home: {
      label: 'Executive Career Mentor',
      headline: 'Decoding Big Tech.',
      headline2: 'Aligning Executive Careers.',
      subheadline: 'Strategic mentorship helping ambitious professionals decode the Big Tech hiring process, master executive interview loops, and secure defining roles in global markets.',
      cta1: 'Explore Mentorship',
      trusted: 'Executive Experience From',
      location: 'Based in Barcelona',
      dualExpertise: 'The Approach',
      dualTitle: 'From insider knowledge to career transformation.',
      dualDesc: "With firsthand experience navigating Big Tech hiring processes at Microsoft and Amazon, I help ambitious professionals articulate their value and secure career-defining roles in global markets.",
      forProfessionals: 'Start Your Journey',
      managedPortfolios: 'Managed Portfolios',
      languages: 'Languages',
    },
    // Mentoring Page
    mentoring: {
      label: 'Career Mentorship',
      headline: 'Your Path to',
      headline2: 'Global Leadership.',
      subheadline: 'Strategic career guidance that transforms ambitious professionals into Big Tech leaders. I decode the hiring process so you can articulate your value with clarity and confidence.',
      service1Title: 'Big Tech Interview Mastery',
      service1Desc: '1:1 behavioral and technical coaching to decode the hiring process and master the STAR method. We reverse-engineer competitive interview loops.',
      service1Item1: 'STAR method mastery',
      service1Item2: 'Mock interview sessions',
      service1Item3: 'Technical deep-dives',
      service2Title: 'Executive Presence & Storytelling',
      service2Desc: 'Learn to translate operational complexity into clear, compelling narratives that influence stakeholders and land senior roles.',
      service2Item1: 'Narrative construction',
      service2Item2: 'Stakeholder influence',
      service2Item3: 'Leadership communication',
      service3Title: 'Career Acceleration Strategy',
      service3Desc: 'Strategic mentorship to position yourself for global opportunities and build a personalized roadmap to leadership in regulated industries.',
      service3Item1: 'Career trajectory mapping',
      service3Item2: 'Offer negotiation strategy',
      service3Item3: 'Leadership transition support',
      approachLabel: 'The Method',
      approachQuote: '"I reverse-engineer the Big Tech hiring process to help ambitious professionals articulate their value and secure career-defining roles."',
      ctaLabel: 'Ready to Accelerate?',
      ctaTitle: "Let's map your path to leadership.",
      ctaButton: 'Book Your Session',
    },
    // About Page
    about: {
      label: 'About',
      headline: 'Global Expertise.',
      headline2: 'Human-Centric',
      headline3: 'Growth.',
      portfolios: 'Portfolios',
      languages: 'Languages',
      years: 'Years',
      yearsNumber: '7+',
      background: 'Background',
      bio1: 'With a career spanning $9B+ in managed portfolios, my experience spans complex regulatory environments and streamlined operational frameworks across banking, fintech, and Big Tech. My methodology bridges the gap between rigorous compliance and agile business growth.',
      bio2: 'As a trilingual leader (English, Portuguese, Spanish), I have successfully navigated the nuances of global markets, aligning cross-functional teams across continents.',
      bio3: "I'm deeply committed to mentoring the next generation of tech leaders. I help ambitious professionals articulate their value and secure career-defining roles.",
      location: 'Brazilian based in Barcelona, serving clients globally.',
      expertise: 'Expertise',
      expertiseCareer: 'Career Development',
      expertiseCareerItems: ['Big Tech Interview Coaching', 'Executive Presence Training', 'Leadership Transition', 'Strategic Career Planning', 'Offer Negotiation'],
      experience: 'Experience',
      experienceItems: [
        { company: 'Microsoft', role: 'Governance & AI — Enterprise experience in regulated environments' },
        { company: 'Amazon', role: 'Risk Management — Global frameworks and operational excellence' },
        { company: 'BNP Paribas', role: 'Credit Risk — Banking compliance and portfolio oversight' }
      ],
      ctaLabel: "Let's Connect",
      ctaTitle: 'Ready to discuss your goals?',
      ctaButton: 'Get in Touch',
    },
    // Contact Page
    contact: {
      label: 'Contact',
      headline: "Let's Align",
      headline2: 'Your Future.',
      subheadline: "Schedule a complimentary, no-obligation 30-minute consultation. Let's discuss how we can accelerate your career.",
      sendMessage: 'Send a Message',
      scheduleCall: 'Schedule a Call',
      messageSent: 'Message Sent',
      messageSentDesc: "Thank you for reaching out. I'll respond within 24-48 hours.",
      sendAnother: 'Send Another Message',
      namePlaceholder: 'Name',
      companyPlaceholder: 'Current Company (Optional)',
      emailPlaceholder: 'Email',
      interestPlaceholder: 'I am interested in:',
      interestOption1: 'Big Tech Interview Coaching',
      interestOption2: 'Executive Career Mentorship',
      interestOption3: 'Storytelling & Influence Workshops',
      messagePlaceholder: 'Message',
      submitButton: 'Send Message',
      sending: 'Sending...',
      responseTime: 'Response Time',
      responseTimeDesc: 'I respond to all inquiries within 24-48 hours.',
      availability: 'Availability',
      availabilityDesc: 'Currently accepting new clients for Q2 2026.',
      languagesLabel: 'Languages',
      languagesDesc: 'English, Portuguese, Spanish',
      locationLabel: 'Location',
      locationDesc: 'Barcelona, Spain',
      error: 'Please fill in all fields.',
      errorGeneric: 'Something went wrong. Please try again.',
      bookingTitle: 'Book a 30-Minute Call',
      bookingDesc: "I'd love to connect. Send me a message through the form, or reach out directly on LinkedIn — I typically respond within 24 hours.",
      bookingCta: 'Connect on LinkedIn',
    },
    // Footer
    footer: {
      tagline: 'Executive career mentorship for ambitious professionals navigating Big Tech.',
      navigation: 'Navigation',
      connect: 'Connect',
      email: 'Email',
      rights: 'Yasmin Lemke',
      tagline2: 'Barcelona, Spain',
    },
  },
  es: {
    // Navigation
    nav: {
      mentoring: 'Mentoría',
      about: 'Sobre Mí',
      contact: 'Contacto',
    },
    // Home Page
    home: {
      label: 'Mentora de Carreras Ejecutivas',
      headline: 'Decodificando Big Tech.',
      headline2: 'Alineando Carreras Ejecutivas.',
      subheadline: 'Mentoría estratégica que ayuda a profesionales ambiciosos a decodificar el proceso de selección de Big Tech, dominar las entrevistas ejecutivas y asegurar roles definitorios en mercados globales.',
      cta1: 'Explorar Mentoría',
      trusted: 'Experiencia Ejecutiva En',
      location: 'Desde Barcelona',
      dualExpertise: 'El Enfoque',
      dualTitle: 'De conocimiento interno a transformación de carreras.',
      dualDesc: 'Con experiencia directa navegando procesos de selección en Big Tech como Microsoft y Amazon, ayudo a profesionales ambiciosos a articular su valor y asegurar roles que definen carreras en mercados globales.',
      forProfessionals: 'Comienza tu Camino',
      managedPortfolios: 'Carteras Gestionadas',
      languages: 'Idiomas',
    },
    // Mentoring Page
    mentoring: {
      label: 'Mentoría de Carrera',
      headline: 'Tu Camino hacia',
      headline2: 'el Liderazgo Global.',
      subheadline: 'Orientación estratégica de carrera que transforma profesionales ambiciosos en líderes de Big Tech. Decodifico el proceso de selección para que puedas articular tu valor con claridad y confianza.',
      service1Title: 'Dominio de Entrevistas Big Tech',
      service1Desc: 'Coaching 1:1 conductual y técnico para decodificar el proceso de selección y dominar el método STAR. Hacemos ingeniería inversa de las entrevistas competitivas.',
      service1Item1: 'Dominio del método STAR',
      service1Item2: 'Sesiones de entrevistas simuladas',
      service1Item3: 'Análisis técnico en profundidad',
      service2Title: 'Presencia Ejecutiva y Storytelling',
      service2Desc: 'Aprende a traducir complejidad operacional en narrativas claras y convincentes que influyan a stakeholders y te posicionen para roles senior.',
      service2Item1: 'Construcción de narrativas',
      service2Item2: 'Influencia de stakeholders',
      service2Item3: 'Comunicación de liderazgo',
      service3Title: 'Estrategia de Aceleración de Carrera',
      service3Desc: 'Mentoría estratégica para posicionarte en oportunidades globales y construir un roadmap personalizado hacia el liderazgo en industrias reguladas.',
      service3Item1: 'Mapeo de trayectoria de carrera',
      service3Item2: 'Estrategia de negociación de ofertas',
      service3Item3: 'Apoyo en transición de liderazgo',
      approachLabel: 'Mi Método',
      approachQuote: '"Hago ingeniería inversa del proceso de selección de Big Tech para ayudar a profesionales ambiciosos a articular su valor y asegurar roles que definen carreras."',
      ctaLabel: '¿Preparado para Acelerar?',
      ctaTitle: 'Tracemos tu camino al liderazgo.',
      ctaButton: 'Reserva tu Sesión',
    },
    // About Page
    about: {
      label: 'Sobre Mí',
      headline: 'Expertise Global.',
      headline2: 'Crecimiento',
      headline3: 'Humano.',
      portfolios: 'Carteras',
      languages: 'Idiomas',
      years: 'Años',
      yearsNumber: '7+',
      background: 'Trayectoria',
      bio1: 'Con una carrera que abarca más de $9B en carteras gestionadas, mi experiencia incluye entornos regulatorios complejos y marcos operacionales optimizados en banca, fintech y Big Tech. Mi metodología conecta compliance riguroso con crecimiento ágil del negocio.',
      bio2: 'Como líder trilingüe (inglés, portugués, español), he navegado con éxito los matices de mercados globales, alineando equipos interfuncionales en diferentes continentes.',
      bio3: 'Estoy profundamente comprometida con acompañar a la próxima generación de líderes tech. Ayudo a profesionales ambiciosos a articular su valor y asegurar roles que definen carreras.',
      location: 'Brasileña afincada en Barcelona, atendiendo clientes globalmente.',
      expertise: 'Expertise',
      expertiseCareer: 'Desarrollo de Carrera',
      expertiseCareerItems: ['Coaching de Entrevistas Big Tech', 'Entrenamiento de Presencia Ejecutiva', 'Transición de Liderazgo', 'Planificación Estratégica de Carrera', 'Negociación de Ofertas'],
      experience: 'Experiencia',
      experienceItems: [
        { company: 'Microsoft', role: 'Gobernanza e IA — Experiencia empresarial en entornos regulados' },
        { company: 'Amazon', role: 'Gestión de Riesgos — Marcos globales y excelencia operacional' },
        { company: 'BNP Paribas', role: 'Riesgo de Crédito — Compliance bancario y supervisión de carteras' }
      ],
      ctaLabel: 'Conectemos',
      ctaTitle: '¿Preparada para hablar de tus objetivos?',
      ctaButton: 'Contacta',
    },
    // Contact Page
    contact: {
      label: 'Contacto',
      headline: 'Alineemos',
      headline2: 'Tu Futuro.',
      subheadline: 'Agenda una consulta gratuita de 30 minutos sin compromiso. Hablemos de cómo podemos acelerar tu carrera.',
      sendMessage: 'Enviar Mensaje',
      scheduleCall: 'Agendar Llamada',
      messageSent: 'Mensaje Enviado',
      messageSentDesc: 'Gracias por contactarme. Responderé en 24-48 horas.',
      sendAnother: 'Enviar Otro Mensaje',
      namePlaceholder: 'Nombre',
      companyPlaceholder: 'Empresa Actual (Opcional)',
      emailPlaceholder: 'Email',
      interestPlaceholder: 'Me interesa:',
      interestOption1: 'Coaching de Entrevistas Big Tech',
      interestOption2: 'Mentoría de Carrera Ejecutiva',
      interestOption3: 'Workshops de Storytelling e Influencia',
      messagePlaceholder: 'Mensaje',
      submitButton: 'Enviar Mensaje',
      sending: 'Enviando...',
      responseTime: 'Tiempo de Respuesta',
      responseTimeDesc: 'Respondo todas las consultas en 24-48 horas.',
      availability: 'Disponibilidad',
      availabilityDesc: 'Actualmente aceptando nuevos clientes para Q2 2026.',
      languagesLabel: 'Idiomas',
      languagesDesc: 'Inglés, Portugués, Español',
      locationLabel: 'Ubicación',
      locationDesc: 'Barcelona, España',
      error: 'Por favor completa todos los campos.',
      errorGeneric: 'Algo ha ido mal. Por favor inténtalo de nuevo.',
      bookingTitle: 'Agenda una Llamada de 30 Minutos',
      bookingDesc: 'Me encantaría conectar. Envíame un mensaje a través del formulario, o escríbeme directamente por LinkedIn — suelo responder en 24 horas.',
      bookingCta: 'Conectar en LinkedIn',
    },
    // Footer
    footer: {
      tagline: 'Mentoría de carrera ejecutiva para profesionales ambiciosos navegando Big Tech.',
      navigation: 'Navegación',
      connect: 'Conectar',
      email: 'Email',
      rights: 'Yasmin Lemke',
      tagline2: 'Barcelona, España',
    },
  },
  pt: {
    // Navigation
    nav: {
      mentoring: 'Mentoria',
      about: 'Sobre',
      contact: 'Contato',
    },
    // Home Page
    home: {
      label: 'Mentora de Carreiras Executivas',
      headline: 'Decodificando Big Tech.',
      headline2: 'Alinhando Carreiras Executivas.',
      subheadline: 'Mentoria estratégica que ajuda profissionais ambiciosos a decodificar o processo seletivo de Big Tech, dominar entrevistas executivas e conquistar posições transformadoras em mercados globais.',
      cta1: 'Explorar Mentoria',
      trusted: 'Experiência Executiva Em',
      location: 'De Barcelona para o mundo',
      dualExpertise: 'A Abordagem',
      dualTitle: 'De conhecimento interno à transformação de carreiras.',
      dualDesc: 'Com experiência direta navegando processos seletivos em Big Tech como Microsoft e Amazon, ajudo profissionais ambiciosos a articular seu valor e conquistar posições que transformam carreiras em mercados globais.',
      forProfessionals: 'Comece sua Jornada',
      managedPortfolios: 'Portfólios Gerenciados',
      languages: 'Idiomas',
    },
    // Mentoring Page
    mentoring: {
      label: 'Mentoria de Carreira',
      headline: 'Seu Caminho para',
      headline2: 'a Liderança Global.',
      subheadline: 'Orientação estratégica de carreira que transforma profissionais ambiciosos em líderes de Big Tech. Decodifico o processo seletivo para você articular seu valor com clareza e confiança.',
      service1Title: 'Domínio de Entrevistas Big Tech',
      service1Desc: 'Coaching 1:1 comportamental e técnico para decodificar o processo seletivo e dominar o método STAR. Fazemos engenharia reversa das entrevistas competitivas.',
      service1Item1: 'Domínio do método STAR',
      service1Item2: 'Simulações de entrevista',
      service1Item3: 'Aprofundamentos técnicos',
      service2Title: 'Presença Executiva e Storytelling',
      service2Desc: 'Aprenda a traduzir complexidade operacional em narrativas claras e impactantes que influenciam stakeholders e te posicionam para cargos seniores.',
      service2Item1: 'Construção de narrativas',
      service2Item2: 'Influência de stakeholders',
      service2Item3: 'Comunicação de liderança',
      service3Title: 'Estratégia de Aceleração de Carreira',
      service3Desc: 'Mentoria estratégica para te posicionar em oportunidades globais e construir um roadmap personalizado para liderança em indústrias reguladas.',
      service3Item1: 'Mapeamento de trajetória',
      service3Item2: 'Estratégia de negociação',
      service3Item3: 'Suporte em transição de liderança',
      approachLabel: 'O Método',
      approachQuote: '"Faço engenharia reversa do processo seletivo de Big Tech para ajudar profissionais ambiciosos a articular seu valor e conquistar posições que transformam carreiras."',
      ctaLabel: 'Pronto pra Acelerar?',
      ctaTitle: 'Vamos mapear seu caminho para a liderança.',
      ctaButton: 'Agende sua Sessão',
    },
    // About Page
    about: {
      label: 'Sobre',
      headline: 'Expertise Global.',
      headline2: 'Crescimento',
      headline3: 'Humano.',
      portfolios: 'Portfólios',
      languages: 'Idiomas',
      years: 'Anos',
      yearsNumber: '7+',
      background: 'Trajetória',
      bio1: 'Com uma carreira que soma mais de $9B em portfólios gerenciados, minha experiência abrange ambientes regulatórios complexos e frameworks operacionais otimizados em bancos, fintechs e Big Tech. Minha metodologia conecta compliance rigoroso com crescimento ágil do negócio.',
      bio2: 'Como líder trilíngue (inglês, português, espanhol), naveguei com sucesso as nuances de mercados globais, alinhando equipes multifuncionais em diferentes continentes.',
      bio3: 'Sou profundamente comprometida em preparar a próxima geração de líderes tech. Ajudo profissionais ambiciosos a articular seu valor e conquistar posições que transformam carreiras.',
      location: 'Brasileira baseada em Barcelona, atendendo clientes globalmente.',
      expertise: 'Expertise',
      expertiseCareer: 'Desenvolvimento de Carreira',
      expertiseCareerItems: ['Coaching de Entrevistas Big Tech', 'Treinamento de Presença Executiva', 'Transição de Liderança', 'Planejamento Estratégico de Carreira', 'Negociação de Ofertas'],
      experience: 'Experiência',
      experienceItems: [
        { company: 'Microsoft', role: 'Governança e IA — Experiência empresarial em ambientes regulados' },
        { company: 'Amazon', role: 'Gestão de Riscos — Frameworks globais e excelência operacional' },
        { company: 'BNP Paribas', role: 'Risco de Crédito — Compliance bancário e supervisão de portfólios' }
      ],
      ctaLabel: 'Vamos Conectar',
      ctaTitle: 'Pronta pra falar sobre seus objetivos?',
      ctaButton: 'Entre em Contato',
    },
    // Contact Page
    contact: {
      label: 'Contato',
      headline: 'Vamos Alinhar',
      headline2: 'Seu Futuro.',
      subheadline: 'Agende uma conversa gratuita de 30 minutos, sem compromisso. Vamos discutir como acelerar sua carreira.',
      sendMessage: 'Enviar Mensagem',
      scheduleCall: 'Agendar Ligação',
      messageSent: 'Mensagem Enviada',
      messageSentDesc: 'Valeu por entrar em contato! Respondo em 24-48 horas.',
      sendAnother: 'Enviar Outra Mensagem',
      namePlaceholder: 'Nome',
      companyPlaceholder: 'Empresa Atual (Opcional)',
      emailPlaceholder: 'Email',
      interestPlaceholder: 'Tenho interesse em:',
      interestOption1: 'Coaching de Entrevistas Big Tech',
      interestOption2: 'Mentoria de Carreira Executiva',
      interestOption3: 'Workshops de Storytelling e Influência',
      messagePlaceholder: 'Mensagem',
      submitButton: 'Enviar Mensagem',
      sending: 'Enviando...',
      responseTime: 'Tempo de Resposta',
      responseTimeDesc: 'Respondo todas as mensagens em 24-48 horas.',
      availability: 'Disponibilidade',
      availabilityDesc: 'Aceitando novos clientes para Q2 2026.',
      languagesLabel: 'Idiomas',
      languagesDesc: 'Inglês, Português, Espanhol',
      locationLabel: 'Localização',
      locationDesc: 'Barcelona, Espanha',
      error: 'Por favor preencha todos os campos.',
      errorGeneric: 'Ops, algo deu errado. Tenta de novo?',
      bookingTitle: 'Agende uma Conversa de 30 Minutos',
      bookingDesc: 'Adoraria conectar. Envie uma mensagem pelo formulário, ou entre em contato pelo LinkedIn — costumo responder em até 24 horas.',
      bookingCta: 'Conectar no LinkedIn',
    },
    // Footer
    footer: {
      tagline: 'Mentoria de carreira executiva para profissionais ambiciosos navegando Big Tech.',
      navigation: 'Navegação',
      connect: 'Conectar',
      email: 'Email',
      rights: 'Yasmin Lemke',
      tagline2: 'Barcelona, Espanha',
    },
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('language');
      if (saved && ['en', 'es', 'pt'].includes(saved)) return saved;
    }
    return 'en'; // Default to English
  });

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
