"use client"
import BackgroundImage from "@/components/BackgroundImage"
import ActionButton from "@/components/Buttons/ActionButton"
import { Icons } from "@/components/Icons/icons"
import { howtoTrading, tokenList, tradingSteps } from "@/static/data"
import { Custom } from "@/styles/custom"
import * as motion from "motion/react-client"
import Image from "next/image"


const Phenomenon = () => {

  return (
    <section className={`${Custom.section} flex flex-col items-center justify-center relative gap-12`}>
      <div className="text-center flex flex-col gap-6">
        <h3 className="font-bold text-3xl sm:text-4xl lg:teCxt-5xl">Mint & Trade the Next <span className="bg-gradient-to-r from-gold-100 via-gold-300 to-gold-100 bg-clip-text text-transparent">Big Market Phenomenon</span></h3>
        <p className={`${Custom.desc} max-w-3xl`}>Get early access to exclusive digital assets through our Initial Collectible Offerings.Be the first to own and trade the next big thing.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12 md:gap-16">
        {tokenList.map((item) => (
          <TokenCard item={item} key={item.name} />
        ))}
      </div>
    </section>
  )
}


interface TokenCardProps {
  name: string;
  symbol: string;
  price: number;
  volume: number;
  change: number;
  marketcap: number;
}

const TokenCard = ({ item, className }: { item: TokenCardProps, className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl flex flex-col w-full items-center text-center relative ${className} `}
    >
      <div className="bg-dark-200 rounded-xl w-full h-full gp-5 p-6 flex flex-col gap-4 inset-shadow-sm cursor-pointer hover:inset-shadow-gold-300/50 ">
        <div className="flex justify-between gap-4">
          <div className="flex flex-col">
            <h4 className="text-xl text-start">{item.name}</h4>
            <p className={`${Custom.desc} uppercase text-start`}>{item.symbol}</p>
          </div>
          {item.volume > 0 ? <Icons.VolumeUp /> : <Icons.VolumeDown />}
        </div>
        <div className="flex justify-between">
          <p className={`${Custom.desc}`}>Price</p>
          <p className="text-white-900">${item.price}</p>
        </div>
        <div className="flex justify-between">
          <p className={`${Custom.desc}`}>24h Volume</p>
          <p className="text-white-900">${item.volume}M</p>
        </div>
        <div className="flex justify-between">
          <p className={`${Custom.desc}`}>Change</p>
          <p className={`${item.change > 0 ? "text-green-500" : "text-red-500"}`}>{item.change}%</p>
        </div>
        <div className="flex justify-between pt-6 border-t border-dark-50">
          <p className={`${Custom.desc}`}>Market Cap</p>
          <p className="text-white-900">${item.marketcap}M</p>
        </div>
      </div>
    </motion.div>
  );
};


export default Phenomenon