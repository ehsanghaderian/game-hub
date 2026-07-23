import { Box } from "@chakra-ui/react";
import Navbar from "../components/project/Navbars/Navbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};
