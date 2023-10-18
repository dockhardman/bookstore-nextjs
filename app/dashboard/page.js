"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useToast, Button } from "@chakra-ui/react";

export default function Page() {
  const toast = useToast();
  return (
    <ChakraProvider>
      <h1>Hello, Dashboard Page!</h1>
      <Button
        onClick={() =>
          toast({
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Toast
      </Button>
    </ChakraProvider>
  );
}
