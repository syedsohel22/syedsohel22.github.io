import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";

import "./home.css";

const Home = () => {
  return (
    <Box id="home" w="100%">
      <Flex align="center" justify="center" gap={10} mt={200}>
        <Box>
          <Heading
            id="user-detail-name"
            bgGradient="linear(to-l, #0A8CF0 52%, #36FFFF 100%)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
          >
            Sohel Syed
          </Heading>
          <Heading id="user-detail-intro">A Full Stack Developer.!</Heading>
        </Box>

        <Img
          className="home-img"
          src="https://avatars.githubusercontent.com/u/83800834?v=4"
          alt="sohel-syed"
          borderRadius="62% 38% 29% 71% / 35% 43% 57% 65%  "
        />
      </Flex>
    </Box>
  );
};

export default Home;
