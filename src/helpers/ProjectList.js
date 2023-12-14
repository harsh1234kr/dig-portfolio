import Proj1 from "../assets/Proj1.png";
import Proj2 from "../assets/Proj2.png";
import Proj3 from "../assets/Proj3.png";
import Mah from "../assets/Mah.png";
import Dem from "../assets/Dem.png";
import Suzum from "../assets/Suzum.png";
import proj5 from "../assets/proj5.png";
import blod from"../assets/blod.png";
import Mix from "../assets/Mix.png";


export const ProjectList = [
  { id :1,
    name: "IDS for DDoS",
    image: Proj2,
    description: "Java-based Intrusion detection system which detects DDoS attacks.", 
     link:'https://github.com/harsh1234kr/IDS-For-DDoS.git',
    category: "Engineering",

    technology: "Java, Apache Server, MongoDB, jNetPcap"
  },
  {id: 2,
    name: "Blood Bank Management System",
    description: "Web app that manages details of blood donor, blood group, blood bank stock. ",
    image: blod,
    technology: " ReactJs, MongoDB, Express.js",
    link:'https://github.com/harsh1234kr/Blood-Bank---Donation-Management-System',
    category: "Engineering"
  },
  {
    id: 3,
    name: "GhumoZara",
    image: Proj3,
    description: "iOS app that offers trip recommendations, receiving positive user feedback for its user-friendly interface and feature-rich content",
    technology: "Swift, UIKit framework, MapKit, Figma, MongoDB Atlas",
    link:'https://github.com/harsh1234kr/GhumoZara',
    category: "Engineering"
  },
  {id:4,
    name: "Social Media Application",
    image: Proj1,
    description: " A clone of Facebook",
    technology: "Java, Springboot, MongoDB",
    link: 'https://github.com/harsh1234kr/Social-Media-Application-Using-Java-Springboot',
    category: "Engineering"
  },
  {id:5,
    name:"Secure File Storage System",
    image:proj5,
    technology: "NextJs, TailwindCSS, Prisma",
    link: 'https://github.com/harsh1234kr/Secure-File-Storage-System-using-Java',
    category: "Engineering"
  },
  {id:6,
    name:"Suzume No Tojimari",
    image:Suzum,
    description:"Suzume no Tojimari(Trailer) ",
    technology:"Final Cut Pro",
    link: 'https://www.instagram.com/reel/CdC6ft4IxYQ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    category: "AMVs"
  },{id:7,
  name:"Demon Slayer",
  image:Dem,
  description:" A tribute to Demon slayer corps. ",
  technology:"Imovies",
  link: 'https://www.instagram.com/reel/CcDJFvrgvSG/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  category: "AMVs"},
  {id:8,
    name:"Mahabharat X Demon Slayer",
    image:Mah,
      description:" I've been a fan of Mahabharat title song ever since I heard it. I think this song still has that unmatched positive and energetic vibe to it. Made an AMV using it, I hope yall enjoy it.",

    technology:"Imovies",
    link: 'https://www.instagram.com/reel/CZd8L0BOnXD/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
    category: "AMVs"},
    { id:9,
      name:"Anime Mix",
      image:Mix,
      description:" Anime Mix-🎵🎵Sickick-Infected",
      technology:"Final Cut Pro",
      link: 'https://github.com/billy3b/MoodDiary360',
      category: "AMVs"}
];