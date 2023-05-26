import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myresume from "../downloads/Sohel-Syed-Resume.pdf";
export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        id="nav-menu"
        position="fixed"
        w="100%"
        top={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading>SOHEL</Heading>
          <Flex gap={4} alignItems={"center"}>
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
            <a
              id="resume-link-1"
              className="nav-link resume"
              href={myresume}
              download="Sohel-Syed-Resume.pdf"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1BQS12moCHECzWVibbiqGVVUZzCxFzvMS/view?usp=share_link"
                );
              }}
            >
              <Button className="nav-link resume" id="resume-button-1">
                Resume
              </Button>
            </a>{" "}
          </Flex>
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
/**
 <a
          id="resume-link-1"
          className="nav-link resume"
          href={"Varun_Ergurala_Resume.pdf"}
          download="Varun_Ergurala_Resume.pdf"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/17cTzx5JO8LVlbzWnptj6L2Xp4sPyyx8_/view?usp=share_link"
            );
          }}
        >
          <Button
            id="resume-button-1"
            download="Varun_Ergurala_Resume.pdf"
            _hover={{
              color: colorMode === "light" ? "black" : "white",
              cursor: "pointer",
            }}
            bgGradient={
              colorMode === "light"
                ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                : "none"
            }
            color={colorMode === "light" ? "white" : "black"}
            bgColor={colorMode === "dark" ? "red" : "none"}
            borderRadius={"10px"}
            fontSize={["xs", "sm", "lg", "xl"]}
          >
            Resume
            <Box as={"span"} ml={"1"} fontSize={["xs", "sm", "lg", "xl"]}>
              {<TfiDownload />}
            </Box>
          </Button>
        </a> 

 */
