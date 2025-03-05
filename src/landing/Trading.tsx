"use client"
import ActionButton from "@/components/Buttons/ActionButton";
import { Icons } from "@/components/Icons/icons";
import { markets, tradingSteps } from "@/static/data";
import { Custom } from "@/styles/custom";
import * as motion from "motion/react-client"
import Image from "next/image";

const Trading = () => {

  return (
    <section className={`${Custom.section} flex flex-col items-center justify-center relative md:py-[100px]`}>
      <div className="text-center flex flex-col gap-6">
        <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl">The Next Evolution in <span className={Custom.goldgradient}>Speculative Trading</span></h3>
        <p className="text-dark-50 text-sm md:text-base text-center">Trade assets beyond crypto. A scarcity-driven model designed for traders and speculators.</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 "></div>
      <div className="flex flex-col md:grid grid-cols-3 gap-8  mt-12 w-full">
        {tradingSteps.map((item) => (
          <TradingCard item={item} key={item.name} className=""/>
        ))}
      </div>
      <div className="flex flex-col md:grid grid-cols-3 gap-8 relative mt-12 w-full">
        {markets.map((market) => (
          <MarketCard key={market.name} item={market} className="" />
        ))}
      </div>
    </section>
  )
}

interface TradingCardProps {
  id: number;
  name: string;
  desc: string;
  icon: any;
}

const TradingCard = ({ item, className }: { item: TradingCardProps, className: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-px rounded-xl shadow-lg flex flex-col w-full items-center text-center relative bg-gradient-to-br from-gold-200 to-transparent ${className}`}
    >
      <div className="bg-dark-200 rounded-xl w-full h-full">
        <div className="flex items-center sm:items-start md:items-center lg:items-start p-6 flex-col gap-8 relative">
          <div className="flex items-center flex-col gap-3 w-full">
            <item.icon />
            <h4 className="mt-4 text-2xl font-semibold leading-8 text-center capitalize w-full">{item.name}</h4>
            <p className="text-dark-50 text-sm sm:text-base">{item.desc}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}


interface Reference {
  name: string;
  desc: string;
  ispreferred?: boolean;
  details: string[]
}

const MarketCard = ({ item, className }: { item: Reference, className: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-px rounded-xl shadow-lg flex flex-col w-full items-center text-center relative bg-gradient-to-br from-gold-200 to-transparent ${className}`}
    >
      <div className="bg-dark-200 rounded-xl w-full h-full">
        {item.ispreferred && <div className={`absolute bg-radial from-gold-200/25 to-65% to-transparent rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px]`}>
        </div>}
        <div className="flex items-center sm:items-start md:items-center lg:items-start p-6 flex-col gap-8 relative">
          <div className={`${!item.ispreferred ? "hidden" : "bg-black/25 rounded-lg"} px-3 absolute right-0 top-0 py-1 mt-4 mr-4`}>
            <p className={Custom.goldgradient}>Most Preferred</p>
          </div>
          <div className="flex items-start flex-col gap-3 w-full border-b border-dark-50 pb-6">
            <h4 className="mt-4 text-5xl sm:text-4xl lg:text-6xl font-semibold text-dark-50 leading-8 text-center sm:text-start capitalize">{item.name}</h4>
            <p className="mt-2 sm:text-start text-dark-50 text-sm sm:text-base">{item.desc}</p>
          </div>
          <div className="flex flex-col gap-3">
            {item.details.map((detail: string, idx: number) => (
              <div key={idx} className="flex gap-3">
                <Icons.CheckMark />
                <p className="text-left text-dark-50">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Trading