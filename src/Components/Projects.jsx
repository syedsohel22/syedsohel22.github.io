import {
  Box,
  Center,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Projects = () => {
  return (
    <Center id="projects" w="90%" m="auto">
      {/* project-1 */}

      <SimpleGrid minChildWidth="120px" spacing="10px">
        <Box className="project-card" border={"1px solid grey"} p={5}>
          <Image
            src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
            alt="projetc-1"
          />
          <Heading size={"sm"} className="project-title">
            Booking.com
          </Heading>
          <Text className="project-description">
            Booking.com is a Dutch online travel agency for lodging reservations
            & other travel products, and a subsidiary of Booking Holding.
          </Text>
          <Text className="project-tech-stack">
            <spam>HTML</spam>
            <spam>CSS</spam>
            <spam>JavaScript</spam>
            <spam>Json-server</spam>
          </Text>
          <Link
            className="project-github-link"
            href="https://github.com/sapna1309/Booking-Clone"
          >
            LINK
          </Link>
          <Link
            className="project-deployed-link"
            href="https://neon-salmiakki-934ec6.netlify.app/"
          >
            LINK
          </Link>
        </Box>

        {/* project-2 */}
        <Box className="project-card" border={"1px solid grey"} p={5}>
          <Image
            src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
            alt="projetc-1"
          />
          <Heading size={"sm"} className="project-title">
            Booking.com
          </Heading>
          <Text className="project-description">
            Booking.com is a Dutch online travel agency for lodging reservations
            & other travel products, and a subsidiary of Booking Holding.
          </Text>
          <Text className="project-tech-stack">
            <spam>HTML</spam>
            <spam>CSS</spam>
            <spam>JavaScript</spam>
            <spam>Json-server</spam>
          </Text>
          <Link
            className="project-github-link"
            href="https://github.com/sapna1309/Booking-Clone"
          >
            LINK
          </Link>
          <Link
            className="project-deployed-link"
            href="https://neon-salmiakki-934ec6.netlify.app/"
          >
            LINK
          </Link>
        </Box>
        {/* project-3 */}
        <Box className="project-card" border={"1px solid grey"} p={5}>
          <Image
            src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
            alt="projetc-1"
          />
          <Heading size={"sm"} className="project-title">
            Booking.com
          </Heading>
          <Text className="project-description">
            Booking.com is a Dutch online travel agency for lodging reservations
            & other travel products, and a subsidiary of Booking Holding.
          </Text>
          <Text className="project-tech-stack">
            <spam>HTML</spam>
            <spam>CSS</spam>
            <spam>JavaScript</spam>
            <spam>Json-server</spam>
          </Text>
          <Link
            className="project-github-link"
            href="https://github.com/sapna1309/Booking-Clone"
          >
            LINK
          </Link>
          <Link
            className="project-deployed-link"
            href="https://neon-salmiakki-934ec6.netlify.app/"
          >
            LINK
          </Link>
        </Box>
        {/* project-4 */}
        <Box className="project-card" border={"1px solid grey"} p={5}>
          <Image
            src="https://sapna1309.github.io/static/media/homePage.cb958a81ec924b76e139.png"
            alt="projetc-1"
          />
          <Heading size={"sm"} className="project-title">
            Booking.com
          </Heading>
          <Text className="project-description">
            Booking.com is a Dutch online travel agency for lodging reservations
            & other travel products, and a subsidiary of Booking Holding.
          </Text>
          <Text className="project-tech-stack">
            <spam>HTML</spam>
            <spam>CSS</spam>
            <spam>JavaScript</spam>
            <spam>Json-server</spam>
          </Text>
          <Link
            className="project-github-link"
            href="https://github.com/sapna1309/Booking-Clone"
          >
            LINK
          </Link>
          <Link
            className="project-deployed-link"
            href="https://neon-salmiakki-934ec6.netlify.app/"
          >
            LINK
          </Link>
        </Box>
      </SimpleGrid>
    </Center>
  );
};

export default Projects;
