import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
  useBreakpointValue, // Import the useBreakpointValue hook
} from "@chakra-ui/react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myresume from "../downloads/Sohel_Syed_Resume.pdf";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function TestNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false }); // Detect screen size

  return (
    <Box position={"sticky"} top={0}>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={1}
          ml={isMobile ? -2 : 0} // Adjust margin for mobile
          justifyContent={isMobile ? "center" : "start"} // Center for mobile, start for desktop
          alignItems="center"
        >
          {isMobile && (
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          )}

          <Text
            ml={isMobile ? 2 : 0} // Add margin for mobile
            textAlign={isMobile ? "center" : "left"}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            Sohel
          </Text>
        </Flex>

        {!isMobile && (
          <Stack flex={1} justify={"flex-end"} direction={"row"} spacing={6}>
            <Button
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
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
          </Stack>
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav onToggle={onToggle} isOpen={isOpen} />
      </Collapse>
    </Box>
  );
}
