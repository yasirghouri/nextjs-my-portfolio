import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { IProject, IService, ISkill } from "./type";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b> ,<b>SCSS</b>,<b>Next.js</b> & <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b>, <b>Nest.js </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>Nest.js</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Photoshop</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "GraphQL",
    about: "I can develop API using <b>GraphQL</b>",
  },
];

export const languages: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "NestJS",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "GraphQL",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "NextJS",
    level: "40",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "80",
  },
];

export const tools: ISkill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "SmartGit",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "40",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Burger Builder",
    description: "You can build your burger and order it after login in",
    image_path: "/images/burger_builder.png",
    deployed_url: "https://react-burger-builder-2d41d.web.app/",
    github_url: "https://github.com/yasirghouri/react-burger-builder",
    category: ["react", "firebase"],
    key_techs: ["React", "Firebase", "Redux"],
  },
  {
    id: 2,
    name: "Facebook Messenger Clone",
    image_path: "/images/fb_messenger_clone.png",
    deployed_url: "https://react-fb-messenger-clone-adc63.web.app/",
    github_url: "https://github.com/yasirghouri/react-facebook-messenger-clone",
    category: ["react", "firebase"],
    description:
      "Facebook Messenger Clone where you can enter your name and start chatting",
    key_techs: ["React", "Firebase"],
  },

  {
    id: 3,
    name: "Amazon Clone",
    image_path: "/images/amazon_clone.png",
    deployed_url: "https://react-a-clone.web.app/",
    github_url: "https://github.com/yasirghouri/react-amazon-clone",
    category: ["firebase", "react"],
    description: "Amazon Clone where you can add items to cart and login",
    key_techs: ["React", "Context API", "Firebase"],
  },

  {
    id: 4,
    name: "Realtime Chat App",
    image_path: "/images/chat_app.png",
    deployed_url: "https://react-chat-app-2021.netlify.app/",
    github_url: "https://github.com/yasirghouri/react-chat-app",
    category: ["react"],
    description:
      "Basic Realtime Chat App where one can create a room can talk to each other",
    key_techs: ["React", "React Chat Engine"],
  },

  {
    id: 5,
    name: "Food Recipe App",
    image_path: "/images/food_recipe_app.png",
    deployed_url: "https://yasirghouri.github.io/react-food-recipe-app/",
    github_url: "https://github.com/yasirghouri/react-food-recipe-app",
    category: ["firebase", "react"],
    description:
      "Food Recipe App where you can search a food recipe by food name",
    key_techs: ["React", "Firebase"],
  },

  {
    id: 6,
    name: "Covid-19 Tracker",
    image_path: "/images/covid_tracker.png",
    deployed_url: "https://react-covid19-tracker-86716.web.app/",
    github_url: "https://github.com/yasirghouri/react-covid19-tracker",
    category: ["react", "firebase"],
    description:
      "Covid-19 Tracker where you can see covid cases around the world",
    key_techs: ["React", "Firebase", "Chart.js"],
  },
];
