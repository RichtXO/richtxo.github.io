import mitreIcon from "./images/mitre.svg"
import rpiIcon from "./images/rpi.svg"

import yacsIcon from "./images/yacs.svg"
import lilTimIcon from "./images/lil-tim.png"

import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import instagramIcon from "./images/instagram.svg"

import profile from "./images/me.jpg"

import securityplus from "./images/SecurityPlus.png"

export default {

  //   Header Details ---------------------
  name: "Richard Tsai",
  headerTagline: [
    "A Software Engineer",
    "An Innovative Thinker",
    "Cyber Security focused"
  ],
  headerTime: 2000,
  headerParagraph:
    "",
  contactEmail: "richtxo@gmail.com",


  // About Section --------------
  aboutParaOne:
    "I'm an energetic college techie, currently pursuing a BS/MS degree in Computer Science at RPI. Hands-on experiences in installation and configuration of hardware and software including coding and cybersecurity.",
  aboutParaTwo:
    "",
  aboutParaThree:
    "I like to work on challenging projects, leveraging my skills and knowledge. Consider myself as a self-starter and a team player",
  aboutImage:
    profile,


  experiences: [
    {
      id: 1,
      img: mitreIcon,
      title: "Cybersecurity Defensive Operations Intern",
      date: "05/2021 – 08/2021",
      para:`
      Code development in agile-based scrum team to deliver feature sets for sponsor
      Performed as a full-stack developer in an IDS/IPS project with Postgres and Redis, Python flask, and VueJS
      Leveraged JIRA for project tasks, assignments & collaboration with team members
      Performed validations and determine accuracy of API endpoint by testing and evaluating via pytest framework
      `,
    },
    {
      id: 2,
      img: mitreIcon,
      title: "Cybersecurity Defensive Operations Intern",
      date: "06/2020 – 08/2020",
      para:`
      Performed analysis of network & host-based log data using Zeek & companioned with ELK dashboard
      Monitored and reviewed application that crawls websites
      Developed custom admin dashboard and reporting using AngularJS
      Participated in team discussions, collaboration, and coding assignments`,
    },
    {
      id: 3,
      img: rpiIcon,
      title: "Helpdesk Student Consultant",
      date: "07/2019 – Present",
      para:`
      Performing computer troubleshooting for university community
      Troubleshooting printer problems throughout campus, performing LMS maintenance, & diagnosing student laptop problems
      Providing support to students & faculties via phone call and remote desktop via Bomgar
      Monitoring incoming issues service tickets, track issues, and troubleshooting issues via Zendesk software`,
    }
  ],

  // Project Section ------------------------
  projects: [
    {
      id: 1,
      title: "YACS.n",
      para:
        "Yet Another Course Scheduler - an OS project to help students plan out their semester",
      imageSrc: yacsIcon,
      url: "https://github.com/YACS-RCOS/yacs.n",
    },
    {
      id: 2,
      title: "Lil Tim",
      para:
        "Another Discord bot allowing users to share music",
      //Project Image - Add Your Project Image Here
      imageSrc: lilTimIcon,
      url: "https://github.com/RichtXO/Lil-Tim",
    },
  ],

  //   Certification Section --------------------------

  certificationHeading: "Certification",
  certifications: [
    {
      id: 1,
      img: securityplus,
      title: "CompTIA Security+ SY0-501",
      link: "https://www.credly.com/badges/c7eff3aa-dd57-4f86-82b2-50654fff5bc4/public_url"
    }
  ],

  //   Contact Section --------------
  contactSubHeading: "Look me up on...",
  social: [
    { img: githubIcon, url: "https://github.com/richtxo" },
    {
      img: linkedinIcon, url: "https://www.linkedin.com/in/richtxo/",
    },
    {
      img: instagramIcon, url: "https://www.instagram.com/richtxo217/",
    },
  ]
}
