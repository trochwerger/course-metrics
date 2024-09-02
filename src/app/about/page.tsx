"use client";

import Head from "next/head";
import { ReactNode, ReactElement, useRef } from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Flex,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";

import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={1}
      >
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={"gray.600"}>{text}</Text>
    </Stack>
  );
};

export default function About() {
  const teamSectionRef = useRef<HTMLDivElement>(null);

  const scrollToTeamSection = () => {
    if (teamSectionRef.current) {
      teamSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Container
        minWidth={"95vw"}
        height={{ base: "95vh" }}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Box bg={"gray.800"} height={"100%"} p={10} mt={5}>
          <Container
            maxW={"4xl"}
            zIndex={10}
            position={"relative"}
            height={"95%"}
          >
            <Stack direction={{ base: "column", lg: "column" }} height={"100%"}>
              <Stack
                flex={1}
                color={"gray.400"}
                justify={{ lg: "center" }}
                py={{ base: 4, md: 20, xl: 60 }}
              >
                <Box mb={{ base: 8, md: 20 }}>
                  <Text
                    fontFamily={"heading"}
                    fontWeight={700}
                    textTransform={"uppercase"}
                    mb={3}
                    // fontSize={"xl"}
                    fontSize={{ base: "lg", md: "xl" }}
                    color={"gray.500"}
                  >
                    ABOUT US
                  </Text>
                  <Heading
                    color={"white"}
                    mb={5}
                    fontSize={{ base: "xl", md: "3xl" }}
                  >
                    Revolutionizing Course Selection
                  </Heading>
                  <Text fontSize={{ base: "md", md: "xl" }} color={"gray.400"}>
                    At CourseMetrics, we understand the importance of choosing
                    the right courses and professors. Our platform is built by
                    students, for students, to provide transparent and reliable
                    insights into the academic experience at Seneca Polytechnic.
                  </Text>
                </Box>
                <Divider
                  orientation="horizontal"
                  height="30px"
                  mx={1}
                  mb={20}
                />

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  {stats.map((stat) => (
                    <Box key={stat.title}>
                      <Text
                        fontFamily={"heading"}
                        fontSize={{ base: "lg", md: "xl" }}
                        color={"white"}
                        mb={3}
                      >
                        {stat.title}
                      </Text>
                      <Text
                        fontSize={{ base: "md", md: "xl" }}
                        color={"gray.400"}
                      >
                        {stat.content}
                      </Text>
                    </Box>
                  ))}
                </SimpleGrid>

                {/* Button to Scroll to "Meet Our Team" */}
              </Stack>
              <Flex flex={1} />
            </Stack>
            {/* <Flex justify="center">
              <Button
                onClick={scrollToTeamSection}
                colorScheme="teal"
                size="lg"
              >
                Meet Our Team
              </Button>
            </Flex> */}
          </Container>
        </Box>
      </Container>

      {/* "Meet Our Team" Section */}
      <Container
        ref={teamSectionRef}
        minWidth={"95vw"}
        height={{ base: "95vh" }}
        alignContent={"center"}
        justifyContent={"center"}
      >
        <Box p={4}>
          <Heading>Meet Our Team</Heading>
          <Divider orientation="horizontal" height="30px" mx={1} mb={20} />
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <Feature
              icon={<Icon as={FcAssistant} w={10} h={10} />}
              title={"Mimi Dang"}
              text={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
              }
            />
            <Feature
              icon={<Icon as={FcDonate} w={10} h={10} />}
              title={"Aryan Khurana"}
              text={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={"Jeremy Lee"}
              text={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={"Vinh Nhan"}
              text={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={"Tomas Rochwerger"}
              text={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
              }
            />
            <Feature
              icon={<Icon as={FcInTransit} w={10} h={10} />}
              title={"Peter Wan"}
              text={
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
              }
            />
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "Student-Driven Reviews",
    content: (
      <>
        Our community of students shares detailed reviews and ratings, helping
        you navigate the complexities of course selection with confidence.
      </>
    ),
  },
  {
    title: "Your Academic Success, Simplified",
    content: (
      <>
        We believe that informed decisions lead to better outcomes. With
        CourseMetrics, you can tailor your academic path to align with your
        goals and interests.
      </>
    ),
  },
  {
    title: "Join the Community",
    content: (
      <>
        Become a part of a growing network of students who are making smarter
        choices and excelling in their studies.
      </>
    ),
  },
  //   {
  //     title: "250M+",
  //     content: (
  //       <>
  //         <StatsText>Plants</StatsText> currently connected and monitored by the
  //         NewLife™ software
  //       </>
  //     ),
  //   },
];
