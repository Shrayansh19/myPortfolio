/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Rishabh Dhenkawat",
  title: "Hi all, I'm Rishabh",
  subTitle: emoji(
    "An AI/ML developer and researcher🚀 who loves to design time and cost-efficient algorithms with the view of a user-friendly product. I am a student at the National Institute of Technology, Hamirpur with 2 years of industrial and research experience in developing AI/ML projects for an end-user."

    ),
  resumeLink:
  require("./assets/resume.pdf"),
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rishabhdhenkawat",
  linkedin: "https://www.linkedin.com/in/rishabh-dhenkawat-a63737173/",
  gmail: "rdhenkawat@gmail.com",
  instagram:"https://www.instagram.com/rishabh_dhenkawat/",

  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY AI/ML DEVELOPER AND REARCHER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Have 2 years of industrial experience in developing cost-effective AI/ML projects"
    ),
    emoji(
      "⚡Winner of several nationwide recognized MNC's and Government of India's hackathons "
    ),
    emoji(
      "⚡ A deep interest in research for in AI/ML domain with some successful publications."
    ),
    
    emoji("⚡  worked on Artificial Intelligence || Graphical Database || Deep Learning || Machine learning || NLP || Computer Vision || Neo4j || Docker || Containerization on AWS || C++ || Diffrential Private ML models || Graph Neural Nets || Raspberry Pi ")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Data Structures",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Algorithm Designing",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "OPPS",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "MongoDb",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Keras",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    
    
    {
      skillName: "Neo4j",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "Sapcy",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "NLTK",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-flask"
    },
    {
      skillName: "Rest API's",
      fontAwesomeClassname: "fas fa-flask"
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National Institute Of Technology, Hamirpur",
      logo: require("./assets/images/nith.png"),
      subHeader: "Dual Degree(Btech + Mtech) in C.S.E",
      duration: "April 2018-2023",
      desc: "Courses",
      descBullets: [
        "Analysis & Design of Algorithm,Advanced Database Management System,Operating System,Data Structure,Discrete Structure ,Theory of Computation,System Software,Software Engineering,Digital Image Processing,Computer Networks"
      
      ]}]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI/ML core concepts", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend with python",
      progressPercentage: "70%"
    },
    {
      Stack: "Data Structures and algorithms",
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
      company: "SuitableAI",
      companylogo: require("./assets/images/suitable.jpeg"),
      desc: "",
      descBullets: [
        "Made a customer ready real time resume parser which extarct the labled details like college, past experience, skills from raw pdf using spacy, flask, nltk, deployment using EC2 on AWS"
        ,"Made an NLP product SuitableAI candidate resume matcher and ranker using the NLP techniques with gensim model trained on 1 lakh job posting and 2GB stack-overflow embeddings spacy, flask, gensim with optimized deployment using Docker on AWS"

      ]
    },
    {
      company: "PerspecticoAI",
      companylogo: require("./assets/images/perspectico.jpeg"),
      desc:
        "Developed a Real-Time Exam Monitoring software to check while giving an online exam candidate is doing any fraud using yoloV3 , MobileNet, caffemodel and openCV DNN with optimized deployment using Docker on AWS"
    },
    {
      company: "EPIC Knowledge Society",
      companylogo: require("./assets/images/epic.png"),
      descBullets:[
        "Traffic Prediction with geo imagery dataset , resterio library with landset 8 open database is used to predict the traffic of the defined area captured by satellite using Keras RNN and LSTM with optimized deployment using Docker on AWS."
        ," Developed a Semantic Semiotic Search Engine - S3E is a platform for Image Search powered by Tensorflow Deep Learning. Images will be recognized by Image Captioning Neural Networks together with Semantic Segmentation Neural Networks. Every Image uploaded to the S3E will be analyzed by Deep Neural Networks to generate labels through Variational Auto Encoders and then generate annotations and metadata about images through Image Captioning Neural Networks via attention mechanism with tensorflow and classifeid X-ray images for different lung diseases with cloud deployment using docker."
      ]
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Drishti",
      projectDesc: "I basically made a project which can control a person just like a remote control bot. We extended our innovation by helping blind people navigating through obstacles using artificial intelligence. How about a product which while walking on roads, u watching youtube on your phones can give u a superpower that u never collide with any obstacle. Our product solves just that!!!!!",
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Quadruped",
      projectDesc: "Bot works with servo motors and have 12 degree of freedom, using Computer Vision. We have used Raspberry pi as a microcontroller and pycam for collecting live frames.Application of BOT: security purpose, Working in Terrain Rescue operation. Bot identifies the object or person and can follow that object All these parts are 3D printed."
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Quadruped",
      projectDesc: "Bot works with servo motors and have 12 degree of freedom, using Computer Vision. We have used Raspberry pi as a microcontroller and pycam for collecting live frames.Application of BOT: security purpose, Working in Terrain Rescue operation. Bot identifies the object or person and can follow that object All these parts are 3D printed."
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Quadruped",
      projectDesc: "Bot works with servo motors and have 12 degree of freedom, using Computer Vision. We have used Raspberry pi as a microcontroller and pycam for collecting live frames.Application of BOT: security purpose, Working in Terrain Rescue operation. Bot identifies the object or person and can follow that object All these parts are 3D printed."
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Quadruped",
      projectDesc: "Bot works with servo motors and have 12 degree of freedom, using Computer Vision. We have used Raspberry pi as a microcontroller and pycam for collecting live frames.Application of BOT: security purpose, Working in Terrain Rescue operation. Bot identifies the object or person and can follow that object All these parts are 3D printed."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+919882144203",
  email_address: "rdhenkawat@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "rishabhD14", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
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
  twitterDetails
};
