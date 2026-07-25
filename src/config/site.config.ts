export type SiteMode = 'live' | 'coming-soon';

export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export interface ServiceItem {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  image: string;
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface SiteConfig {
  mode: SiteMode;
  brand: {
    name: string;
    tagline: string;
    logoText: string;
    logo: string;
  };
  comingSoon: {
    title: string;
    subtitle: string;
    description: string;
    launchDate: string;
    emailPlaceholder: string;
    socials: { label: string; href: string; icon: string }[];
  };
  nav: NavLink[];
  home: {
    hero: {
      eyebrow: string;
      title: string;
      subHeading: string;
      paragraphs: string[];
      primaryCta: { label: string; path: string };
      secondaryCta: { label: string; path: string };
      image: string;
    };
    cta: {
      title: string;
      description: string;
      buttons: { label: string; path: string }[];
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    mission: {
      title: string;
      paragraphs: string[];
    };
    vision: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      items: ValueItem[];
    };
  };
  whyChoose: {
    eyebrow: string;
    title: string;
    employer: {
      title: string;
      description: string;
      benefits: string[];
    };
    candidate: {
      title: string;
      description: string;
      benefits: string[];
    };
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
    sectors: {
      title: string;
      description: string;
      list: string[];
    };
  };
  employers: {
    eyebrow: string;
    title: string;
    compliance: {
      title: string;
      description: string;
      list: string[];
    };
    process: {
      title: string;
      steps: { step: string; title: string; description: string }[];
    };
  };
  candidates: {
    eyebrow: string;
    title: string;
    faqs: { question: string; answer: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    hours: string;
    outOfHours: string;
    image: string;
  };
  footer: {
    quickLinks: NavLink[];
    services: NavLink[];
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  mode: 'live',
  brand: {
    name: 'Klim Care Limited',
    tagline: 'Delivering Exceptional Healthcare Professionals Across the England.',
    logoText: 'Klimcare',
    logo: '/klimlogo.jpg',
  },
  comingSoon: {
    title: 'Something Caring is Coming',
    subtitle: 'Klimcare',
    description:
      "We're crafting a new home for compassionate, professional nursing and care staffing. Our team is putting the finishing touches on a platform built around dignity, excellence, and trust.",
    launchDate: '2026-07-02T09:00:00',
    emailPlaceholder: 'Enter your email for launch updates',
    socials: [
      { label: 'Facebook', href: '#', icon: 'facebook' },
      { label: 'Twitter', href: '#', icon: 'twitter' },
      { label: 'Instagram', href: '#', icon: 'instagram' },
      { label: 'LinkedIn', href: '#', icon: 'linkedin' },
    ],
  },
  nav: [
    { label: 'Home', path: '/' },
    {
      label: 'About',
      path: '/about',
      children: [
        { label: 'About Klim Care', path: '/about' },
        { label: 'Why Choose Klim Care', path: '/why-choose' },
      ],
    },
    { label: 'Our Services', path: '/services' },
    { label: 'Employers', path: '/employers' },
    { label: 'Candidates', path: '/candidates' },
    { label: 'Contact', path: '/contact' },
  ],
  home: {
    hero: {
      eyebrow: 'Healthcare Recruitment',
      title: 'Healthcare Recruitment Built on Trust, Compassion and Excellence',
      subHeading: 'Connecting Exceptional Healthcare Professionals with Organisations That Care',
      paragraphs: [
        'At Klim Care Limited, we understand that outstanding healthcare begins with exceptional people. Every healthcare organisation relies on skilled, compassionate, and dependable professionals to deliver safe, high-quality care. Our mission is to bridge the gap between talented healthcare professionals and organisations that are committed to making a positive difference in people\'s lives.',
        'We are a specialist healthcare recruitment and staffing agency dedicated to supporting NHS trusts, private hospitals, nursing homes, residential care homes, supported living providers, and Live in Care across England.',
        'Whether you require emergency Short term or Long Term staffing support, workforce planning solutions, Klim Care Limited provides reliable recruitment services tailored to your organisation\'s unique requirements.',
        'For healthcare professionals, we offer rewarding career opportunities, flexible working arrangements, competitive pay, ongoing support, and placements with respected healthcare providers where your skills and compassion can make a genuine impact.',
        'At Klim Care Limited, we don\'t simply recruit people—we build lasting partnerships founded on professionalism, integrity, trust, and a shared commitment to delivering exceptional care.'
      ],
      primaryCta: { label: 'Request Staff', path: '/employers' },
      secondaryCta: { label: 'Find Healthcare Jobs', path: '/candidates' },
      image: '/hero.png',
    },
    cta: {
      title: 'Ready to Strengthen Your Healthcare Workforce?',
      description: 'Whether you are looking to recruit exceptional healthcare professionals or take the next step in your healthcare career, Klim Care Limited is here to help. Partner with Klim Care Limited today and discover a recruitment service built on trust, quality, and long-term success.',
      buttons: [
        { label: 'Request Staff', path: '/contact' },
        { label: 'Find Healthcare Jobs', path: '/contact' },
        { label: 'Speak to a Recruitment Consultant', path: '/contact' }
      ]
    }
  },
  about: {
    eyebrow: 'About Klim Care',
    title: 'Delivering Exceptional Care through Exceptional People',
    paragraphs: [
      'Klim Care Limited stands as a beacon of excellence in the nursing agency landscape, founded on the bedrock of extensive knowledge and experience within the healthcare sector. We meticulously match skilled professionals to the settings where they thrive, bridging the ever-widening chasm between the available pool of professionals and the escalating demand for healthcare services in our communities.',
      'We place a premium on preserving absolute flexibility in service delivery, ensuring that our clients retain unequivocal control over the timing and manner in which services are administered. Our modus operandi is underpinned by the unwavering principle of meticulously matching the right candidate to the right job.'
    ],
    image: '/about.png',
    mission: {
      title: 'Our Mission',
      paragraphs: [
        'To improve healthcare outcomes by connecting compassionate, highly skilled healthcare professionals with organisations that are committed to delivering safe, person-centred, and outstanding care.',
        'We strive to become a trusted recruitment partner by providing reliable staffing solutions, maintaining the highest standards of compliance, and supporting healthcare professionals throughout every stage of their careers.'
      ]
    },
    vision: {
      title: 'Our Vision',
      description: 'To become one of the United Kingdom\'s most respected healthcare recruitment agencies, recognised for quality, innovation, transparency, and our commitment to improving the lives of patients, healthcare professionals, and care providers.'
    },
    values: {
      title: 'Our Core Values',
      items: [
        {
          title: 'Compassion',
          description: 'We understand that healthcare is about people. Every recruitment decision we make is guided by empathy, respect, and a genuine desire to improve lives.',
          icon: 'heart'
        },
        {
          title: 'Integrity',
          description: 'Honesty, transparency, and ethical recruitment practices form the foundation of everything we do.',
          icon: 'shield-check'
        },
        {
          title: 'Excellence',
          description: 'We continually strive for excellence by delivering high-quality recruitment services and connecting organisations with exceptional professionals.',
          icon: 'award'
        },
        {
          title: 'Accountability',
          description: 'We take ownership of every placement, ensuring both our clients and candidates receive professional support from initial contact through to successful placement.',
          icon: 'target'
        },
        {
          title: 'Partnership',
          description: 'We believe successful recruitment is built on long-term relationships rather than short-term transactions.',
          icon: 'users'
        }
      ]
    }
  },
  whyChoose: {
    eyebrow: 'Why Choose Klim Care',
    title: 'Why Choose Klim Care Limited',
    employer: {
      title: 'Why Employer Choose Klim Care Limited',
      description: 'Healthcare recruitment requires more than simply matching a CV to a vacancy. It requires an understanding of clinical environments, workforce challenges, compliance standards, and the human qualities that define exceptional care. Our recruitment specialists take time to understand the culture, objectives, and staffing needs of every client while also recognising the career aspirations, skills, and values of each candidate. This consultative approach allows us to deliver recruitment solutions that benefit employers, healthcare professionals, and ultimately the individuals receiving care.',
      benefits: [
        'Dedicated Recruitment Consultants',
        'Fast Response Times',
        '24/7 Staffing Support',
        'Fully Compliant Healthcare Professionals',
        'Rigorous Candidate Screening',
        'Flexible Staffing Solutions',
        'Transparent Communication',
        'Long-Term Workforce Partnerships',
        'Ongoing Candidate Support'
      ]
    },
    candidate: {
      title: 'Why Healthcare Professionals Choose Klim Care',
      description: 'Healthcare professionals deserve more than simply being placed into vacancies. At Klim Care Limited, we invest in building meaningful careers by understanding your goals, recognising your strengths, and supporting your professional development. Whether you are looking for flexible shifts, permanent employment, career progression, or a better work-life balance, our recruitment consultants work closely with you to identify opportunities that align with your ambitions.',
      benefits: [
        'Competitive rates',
        'Flexible working options',
        'Permanent career opportunities',
        'Professional guidance',
        'Friendly recruitment consultants',
        'Fast registration',
        'Ongoing support',
        'Career progression',
        'Access to leading healthcare employers'
      ]
    }
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Our Healthcare Recruitment Services',
    description: 'Healthcare demand can change rapidly. Staff sickness, annual leave, increased patient admissions, and unexpected service pressures often require immediate workforce support. Our temporary staffing solutions provide qualified healthcare professionals at short notice, helping organisations maintain continuity of care while meeting operational demands.',
    items: [
      {
        slug: 'healthcare-assistant',
        title: 'Healthcare Assistant',
        short: 'Providing essential daily care and patient support.',
        description: 'Healthcare Assistants (HCAs) play a critical role in supporting clinical staff and ensuring patient comfort. They assist with daily living tasks, personal hygiene, mobility support, and basic monitoring of patient conditions under clinical supervision, bringing empathy and dedication to every shift.',
        icon: 'heart',
        image: 'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        slug: 'senior-healthcare-assistant',
        title: 'Senior Healthcare Assistant',
        short: 'Supervising care teams and supporting complex client needs.',
        description: 'Senior Healthcare Assistants (SHCAs) combine clinical skill with leadership. They are responsible for implementing care plans, administering medication under supervision, assisting with complex client needs, and overseeing junior care staff, ensuring high standards of safety and compliance.',
        icon: 'stethoscope',
        image: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ],
    sectors: {
      title: 'Sectors We Support',
      description: 'Our recruitment expertise spans a wide range of healthcare environments, including:',
      list: [
        'NHS Services',
        'Private Hospitals',
        'Residential Care Homes',
        'Nursing Homes',
        'Supported Living Services',
        'Live in Care Services'
      ]
    }
  },
  employers: {
    eyebrow: 'For Employers',
    title: 'Healthcare Staffing Built on Trust and Reliability',
    compliance: {
      title: 'Our Commitment to Quality & Compliance',
      description: 'Patient safety remains our highest priority. Every healthcare professional introduced by Klim Care Limited undergoes a rigorous compliance process designed to meet the highest industry standards.',
      list: [
        'Comprehensive recruitment procedures',
        'Right to Work verification',
        'Professional registration checks',
        'Employment reference verification',
        'Enhanced DBS checks',
        'Mandatory training verification',
        'Safeguarding awareness',
        'Clinical governance support',
        'Continuous compliance monitoring'
      ]
    },
    process: {
      title: 'Our Recruitment Process',
      steps: [
        {
          step: 'Step 1',
          title: 'Understanding Your Requirements',
          description: 'We begin by taking the time to understand your organisation, staffing challenges, workplace culture, and recruitment objectives.'
        },
        {
          step: 'Step 2',
          title: 'Candidate Attraction',
          description: 'Using our extensive talent network and targeted recruitment strategies, we identify professionals whose experience, qualifications, and values align with your needs. Rather than filling vacancies quickly, we focus on placing professionals who will contribute positively to your organisation over the long term.'
        },
        {
          step: 'Step 3',
          title: 'Comprehensive Screening',
          description: 'Every applicant undergoes a thorough recruitment process, including: Identity verification, Right to Work checks, Professional registration verification, Employment history review, Reference checks, Mandatory training verification, Enhanced DBS checks (where applicable), Skills assessment, and compliance documentation.'
        },
        {
          step: 'Step 4',
          title: 'Ongoing Support',
          description: 'Our relationship continues after placement through regular communication, feedback, and ongoing recruitment support.'
        }
      ]
    }
  },
  candidates: {
    eyebrow: 'For Candidates',
    title: 'Build a Fulfilling Career in Healthcare',
    faqs: [
      {
        question: 'What healthcare roles do you recruit for?',
        answer: 'We recruit Healthcare Assistants, Support Workers, Live in carers and Nurses'
      },
      {
        question: 'Do you provide long term recruitment?',
        answer: 'Yes. We offer long term recruitment solutions tailored to the needs of healthcare providers across the UK/England.'
      },
      {
        question: 'Are all candidates’ compliance checked?',
        answer: 'Yes. Every candidate undergoes a comprehensive recruitment and compliance process, including identity verification, right-to-work checks, reference verification, and other role-specific checks before placement.'
      }
    ]
  },
  contact: {
    eyebrow: 'Contact Us',
    title: 'Get in touch with us',
    description: 'Whether you\'re a healthcare facility seeking reliable staffing or a family looking for compassionate care, our team is ready to help you find the perfect match.',
    email: 'info@klimcare.co.uk',
    phone: '+44 01618706799',
    address: '5 Bankfield Road Sale M33 5QD UK',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
    outOfHours: 'Urgent staffing requests: Available 24/7',
    image: 'https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  footer: {
    quickLinks: [
      { label: 'Home', path: '/' },
      { label: 'About Klim Care', path: '/about' },
      { label: 'Why Choose Klim Care', path: '/why-choose' },
      { label: 'Our Services', path: '/services' },
      { label: 'Employers', path: '/employers' },
      { label: 'Candidates', path: '/candidates' },
      { label: 'Contact', path: '/contact' },
    ],
    services: [
      { label: 'Healthcare Assistant', path: '/services/healthcare-assistant' },
      { label: 'Senior Healthcare Assistant', path: '/services/senior-healthcare-assistant' },
    ],
    description: 'Klim Care Limited — Delivering Exceptional Healthcare Professionals Across the England. Built on Trust, Compassion and Excellence.',
  },
};
