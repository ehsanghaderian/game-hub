import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxHeight = 300;

  if (!children) return null;

  if (children?.length <= maxHeight) return <Text>{children}</Text>;

  const summary = isExpanded
    ? children
    : children.substring(0, maxHeight) + "...";

  return (
    <Text fontWeight={"100"} fontSize={"lg"} mt={5}>
      {summary}{" "}
      <Button
        size={"2xs"}
        borderRadius={"xl"}
        bg={"yellow.200"}
        color={"gray.900"}
        fontWeight={"bold"}
        marginLeft={1}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};
