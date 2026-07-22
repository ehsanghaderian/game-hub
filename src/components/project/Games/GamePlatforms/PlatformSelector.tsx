import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { UsePlatforms } from "../../../../Hooks/UsePlatforms";
import { UsePlatform } from "../../../../Hooks/UsePlatform";
import useGameStore from "../../../../Stores/GameStore";

export const PlatformSelector = () => {
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = useGameStore((s) => s.setPlatformId);
  const { data: platforms, isLoading, error } = UsePlatforms();
  const selectedPlatform = UsePlatform(selectedPlatformId);

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
                onClick={() => setSelectedPlatformId(platform.id)}
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
