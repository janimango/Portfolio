import { Heading } from "@/src/ui/atom/heading/heading";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
    </div>
  );
}
