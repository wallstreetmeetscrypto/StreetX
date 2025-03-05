"use client"
import BackgroundImage from "@/components/BackgroundImage"
import ActionButton from "@/components/Buttons/ActionButton"
import { howtoTrading, tradingSteps } from "@/static/data"
import { Custom } from "@/styles/custom"
import * as motion from "motion/react-client"
import Image from "next/image"


const WSETrading = () => {

  return (
    <section className={`${Custom.section} flex flex-col items-center justify-center relative gap-12`}>
      <div className="text-center flex flex-col gap-6">
        <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl">How Trading Works on<span className="bg-gradient-to-r from-gold-100 via-gold-300 to-gold-100 bg-clip-text text-transparent">WSE</span></h3>
        <p className={`${Custom.desc}`}>Start your trading journey in three simple steps and become part of the next generation of digital asset trading.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center items-start gap-8">
          {howtoTrading.map((item) => (
            <div className="flex gap-4">
              <item.icon />
              <div className="flex flex-col gap-2">
                <h4 className="text-xl font-semibold text-white text-start">{item.name}</h4>
                <p className={`${Custom.desc} text-start`}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <Image
          src="/img/trading.png"
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: '100%', height: 'auto' }} alt="bonding curve" className="w-full md:w-1/2" />
      </div>
    </section>
  )
}


export default WSETrading