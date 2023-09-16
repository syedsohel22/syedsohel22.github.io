import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
const Home = () => {
  return (
    <Box id="home" w="100%" px={[4, 8, 16]} py={20}>
      <Flex
        direction={["column", "column", "row"]}
        align={["center", "center", "flex-start"]}
        justify="center"
        justify-content="center"
        alignItems={"center"}
        // gap={[6, 10]}
        gap={[12, 22]}
      >
        <Box>
          <Heading
            id="user-detail-name"
            // bgGradient="linear(to-l, #0A8CF0 52%, #36FFFF 100%)"
            bg={"#93a3b2"}
            bgClip="text"
            fontSize={["4xl", "5xl", "6xl"]}
            fontFamily={"logofont"}
            className="about section"
            mb={[2, 4]}
            p={2}
          >
            Sohel Syed
          </Heading>
          <Heading id="user-detail-intro" fontSize={["md", "lg", "xl"]}>
            A Full Stack Developer.!
          </Heading>
        </Box>
        <Img
          className="home-img"
          src="https://avatars.githubusercontent.com/u/83800834?v=4"
          alt="sohel-syed"
          borderRadius="62% 38% 29% 71% / 35% 43% 57% 65%  "
          maxW={["80%", "70%", "50%"]}
          p={2}
        />
      </Flex>
    </Box>
  );
};

export default Home;
