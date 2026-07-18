import { Box } from "@chakra-ui/react";
import React, { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const GameCardContainer = ({ children }: Props) => {
  return (
    <Box overflow={"hidden"} borderRadius={10}>
      {children}
    </Box>
  );
};
