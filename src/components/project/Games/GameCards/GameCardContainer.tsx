import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";
import { useColorMode } from "../../../ui/color-mode";

interface Props {
  children: ReactNode;
}
export const GameCardContainer = ({ children }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      transition="all 0.3s ease-in-out"
      _hover={{
        transform: "scale(1.05)",
        shadow: "lg",
        bg: colorMode === "light" ? "white" : "gray.800",
      }}
      overflow={"hidden"}
      borderRadius={10}
    >
      {children}
    </Box>
  );
};
