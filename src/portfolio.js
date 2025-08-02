/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Animesh's Portfolio",
  description:
    "A passionate Full Stack Software Developer who thrives on building end-to-end solutions, with experience in React, Python, Java, cloud technologies, and more - crafting scalable, user-focused systems that drive meaningful impact in a connected world.",
  og: {
    title: "Animesh Srivastava Portfolio",
    type: "website",
    url: "https://animatrix28.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Animesh Srivastava",
  logo_name: "Animesh Srivastava",
  nickname: "animatrix",
  subTitle:
    "A passionate Full Stack Software Developer who thrives on building end-to-end solutions, with experience in React, Python, Java, cloud technologies, and more - crafting scalable, user-focused systems that drive meaningful impact in a connected world.",
  resumeLink:
    "https://animatrix28.github.io/Resume-Latex/AnimeshResume.pdf",
  portfolio_repository: "https://github.com/animatrix28/AnimeshPortfolio",
  githubProfile: "https://github.com/animatrix28",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/animatrix28",
  // linkedin: "https://www.linkedin.com/in/animesh28/",
  // gmail: "sri.animesh28@gmail.com",
  // gitlab: "",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "",
  // instagram: "https://www.instagram.com/animatrix0007/",

  {
    name: "Github",
    link: "https://github.com/animatrix28",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/animesh28/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:sri.animesh28@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/animatrix0007/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// const skills = {
//   data: [
//     {
//       title: "Data Science & AI",
//       fileName: "DataScienceImg",
//       skills: [
//         "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
//         "⚡ Experience of working with Computer Vision and NLP projects",
//         "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Tensorflow",
//           fontAwesomeClassname: "logos-tensorflow",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Keras",
//           fontAwesomeClassname: "simple-icons:keras",
//           style: {
//             backgroundColor: "white",
//             color: "#D00000",
//           },
//         },
//         {
//           skillName: "PyTorch",
//           fontAwesomeClassname: "logos-pytorch",
//           style: {
//             backgroundColor: "transparent",
//           },
//         },
//         {
//           skillName: "Python",
//           fontAwesomeClassname: "ion-logo-python",
//           style: {
//             backgroundColor: "transparent",
//             color: "#3776AB",
//           },
//         },
//         {
//           skillName: "Deeplearning",
//           imageSrc: "deeplearning_ai_logo.png",
//         },
//       ],
//     },
//     {
//       title: "Full Stack Development",
//       fileName: "FullStackImg",
//       skills: [
//         "⚡ Building responsive website front end using React-Redux",
//         "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
//         "⚡ Creating application backend in Node, Express & Flask",
//       ],
//       softwareSkills: [
//         {
//           skillName: "HTML5",
//           fontAwesomeClassname: "simple-icons:html5",
//           style: {
//             color: "#E34F26",
//           },
//         },
//         {
//           skillName: "CSS3",
//           fontAwesomeClassname: "fa-css3",
//           style: {
//             color: "#1572B6",
//           },
//         },
//         {
//           skillName: "Sass",
//           fontAwesomeClassname: "simple-icons:sass",
//           style: {
//             color: "#CC6699",
//           },
//         },
//         {
//           skillName: "JavaScript",
//           fontAwesomeClassname: "simple-icons:javascript",
//           style: {
//             backgroundColor: "#000000",
//             color: "#F7DF1E",
//           },
//         },
//         {
//           skillName: "ReactJS",
//           fontAwesomeClassname: "simple-icons:react",
//           style: {
//             color: "#61DAFB",
//           },
//         },
//         {
//           skillName: "NodeJS",
//           fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
//           style: {
//             color: "#339933",
//           },
//         },
//         {
//           skillName: "NPM",
//           fontAwesomeClassname: "simple-icons:npm",
//           style: {
//             color: "#CB3837",
//           },
//         },
//         {
//           skillName: "Yarn",
//           fontAwesomeClassname: "simple-icons:yarn",
//           style: {
//             color: "#2C8EBB",
//           },
//         },
//         {
//           skillName: "Gatsby",
//           fontAwesomeClassname: "simple-icons:gatsby",
//           style: {
//             color: "#663399",
//           },
//         },
//         {
//           skillName: "Flutter",
//           fontAwesomeClassname: "simple-icons:flutter",
//           style: {
//             color: "#02569B",
//           },
//         },
//       ],
//     },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
//         "⚡ Deploying deep learning models on cloud to use on mobile devices",
//         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
//       ],
//       softwareSkills: [
//         {
//           skillName: "GCP",
//           fontAwesomeClassname: "simple-icons:googlecloud",
//           style: {
//             color: "#4285F4",
//           },
//         },
//         {
//           skillName: "AWS",
//           fontAwesomeClassname: "simple-icons:amazonaws",
//           style: {
//             color: "#FF9900",
//           },
//         },
//         {
//           skillName: "Azure",
//           fontAwesomeClassname: "simple-icons:microsoftazure",
//           style: {
//             color: "#0089D6",
//           },
//         },
//         {
//           skillName: "Firebase",
//           fontAwesomeClassname: "simple-icons:firebase",
//           style: {
//             color: "#FFCA28",
//           },
//         },
//         {
//           skillName: "PostgreSQL",
//           fontAwesomeClassname: "simple-icons:postgresql",
//           style: {
//             color: "#336791",
//           },
//         },
//         {
//           skillName: "MongoDB",
//           fontAwesomeClassname: "simple-icons:mongodb",
//           style: {
//             color: "#47A248",
//           },
//         },
//         {
//           skillName: "Docker",
//           fontAwesomeClassname: "simple-icons:docker",
//           style: {
//             color: "#1488C6",
//           },
//         },
//         {
//           skillName: "Kubernetes",
//           fontAwesomeClassname: "simple-icons:kubernetes",
//           style: {
//             color: "#326CE5",
//           },
//         },
//       ],
//     },
//     {
//       title: "UI/UX Design",
//       fileName: "DesignImg",
//       skills: [
//         "⚡ Designing highly attractive user interface for mobile and web applications",
//         "⚡ Customizing logo designs and building logos from scratch",
//         "⚡ Creating the flow of application functionalities to optimize user experience",
//       ],
//       softwareSkills: [
//         {
//           skillName: "Adobe XD",
//           fontAwesomeClassname: "simple-icons:adobexd",
//           style: {
//             color: "#FF2BC2",
//           },
//         },
//         {
//           skillName: "Figma",
//           fontAwesomeClassname: "simple-icons:figma",
//           style: {
//             color: "#F24E1E",
//           },
//         },
//         {
//           skillName: "Adobe Illustrator",
//           fontAwesomeClassname: "simple-icons:adobeillustrator",
//           style: {
//             color: "#FF7C00",
//           },
//         },
//         {
//           skillName: "Inkscape",
//           fontAwesomeClassname: "simple-icons:inkscape",
//           style: {
//             color: "#000000",
//           },
//         },
//       ],
//     },
//   ],
// };
const skills = {
  data: [
    {
      title: "Backend & Cloud Engineering",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Designing scalable backend systems and REST APIs using Python, Node.js, and Flask",
        "⚡ Building efficient ETL pipelines and integrating cloud-native databases for real-time processing",
        "⚡ Deploying full-stack apps and ML models on GCP, AWS, and Firebase",
        "⚡ Automating infrastructure with CI/CD pipelines using GitHub Actions and Docker"
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } },
        { skillName: "Node.js", fontAwesomeClassname: "devicon-plain:nodejs-wordmark", style: { color: "#339933" } },
        { skillName: "Flask", fontAwesomeClassname: "simple-icons:flask", style: { color: "#000000" } },
        { skillName: "MongoDB", fontAwesomeClassname: "simple-icons:mongodb", style: { color: "#47A248" } },
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql", style: { color: "#336791" } },
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
        { skillName: "GCP", fontAwesomeClassname: "simple-icons:googlecloud", style: { color: "#4285F4" } },
        { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
        { skillName: "Firebase", fontAwesomeClassname: "simple-icons:firebase", style: { color: "#FFCA28" } },
        { skillName: "GitHub Actions", fontAwesomeClassname: "simple-icons:githubactions", style: { color: "#2088FF" } }
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating responsive web applications using React.js, HTML, CSS, and Bootstrap",
        "⚡ Developing scalable backend services with Express.js and Flask",
        "⚡ Building full-stack platforms with real-time data updates and API integration",
        "⚡ Implementing frontend interactivity using JavaScript, TypeScript, and AJAX"
      ],
      softwareSkills: [
        { skillName: "React.js", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: { color: "#E34F26" } },
        { skillName: "CSS3", fontAwesomeClassname: "fa-css3", style: { color: "#1572B6" } },
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E", backgroundColor: "#000000" } },
        { skillName: "TypeScript", fontAwesomeClassname: "simple-icons:typescript", style: { color: "#3178C6" } },
        { skillName: "Express.js", fontAwesomeClassname: "simple-icons:express", style: { color: "#000000" } },
        { skillName: "Bootstrap", fontAwesomeClassname: "simple-icons:bootstrap", style: { color: "#7952B3" } },
        { skillName: "Flask", fontAwesomeClassname: "simple-icons:flask", style: { color: "#000000" } }
      ],
    },
    {
      title: "Mobile App Development",
      fileName: "MobileAppImg",
      skills: [
        "⚡ Developing cross-platform mobile applications using Flutter and Dart",
        "⚡ Creating native Android apps with Java and integrating REST APIs",
        "⚡ Enhancing user experience with responsive UI and smooth navigation flows",
        "⚡ Implementing Firebase authentication and real-time updates"
      ],
      softwareSkills: [
        { skillName: "Flutter", fontAwesomeClassname: "simple-icons:flutter", style: { color: "#02569B" } },
        { skillName: "Dart", fontAwesomeClassname: "simple-icons:dart", style: { color: "#0175C2" } },
        { skillName: "Java", fontAwesomeClassname: "logos-java", style: { backgroundColor: "transparent" } },
        { skillName: "Firebase", fontAwesomeClassname: "simple-icons:firebase", style: { color: "#FFCA28" } },
        { skillName: "Android Studio", fontAwesomeClassname: "simple-icons:androidstudio", style: { color: "#3DDC84" } }
      ],
    },
    {
      title: "Game Development",
      fileName: "GameDevImg",
      skills: [
        "⚡ Designing 2D platformer and 3D games with custom mechanics like gravity flip and teleportation",
        "⚡ Developing gameplay systems and level logic using Unity and C#",
        "⚡ Tracking user metrics and analytics with Firebase integration",
        "⚡ Optimizing game performance and player experience through playtesting and iteration"
      ],
      softwareSkills: [
        { skillName: "Unity", fontAwesomeClassname: "simple-icons:unity", style: { color: "#000000" } },
        { skillName: "C#", fontAwesomeClassname: "simple-icons:csharp", style: { color: "#239120" } },
        { skillName: "Firebase", fontAwesomeClassname: "simple-icons:firebase", style: { color: "#FFCA28" } }
      ],
    },
    {
      title: "AI & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Creating AI models for recommendations, forecasting, and classification",
        "⚡ Working with deep learning, NLP, and computer vision use cases",
        "⚡ Training models using TensorFlow, PyTorch, and Keras",
        "⚡ Applying machine learning to enhance product features and personalization"
      ],
      softwareSkills: [
        { skillName: "TensorFlow", fontAwesomeClassname: "logos-tensorflow", style: { backgroundColor: "transparent" } },
        { skillName: "Keras", fontAwesomeClassname: "simple-icons:keras", style: { color: "#D00000", backgroundColor: "white" } },
        { skillName: "PyTorch", fontAwesomeClassname: "logos-pytorch", style: { backgroundColor: "transparent" } },
        { skillName: "Python", fontAwesomeClassname: "ion-logo-python", style: { color: "#3776AB" } }
      ],
    },
    {
      title: "UI/UX & Creative Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing intuitive and clean UIs for web and mobile applications",
        "⚡ Prototyping user flows, wireframes, and high-fidelity mockups",
        "⚡ Creating logos, icons, and illustrations for brands and projects",
        "⚡ Collaborating on product design using industry-standard tools"
      ],
      softwareSkills: [
        { skillName: "Figma", fontAwesomeClassname: "simple-icons:figma", style: { color: "#F24E1E" } },
        { skillName: "Adobe XD", fontAwesomeClassname: "simple-icons:adobexd", style: { color: "#FF2BC2" } },
        { skillName: "Adobe Illustrator", fontAwesomeClassname: "simple-icons:adobeillustrator", style: { color: "#FF7C00" } },
        { skillName: "Photoshop", fontAwesomeClassname: "simple-icons:adobephotoshop", style: { color: "#31A8FF" } }
      ],
    }
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    //   {
    //     siteName: "LeetCode",
    //     iconifyClassname: "simple-icons:leetcode",
    //     style: {
    //       color: "#F79F1B",
    //     },
    //     profileLink: "https://leetcode.com/layman_brother/",
    //   },
    //   {
    //     siteName: "HackerRank",
    //     iconifyClassname: "simple-icons:hackerrank",
    //     style: {
    //       color: "#2EC866",
    //     },
    //     profileLink: "https://www.hackerrank.com/layman_brother",
    //   },
    //   {
    //     siteName: "Codechef",
    //     iconifyClassname: "simple-icons:codechef",
    //     style: {
    //       color: "#5B4638",
    //     },
    //     profileLink: "",
    //   },
    //   {
    //     siteName: "Codeforces",
    //     iconifyClassname: "simple-icons:codeforces",
    //     style: {
    //       color: "#1F8ACB",
    //     },
    //     profileLink: "http://codeforces.com/profile/layman_brother",
    //   },
    //   {
    //     siteName: "Hackerearth",
    //     iconifyClassname: "simple-icons:hackerearth",
    //     style: {
    //       color: "#323754",
    //     },
    //     profileLink: "",
    //   },
    //   {
    //     siteName: "Kaggle",
    //     iconifyClassname: "simple-icons:kaggle",
    //     style: {
    //       color: "#20BEFF",
    //     },
    //     profileLink: "https://www.kaggle.com/laymanbrother",
    //   },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Southern California",
      subtitle: "Master of Science(MS) in Computer Science",
      logo_path: "usc_logo.png",
      alt_name: "USC",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have taken a variety of courses in Computer Science including Data Structures & Algorithms, Database Systems, Web Development, Data Management, Advanced Mobile Devices & Games, Information Retrieval, and Advance Computer Vision.",
        "⚡ As part of my coursework, I developed a 2D platformer game *Contortion* in Unity (CSCI 526), explored modern web stacks through full-stack projects (CSCI 572), worked on LoRA and diffusion models in computer vision (CSCI 677), and applied NLP techniques using deep learning.",
        "⚡ I also explored real-world applications of deep learning and computer vision, diving into topics such as Generative AIs, Neural Radiance Fields, and 3D Perception in advanced CV courses.",
      ],
      website_link: "https://www.usc.edu/",
    },
    {
      title: "Ramaiah University of Applied Science",
      subtitle: "B.Tech. in Computer Science",
      logo_path: "ramaiah_logo.png",
      alt_name: "Ramaiah",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Studied core Computer Science subjects including Data Structures & Algorithms, Database Systems, Operating Systems, Distributed Systems, Computer Networks, Software Architecture, Artificial Intelligence etc.",
        "⚡ Completed additional coursework in Deep Learning, Advanced SQL, Android Development, Web Development, and TensorFlow-based ML systems.",
        "⚡ Served as a core member of the college tech group \"Aadhya\", organizing multiple coding contests and hackathons, and also won several, including for building a hospital finder mobile application.",
        "⚡ Developed two major projects — \"A Simulation Model to Detect and Report Traffic Violation using Distributed Agents\" and a \"Trip Planner and Recommender using Flutter and TensorFlow\" — both of which were successfully published in IEEE conferences.",
      ],
      website_link: "https://www.msruas.ac.in/",
    }
  ],
};

