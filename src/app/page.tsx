import About from "@/landing/About";
import BondingCurve from "@/landing/BondingCurve";
import Phenomenon from "@/landing/Phenomenon";
import Steps from "@/landing/Steps";
import Trading from "@/landing/Trading";
import WSETrading from "@/landing/WSETrading";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Phenomenon />
      <WSETrading />
      <BondingCurve />
      <Trading />
      <Steps />
      <About />
    </>
  );
}
