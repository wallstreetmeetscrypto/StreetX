import About from "@/landing/About";
import BondingCurve from "@/landing/BondingCurve";
import Steps from "@/landing/Steps";
import Trading from "@/landing/Trading";
import WSETrading from "@/landing/WSETrading";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <WSETrading />
      <BondingCurve />
      <Trading />
      <Steps />
      <About />
    </>
  );
}