const certifications = {
  certifications: [

    {
      title: "Deep Learning.AI TensorFlow Developer",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/professional-cert/4YHEJELEBGNJ?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "- Michael Levin UCSD",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/5ZPZD7YZDGJ7",
      alt_name: "Coursera",
      color_code: "#0C9D5899",
    },
    {
      title: "Deep Learning.AI",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/3GRQCCGMYLF8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Full Stack Web Development",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-853e362e-981a-45bd-bf62-40908a5fa8bb/",
      alt_name: "Udemy",
      color_code: "#0C9D5899",
    },
    {
      title: "Programmers Date Hackathon",
      subtitle: "- Microsoft",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/12z6EEOdzCnFGyqwrLEvlqcPiRtkuLT7t/view?usp=sharing",
      alt_name: "Hackathon",
      color_code: "#8C151599",
    },
    {
      title: "Android App Components",
      subtitle: "- Vanderbilt University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/U98SLA99JLB8?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Coursera",
      color_code: "#1F70C199",
    },
    {
      title: "Java for Android",
      subtitle: "- Vanderbilt University",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/M5QTHJRZ3A64?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
      alt_name: "Coursera",
      color_code: "#D83B0199",
    }, {
      title: "6th IEEE Conference",
      subtitle: "- IEEE",
      logo_path: "ieee_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1ZofcrXZo8ZcjDuIRBVklkl-Bxzwy8yGM/view?usp=sharing",
      alt_name: "IEEE",
      color_code: "#8C151599",
    },
    {
      title: "7th IEEE Conference",
      subtitle: "- IEEE",
      logo_path: "ieee_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1_qD2WE-WDF1WXC3c_kYYBxkC5Rap92PH/view?usp=sharing",
      alt_name: "IEEE",
      color_code: "#8C151599",
    },
    {
      title: "Android O & Java",
      subtitle: "- Udemy",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-7a5e86f7-eb69-4db7-b662-6ac5f4f05370/",
      alt_name: "Udemy",
      color_code: "#1F70C199",
    },
    {
      title: "Oracle Database 12c: Advanced SQL",
      subtitle: "- Linkedin",
      logo_path: "linkedin_logo.png",
      certificate_link:
        "https://www.linkedin.com/in/animesh28/details/certifications/",
      alt_name: "Linkedin",
      color_code: "#8C151599",
    },
    {
      title: "Agriculture Information Management System",
      subtitle: "- IFFCO",
      logo_path: "iffco_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/19iNoCn2gT-665KjgcfgMNkPI6QIBPior/view?usp=sharing",
      alt_name: "IFFCO",
      color_code: "#1F70C199",
    },
    {
      title: "Angular JS to Web Apps Faster",
      subtitle: "- Acharya Institute of Technology",
      logo_path: "coding_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1KMGZ2SRNSXtiidzQtTv1IoGDeAsXCdTf/view?usp=sharing",
      alt_name: "Web",
      color_code: "#1F70C199",
    },
    {
      title: "NGO",
      subtitle: "- Muskurahat Foundation",
      logo_path: "ngo_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1k67U0S9LajkocQhOlqmf-O_2jC-t9xFW/view?usp=sharing",
      alt_name: "NGO",
      color_code: "#8C151599",
    },
    {
      title: "Code-A-Thon",
      subtitle: "- B. M. S. College of Engineering",
      logo_path: "coding_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1JcsTX8JNyeFmhQ8SaAVWWhSCAhlc6N8i/view?usp=sharing",
      alt_name: "Web",
      color_code: "#1F70C199",
    }
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I’ve worked with both startups and global firms like American Express as a Backend and Full-Stack Developer. With 3+ years of experience, I’ve built scalable applications, optimized APIs and data pipelines, automated workflows, and published research in Recommendation Systems and Distributed Computing. My work spans web, mobile, data, and cloud platforms, and I actively engage with the tech community through hackathons, tech events, and open-source contributions.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Founding Engineer",
          company: "Redvest",
          company_url: "https://www.redvest.app/",
          logo_path: "redvest_logo.png",
          duration: "May 2024 - October 2024",
          location: "Los Angeles, CA, USA",
          description:
            "At Redvest, I worked on real-time financial platforms to deliver faster, data-driven investment insights. I designed backend data pipelines, optimized APIs using Python Multithreading and built a live dashboard using React to reduce latency and enhance performance. The goal was to create scalable tools for smarter financial decision-making. I also represented the startup at \'TechCrunch Disrupt\', showcasing our innovations to investors and the tech community.",
          color: "#0879bf",
        },
        {
          title: "Backend Developer",
          company: "Tata Consultancy Services",
          company_url: "https://www.tcs.com/",
          logo_path: "tcs_logo.png",
          duration: "Jan 2021 - July 2023",
          location: "Bangalore, KA, India",
          description:
            "I contributed to backend systems powering global-scale financial services at American Express. My work involved automating compliance reporting using Java and PL/SQL, building efficient ETL pipelines with PySpark and MongoDB, and ensuring seamless server migrations through Putty and SQL. The focus was on improving regulatory workflows and making data flows more reliable and fault-tolerant. I also resolved critical production failures by optimizing MySQL jobs and debugging data inconsistencies, ensuring high availability and fault tolerance across services.",
          color: "#000000",
        },
        {
          title: "Mobile App Developer Intern",
          company: "Ungrezi",
          company_url: "https://ungrezi.com/",
          logo_path: "ungrezi_logo.png",
          duration: "Sep 2020 - Nov 2020",
          location: "Bangalore, KA, India",
          description:
            "At Ungrezi, I developed sleek and responsive UIs for an English learning app using Flutter, based on Figma designs. I integrated Firebase Authentication and Google Sign-In to streamline user access, and focused on improving performance and usability. The goal was to make language learning simple, fast, and engaging through an intuitive mobile experience.",
          color: "#ee3c26",
        }
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [

    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [

    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects span across full-stack development, data engineering, and machine learning. I enjoy building scalable web and mobile applications, and have hands-on experience deploying data-driven systems using modern cloud technologies and real-time APIs.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Research Paper.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "Trip Planner and Recommender using Flutter and Tensorflow",
      name: "Trip Planner and Recommender using Flutter and Tensorflow",
      createdAt: "2022-04-09T00:00:00Z",
      description: "Paper published in IEEE 7th Conference",
      url: "https://ieeexplore.ieee.org/document/9824468",
    },
    {
      id: "A Conceptual Model Simulation to Detect and Report City Traffic Violations using Distributed Intelligent Agents",
      name: "A Conceptual Model Simulation to Detect and Report City Traffic Violations using Distributed Intelligent Agents",
      createdAt: "2021-04-04T00:00:00Z",
      description: "Paper published in IEEE 6th Conference",
      url: "https://ieeexplore.ieee.org/document/9417881",
    }
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_animesh.png",
    description:
      "Feel free to reach out — I’m active on most platforms and usually respond within a day. I can help with AI/ML, React, Android apps, Cloud infrastructure, SQL, NoSQL, Data Pipelines and open-source projects.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
