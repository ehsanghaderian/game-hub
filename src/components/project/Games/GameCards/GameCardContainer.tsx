import { Box } from "@chakra-ui/react";
import { type ReactNode } from "react";
import { useColorMode } from "../../../ui/color-mode";

interface Props {
  children: ReactNode;
  color?: "red" | "purple" | "blue" | "green" | "orange" | "pink" | "teal";
}

// Color palette configuration
const colorPalette = {
  red: {
    light: {
      shadow:
        "rgba(220, 38, 38, 0.35), 0 8px 24px -8px rgba(220, 38, 38, 0.15), 0 0 40px -12px rgba(220, 38, 38, 0.1)",
      shadowHover:
        "0 20px 40px -12px rgba(220, 38, 38, 0.35), 0 8px 24px -8px rgba(220, 38, 38, 0.15), 0 0 40px -12px rgba(220, 38, 38, 0.1)",
      shadowDefault:
        "0 4px 12px rgba(220, 38, 38, 0.08), 0 2px 4px rgba(220, 38, 38, 0.04)",
      border: "red.200",
      borderHover: "red.200",
      gradient:
        "linear-gradient(135deg, rgba(220, 38, 38, 0.1), transparent 50%, rgba(220, 38, 38, 0.05))",
    },
    dark: {
      shadow:
        "0 20px 40px -12px rgba(220, 38, 38, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(220, 38, 38, 0.05)",
      shadowHover:
        "0 20px 40px -12px rgba(220, 38, 38, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(220, 38, 38, 0.05)",
      shadowDefault:
        "0 4px 12px rgba(220, 38, 38, 0.12), 0 2px 4px rgba(0,0,0,0.2)",
      border: "red.600",
      borderHover: "red.600",
      gradient:
        "linear-gradient(135deg, rgba(220, 38, 38, 0.05), transparent 50%, rgba(220, 38, 38, 0.02))",
    },
  },
  purple: {
    light: {
      shadow:
        "0 20px 40px -12px rgba(128, 90, 213, 0.35), 0 8px 24px -8px rgba(128, 90, 213, 0.15), 0 0 40px -12px rgba(128, 90, 213, 0.1)",
      shadowHover:
        "0 20px 40px -12px rgba(128, 90, 213, 0.35), 0 8px 24px -8px rgba(128, 90, 213, 0.15), 0 0 40px -12px rgba(128, 90, 213, 0.1)",
      shadowDefault:
        "0 4px 12px rgba(128, 90, 213, 0.08), 0 2px 4px rgba(128, 90, 213, 0.04)",
      border: "purple.200",
      borderHover: "purple.200",
      gradient:
        "linear-gradient(135deg, rgba(128, 90, 213, 0.1), transparent 50%, rgba(128, 90, 213, 0.05))",
    },
    dark: {
      shadow:
        "0 20px 40px -12px rgba(128, 90, 213, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(128, 90, 213, 0.05)",
      shadowHover:
        "0 20px 40px -12px rgba(128, 90, 213, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(128, 90, 213, 0.05)",
      shadowDefault:
        "0 4px 12px rgba(128, 90, 213, 0.12), 0 2px 4px rgba(0,0,0,0.2)",
      border: "purple.600",
      borderHover: "purple.600",
      gradient:
        "linear-gradient(135deg, rgba(128, 90, 213, 0.05), transparent 50%, rgba(128, 90, 213, 0.02))",
    },
  },
  blue: {
    light: {
      shadow:
        "0 20px 40px -12px rgba(59, 130, 246, 0.35), 0 8px 24px -8px rgba(59, 130, 246, 0.15), 0 0 40px -12px rgba(59, 130, 246, 0.1)",
      shadowHover:
        "0 20px 40px -12px rgba(59, 130, 246, 0.35), 0 8px 24px -8px rgba(59, 130, 246, 0.15), 0 0 40px -12px rgba(59, 130, 246, 0.1)",
      shadowDefault:
        "0 4px 12px rgba(59, 130, 246, 0.08), 0 2px 4px rgba(59, 130, 246, 0.04)",
      border: "blue.200",
      borderHover: "blue.200",
      gradient:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent 50%, rgba(59, 130, 246, 0.05))",
    },
    dark: {
      shadow:
        "0 20px 40px -12px rgba(59, 130, 246, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(59, 130, 246, 0.05)",
      shadowHover:
        "0 20px 40px -12px rgba(59, 130, 246, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(59, 130, 246, 0.05)",
      shadowDefault:
        "0 4px 12px rgba(59, 130, 246, 0.12), 0 2px 4px rgba(0,0,0,0.2)",
      border: "blue.600",
      borderHover: "blue.600",
      gradient:
        "linear-gradient(135deg, rgba(59, 130, 246, 0.05), transparent 50%, rgba(59, 130, 246, 0.02))",
    },
  },
  green: {
    light: {
      shadow:
        "0 20px 40px -12px rgba(34, 197, 94, 0.35), 0 8px 24px -8px rgba(34, 197, 94, 0.15), 0 0 40px -12px rgba(34, 197, 94, 0.1)",
      shadowHover:
        "0 20px 40px -12px rgba(34, 197, 94, 0.35), 0 8px 24px -8px rgba(34, 197, 94, 0.15), 0 0 40px -12px rgba(34, 197, 94, 0.1)",
      shadowDefault:
        "0 4px 12px rgba(34, 197, 94, 0.08), 0 2px 4px rgba(34, 197, 94, 0.04)",
      border: "green.200",
      borderHover: "green.200",
      gradient:
        "linear-gradient(135deg, rgba(34, 197, 94, 0.1), transparent 50%, rgba(34, 197, 94, 0.05))",
    },
    dark: {
      shadow:
        "0 20px 40px -12px rgba(34, 197, 94, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(34, 197, 94, 0.05)",
      shadowHover:
        "0 20px 40px -12px rgba(34, 197, 94, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(34, 197, 94, 0.05)",
      shadowDefault:
        "0 4px 12px rgba(34, 197, 94, 0.12), 0 2px 4px rgba(0,0,0,0.2)",
      border: "green.600",
      borderHover: "green.600",
      gradient:
        "linear-gradient(135deg, rgba(34, 197, 94, 0.05), transparent 50%, rgba(34, 197, 94, 0.02))",
    },
  },
  orange: {
    light: {
      shadow:
        "0 20px 40px -12px rgba(249, 115, 22, 0.35), 0 8px 24px -8px rgba(249, 115, 22, 0.15), 0 0 40px -12px rgba(249, 115, 22, 0.1)",
      shadowHover:
        "0 20px 40px -12px rgba(249, 115, 22, 0.35), 0 8px 24px -8px rgba(249, 115, 22, 0.15), 0 0 40px -12px rgba(249, 115, 22, 0.1)",
      shadowDefault:
        "0 4px 12px rgba(249, 115, 22, 0.08), 0 2px 4px rgba(249, 115, 22, 0.04)",
      border: "orange.200",
      borderHover: "orange.200",
      gradient:
        "linear-gradient(135deg, rgba(249, 115, 22, 0.1), transparent 50%, rgba(249, 115, 22, 0.05))",
    },
    dark: {
      shadow:
        "0 20px 40px -12px rgba(249, 115, 22, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(249, 115, 22, 0.05)",
      shadowHover:
        "0 20px 40px -12px rgba(249, 115, 22, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(249, 115, 22, 0.05)",
      shadowDefault:
        "0 4px 12px rgba(249, 115, 22, 0.12), 0 2px 4px rgba(0,0,0,0.2)",
      border: "orange.600",
      borderHover: "orange.600",
      gradient:
        "linear-gradient(135deg, rgba(249, 115, 22, 0.05), transparent 50%, rgba(249, 115, 22, 0.02))",
    },
  },
  pink: {
    light: {
      shadow:
        "0 20px 40px -12px rgba(236, 72, 153, 0.35), 0 8px 24px -8px rgba(236, 72, 153, 0.15), 0 0 40px -12px rgba(236, 72, 153, 0.1)",
      shadowHover:
        "0 20px 40px -12px rgba(236, 72, 153, 0.35), 0 8px 24px -8px rgba(236, 72, 153, 0.15), 0 0 40px -12px rgba(236, 72, 153, 0.1)",
      shadowDefault:
        "0 4px 12px rgba(236, 72, 153, 0.08), 0 2px 4px rgba(236, 72, 153, 0.04)",
      border: "pink.200",
      borderHover: "pink.200",
      gradient:
        "linear-gradient(135deg, rgba(236, 72, 153, 0.1), transparent 50%, rgba(236, 72, 153, 0.05))",
    },
    dark: {
      shadow:
        "0 20px 40px -12px rgba(236, 72, 153, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(236, 72, 153, 0.05)",
      shadowHover:
        "0 20px 40px -12px rgba(236, 72, 153, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(236, 72, 153, 0.05)",
      shadowDefault:
        "0 4px 12px rgba(236, 72, 153, 0.12), 0 2px 4px rgba(0,0,0,0.2)",
      border: "pink.600",
      borderHover: "pink.600",
      gradient:
        "linear-gradient(135deg, rgba(236, 72, 153, 0.05), transparent 50%, rgba(236, 72, 153, 0.02))",
    },
  },
  teal: {
    light: {
      shadow:
        "0 20px 40px -12px rgba(20, 184, 166, 0.35), 0 8px 24px -8px rgba(20, 184, 166, 0.15), 0 0 40px -12px rgba(20, 184, 166, 0.1)",
      shadowHover:
        "0 20px 40px -12px rgba(20, 184, 166, 0.35), 0 8px 24px -8px rgba(20, 184, 166, 0.15), 0 0 40px -12px rgba(20, 184, 166, 0.1)",
      shadowDefault:
        "0 4px 12px rgba(20, 184, 166, 0.08), 0 2px 4px rgba(20, 184, 166, 0.04)",
      border: "teal.200",
      borderHover: "teal.200",
      gradient:
        "linear-gradient(135deg, rgba(20, 184, 166, 0.1), transparent 50%, rgba(20, 184, 166, 0.05))",
    },
    dark: {
      shadow:
        "0 20px 40px -12px rgba(20, 184, 166, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(20, 184, 166, 0.05)",
      shadowHover:
        "0 20px 40px -12px rgba(20, 184, 166, 0.25), 0 8px 24px -8px rgba(0,0,0,0.5), 0 0 40px -12px rgba(20, 184, 166, 0.05)",
      shadowDefault:
        "0 4px 12px rgba(20, 184, 166, 0.12), 0 2px 4px rgba(0,0,0,0.2)",
      border: "teal.600",
      borderHover: "teal.600",
      gradient:
        "linear-gradient(135deg, rgba(20, 184, 166, 0.05), transparent 50%, rgba(20, 184, 166, 0.02))",
    },
  },
};

