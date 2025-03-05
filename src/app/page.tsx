import About from "@/landing/About";
import BondingCurve from "@/landing/BondingCurve";
import Steps from "@/landing/Steps";
import Trading from "@/landing/Trading";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <BondingCurve />
      <Trading />
      <Steps />
      <About />
    </>
  );
}
