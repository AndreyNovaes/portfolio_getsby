import { Icon } from "@chakra-ui/react";
import React from "react";
import { 
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";

const githubIcon = <Icon as={AiFillGithub} />;
const linkedinIcon = <Icon as={AiFillLinkedin} />;
const whatsappIcon = <Icon as={FaWhatsapp} />;
const mailIcon = <Icon as={ AiOutlineMail } />;

const Socials = [
  { 
    name: "Github",
    path: "https://github.com/AndreyNovaes",
    icon: githubIcon,
  },
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/andrey-de-novaes",
    icon: linkedinIcon,
  },
  {
    name: "Whatsapp",
    path: "https://wa.me/552194312856",
    icon: whatsappIcon,
  },
  {
    name: "Email",
    path: "mailto:andreynovaespro@gmail.com",
    icon: mailIcon,
  }
]

export default Socials
