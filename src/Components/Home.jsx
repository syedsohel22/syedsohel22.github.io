import { Box, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";

import "./home.css";

const Home = () => {
  return (
    <Box id="home" h="100vh">
      <Flex align="center" justify="center" gap={10} mt={10}>
        <Box>
          <Heading
            id="user-detail-name"
            fontSize={80}
            fontFamily={"old english"}
          >
            Sohel Syed
          </Heading>
          <Heading id="user-detail-intro">A Full Stack Developer.!</Heading>
        </Box>

        <Img
          className="home-img"
          src="https://avatars.githubusercontent.com/u/83800834?v=4"
          alt="sohel-syed"
          borderRadius="50%"
        />
      </Flex>
    </Box>
  );
};

export default Home;
