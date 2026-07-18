import { Button, Icon, Menu, Portal, Spinner } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { UsePlatform, type Platform } from "../../../Hooks/UsePlatforms";

export const PlatformSelector = () => {
  const { data: platforms, isLoading, error } = UsePlatform();

  if (error) return null;

  if (isLoading) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          <span>Platforms</span>
          <Icon
            as={FaChevronDown}
            ml={2}
            fontSize="sm"
            transition="transform 0.2s"
          />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {platforms.map((platform) => (
              <Menu.Item
                key={platform.id}
                value="item-1"
                _hover={{ bg: "gray.800" }}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
