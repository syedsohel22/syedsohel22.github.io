import { Box, Heading } from "@chakra-ui/react";
import React from "react";

import "./home.css";
const Home = () => {
  return (
    <Box id="home">
      <Heading id="user-detail-name" fontSize={80} fontFamily={"old english"}>
        Sohel Syed
      </Heading>
      <Heading id="user-detail-intro">A Full Stack Developer.!</Heading>
    </Box>
  );
};

export default Home;
