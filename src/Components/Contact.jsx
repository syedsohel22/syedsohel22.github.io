// import { Box, Text } from "@chakra-ui/react";
// import React from "react";

// const Contact = () => {
//   return (
//     <Box
//       id="contact"
//       alignItems="centers"
//       justifyContent="center"
//       w="100%"
//       mt={200}
//       bg="gray.100"
//     >
//       <Text id="contact-github">Github</Text>
//       <Text id="contact-linkedin">LinkedIn</Text>
//       <Text id="contact-phone">+91 9420278216</Text>
//       <Text id="contact-email">mr.sohelsyed@gmail.com</Text>
//     </Box>
//   );
// };

// export default Contact;
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaMobileAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import React from "react";

const Contact = () => {
  return (
    <Center id="contact" py={10} bg="gray.100">
      <Box w="90%" m="auto">
        <Heading mb={4}>Contact Me</Heading>
        <SimpleGrid columns={[1, 2]} spacing={6}>
          <ContactDetail
            id="contact-email"
            icon={FaEnvelope}
            label="Email"
            value={
              <Link href="mailto:mr.sohelsyed@gmail.com">
                mr.sohelsyed@gmail.com
              </Link>
            }
          />
          <ContactDetail
            id="contact-phone"
            icon={FaMobileAlt}
            label="Phone"
            value="+91 9420278216"
          />
          <ContactDetail
            id="contact-linkedin"
            icon={FaLinkedin}
            label="LinkedIn"
            value={
              <Link href="https://www.linkedin.com/in/sohelsyed22/" isExternal>
                LinkedIn Profile
              </Link>
            }
          />
          <ContactDetail
            icon={FaGithub}
            label="GitHub"
            id="contact-github"
            value={
              <Link href="https://github.com/syedsohel22" isExternal>
                GitHub Profile
              </Link>
            }
          />
        </SimpleGrid>
      </Box>
    </Center>
  );
};

const ContactDetail = ({ icon, label, value }) => {
  return (
    <Flex align="center" p={3} bg="white" borderRadius="md" boxShadow="md">
      <Icon as={icon} boxSize={6} color="gray.600" mr={2} />
      <Box>
        <Text fontWeight="bold" fontSize="lg">
          {label}
        </Text>
        <Text fontSize="md" color="gray.700">
          {value}
        </Text>
      </Box>
    </Flex>
  );
};

export default Contact;
