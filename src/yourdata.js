import mitreIcon from "./images/mitre.svg"
import rpiIcon from "./images/rpi.svg"

import yacsIcon from "./images/yacs.svg"
import lilTimIcon from "./images/lil-tim.png"

import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import instagramIcon from "./images/instagram.svg"

import profile from "./images/me.jpg"

export default {

  //   Header Details ---------------------
  name: "Richard Tsai",
  headerTagline: [
    "Just a CS Student",
    "Software Engineer,",
    "Innovative Thinker"
  ],
  headerParagraph:
    "",
  contactEmail: "richtxo@gmail.com",


  // About Secton --------------
  aboutParaOne:
    "I'm an energetic college techie, currently pursuing a BS/MS degree in Computer Science at RPI. Got hands-on experiences in installation and configuration of hardware and software including coding and cybersecurity.",
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

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

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
