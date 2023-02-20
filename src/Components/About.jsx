import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Box, Center, Img } from "@chakra-ui/react";

const About = () => {
  return (
    <Box id="about" className="about section" w="100%" bg="gray.200" mt={200}>
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
    </Box>
  );
};

export default About;
