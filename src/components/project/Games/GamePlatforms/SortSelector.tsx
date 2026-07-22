import { Button, Icon, Menu, Portal } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import useGameStore from "../../../../Stores/GameStore";

export const SortSelector = () => {
  const selectedSort = useGameStore((s) => s.gameQuery.sort);
  const setSelectedSort = useGameStore((s) => s.setSort);
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  const selectedSortLabel = () => {
    const obj = sortOrders.find((sort) => sort.value === selectedSort);
    return obj?.label;
  };
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="subtle">
          <span>{`Order by : ${selectedSortLabel() || "Relevance"}`}</span>
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
            {sortOrders.map((sort) => (
              <Menu.Item
                onClick={() => setSelectedSort(sort.value)}
                key={sort.value}
                value={sort.value}
                _hover={{ bg: "gray.800" }}
              >
                {sort.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
