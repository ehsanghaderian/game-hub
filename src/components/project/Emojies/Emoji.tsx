import { Image, type ImageProps } from "@chakra-ui/react";
import meh from "../../../assets/meh.webp";
import bulls from "../../../assets/bulls-eye.webp";
import thumb from "../../../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
export const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "", boxSize: "25px" },
    4: { src: bulls, alt: "", boxSize: "35px" },
    5: { src: thumb, alt: "", boxSize: "25px" },
  };
  return <Image {...emojiMap[rating]} marginTop={3}></Image>;
};