export const GameCardContainer = ({ children, color = "red" }: Props) => {
  const { colorMode } = useColorMode();

  const isLight = colorMode === "light";
  const colors = colorPalette[color];
  const mode = isLight ? "light" : "dark";

  return (
    <Box
      position="relative"
      height={"100%"}
      borderRadius={10}
      overflow="hidden"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{
        transform: "scale(1.04) translateY(-6px)",
        boxShadow: colors[mode].shadowHover,
        bg: isLight ? "white" : "gray.800",
        // Remove border on hover
        borderWidth: "0px",
      }}
      transformOrigin="center center"
      zIndex={1}
      boxShadow={colors[mode].shadowDefault}
      // No default border
      borderWidth="0px"
      bg={isLight ? "white" : "gray.900"}
      willChange="transform, box-shadow"
      css={{
        backfaceVisibility: "hidden",
        "&::after": {
          content: '""',
          position: "absolute",
          inset: "-1px",
          borderRadius: 10,
          background: colors[mode].gradient,
          opacity: 0,
          transition: "opacity 0.4s ease-in-out",
          pointerEvents: "none",
          zIndex: 0,
        },
        "&:hover::after": {
          opacity: 1,
        },
      }}
    >
      <Box position="relative" zIndex={1} height="100%">
        {children}
      </Box>
    </Box>
  );
};
