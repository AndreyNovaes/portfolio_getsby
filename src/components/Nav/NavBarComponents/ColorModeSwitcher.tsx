import React from "react";
import { 
  Icon,
  IconButton,
  useColorModeValue,
  useColorMode 
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import RightMiddleAnimation from "../../../animations/movement/RightMiddle";

export default function ColorModeSwitcher() {
  const ColorModeSwitcher = useColorMode().toggleColorMode;
  const colorModeIcons = useColorModeValue(FaMoon, FaSun);

  return (
    <RightMiddleAnimation>
      <IconButton
        aria-label="Toggle Color Mode"
        icon={<Icon as={colorModeIcons} />}
        onClick={ColorModeSwitcher}
        variant="outline"
        size={
          useColorModeValue("md", "md")
        }
        _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}
      />
    </RightMiddleAnimation>
  );
}
