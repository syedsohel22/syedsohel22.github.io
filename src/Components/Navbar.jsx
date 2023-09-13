import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  useColorMode,
  Heading,
  Text,
} from "@chakra-ui/react";

import AnchorLink from "react-anchor-link-smooth-scroll";
import myresume from "../downloads/Sohel_Syed_Resume.pdf";

export default function Nav() {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={4}
      id="nav-menu"
      position="fixed"
      w="100%"
      top={0}
    >
      <Flex
        h={16}
        alignItems={["center", "center", "flex-start"]}
        flexDirection={["column", "column", "row"]}
        justifyContent={["space-between", "space-between", "flex-start"]}
      >
        <Heading mt={[4, 4, 0]}>SOHEL</Heading>
        <Flex
          gap={4}
          mt={[4, 4, 0]}
          alignItems={["center", "center", "flex-end"]}
        >
          <AnchorLink href="#home">
            <Text className="nav-link home">Home</Text>
          </AnchorLink>
          <AnchorLink href="#about">
            <Text className="nav-link about"> About</Text>
          </AnchorLink>
          <AnchorLink href="#skills">
            <Text className="nav-link skills">Skills</Text>
          </AnchorLink>
          <AnchorLink href="#projects">
            <Text className="nav-link projects">Projects</Text>
          </AnchorLink>
          <AnchorLink href="#contact">
            <Text className="nav-link contact">Contact</Text>
          </AnchorLink>
          {/* Resume */}
          <Button
            className="nav-link resume"
            id="resume-button-1"
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1BQS12moCHECzWVibbiqGVVUZzCxFzvMS/view?usp=share_link"
              );
            }}
          >
            <a
              id="resume-link-1"
              className="nav-link resume"
              href={myresume}
              download="Sohel-Syed-Resume.pdf"
            >
              Resume
            </a>{" "}
          </Button>
        </Flex>
        {/* <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex> */}
      </Flex>
    </Box>
  );
}
