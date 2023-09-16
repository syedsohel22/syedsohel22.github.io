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
import gardenGurus from "../downloads/garden-gurus.png";
import travelbook from "../downloads/travelbook.png";
import medicure from "../downloads/medicure.png";
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
    title: "TravelBook (Hotel room booking app)",
    description:
      "Hotel room booking web application allow user to book hotel rooms",
    techStack: [
      "React",
      "Redux",
      "Chakra UI",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    githubLink: "https://github.com/syedsohel22/travelbook",
    deployedLink: "https://travelbook-alpha.vercel.app/",
    imageSrc: travelbook,
    flip: false,
  },

  {
    title: "Garden Gurus (Blog app)",
    description:
      "GardenGuru is an open-source blogging website where anyone can write, read and have text conversations about botanical plants and herbs. It helps people know the exact knowledge of nurturing any plant better and more efficiently.",
    techStack: [
      "React",
      "Redux",
      "Chakra UI",
      "MongoDB",
      "Express.js",
      "Node.js",
    ],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: gardenGurus,
    flip: true,
  },

  {
    title: "Medicure (Doctor appointment booking app)",
    description:
      "Application allows users to search for doctors by name, specialty, or location, view their availability, and book appointments online.",
    techStack: ["React", "Redux", "Chakra UI", "Json-Server"],
    githubLink: "https://github.com/example/project2",
    deployedLink: "https://example-project2.netlify.app/",
    imageSrc: medicure,
    flip: true,
  },
  // Add more project data objects here for additional projects
];

const Projects = () => {
  return (
    <Center id="projects" py={20} bg="gray.100">
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
