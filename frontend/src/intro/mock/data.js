import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: '/Intro_images/H2O.PNG',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'H2O',
    info: '개발기간 :2020.07.20~ 2020.08.27',
    info2: 'React + Redux + Node.js(WebRTC) + Java JPA QueryDsl(REST API)을 이용하여 구현된 간단한 SPA 병원 중개 사이트.',
    url: '/H2O',
    repo: 'https://github.com/limup3/Team_H2O', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Security World',
    info: '개발기간 :2019.11.24~ 2019.12.10',
    info2: 'Ubuntu Apache2 + PHP + MYSQL를 이용하여 구현한 보안 정보 사이트',
    url: 'https://github.com/limup3/Security-World',
    repo: 'https://github.com/limup3/Security-World', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'SexyStreet',
    info: '개발기간 :2018.05.11~ 2018.06.14',
    info2: 'JSP로 만든 의류사이트 ( 학교 과제 )',
    url: 'https://github.com/limup3/Shopping-Mall',
    repo: 'https://github.com/limup3/Shopping-Mall', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/limup3',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
