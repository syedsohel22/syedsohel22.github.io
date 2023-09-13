import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Heading,
  Image,
  Img,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import myresume from "../downloads/Sohel_Syed_Resume.pdf";
const About = () => {
  const gitCardTheme = useColorModeValue("buefy", "midnight-purple");
  const commonBg = useColorModeValue("#e9d8fd", "#11041c");
  const gitCardBg = useColorModeValue("faf5ff", "0e0311");
  const gitCardBorder = useColorModeValue("none", "c01ac0");
  return (
    <Box
      id="about"
      className="about section"
      w="100%"
      bg="gray.200"
      mt={200}
      alignItems={"center"}
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
      <Center p={10} mt={200} border={"1px solid black"} m={"auto"} w={"80%"}>
        <GitHubCalendar
          username="syedsohel22"
          align="center"
          fontSize={13}
          p="10"
          mt={200}
        ></GitHubCalendar>
      </Center>
      <HStack w={"80%"} h={"100vh"} justifyContent={"center"} m={"auto"}>
        <p>
          <Img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=syedsohel22&show_icons=true&locale=en&theme=buefy&bg_color=faf5ff&border_radius=10&border_color=none&hide_border=true"
            alt="syedsohel22"
            id="github-stats-card"
          />
        </p>
        <p>
          <Img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=syedsohel22&show_icons=true&locale=en&layout=compact"
            alt="syedsohel22"
            id="github-stats-card"
          />
        </p>
        {/* <p>
          <Img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=syedsohel22&show_icons=true&locale=en"
            alt="syedsohel22"
            id="github-top-langs"
          />
        </p> */}

        <p>
          <Img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=syedsohel22&"
            alt="syedsohel22"
            id="github-streak-stats"
          />
        </p>
      </HStack>
      {/* <Flex
        // border='2px solid yellow'
        //className={Styles.gitCalHeadingWrapper}
        rowGap={{ base: "6", sm: "12", md: "16", lg: "20" }}
        wrap="wrap"
      >
        skills-card
        <Image
          id="github-top-langs"
          src={`https://github-readme-stats.vercel.app/api/top-langs?username=SanketPotdar121695&show_icons=true&locale=en&layout=compact&theme=${gitCardTheme}&bg_color=${gitCardBg}&border_radius=10&hide_border=true&border_color=${gitCardBorder}`}
          alt="top-langs"
          w={{ base: "100%", md: "70%", lg: "40%" }}
          m="auto"
          boxShadow={useColorModeValue(
            "rgba(0, 0, 0, 0.4) 0px 0px 15px",
            "rgba(110, 13, 208, 0.4) 0px 0px 15px"
          )}
          _hover={{
            boxShadow: useColorModeValue(
              "rgba(0, 0, 0, 0.6) 0px 0px 30px",
              "rgba(192, 26, 192, 0.8) 0px 0px 30px"
            ),
          }}
          transition="0.5s"
          borderRadius="10px"
        />
        <Image
          id="github-streak-stats"
          src={`https://github-readme-streak-stats.herokuapp.com/?user=SanketPotdar121695&theme=${gitCardTheme}&background=${gitCardBg}&border_radius=10&border=${gitCardBorder}&hide_border=true&stroke=${gitCardBorder}&fire=ed8936&currStreakLabel=${useColorModeValue(
            "886bd3",
            "9745f5"
          )}`}
          alt="readme-streak-stats"
          w={{ base: "100%", md: "70%", lg: "45%" }}
          m="auto"
          boxShadow={useColorModeValue(
            "rgba(0, 0, 0, 0.4) 0px 0px 15px",
            "rgba(110, 13, 208, 0.4) 0px 0px 15px"
          )}
          _hover={{
            boxShadow: useColorModeValue(
              "rgba(0, 0, 0, 0.6) 0px 0px 30px",
              "rgba(192, 26, 192, 0.8) 0px 0px 30px"
            ),
          }}
          transition="0.5s"
          borderRadius="10px"
        />
      </Flex> */}
    </Box>
  );
};

export default About;
