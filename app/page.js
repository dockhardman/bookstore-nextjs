import Image from "next/image";
import Link from "next/link";
import { ChakraProvider } from "@chakra-ui/react";

export default function Home() {
  return (
    <ChakraProvider>
      <div>
        <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </ChakraProvider>
  );
}
