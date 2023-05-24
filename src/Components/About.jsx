import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Center, Heading, Img, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" className="about section" w="100%" bg="gray.200" mt={200}>
      <Heading className="about section">ABOUT</Heading>
      <Text id="user-detail-name">Sohel Syed</Text>
      <Text id="user-detail-intro">
        Hello my Name is Sohel Syed I am a Full Stack Developer
      </Text>
      <Center p={26} mt={200}>
        <GitHubCalendar
          username="syedsohel22"
          align="center"
          fontSize={13}
          p="10"
          mt={200}
          border="1px solid black"
        ></GitHubCalendar>
      </Center>
      <Box align="center">
        <p>
          <Img
            align="center"
            width="30%"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=syedsohel22&show_icons=true&locale=en&layout=compact"
            alt="syedsohel22"
            id="github-stats-card"
          />
        </p>

        <p>
          <Img
            align="center"
            width="30%"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=syedsohel22&show_icons=true&locale=en"
            alt="syedsohel22"
            id="github-top-langs"
          />
        </p>

        <p>
          <Img
            align="center"
            width="30%"
            src="https://github-readme-streak-stats.herokuapp.com/?user=syedsohel22&"
            alt="syedsohel22"
            id="github-streak-stats"
          />
        </p>
      </Box>
    </Box>
  );
};

export default About;
