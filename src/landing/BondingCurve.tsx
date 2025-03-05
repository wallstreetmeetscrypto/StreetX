"use client"
import BackgroundImage from "@/components/BackgroundImage"
import ActionButton from "@/components/Buttons/ActionButton"
import { tradingSteps } from "@/static/data"
import { Custom } from "@/styles/custom"
import * as motion from "motion/react-client"
import Image from "next/image"


const BondingCurve = () => {


  return (
    <section className={`${Custom.section} flex flex-col items-center justify-center relative`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <Image
          src="/img/bc.png"
          width={0}
          height={0}
          sizes="50vw"
          style={{ width: '100%', height: 'auto' }} alt="bonding curve" className="w-full md:w-1/2" />
        <div className="flex flex-col justify-center items-start">
          <div className="text-start flex flex-col gap-6">
            <h3 className="font-bold text-3xl sm:text-4xl lg:text-5xl">Prices Only Go Up —<span className="bg-gradient-to-r from-gold-100 via-gold-300 to-gold-100 bg-clip-text text-transparent">Thanks to WSE's Bonding Curve</span></h3>
            <p className="text-dark-50 text-sm md:text-base max-w-3xl">Our innovative bonding curve ensures that as more traders invest in an asset, its price naturally increases. This scarcity-driven model creates a self-sustaining ecosystem where early adopters are rewarded and value grows organically with demand.</p>
          </div>
          <ActionButton name="Explore The Markets" onClick={() => { }} className="mt-14" />
        </div>
      </div>
    </section>
  )
}


export default BondingCurve