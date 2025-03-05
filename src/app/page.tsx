import About from "@/landing/About";
import Steps from "@/landing/Steps";
import Trading from "@/landing/Trading";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Trading />
      <Steps />
      <About />
    </>
  );
}
