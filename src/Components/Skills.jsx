// import { Box, Heading, Img, Text } from "@chakra-ui/react";
// import React from "react";

// const Skills = () => {
//   return (
//     <Box id="skills" w="100%" bg={"grey.100"} height={"80vh"}>
//       <Box p={"100px"}>
//         <Heading> Skills</Heading>
//       </Box>
//       <Box display={"flex"} gap={"10"} w={"90%"} m="auto">
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/480/html-5--v1.png"
//             alt="html-5--v1"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">HTML</Text>
//         </Box>
//         {/* <Box className="skills-card" border={"1px solid black"}>
//         <Img src="" alt="" />
//         <Text className="skills-card">html</Text>
//       </Box> */}
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/css3.png"
//             alt="css3"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">Css</Text>
//         </Box>
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/javascript--v1.png"
//             alt="javascript--v1"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">Javascript</Text>
//         </Box>
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/react-native.png"
//             alt="react-native"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">React</Text>
//         </Box>
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/chakra-ui.png"
//             alt="chakra-ui"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">Chakra-UI</Text>
//         </Box>
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/redux.png"
//             alt="redux"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">Redux</Text>
//         </Box>
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/nodejs.png"
//             alt="nodejs"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">Node</Text>
//         </Box>
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/express-js.png"
//             alt="express-js"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">Express-js</Text>
//         </Box>
//         <Box className="skills-card" border={"1px solid black"} p={"10px"}>
//           <Img
//             width="96px"
//             height="96px"
//             src="https://img.icons8.com/color/96/mongodb.png"
//             alt="mongodb"
//             className="skills-card-img"
//           />
//           <Text className="skills-card-name">Mongo DB</Text>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Skills;

import { Box, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const Skills = () => {
  return (
    <Box id="skills" w="100%" bg={"gray.100"} py={10}>
      <Box px={10}>
        <Heading textAlign="center" mb={5}>
          Skills
        </Heading>
      </Box>
      <Wrap justify="center" spacing={5} px={5}>
        <SkillCard
          src="https://img.icons8.com/color/480/html-5--v1.png"
          alt="HTML"
          name="HTML"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/css3.png"
          alt="CSS"
          name="CSS"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/javascript--v1.png"
          alt="JavaScript"
          name="JavaScript"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/react-native.png"
          alt="React"
          name="React"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/chakra-ui.png"
          alt="Chakra UI"
          name="Chakra UI"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/redux.png"
          alt="Redux"
          name="Redux"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/nodejs.png"
          alt="Node.js"
          name="Node.js"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/express-js.png"
          alt="Express.js"
          name="Express.js"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/mongodb.png"
          alt="MongoDB"
          name="MongoDB"
        />
      </Wrap>
    </Box>
  );
};

const SkillCard = ({ src, alt, name }) => {
  return (
    <WrapItem>
      <Box
        className="skills-card"
        borderWidth="1px"
        borderColor="black"
        borderRadius="md"
        p={3}
        textAlign="center"
        minW="150px"
        transition="transform 0.3s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Image
          className="skills-card-img"
          src={src}
          alt={alt}
          boxSize="60px"
          mx="auto"
        />
        <Text mt={2} className="skills-card-name">
          {name}
        </Text>
      </Box>
    </WrapItem>
  );
};

export default Skills;
