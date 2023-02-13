import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Contact = () => {
  return (
    <Box
      id="contact"
      alignItems="centers"
      justifyContent="center"
      w="100%"
      h="100vh"
      bg="gray.300"
    >
      <Text id="contact-github">Github</Text>
      <Text id="contact-linkedin">LinkedIn</Text>
      <Text id="contact-phone">+91 9420278216</Text>
      <Text id="contact-email">mr.sohelsyed@gmail.com</Text>
    </Box>
  );
};

export default Contact;
