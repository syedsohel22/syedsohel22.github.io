import React from "react";

import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import myresume from "../downloads/Sohel_Syed_Resume.pdf";
const About = () => {
  return (
    <Flex
      id="about"
      className="about section"
      w="100%"
      bg="gray.100"
      alignItems={"center"}
      justifyContent={"center"}
      py={20}
    >
      <Stack alignItems={"center"}>
        <Heading
          className="about section"
          textAlign={"center"}
          fontFamily={"roboto"}
        >
          About Me
        </Heading>
        <Text
          id="user-detail-name"
          textAlign={"center"}
          fontFamily={"logofont"}
          fontSize={"2rem"}
        >
          Sohel Syed
        </Text>
        <Container id="user-detail-intro" textAlign={"center"}>
          <span> Hello my Name is Sohel Syed I am a Full Stack Developer</span>
          An enthusiastic Full-stack Developer, skilled in React.js. Developing
          websites using JavaScript, Node.js, Express.js, MongoDB. An optimistic
          man, always ready to take a critical decision, ready to work under
          pressure. Always ready to try some new things for optimization.
        </Container>
        <Text></Text>
        <Button
          fontSize={"sm"}
          fontWeight={"bold"}
          bg={"#b8ccdf"}
          color={"black"}
          variant="solid"
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
