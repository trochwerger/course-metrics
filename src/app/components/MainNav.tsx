"use client";

import {
  Box,
  Flex,
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
  Input,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Divider,
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import Image from "next/image";
import React, { useState } from "react";

const handleSearch = (searchQuery: string) => {
  if (searchQuery === "") {
    console.log("Please enter a search query");
    return;
  }
  console.log("Searching for:", searchQuery);
};

export default function MainNav() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
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
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            src="/courseMetricsLogo.png"
            alt="Course Metrics Logo"
            width={50}
            height={50}
          />

          {/* Left aligned items */}
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav position="left" />
          </Flex>

          {/* Right aligned items */}
          <Flex display={{ base: "none", md: "flex" }} ml="auto">
            <DesktopNav position="right" />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Divider orientation="vertical" height="30px" mx={1} />
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<Avatar size={"sm"} />}
              variant={"link"}
              cursor={"pointer"}
              minW={0}
            />
            <MenuList>
              <MenuItem as="a" href="#">
                Sign In
              </MenuItem>
              <MenuItem as="a" href="#">
                Sign Up
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ position }: { position: string }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const linkHoverBgColor = useColorModeValue("gray.100", "gray.700");
  const linkBorderRadius = "lg";
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Stack direction={"row"} spacing={{ md: 1, lg: 2 }} alignItems="center">
      {NAV_ITEMS.filter((navItem) => {
        // Filter items based on position
        if (position === "left") {
          return !navItem.isRightAligned;
        } else {
          return navItem.isRightAligned;
        }
      }).map((navItem) => {
        if (navItem.isSearch) {
          return (
            <Flex key={navItem.label} align="center">
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                w={{ base: 40, md: 32, lg: 72 }} // dynamic width based on screen size
              />
              <Button onClick={() => handleSearch(searchQuery)} ml={2}>
                Search
              </Button>
            </Flex>
          );
        }

        return (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Box
                  as="a"
                  p={1} // Reduced padding
                  href={navItem.href ?? "#"}
                  fontSize={"sm"}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: "none",
                    color: linkHoverColor,
                    bg: linkHoverBgColor,
                    borderRadius: linkBorderRadius,
                  }}
                >
                  {navItem.label}
                </Box>
              </PopoverTrigger>

              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem, index) => (
        <React.Fragment key={navItem.label}>
          <MobileNavItem {...navItem} />
          {/* Insert search bar after "Select Category" */}
          {index === 0 && (
            <Flex align="center" mt={2} mb={4}>
              <Input
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                width="full"
              />
              <Button onClick={() => handleSearch(searchQuery)} ml={2}>
                Search
              </Button>
            </Flex>
          )}
        </React.Fragment>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
  isSearch?: boolean;
  isRightAligned?: boolean; // Add this flag to identify right aligned items
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Select Category",
    children: [
      {
        label: "Course Reviews",
        subLabel: "Browse Course Reviews",
        href: "#",
      },
      {
        label: "Professor Reviews",
        subLabel: "Browse Professor Reviews",
        href: "#",
      },
    ],
  },
  {
    label: "Search",
    isSearch: true,
  },
  {
    label: "Home",
    href: "/",
    isRightAligned: true, // Mark this item to be right-aligned
  },
  {
    label: "About",
    href: "/about",
    isRightAligned: true, // Mark this item to be right-aligned
  },
  {
    label: "Contact Us",
    href: "#",
    isRightAligned: true, // Mark this item to be right-aligned
  },
  {
    label: "FAQ",
    href: "#",
    isRightAligned: true, // Mark this item to be right-aligned
  },
];
