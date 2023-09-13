import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import React from "react";

const projectData = [
  {
    title: "Health Prime - Clone of TATA 1mg.com",
    description:
      "Health Prime helps you to buy medicines online and get them delivered at your doorstep anywhere in India!.",
    techStack: ["Next.js", "Chakra-UI", "Redux", "Json-server"],
    githubLink: "https://github.com/syedsohel22/Tata-1mg-clone",
    deployedLink: "https://roasted-geese-6392-xh5g.vercel.app/",
    imageSrc:
      "https://user-images.githubusercontent.com/112754116/222733399-cc8c0c6d-aae6-4e9f-ad45-e4f42ddd1ef5.png",
    flip: false,
  },
  {
    title: "Project 2",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    techStack: ["React", "Chakra UI"],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: "https://via.placeholder.com/300x200",
    flip: false,
  },

  {
    title: "Project 3",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    techStack: ["React", "Chakra UI"],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: "https://via.placeholder.com/300x200",
    flip: true,
  },

  {
    title: "Project 4",
    description:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    techStack: ["React", "Chakra UI"],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: "https://via.placeholder.com/300x200",
    flip: true,
  },
  // Add more project data objects here for additional projects
];

const Projects = () => {
  return (
    <Center id="projects" py={10} bg="gray.100">
      <SimpleGrid columns={[1, 1, 2]} spacing={6} w="90%" m="auto">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </SimpleGrid>
    </Center>
  );
};

const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  deployedLink,
  imageSrc,
  flip,
}) => {
  const imageSide = flip ? "right" : "left";
  const detailsSide = flip ? "left" : "right";

  return (
    <Flex
      className="project-card"
      direction={["column", "column", "row"]}
      alignItems="center"
      boxShadow="md"
      p={6}
      bg="white"
    >
      <Box flex={1} order={imageSide === "left" ? 1 : 2}>
        <Image src={imageSrc} alt={title} maxW="100%" boxShadow="lg" />
      </Box>
      <Box flex={1} p={[4, 6]} order={detailsSide === "left" ? 1 : 2}>
        <Heading size="md" className="project-title">
          {title}
        </Heading>
        <Text mt={2} className="project-description">
          {description}
        </Text>
        <Text mt={3} fontWeight="bold" className="project-tech-stack">
          Tech Stack: {techStack.join(" | ")}
        </Text>
        <Flex mt={3} className="project-github-link">
          <Link href={githubLink} mr={3} fontSize="lg">
            <FaGithub />
          </Link>
          <Link
            href={deployedLink}
            fontSize="lg"
            className="project-deployed-link"
          >
            <FaExternalLinkAlt />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Projects;
