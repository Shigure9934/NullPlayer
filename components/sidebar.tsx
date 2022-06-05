import NextLink from "next/link";
import React from "react";
import { useRouter } from "next/router";
import NextImage from "next/image";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Center,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/layout";
import {
  MdHome,
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite
} from "react-icons/md";

const navMenu = [
  {
    name: "Home",
    icon: MdHome,
    href: "/",
  },
  {
    name: "Search",
    icon: MdSearch,
    href: "/search",
  }, 
  {
    name: "Library",
    icon: MdLibraryMusic,
    href: "/library",
  },
]

const musicMenu = [
  {
    name: "Create Playlist",
    icon: MdPlaylistAdd,
    href: "/",
  },
  {
    name: "Favorites",
    icon: MdFavorite,
    href: "/favorites",
  },
]

const Sidebar = () => {
  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px">
        <Box width="120px" marginBottom="px" paddingX="20px">
          <Box paddingBottom="20px">
            ヌルプレイ
          </Box>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map((menu) => (
              <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
                <LinkBox>
                  <NextLink href={menu} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800"/>
        <Box marginTop="20px">
          <List spacing={2}>
          {musicMenu.map(menu => (
            <ListItem paddingX="20px" fontSize="16px" key={menu.name}>
               <LinkBox>
                  <NextLink href={menu} passHref>
                    <LinkOverlay>
                      <ListIcon
                        as={menu.icon}
                        color="white"
                        marginRight="20px"
                      />
                      {menu.name}
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
          </ListItem>
        ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
