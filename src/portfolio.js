/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Serena Pei",
  title: "Hi all, I'm Serena",
  subTitle: emoji(
    "A passionate Computer Scientist 🚀 having an experience machine learning, systems, and algorithms in internship and research positions"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1oGIOKSkarpXCzJZTpMqSVjxzjzXVvCVtgq78K5Oanxo/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/spei04",
  linkedin: "https://www.linkedin.com/in/serena-pei-80ab21215/",
  gmail: "serenapei123@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Versatile computer scientist interesting the AI, systems, and backend development",
  skills: [
    emoji(
      "⚡ Applying machine learning to diverse fields in research and industrial settings"
    ),
    emoji("⚡ Backend development experience in building and deploying applications"),
    emoji(
      "⚡ Solid programming skills in Python, Java, Javascript, SQL, and more!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "javascriopt",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Massachusetts Institute of Technology",
      // logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Science and Engineering",
      duration: "September 2022 - May 2026",
      // desc: "Gordon-MIT Engineering Leadership Program (GEL) student, Chinese minor, Eta Kappa Nu (HKN) honors",
      descBullets: [
        "Gordon-MIT Engineering Leadership Program (GEL) student",
        "Chinese minor",
        "Eta Kappa Nu (HKN) honors (top performing student in class)"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "40%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer Intern (Machine Learning)",
      company: "Amazon",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "May 2025 – Aug 2025",
      descBullets: [
        ""
      ]
    },
    {
      role: "Research Intern",
      company: "Agency for Science, Technology, and Research",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2024 – Aug 2024",
      descBullets: [
        "Implemented unsupervised model for feature extraction and tissue clustering for histomorphology in H&E stained tissue images from liver cancer patients (5000+ lines of Python code for model training and evaluation, and data visualization)",
        "Conducted literature reviews for SOTA deep learning models, clustering methods, and self-supervised encoders",
        "Tested libraries and optimized code for opening large whole slide images for downstream biomedical data analysis",
        "Overlaid predicted cluster masks on original tissue images to analyze and document accuracy"
      ]
    },
    {
      role: "Research Assistant",
      company: "MIT Computer Science and Artificial Intelligence Laboratory",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "Mar 2024 – present",
      descBullets: [
        "Studied the economics of labor automation by AI and finding functional form of computer vision fine tuning scaling law",
        "Wrote Python code to run scaling law experiments, visualize data, and analyze inconsistencies with survey data",
        "Cleaned 100+ MB of data from LLM outputs to study automation vs. augmentation and scaling law for prompt engineering",
        "Conducted literature reviews on 30+ scholarly articles on information theory, LLM benchmarks, and economics of AI"
      ]
    },
    {
      role: "Research Assistant",
      company: "MIT Media Lab",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "Feb 2024 – present",
      descBullets: [
        "Co-author of paper accepted to 2024 IEEE 20th International Conference on Body Sensor Networks (BSN)",
        "Led 20+ hours of studies for AttentivU, a pair of glasses created in MIT Media Lab that uses Electroencephalography (EEG) and Electrooculography (EOG) signals to track eye movement and brain activity",
        "Author of paper on analyzing surface electromyography signals of minimally verbal adults with autism spectrum disorder",
        "Pre-processed EEG/EOG signal data and trained machine learning models to predict labels (700+ lines of Python)"
      ]
    },
    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "projects I've worked on related to research or tech",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Machine Learning paper",
      projectDesc: "Published paper on the Scholastica Journal of High School Science, titled on An Empirical Analysis of Machine Learning Based Emotion Recognition",
      footerLink: [
        {
          name: "Journal Website",
          url: "https://jhss.scholasticahq.com/article/25164"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters",

  achievementsCards: [
    {
      title: "AI EarthHack Finalist",
      subtitle:
        "Finalist and best pitch award (top 3 out of over 150 teams) for Streamlit application for AI business evaluation.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "",
      footerLink: [
        {
          name: "Certification",
          url: "https://docs.google.com/document/d/1PqnWxnh1RKS2BQ6UDC3h4XKnt_LqtKPnBS0IuyopL-8/edit?usp=sharing"
        },
      ],
    }
  ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "408-708-2258",
  email_address: "serenapei123@gmail.com"
};

const twitterDetails = {
  userName : "Your Twitter Username",
  display: false
};


const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  isHireable,
  twitterDetails,
  resumeSection
};
