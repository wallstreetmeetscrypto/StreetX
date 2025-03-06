import BackgroundImage from "@/components/BackgroundImage";
import About from "@/landing/About";
import BondingCurve from "@/landing/BondingCurve";
import HeroSecion from "@/landing/Hero";
import Phenomenon from "@/landing/Phenomenon";
import Steps from "@/landing/Steps";
import Trading from "@/landing/Trading";
import WSETrading from "@/landing/WSETrading";

export default function Home() {
  return (
    <>
      <BackgroundImage className="fixed "/>
      <HeroSecion />
      <Phenomenon />
      <WSETrading />
      <BondingCurve />
      <Trading />
      <Steps />
      <About />
    </>
  );
}
