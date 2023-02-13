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
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

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
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} id="nav-menu">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Heading>SOHEL</Heading>
          <Flex gap={4}>
            <Box className="nav-link home">Home</Box>
            <Box className="nav-link about">About</Box>
            <Box className="nav-link skills">Skills</Box>
            <Box className="nav-link projects">Projects</Box>
            <Box className="nav-link contact">Contact</Box>
            <Box className="nav-link resume">Resume</Box>
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
