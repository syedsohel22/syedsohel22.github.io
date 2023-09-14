import { Center, HStack, Img } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <>
      <Center p={10} mt={200} border={"1px solid black"} m={"auto"} w={"80%"}>
        <GitHubCalendar
          username="syedsohel22"
          align="center"
          fontSize={13}
          p="10"
          mt={200}
        ></GitHubCalendar>
      </Center>
      <HStack w={"80%"} h={"100vh"} justifyContent={"center"} m={"auto"}>
        <p>
          <Img
            align="center"
            src="https://github-readme-stats.vercel.app/api?username=syedsohel22&show_icons=true&locale=en&theme=buefy&bg_color=faf5ff&border_radius=10&border_color=none&hide_border=true"
            alt="syedsohel22"
            id="github-stats-card"
          />
        </p>
        <p>
          <Img
            align="center"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=syedsohel22&show_icons=true&locale=en&layout=compact"
            alt="syedsohel22"
            id="github-stats-card"
          />
        </p>

        <p>
          <Img
            align="center"
            src="https://github-readme-streak-stats.herokuapp.com/?user=syedsohel22&"
            alt="syedsohel22"
            id="github-streak-stats"
          />
        </p>
      </HStack>
    </>
  );
};

export default Github;
