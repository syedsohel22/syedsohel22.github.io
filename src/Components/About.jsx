import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Button, Center, Heading, Img, Text } from "@chakra-ui/react";
import myresume from "../downloads/Sohel_Syed_Resume.pdf";
const About = () => {
  return (
    <Box id="about" className="about section" w="100%" bg="gray.200" mt={200}>
      <Heading className="about section">About Me</Heading>
      <Text id="user-detail-name">Sohel Syed</Text>
      <Text id="user-detail-intro">
        <span> Hello my Name is Sohel Syed I am a Full Stack Developer</span>
        <br />
        An enthusiastic Full-stack Developer, skilled in React.js. Developing{" "}
        <br />
        websites using JavaScript, Node.js, Express.js, MongoDB. An optimistic{" "}
        <br />
        man, always ready to take a critical decision, ready to work under{" "}
        <br />
        pressure. Always ready to try some new things for optimization. <br />
      </Text>
      <Text></Text>
      <Button
        id="resume-button-2"
        onClick={() => {
          window.open(
            "https://drive.google.com/file/d/1BQS12moCHECzWVibbiqGVVUZzCxFzvMS/view?usp=share_link",
            "_blank"
          );
        }}
      >
        {" "}
        <a id="resume-link-2" href={myresume} download="Sohel-Syed-Resume.pdf">
          Resume
        </a>
      </Button>{" "}
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
