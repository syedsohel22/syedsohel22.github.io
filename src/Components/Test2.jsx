// Navbar.js
import React, { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      p={4}
      bg="teal.500"
      color="white"
    >
      <Box>
        <Link href="#" _hover={{ textDecoration: "none" }}>
          <Text fontSize="2xl">Sohel</Text>
        </Link>
      </Box>

      {isLargerThan768 ? (
        <HStack spacing={4}>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#skills">Skills</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </HStack>
      ) : (
        <Box>
          <IconButton
            icon={<HamburgerIcon />}
            size="md"
            aria-label="Open Menu"
            display={{ base: "block", md: "none" }}
            onClick={toggleMenu}
          />
          {isOpen && (
            <Menu onClose={toggleMenu}>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} />
              <MenuList>
                <MenuItem href="#about">About</MenuItem>
                <MenuItem href="#skills">Skills</MenuItem>
                <MenuItem href="#projects">Projects</MenuItem>
                <MenuItem href="#contact">Contact</MenuItem>
                <MenuItem href="#home">Home</MenuItem>
              </MenuList>
            </Menu>
          )}
        </Box>
      )}
    </Flex>
  );
};

export default Navbar;
