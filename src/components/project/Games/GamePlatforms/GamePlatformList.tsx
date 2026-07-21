import { HStack, Icon } from "@chakra-ui/react";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import type { IconType } from "react-icons";
import type { GamePlatform } from "../../../../Hooks/UseGames";

interface Props {
  platforms: GamePlatform[];
}

export const GamePlatformList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
  };
  return (
    <>
      <HStack>
        {platforms.map(
          (platform) =>
            platform.slug in iconMap && (
              <Icon
                key={platform.id}
                as={iconMap[platform.slug]}
                color={"gray.500"}
                marginY={"10px"}
              ></Icon>
            ),
        )}
      </HStack>
    </>
  );
};
