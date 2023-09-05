// // import {
// //   Box,
// //   Center,
// //   Heading,
// //   Image,
// //   Link,
// //   SimpleGrid,
// //   Text,
// // } from "@chakra-ui/react";
// // import React from "react";

// // const Projects = () => {
// //   return (
// //     <Center id="projects" w="90%" m="auto">
// //       {/* project-1 */}

// //       <SimpleGrid minChildWidth="120px" spacing="10px">
// //         <Box className="project-card" border={"1px solid grey"} p={5}>
// //           <Image
// //             src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
// //             alt="projetc-1"
// //           />
// //           <Heading size={"sm"} className="project-title">
// //             Booking.com
// //           </Heading>
// //           <Text className="project-description">
// //             Booking.com is a Dutch online travel agency for lodging reservations
// //             & other travel products, and a subsidiary of Booking Holding.
// //           </Text>
// //           <Text className="project-tech-stack">
// //             <spam>HTML</spam>
// //             <spam>CSS</spam>
// //             <spam>JavaScript</spam>
// //             <spam>Json-server</spam>
// //           </Text>
// //           <Link
// //             className="project-github-link"
// //             href="https://github.com/sapna1309/Booking-Clone"
// //           >
// //             LINK
// //           </Link>
// //           <Link
// //             className="project-deployed-link"
// //             href="https://neon-salmiakki-934ec6.netlify.app/"
// //           >
// //             LINK
// //           </Link>
// //         </Box>

// //         {/* project-2 */}
// //         <Box className="project-card" border={"1px solid grey"} p={5}>
// //           <Image
// //             src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
// //             alt="projetc-1"
// //           />
// //           <Heading size={"sm"} className="project-title">
// //             Booking.com
// //           </Heading>
// //           <Text className="project-description">
// //             Booking.com is a Dutch online travel agency for lodging reservations
// //             & other travel products, and a subsidiary of Booking Holding.
// //           </Text>
// //           <Text className="project-tech-stack">
// //             <spam>HTML</spam>
// //             <spam>CSS</spam>
// //             <spam>JavaScript</spam>
// //             <spam>Json-server</spam>
// //           </Text>
// //           <Link
// //             className="project-github-link"
// //             href="https://github.com/sapna1309/Booking-Clone"
// //           >
// //             LINK
// //           </Link>
// //           <Link
// //             className="project-deployed-link"
// //             href="https://neon-salmiakki-934ec6.netlify.app/"
// //           >
// //             LINK
// //           </Link>
// //         </Box>
// //         {/* project-3 */}
// //         <Box className="project-card" border={"1px solid grey"} p={5}>
// //           <Image
// //             src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
// //             alt="projetc-1"
// //           />
// //           <Heading size={"sm"} className="project-title">
// //             Booking.com
// //           </Heading>
// //           <Text className="project-description">
// //             Booking.com is a Dutch online travel agency for lodging reservations
// //             & other travel products, and a subsidiary of Booking Holding.
// //           </Text>
// //           <Text className="project-tech-stack">
// //             <spam>HTML</spam>
// //             <spam>CSS</spam>
// //             <spam>JavaScript</spam>
// //             <spam>Json-server</spam>
// //           </Text>
// //           <Link
// //             className="project-github-link"
// //             href="https://github.com/sapna1309/Booking-Clone"
// //           >
// //             LINK
// //           </Link>
// //           <Link
// //             className="project-deployed-link"
// //             href="https://neon-salmiakki-934ec6.netlify.app/"
// //           >
// //             LINK
// //           </Link>
// //         </Box>
// //         {/* project-4 */}
// //         <Box className="project-card" border={"1px solid grey"} p={5}>
// //           <Image
// //             src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
// //             alt="projetc-1"
// //           />
// //           <Heading size={"sm"} className="project-title">
// //             Booking.com
// //           </Heading>
// //           <Text className="project-description">
// //             Booking.com is a Dutch online travel agency for lodging reservations
// //             & other travel products, and a subsidiary of Booking Holding.
// //           </Text>
// //           <Text className="project-tech-stack">
// //             <spam>HTML</spam>
// //             <spam>CSS</spam>
// //             <spam>JavaScript</spam>
// //             <spam>Json-server</spam>
// //           </Text>
// //           <Link
// //             className="project-github-link"
// //             href="https://github.com/sapna1309/Booking-Clone"
// //           >
// //             LINK
// //           </Link>
// //           <Link
// //             className="project-deployed-link"
// //             href="https://neon-salmiakki-934ec6.netlify.app/"
// //           >
// //             LINK
// //           </Link>
// //         </Box>
// //       </SimpleGrid>
// //     </Center>
// //   );
// // };

// // export default Projects;

// import {
//   Box,
//   Center,
//   Heading,
//   Image,
//   Link,
//   SimpleGrid,
//   Text,
// } from "@chakra-ui/react";
// import React from "react";

// const projectData = [
//   {
//     title: "Booking.com",
//     description:
//       "Booking.com is a Dutch online travel agency for lodging reservations...",
//     techStack: ["HTML", "CSS", "JavaScript", "Json-server"],
//     githubLink: "https://github.com/sapna1309/Booking-Clone",
//     deployedLink: "https://neon-salmiakki-934ec6.netlify.app/",
//     imageSrc:
//       "https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png",
//   },
//   // Add more project data objects here for additional projects
// ];

// const Projects = () => {
//   return (
//     <Center id="projects" w="90%" m="auto">
//       <SimpleGrid columns={[1, 2, 3]} spacing={6} my={10}>
//         {projectData.map((project, index) => (
//           <Box
//             key={index}
//             className="project-card"
//             border="1px solid grey"
//             p={5}
//           >
//             <Image src={project.imageSrc} alt={project.title} />
//             <Heading size="sm" className="project-title">
//               {project.title}
//             </Heading>
//             <Text className="project-description">{project.description}</Text>
//             <Text className="project-tech-stack">
//               {project.techStack.join(" • ")}
//             </Text>
//             <Link className="project-github-link" href={project.githubLink}>
//               GitHub
//             </Link>
//             <Link className="project-deployed-link" href={project.deployedLink}>
//               Deployed
//             </Link>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Center>
//   );
// };

// export default Projects;
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

const Portfolio = () => {
  return (
    <Center id="portfolio" py={10} bg="gray.100">
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
      direction={["column", "column", "row"]}
      alignItems="center"
      boxShadow="md"
      p={6}
      bg="white"
      id="projects"
    >
      <Box
        flex={1}
        order={imageSide === "left" ? 1 : 2}
        className="project-card"
      >
        <Image src={imageSrc} alt={title} maxW="100%" boxShadow="lg" />
      </Box>
      <Box flex={1} p={[4, 6]} order={detailsSide === "left" ? 1 : 2}>
        <Heading size="md">{title}</Heading>
        <Text mt={2}>{description}</Text>
        <Text mt={3} fontWeight="bold">
          Tech Stack: {techStack.join(" • ")}
        </Text>
        <Flex mt={3}>
          <Link href={githubLink} mr={3} fontSize="lg">
            <FaGithub />
          </Link>
          <Link href={deployedLink} fontSize="lg">
            <FaExternalLinkAlt />
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Portfolio;
