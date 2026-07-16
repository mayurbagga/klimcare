export type SiteMode = 'live' | 'coming-soon';

export interface NavLink {
  label: string;
  path: string;
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
      highlight: string;
      description: string;
      primaryCta: { label: string; path: string };
      secondaryCta: { label: string; path: string };
      image: string;
    };
    aboutPreview: {
      eyebrow: string;
      title: string;
      paragraphs: string[];
      image: string;
      cta: { label: string; path: string };
    };
    servicesPreview: {
      eyebrow: string;
      title: string;
      description: string;
      cta: { label: string; path: string };
    };
    stats: StatItem[];
    testimonials: {
      eyebrow: string;
      title: string;
      items: Testimonial[];
    };
    cta: {
      title: string;
      description: string;
      button: { label: string; path: string };
      image: string;
    };
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    stats: StatItem[];
    philosophy: {
      title: string;
      paragraphs: string[];
      image: string;
    };
  };
  mission: {
    eyebrow: string;
    title: string;
    intro: string;
    paragraphs: string[];
    image: string;
    pillars: { title: string; description: string; icon: string }[];
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    items: ValueItem[];
    image: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
  staff: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    image: string;
    stats: StatItem[];
    roles: { title: string; description: string; icon: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
    hours: string;
    image: string;
  };
  footer: {
    quickLinks: NavLink[];
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  mode: 'live',
  // mode: 'live',
  brand: {
    name: 'Klimcare',
    tagline: 'Compassion. Excellence. Care.',
    logoText: 'Klimcare',
    logo: '/klimlogo.jpeg',
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
    { label: 'About', path: '/about' },
    { label: 'Mission', path: '/mission' },
    { label: 'Values', path: '/values' },
    { label: 'Services', path: '/services' },
    { label: 'Our Staff', path: '/staff' },
    { label: 'Contact', path: '/contact' },
  ],
  home: {
    hero: {
      eyebrow: 'Nursing & Care Agency',
      title: 'Compassionate care,',
      highlight: 'exceptional people',
      description:
        'Klimcare Limited stands as a beacon of excellence in the nursing agency landscape, founded on the bedrock of extensive knowledge and experience. We meticulously match skilled professionals to the settings where they thrive.',
      primaryCta: { label: 'Get in Touch', path: '/contact' },
      secondaryCta: { label: 'Our Services', path: '/services' },
      image: '/hero.png',
    },
    aboutPreview: {
      eyebrow: 'Why Klimcare?',
      title: 'A thorough, multifaceted screening process',
      paragraphs: [
        'Our screening process is thorough and multifaceted, encompassing comprehensive assessments of skills, qualifications, and background checks. We leave no stone unturned in verifying the capabilities and credentials of our candidates.',
        'We recognize the critical importance of investing in the proficiency and experience of our nursing staff. Beyond medical skills, we prioritize an environment that nurtures exceptional customer service and compassionate care.',
      ],
      image: '/about.png',
      cta: { label: 'Learn More About Us', path: '/about' },
    },
    servicesPreview: {
      eyebrow: 'Our Services',
      title: 'Tailored staffing for every care setting',
      description:
        'We adopt a personalized approach to staffing, meticulously matching our staff with the specific needs and preferences of each client — whether hospital, nursing home, or home care.',
      cta: { label: 'Explore All Services', path: '/services' },
    },
    stats: [
      { label: 'Years of Experience', value: 12, suffix: '+', icon: 'award' },
      { label: 'Happy Customers', value: 850, suffix: '+', icon: 'heart' },
      { label: 'Qualified Staff', value: 120, suffix: '+', icon: 'users' },
      { label: 'Services Completed', value: 3200, suffix: '+', icon: 'check-circle' },
    ],
    testimonials: {
      eyebrow: 'Testimonials',
      title: 'Trusted by clients and families',
      items: [
        {
          quote:
            "Amazing staff and brilliant management. The carers are all incredible — this is the best company I've ever been with. They are really great at what they do, so professional and caring.",
          author: 'Sarah M.',
          role: 'Family Client',
        },
        {
          quote:
            "Klimcare provides an outstanding live-in service. We previously tried home care with another company, but it didn't work out. Klimcare implemented a live-in care package which has been superb and far more cost-effective for us.",
          author: 'James T.',
          role: 'Client',
        },
        {
          quote:
            'The team is definitely made for this job. Overall, a fantastic company throughout — professional, responsive, and genuinely caring at every step.',
          author: 'Priya K.',
          role: 'Healthcare Manager',
        },
      ],
    },
    cta: {
      title: 'Ready to find the right care?',
      description:
        "Whether you're a healthcare facility seeking reliable staffing or a family looking for compassionate care, our team is ready to help you find the perfect match.",
      button: { label: 'Contact Us Today', path: '/contact' },
      image: '/hero.png',
    },
  },
  about: {
    eyebrow: 'About Us',
    title: 'A beacon of excellence in nursing agency care',
    paragraphs: [
      'Klimcare Limited stands as a beacon of excellence in the nursing agency landscape, founded in 2023 on the bedrock of extensive knowledge and experience within the healthcare sector. With cumulative experience garnered from reputable institutions such as the NHS, Private Hospitals, and Nursing and Care Homes, our team brings a wealth of expertise to cater to the multifaceted needs of our discerning clients.',
      'Against the backdrop of a persistent shortage of nursing and healthcare workers identified on the government job shortage list, our agency is resolutely committed to delivering flexible and cost-effective nursing care solutions. We keenly acknowledge the imperative to bridge the ever-widening chasm between the available pool of professionals and the escalating demand for healthcare services in our communities.',
    ],
    image: '/about.png',
    stats: [
      { label: 'Years of Experience', value: 12, suffix: '+', icon: 'award' },
      { label: 'Happy Customers', value: 850, suffix: '+', icon: 'heart' },
      { label: 'Qualified Staff', value: 120, suffix: '+', icon: 'users' },
      { label: 'Services Completed', value: 3200, suffix: '+', icon: 'check-circle' },
    ],
    philosophy: {
      title: 'Our guiding philosophy',
      paragraphs: [
        'At Klimcare Limited, we place a premium on preserving absolute flexibility in service delivery, all while ensuring that our clients retain unequivocal control over the timing and manner in which services are administered.',
        'Our modus operandi is underpinned by the unwavering principle of meticulously matching the right candidate to the right job. Whether delivering care within the sanctity of clients homes, within a nursing facility, or amidst the rigors of a hospital setting, we are steadfast in our commitment to orchestrating seamless matches that leave both parties equally gratified.',
        'By steadfastly adhering to this guiding philosophy, we endeavor to cultivate a symbiotic relationship characterized by mutual satisfaction and trust between our esteemed clients and the dedicated healthcare professionals within our network.',
      ],
      image:
        'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
  },
  mission: {
    eyebrow: 'Our Mission',
    title: 'Enhancing quality of life, one placement at a time',
    intro:
      'Our mission encapsulates a profound commitment to enhancing the quality of life for individuals requiring care and support, while simultaneously providing healthcare facilities with a reliable staffing solution.',
    paragraphs: [
      'Our mission is underpinned by a simple yet profound ethos: to foster a community where dignity, compassion, and excellence are paramount. We are dedicated to creating an environment characterized by warmth, respect, and empowerment, both for our clients and our staff.',
      'For our clients, we strive to provide a level of care that not only meets their immediate needs but also enhances their overall well-being and quality of life. We recognize the importance of preserving their dignity and autonomy, and we tailor our services to promote independence and comfort while delivering compassionate support.',
      'Additionally, we view our staff as integral partners in fulfilling our mission. We are committed to cultivating a work environment that fosters professional growth, personal fulfillment, and a sense of belonging. By prioritizing the well-being and development of our staff, we empower them to deliver care with excellence and compassion.',
    ],
    image: '/mission.png',
    pillars: [
      { title: 'Dignity', description: 'Preserving autonomy and respect in every interaction.', icon: 'heart' },
      { title: 'Compassion', description: 'Warmth and empathy at the heart of our care.', icon: 'sparkles' },
      { title: 'Excellence', description: 'Exceeding expectations in everything we do.', icon: 'award' },
      { title: 'Empowerment', description: 'Fostering growth for staff and clients alike.', icon: 'users' },
    ],
  },
  values: {
    eyebrow: 'Our Values',
    title: 'The principles that guide everything we do',
    description:
      'Our foundation is built upon a robust set of core values that shape our culture and define the standards by which we deliver our services.',
    items: [
      {
        title: 'Compassion',
        description:
          'We approach every interaction with empathy, kindness, and genuine concern for the well-being of those in our care.',
        icon: 'heart',
      },
      {
        title: 'Professionalism',
        description:
          'We uphold the highest standards of conduct, expertise, and accountability in every aspect of our work.',
        icon: 'award',
      },
      {
        title: 'Innovation',
        description:
          'We embrace new ideas and approaches to continuously improve the quality and efficiency of care we deliver.',
        icon: 'sparkles',
      },
      {
        title: 'Integrity',
        description:
          'We act with honesty, transparency, and unwavering ethical standards in all our relationships.',
        icon: 'shield-check',
      },
      {
        title: 'Diversity & Inclusion',
        description:
          'We celebrate differences and create an environment where everyone is valued, respected, and empowered.',
        icon: 'users',
      },
      {
        title: 'Excellence',
        description:
          'We pursue continuous improvement and hold ourselves to the highest standards in everything we do.',
        icon: 'target',
      },
    ],
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  services: {
    eyebrow: 'Our Services',
    title: 'Comprehensive healthcare staffing solutions',
    description:
      'At Klimcare Limited, our aspiration is to establish ourselves as the foremost Nursing Agency in London by adhering to an unwavering commitment to excellence. Our services are meticulously crafted to cater comprehensively to the diverse and evolving needs of our esteemed clientele.',
    items: [
      {
        slug: 'tailored-staffing',
        title: 'Tailored Staffing Solutions',
        short: 'Personalized staffing matched to your facility unique needs.',
        description:
          'We understand that every healthcare facility has unique requirements and challenges. We adopt a personalized approach to staffing, meticulously matching our staff with the specific needs and preferences of each client. Whether it is a hospital, nursing home, or home care setting, our tailored staffing solutions ensure seamless integration and optimal performance within your organization.',
        icon: 'user-cog',
        image:
          'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        slug: 'qualified-staff',
        title: 'Highly Qualified Staff',
        short: 'Registered Nurses and HCAs handpicked for excellence.',
        description:
          'At Klimcare Limited, we take immense pride in the caliber of our personnel. We adhere to stringent selection criteria, handpicking Registered Nurses and Healthcare Assistants who not only demonstrate exceptional clinical competence but also exhibit a compassionate demeanor and an unwavering commitment to patient care. Our commitment to quality extends beyond mere qualifications to encompass a holistic assessment of character and dedication.',
        icon: 'stethoscope',
        image:
          'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        slug: 'comprehensive-training',
        title: 'Comprehensive Training',
        short: 'Rigorous training to keep staff at the forefront of care.',
        description:
          'Our staff undergo rigorous training and continuous professional development to stay abreast of the latest advancements in healthcare practices. This ensures they are equipped with the knowledge and skills necessary to deliver superior care. Whether administering medical treatments, providing emotional support, or assisting with daily activities, our team approaches each task with diligence and empathy.',
        icon: 'graduation-cap',
        image:
          'https://images.pexels.com/photos/3934683/pexels-photo-3934683.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        slug: 'live-in-care',
        title: 'Live-In Care Packages',
        short: 'Cost-effective, superb live-in care at home.',
        description:
          'Klimcare provides an outstanding live-in service. We implement live-in care packages tailored to individual needs, delivering comfort and continuity at home. Our live-in care has proven superb and far more cost-effective for our clients compared to traditional home care alternatives.',
        icon: 'home',
        image:
          'https://images.pexels.com/photos/3933251/pexels-photo-3933251.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      // {
      //   slug: 'client-feedback',
      //   title: 'Client Feedback Loop',
      //   short: 'Listening and acting to continuously elevate care.',
      //   description:
      //     'Client feedback is a cornerstone of our continuous improvement efforts. We consider every piece of feedback invaluable, as it provides insights into areas where we can enhance our services. We have established mechanisms to attentively listen to all feedback and ensure it is duly acted upon, driving us toward excellence in all aspects of our operations.',
      //   icon: 'message-circle',
      //   image:
      //     'https://images.pexels.com/photos/262492/pexels-photo-262492.jpeg?auto=compress&cs=tinysrgb&w=800',
      // },
      {
        slug: 'round-the-clock',
        title: 'Available 24/7',
        short: 'Round-the-clock coordination and reliable coverage.',
        description:
          'We provide round-the-clock coordination and support, ensuring reliable coverage and peace of mind for clients and facilities alike. Our swift response times and efficient enrolment process mean you get the care you need, when you need it, without compromise.',
        icon: 'clock',
        image:
          'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  },
  staff: {
    eyebrow: 'Our Staff',
    title: 'The heart of our organization',
    paragraphs: [
      'At Klimcare Limited, we attribute our success to the exceptional dedication and compassion of our staff, who form the very heart of our organization. Committed to delivering the highest standard of care to individuals in need, our team comprises highly trained nurses, compassionate assistants, and dedicated support personnel.',
      'We take immense pride in the caliber and professionalism of our staff members, each of whom brings a wealth of experience and genuine care to their interactions with clients. Their unwavering commitment to excellence ensures that every individual receives personalized and compassionate care that exceeds expectations.',
      'Our staff undergo rigorous training and continuous professional development to stay abreast of the latest advancements in healthcare practices, ensuring that they are equipped with the knowledge and skills necessary to deliver superior care. At Klimcare Limited, our staff members are not just employees; they are valued members of our family who embody our core values of integrity, compassion, and excellence.',
    ],
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200',
    stats: [
      { label: 'Years of Experience', value: 12, suffix: '+', icon: 'award' },
      { label: 'Happy Customers', value: 850, suffix: '+', icon: 'heart' },
      { label: 'Qualified Staff', value: 120, suffix: '+', icon: 'users' },
      { label: 'Services Completed', value: 3200, suffix: '+', icon: 'check-circle' },
    ],
    roles: [
      { title: 'Registered Nurses', description: 'Highly trained clinical professionals with exceptional competence and compassionate care.', icon: 'stethoscope' },
      { title: 'Healthcare Assistants', description: 'Dedicated support staff providing compassionate daily care and assistance.', icon: 'heart' },
      { title: 'Support Personnel', description: 'Committed team members ensuring seamless service delivery and coordination.', icon: 'users' },
      { title: 'Care Coordinators', description: 'Experienced coordinators matching the right professional to every setting.', icon: 'clipboard' },
    ],
  },
  contact: {
    eyebrow: 'Contact Us',
    title: 'Get in touch with us',
    description:
      "Whether you're a healthcare facility seeking reliable staffing or a family looking for compassionate care, our team is ready to help you find the perfect match.",
    email: 'info@klimcare.co.uk',
    phone: '',
    address: '5 Bankfield Road Sale M33 5QD UK',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
    image:
      'https://images.pexels.com/photos/7551622/pexels-photo-7551622.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  footer: {
    quickLinks: [
      { label: 'Home', path: '/' },
      { label: 'About', path: '/about' },
      { label: 'Mission', path: '/mission' },
      { label: 'Values', path: '/values' },
      { label: 'Services', path: '/services' },
      { label: 'Our Staff', path: '/staff' },
      { label: 'Contact', path: '/contact' },
    ],
    description:
      'Klimcare Limited — a beacon of excellence in the nursing agency landscape, delivering compassionate, professional care since 2023.',
  },
};
