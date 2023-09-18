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
      className="about section nav-link about"
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
          Hello, my name is Sohel Syed. Highly adept full-stack web developer
          with a robust command of the MERN stack. demonstrated ability to
          deliver successful solo and collaborative projects. Proficient in
          harnessing generative AI and rapidly acquiring new tech stacks.
          Combines technical prowess with good problem-solving and teamwork
          skills.
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
