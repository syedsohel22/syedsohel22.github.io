import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Center, Heading, Img, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" className="about section" w="100%" bg="gray.200" mt={200}>
      <Heading>ABOUT</Heading>
      <Text id="user-detail-intro">
        Hello my Name is Sohel Syed I am a Full Stack Developer
      </Text>
      <Center p={26} border="2px solid green" mt={200}>
        <GitHubCalendar
          username="syedsohel22"
          align="center"
          fontSize={13}
          p="10"
          mt={200}
        ></GitHubCalendar>
      </Center>
      <Center id="github-streak-stats" p={10}>
        <Img
          src="https://github-readme-stats.vercel.app/api?username=syedsohel22&count_private=true&show_icons=true&bg_color=00000000"
          alt="stat"
        />
      </Center>
      {/* <Center>
        <Img
          strc="https://github-readme-stats.vercel.app/api/top-langs/?username=syedsohel22"
          alt="top-lang"
        />
        
      </Center> */}
      <Center>
        <a href="https://github.com/syedsohel22/github-readme-stats">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/pin/?username=syedsohel22&repo=github-readme-stats"
            alt="a"
          />
        </a>
        <a href="https://github.com/syedsohel22/convoychat">
          <img
            align="center"
            src="https://github-readme-stats.vercel.app/api/pin/?username=syedsohel22&repo=convoychat"
            alt="b"
          />
        </a>
      </Center>
    </Box>
  );
};

export default About;
