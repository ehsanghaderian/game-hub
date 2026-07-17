import { HStack, Image, Text } from "@chakra-ui/react";
import navIcon from "../../assets/controller.png";
import { ColorModeButton } from "../ui/color-mode";

function Navbar() {
  return (
    <HStack w="full" justify="space-between" p={4} bg="bg.subtle">
      {/* Group image and text together */}
      <HStack gap={2}>
        <Image src={navIcon} boxSize={50} />
        <Text>Nav bar</Text>
      </HStack>

      <ColorModeButton />
    </HStack>
  );
}

export default Navbar;
