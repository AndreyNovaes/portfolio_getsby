import React from "react";
import { Box, Heading, Container, Text, Button, Stack, useDisclosure, Modal } from "@chakra-ui/react";
import { Link as gatsbyLink } from "gatsby";
// import ModalComponent from "../Modal";
import projects from "../../assets/Projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {

  return (
    <>
      <Container maxW="container.xl" paddingY='10'>
        <Stack direction="row" wrap="wrap" justify="center">
          {projects.map(({ id, title, description, image, github, tags, deploy }) => (
            <ProjectCard
              id={id}
              title={title}
              description={description}
              image={image}
              github={github}
              tags={tags}
              deploy={deploy}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
