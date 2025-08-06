import{
 
  college,
  logo,
  CodingNinja,
  Axios
} from "../assets";




export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Education',
    href: '#work',
  },
  {
    id: 4,
    name: 'Projects', 
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];


export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'InterviewBuddy - AI Interview Platform',
    desc: 'AI-powered mock interview platform with personalized question generation and real-time feedback.',
    subdesc:
      'Built with React, TypeScript, Clerk, Firebase, and Google Generative AI, it delivers smooth interview simulations through polished UI components, Spline 3D accents, and robust safety filters. Achieves sub-300ms median latency with Gemini-2.0-flash integration and exponential backoff handling.',
    href: 'https://interview-buddy-nu.vercel.app/',
    texture: '/textures/project/Project_1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imagify - Text to Image generation Application',
    desc: 'Full-stack SaaS platform for image transformation and monetization.',
    subdesc:
      'Built using Node.js, MongoDB, and the Clipdrop API, with payment processing via Stripe and Razorpay. Users can clean, relight, or upscale images and sell them through a secure dashboard. Optimizations reduced image processing time by 20% and checkout drop-offs by 15%, ensuring a smooth and monetizable workflow.',
    href: 'https://imagify-frontend-beta.vercel.app/',
    texture: '/textures/project/Project_2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'UrbanNest – Apartments Booking Website',
    desc: 'A modern and responsive apartment listing platform that allows users to explore, filter, and book rental properties with ease.',
    subdesc:
      'Built using React and Tailwind CSS, the site features location-based search, property filtering, image galleries, and inquiry forms. Designed with a mobile-first approach, it ensures smooth navigation and fast load times, making apartment hunting intuitive and efficient.',
    href: 'https://apartments-azara.netlify.app/',
    texture: '/textures/project/Project_3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Dice Betting Game',
    desc: 'A Web3-based real-time betting game with 3D dice rolls, provably fair outcomes, and immersive user interaction.',
    subdesc:
      'Built using React, Next.js, Web3.js, and React Three Fiber for rich 3D visuals and smooth animations. Each game uses a SHA-256 algorithm to ensure fairness and transparency. Backend handles 500+ simultaneous users, ensures sub-150ms betting response times, and scores 95+ in Lighthouse performance audits.',
    href: 'https://the-dice-game-1.netlify.app/',
    texture: '/textures/project/Project_4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CodePilot – Code Review Platform',
    desc: 'A fast and user-friendly AI-driven code review platform that gives instant feedback, suggestions, and improvements for code snippets',
    subdesc:
      ' Features a React + Vite frontend with Prism.js-powered dark-themed editor, and an Express backend hosted on Render. The system supports 1,000+ concurrent users with sub-120ms API response and 50ms code analysis times. Enables developers to identify bugs, optimize logic, and follow best practices instantly.',
    href: 'https://codepilot-1-gzwc.onrender.com/',
    texture: '/textures/project/Project_5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};



export const workExperiences = [
  {
    id: 1,
    name: 'Axios',
    pos: 'Management Lead',
    duration: '2024 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];


export const experiences = [
  {
    title: "Management Lead",
    company_name: "Axios",
    icon: Axios,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      



      "Team Leadership & Coordination: Oversee and coordinate various teams within the club, ensuring smooth communication and alignment toward common goals.",
      "Project Management: Manage ongoing projects, setting timelines, assigning tasks, and ensuring project milestones are met efficiently.",
      "Event Organization: Lead the planning and execution of workshops, hackathons, and tech events that encourage learning and collaboration.",
      
    ],
  },
  {
    title: "Web Developer",
    company_name: "IIIT Bhopal",
    icon: college,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Oct 2023",
    points: [
      



      "Frontend Development: Designed and implemented the user interface for the Training and Placement section, ensuring a visually appealing and user-friendly experience.",
      "Responsive Design: Developed a responsive layout compatible with various devices, providing seamless access for both students and recruiters.",
      "User Experience Optimization: Enhanced user experience by simplifying navigation, allowing users to easily find information on placement statistics, recruiters, and training resources.",
      "Data Integration: Integrated key data such as placement records, student profiles, and recruiter information to present up-to-date and relevant content.",
    ],
  },
  {
    title: "Campus Ambassador",
    company_name: "Coding Ninjas",
    icon: CodingNinja,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      



      "Promoting Coding Ninjas Programs: Actively promoted Coding Ninjas courses, workshops, and events to fellow students, increasing awareness of learning opportunities.",
      "Community Building: Fostered a coding culture on campus by organizing meet-ups, study groups, and coding challenges, encouraging students to enhance their programming skills.",
      "Event Coordination: Organized and coordinated coding workshops and webinars, facilitating hands-on learning experiences for peers.",
      "Social Media Outreach: Utilized social media channels to engage with students, share updates, and promote Coding Ninjas initiatives to reach a broader audience.",
    ],
  },
  
];

export const educations = [
  {
    title: "BTech-Indian Institute Of Information Technology ",
    company_name: "Bhopal",
    icon: college,
    iconBg: "#E6DEDD",
    date: "June 2022 - July 2026",
    points: [
      "currently pursuing my graduation from Indian Institute of Information Technology Bhopal (IIIT Bhopal) in the feild of Electronics And Communication Engineering",
      
    ],
  },
  {
    title: "Higher secondary Education (class 11th-12th)",
    company_name: "St. Paul Sr. Sec. School, Bijainagar",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "June 2020 - July 2022",
    points: [
      "I have successfully concluded my senior secondary education at St. Paul Sr. Sec. School, Bijainagar, achieving remarkable results with an impressive 94% in the 12th-grade examinations.",
      
    ],
  },
  {
    title: "High School (Class U.K.G.-10th)",
    company_name: "St. Paul Sr. Sec. School, Bijainagar",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "June 2010 - July 2020",
    points: [
      "I have successfully concluded my High School education at St. Paul Sr. Sec. School, Bijainagar, achieving remarkable results with an impressive 93% in the 10th-grade examinations.",
      
    ],
  },
  
];