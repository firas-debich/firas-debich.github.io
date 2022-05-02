import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {AiFillPhone} from "react-icons/ai";
import Resume from "../assets/firas.pdf";
const array = [
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/debbich/",
    icon: <FaLinkedin size={30} />,
    isResume: false,
  },
  {
    name: "Github",
    link: "https://github.com/firas-debich",
    icon: <FaGithub size={30} />,
    isResume: false,
  },
  {
    name: "Email",
    link: "mailto:firasdebich06@gmail.com",
    icon: <HiOutlineMail size={30} />,
    isResume: false,
  },
  {
    name: "Phone",
    link: "tel:+21656642478",
    icon: <AiFillPhone size={30} />,
    isResume: false,
  },
  {
    name: "Resume",
    link: Resume,
    icon: <BsFillPersonLinesFill size={30} />,
    isResume: true,
  },
];

export default array;
