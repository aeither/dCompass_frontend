import { VStack } from "@chakra-ui/react";
import React from "react";

interface Children {
  children: React.ReactNode;
}
const Container = (props: Children) => {
  const { children } = props;
  return (
    <VStack p="14" w="full" minH={{ sm: "400px", md: "600px" }}>
      {children}
    </VStack>
  );
};

export default Container;
