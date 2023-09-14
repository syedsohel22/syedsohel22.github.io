import React from "react";

import { Box, Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import myresume from "../downloads/Sohel_Syed_Resume.pdf";
const About = () => {
  return (
    <Flex
      id="about"
      className="about section"
      w="100%"
      bg="gray.200"
      mt={200}
      alignItems={"center"}
      minH={"100vh"}
      justifyContent={"center"}
    >
      <Stack alignItems={"center"}>
        <Heading className="about section" textAlign={"center"}>
          About Me
        </Heading>
        <Text
          id="user-detail-name"
          textAlign={"center"}
          fontFamily={"monospace"}
          fontSize={"4rem"}
        >
          Sohel Syed
        </Text>
        <Text id="user-detail-intro" textAlign={"center"}>
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
          <a
            id="resume-link-2"
            href={myresume}
            download="Sohel-Syed-Resume.pdf"
          >
            Resume
          </a>
        </Button>{" "}
      </Stack>
    </Flex>
  );
};

export default About;
