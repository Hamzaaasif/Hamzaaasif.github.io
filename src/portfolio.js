/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "hamza's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hamza Asif Portfolio",
    type: "website",
    url: "http://hamzaaasif.com/",
  },
};

//Home Page
const greeting = {
  title: "Hamza Asif",
  logo_name: "AshutoshHathidara",
  nickname: "",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/15V3GuNdw6VN2cp6WnQuG8TyuDopyKVKb/view?usp=sharing",
  portfolio_repository: "https://drive.google.com/file/d/15V3GuNdw6VN2cp6WnQuG8TyuDopyKVKb/view?usp=sharing",
  githubProfile: "https://github.com/hamzaaasif",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/hamzaaasif",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hamza-asif-18a3a2a4/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:hamzaasif0987@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "fiverr",
    link: "https://www.fiverr.com/hamzaasif505?up_rollout=true",
    fontAwesomeIcon: "fa-eercast", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1dbf73", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/hamzaasif2012/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Developing mobile applications using React Native ",
        "⚡ Creating application backend in Node, Nest, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
        "⚡ Deploying apps at GKE using docker",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {

      title: "NED university of science and technology",
      subtitle: "MS in Data Science",
      logo_path: "ned_logo.png",
      alt_name: "ned_uet",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I am currently enrolled in masters in data science",
        "⚡ I start working on computer vision domain ",
      ],
      website_link: "https://cct.neduet.edu.pk/",
    },
    {
      title: "University of Karachi",
      subtitle: "BSCS in Computer Science",
      logo_path: "uok_logo.png",
      alt_name: "dcs_uok",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have a degree in Bachloers in computer science",
        "⚡ I have passed my university with 3.51 CGPA",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ Our FYP selected for FYP acceleration program by 10Oearls, a well known software ho.",
      ],
      website_link: "https://uok.edu.pk/faculties/computerscience/ubit.php",
    },
    
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Freelance",
  description:
    "I have worked with many evolving startups as software Developer, Designer and Software Architect. I have also worked with some well established companies mostly as MERN Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Sr. Software developer",
          company: "Concept recall",
          company_url: "https://conceptrecall.com/",
          // logo_path: "legato_logo",
          duration: "2022 - PRESENT",
          location: "Karachi, Gulshan",
          description:
            "I am working on different web based projects. The projects involve the frontend, backend as well as database design. I am currently working as a team lead and managing different projects and clients. Our goal is to work as a team and grow in our industry.",
          color: "#0879bf",
        },
        {
          title: "Software developer",
          company: "The Otter Co.",
          company_url: "https://theotterco.ca/",
          // logo_path: "muffito_logo.png",
          duration: "May 2021 - April 2022",
          location: "Canada, Surrey",
          description:
            "I was working as a software developer and working on multiple projects. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company. My responsibility is the work on the whole projects, I worked on frontend and backend as well",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Freelance Work",
      experiences: [
        {
          title: "Automation Services",
          company: "Fiverr",
          company_url: "https://www.fiverr.com/hamzaasif505",
          duration: "April 2020 - Present",
          location: "Remote",
          description:
            "I have freelance experience about 2 years and I am selling my differnet services, one of the services are automation using excel VBA and python. I have completed hundred's of projects and many happy clients with 5 star rating.",
          color: "#4285F4",
        },
        {
          title: "Full Stack Development",
          company: "Fiverr",
          company_url: "https://www.fiverr.com/hamzaasif505",
          duration: "April 2020 - Present",
          location: "Remote",
          description:
            "I have freelance experience about 2 years and I am selling my differnet services, one of the services are MERN stack development. I have completed hundred's of projects and many happy clients with 5 star rating",
          color: "#D83B01",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Python developer",
          company: "Al Hadi Tech",
          // company_url: "https://www.delhivery.com/",
          // logo_path: "delhivery_logo.png",
          duration: "March 2021 - April 2021",
          location: "Karachi, Gulshan",
          description:
            "I have worked on odoo ERP. I worked on migration from odoo 10 to odoo 12. The postgres database also migrated with the data. ",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create web based application and deploy them using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Automation task using VBA and python, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Shamsi society near wireless gata, Karachi, Pakistan",
    avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 3233256861",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
