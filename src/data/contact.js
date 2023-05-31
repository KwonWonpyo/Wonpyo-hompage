import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/KwonWonpyo',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/commi1106',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.instagram.com/kwon1pyo/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/wonpyo-kwon-40b18b265/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://ieeexplore.ieee.org/author/37086864907',
    label: 'IEEE Xplore',
    icon: faGraduationCap,
  },
  // {
  //   link: 'https://angel.co/michael-d-angelo',
  //   label: 'Angel List',
  //   icon: faAngellist,
  // },
  // {
  //   link: 'https://twitter.com/dangelosaurus',
  //   label: 'Twitter',
  //   icon: faTwitter,
  // },
  {
    link: 'mailto:commi1106@naver.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
