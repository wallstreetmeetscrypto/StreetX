"use client"
import BackgroundImage from "@/components/BackgroundImage"
import ActionButton from "@/components/Buttons/ActionButton"
import { tradingSteps } from "@/static/data"
import { Custom } from "@/styles/custom"
import * as motion from "motion/react-client"
import Image from "next/image"
import { useEffect, useState } from "react"


const Steps = () => {

  const [rendered, setRendered] = useState(false)

  useEffect(() => {
    if (window) {
      setRendered(true)
    }
  }, [])


  return (
    rendered ? <section className={`${Custom.section} flex flex-col items-center justify-center relative md:py-[100px] lg:py-[200px]`}>
      <div className="text-center flex flex-col gap-6">
        <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Start Trading in <span className="bg-gradient-to-r from-gold-100 via-gold-300 to-gold-100 bg-clip-text text-transparent">3 Simple Steps</span></h3>
        <p className="text-dark-50 text-sm md:text-base max-w-3xl">Unlock the Full Potential of WSE: Follow These 3 Simple Steps to Start Trading, Maximize Your Profits, and Elevate Your Investment Game Effortlessly!</p>
      </div>
      <div className="absolute bg-radial from-gold-200/25 to-65% to-transparent rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]">
      </div>
      <div className="flex flex-col md:flex-row gap-16 sm:gap-12 relative mt-12">
        <Image src="/icon/line.svg" width={window ? window.screen.width / 3 : 800} height={2} priority alt="Line" className="absolute left-1/2 top-1/2 -translate-x-1/2" />
        {tradingSteps.map((step) => (
          <StepsCard key={step.name} item={step} className="w-full" />
        ))}
      </div>
      <ActionButton name="Start Trading Now" onClick={() => { }} className="mt-14" />
    </section>:<></>
  )
}


interface TradingStep {
  id: number;
  name: string;
  desc: string;
  icon: any; // Ensures icon is a React functional component
}

const StepsCard = ({ item, className }: { item: TradingStep, className: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-px rounded-xl shadow-lg flex flex-col items-center text-center relative bg-gradient-to-br from-gold-200 to-transparent ${className}`}
    >
      <div className="bg-dark-200 rounded-xl w-full h-full">
        <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex items-center justify-center">
            <Image src="/icon/star.svg" width={78} height={78} priority alt="Star" />
            <p className="absolute text-3xl text-dark-300 font-bold">0{item.id}</p>
          </div>
        </div>
        <div className="flex items-center sm:items-start md:items-center lg:items-start p-6 gap-3 flex-col sm:flex-row md:flex-col lg:flex-row">
          <div className="mt-4">
            <item.icon className="w-12 h-12 text-green-400" />
          </div>
          <div className="flex items-center sm:items-start flex-col">
            <h4 className="mt-4 text-xl font-semibold text-white text-center sm:text-start">{item.name}</h4>
            <p className="mt-2 sm:text-start text-dark-50 text-sm sm:text-base">{item.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


export default Steps