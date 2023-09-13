import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
const Home = () => {
  return (
    <Box id="home" w="100%" px={[4, 8, 16]} py={20}>
      <Flex
        direction={["column", "column", "row"]} // Adjust direction for different screen sizes
        align={["center", "center", "flex-start"]} // Adjust alignment for different screen sizes
        justify="center"
        justify-content="center"
        alignItems={"center"}
        gap={[6, 10]} // Adjust gap for different screen sizes
      >
        <Box>
          <Heading
            id="user-detail-name"
            bgGradient="linear(to-l, #0A8CF0 52%, #36FFFF 100%)"
            bgClip="text"
            fontSize={["4xl", "5xl", "6xl"]} // Adjust font size for different screen sizes
            fontWeight="extrabold"
            className="about section"
            mb={[2, 4]} // Adjust margin bottom for different screen sizes
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
          maxW={["80%", "70%", "50%"]} // Adjust maximum width for different screen sizes
        />
      </Flex>
    </Box>
  );
};

export default Home;
