import { Center, Img, Stack } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <Stack w={"80%"} m={"auto"} placeContent={"center"} py={20} gap={6}>
      <Center
        // mt={200}
        borderWidth="1px"
        borderColor="black"
        borderRadius="md"
        p={3}
        m={"auto"}
        w={"80%"}
        gap={6}
      >
        <GitHubCalendar
          username="syedsohel22"
          align="center"
          fontSize={13}
        ></GitHubCalendar>
      </Center>
      <Stack
        justifyContent={"center"}
        direction={{ base: "column", md: "row" }}
        alignItems={"center"}
        maxWidth={"auto"}
        gap={6}
      >
        <p>
          <Img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=syedsohel22&show_icons=true&locale=en&border_radius=10&border_color=none&hide_border=true"
            alt="syedsohel22"
            id="github-stats-card"
          />
        </p>
        <p>
          <Img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=syedsohel22&show_icons=true&locale=en&layout=compact"
            alt="syedsohel22"
            id="github-top-langs"
          />
        </p>

        <p>
          <Img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=syedsohel22&&theme=blue&bg_color=faf5ff&border_radius=10&border_color=none&hide_border=true"
            alt="syedsohel22"
            id="github-streak-stats"
          />
        </p>
      </Stack>
    </Stack>
  );
};

export default Github;
