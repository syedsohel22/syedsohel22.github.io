import { Box, Heading, Image, Text, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import postman from "../downloads/postman-png.png";
import vscode from "../downloads/vscode-png.png";
const Skills = () => {
  return (
    <Box id="skills" w="100%" bg={"gray.100"} py={20}>
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
          src="https://img.icons8.com/color/96/typescript.png"
          alt="Typescript"
          name="Typescript"
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
        <SkillCard
          src="https://img.icons8.com/color/96/nextjs.png"
          alt="NextJS"
          name="NextJS"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/tailwindcss.png"
          alt="tailwindCSS"
          name="TailwindCSS"
        />
        <SkillCard
          src="https://img.icons8.com/color/96/material-ui.png"
          alt="Material-UI"
          name="Material-UI"
        />
      </Wrap>
      <Box px={10}>
        <Heading textAlign="center" mb={5}>
          Tools
        </Heading>
      </Box>
      <Wrap justify="center" spacing={5} px={5}>
        {/* add tools here */}
        <SkillCard
          src="https://img.icons8.com/color/96/git.png"
          alt="Git"
          name="Git"
        />

        <SkillCard src={vscode} alt="vs-code" name="vs-code" />

        <SkillCard src={postman} alt="Postman" name="Postman" />
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
