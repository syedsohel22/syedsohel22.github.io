import { Box, Img, Text } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box
      id="skills"
      w="100%"
      bg={"grey.100"}
      mt={200}
      display={"flex"}
      gap={"10"}
    >
      Skills
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/480/html-5--v1.png"
          alt="html-5--v1"
          className="skills-card-img"
        />
        <Text className="skills-card-name">HTML</Text>
      </Box>
      {/* <Box className="skills-card" border={"1px solid black"}>
        <Img src="" alt="" />
        <Text className="skills-card">html</Text>
      </Box> */}
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/css3.png"
          alt="css3"
          className="skills-card-img"
        />
        <Text className="skills-card-name">Css</Text>
      </Box>
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/javascript--v1.png"
          alt="javascript--v1"
          className="skills-card-img"
        />
        <Text className="skills-card-name">Javascript</Text>
      </Box>
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/react-native.png"
          alt="react-native"
          className="skills-card-img"
        />
        <Text className="skills-card-name">React</Text>
      </Box>
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/chakra-ui.png"
          alt="chakra-ui"
          className="skills-card-img"
        />
        <Text className="skills-card-name">Chakra-UI</Text>
      </Box>
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/redux.png"
          alt="redux"
          className="skills-card-img"
        />
        <Text className="skills-card-name">Redux</Text>
      </Box>
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/nodejs.png"
          alt="nodejs"
          className="skills-card-img"
        />
        <Text className="skills-card-name">Node</Text>
      </Box>
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/express-js.png"
          alt="express-js"
          className="skills-card-img"
        />
        <Text className="skills-card-name">Express-js</Text>
      </Box>
      <Box className="skills-card" border={"1px solid black"} p={"10px"}>
        <Img
          width="96px"
          height="96px"
          src="https://img.icons8.com/color/96/mongodb.png"
          alt="mongodb"
          className="skills-card-img"
        />
        <Text className="skills-card-name">Mongo DB</Text>
      </Box>
    </Box>
  );
};

export default Skills;
