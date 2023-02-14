import {
  Box,
  Flex,
  //Link,
  Button,
  //useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AnchorLink from "react-anchor-link-smooth-scroll";
// const NavLink = () => (
//   <Link
//     px={2}
//     py={1}
//     rounded={"md"}
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href={"#"}
//   >
//     {/* // {children} */}
//   </Link>
// );

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  //const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Flex gap={4}>
            <AnchorLink href="#home">
              <Text>Home</Text>
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
            <AnchorLink href="">
              <Text className="nav-link resume">Resume</Text>
            </AnchorLink>
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
