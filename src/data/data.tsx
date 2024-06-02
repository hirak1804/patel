import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Asiel Montes Portfolio',
  description: "A portfolio website for Asiel Montes, full stack software developer in Tampa",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Asiel Montes.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Florida based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        on <strong className="text-stone-100"><a href="https://codemento.com" rel="author" target="_blank">Codemento.com</a></strong> to help software developers find, save and share solutions to code problems.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I also offer <strong className="text-stone-100">custom website development</strong> for individuals and businesses,
        because I believe everyone can benefit from a professional online presence that highlights <strong className="text-stone-100">what you have to offer</strong> to the world. If that sounds like something worth exploring, feel free to <strong className="text-stone-100">contact me</strong> below.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: [
    {
      text: `I first fell in love with computer programming in 2017 after discovering Ruby and realizing I could 'talk to the machine' with written code. Through a combination of self-study and a coding bootcamp, I became a professional developer in 2019, and I continue to program to this day.`
    },
    {
      text: `In terms of front-end development, my areas of expertise include using technologies like React, Angular and Typescript to create optimized, professional-looking websites and applications. On the back-end, I have experience building RESTful API's using server side frameworks like .NET and Node.js, as well as using cloud services like Firebase.`
    }
  ],
  aboutItems: [
    {label: 'Location', text: 'Tampa, FL', Icon: MapIcon},
    {label: 'Nationality', text: 'Cuban / American', Icon: FlagIcon},
    {label: 'Interests', text: 'Artificial Intelligence, Cryptocurrency, Science Fiction, Anime, Travel', Icon: SparklesIcon},
    {label: 'Study', text: 'Universidad de La Habana', Icon: AcademicCapIcon}
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'French',
        level: 6,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 8,
      },
      {
        name: 'Typescript',
        level: 6,
      },
      {
        name: 'Angular',
        level: 7,
      },
      {
        name: 'Angular Material',
        level: 6,
      },
      {
        name: 'BlueprintJS',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: '.NET',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'MySQL',
        level: 2,
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Firebase',
        level: 7,
      },
      {
        name: 'Git',
        level: 8,
      },
      {
        name: 'Docker',
        level: 3,
      }
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Codemento',
    description: 'The best way to find, save and share code solutions. Built using React, Typescript and BlueprintJS on the front-end, with an Express.js back-end created on top of Firebase Functions. API integrations provide Web Search and AI chat capabilities.',
    url: 'https://codemento.com',
    image: porfolioImage1,
  },
  {
    title: 'Ace Medical & Rehab',
    description: 'Booking website for Ace Medical & Rehab Clinic. Uses React and PrimeReact for a responsive and intuitive UI. Includes API integrations with YouCanBook.me and EmailJS for online reservations and email communications. Hosted on Firebase.',
    url: 'https://acemedicalrehab.com',
    image: porfolioImage2,
  },
  {
    title: 'Crown Clothing',
    description: 'A sample e-commerce store. Uses React and Redux for UI and state management. Connects to Firestore Database for storage, and uses Stripe Checkout for mock-up payment functionality. Deployed on Vercel.',
    url: 'https://crwn-clothing-silk.vercel.app',
    image: porfolioImage3,
  },
  {
    title: 'Mole',
    description: 'A simple whack-a-mole game. Nothing but React and CSS. Hosted on Firebase.',
    url: 'https://hakxel-mole.firebaseapp.com',
    image: porfolioImage4,
  }
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: 'February 2019',
    location: 'Wyncode Academy',
    title: 'Full Stack Web Developer',
    content: <p>Main Subjects: HTML, CSS, Javascript, Express.js, Ruby, Ruby on Rails.</p>
  },
  {
    date: 'July 2014',
    location: 'Universidad de La Habana',
    title: 'B.A. in French Language',
    content: <p>Mains Subjects: French Translation and Interpretation, Linguistics, History and Literature.</p>
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2021 - February 2024',
    location: 'CentralSquare Technologies',
    title: 'Software Developer II',
    content: (
      <ul className='list-disc pl-5 space-y-2'>
        <li>
          <strong>Introduced and enhanced multiple features</strong> through database schema modifications, business logic
          updates, UI modifications, etc., improving user experience by streamlining financial transactions while
          maintaining data integrity and reliability for a cash receipts processing solution.
        </li>
        <li>
          <strong>Improved system access management and security</strong> by integrating in-house identity providers with
          Azure Active Directory.
        </li>
        <li>
          <strong>Maintained and upgraded internal libraries</strong>, ensuring compatibility and
          performance improvements across all library packages.
        </li>
        <li>
          <strong>Led the design and implementation of automated UI testing</strong>, improving software reliability by
          reducing the need for manual quality assurance processes.
        </li>
      </ul>
    ),
  },
  {
    date: 'July 2019 - June 2021',
    location: 'CentralSquare Technologies',
    title: 'Software Developer',
    content: (
      <ul className='list-disc pl-5 space-y-2'>
        <li>
          <strong>Pioneered the front-end development of a user records maintenance project</strong> using Angular and
            Material UI, significantly improving data management capabilities for users.
        </li>
        <li>
          <strong>Introduced state management in Angular projects</strong> by implementing the NGXS library, leading to
            more efficient and manageable state handling, enhancing application stability and developer
            productivity.
        </li>
        <li>
          <strong>Orchestrated and maintained Azure build and release pipelines</strong> for development and QA
            environments, optimizing the CI/CD process and ensuring timely and secure software deployments.
        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: []
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: "Want to work with me? Send me a quick note with your details and the type of work you have in mind and I'll be happy to contact you.",
  items: [],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hakxel'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/asiel-montes/'}
];
