import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { UsePlatform, type Platform } from "../../../../Hooks/UsePlatforms";

interface Props {
  on_Click: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

export const PlatformSelector = ({ on_Click, selectedPlatform }: Props) => {
  const { data: platforms, isLoading, error } = UsePlatform();

  if (error) return null;

  if (isLoading) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          <span>{selectedPlatform?.name || "Platforms"}</span>
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
            {platforms?.results?.map((platform) => (
              <Menu.Item
                onClick={() => on_Click(platform)}
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
