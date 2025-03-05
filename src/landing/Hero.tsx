"use client"
import ActionButton from "@/components/Buttons/ActionButton"
import NormalButton from "@/components/Buttons/Normal"
import Navbar from "@/components/Layout/navbar"
import { Custom } from "@/styles/custom"
import { useEffect, useState } from "react"
import { TickerTape } from "react-ts-tradingview-widgets"

const HeroSecion = () => {

  const [rendered, setRendered] = useState(false)
  useEffect(() => {
    if (window) {
      setRendered(true)
    }
  }, [])

  return (
    rendered ? <section className={`w-full flex flex-col items-center justify-center relative bg-transparent`}>
      <div className="w-full">
        <TickerTape
          colorTheme="dark"
          isTransparent
          symbols={[
            {
              proName: "BITSTAMP:SOLUSD",
              title: "SOL/USD",
            },
            {
              proName: "BITSTAMP:BTCUSD",
              title: "BTC/USD",
            },
            {
              proName: "BITSTAMP:ETHUSD",
              title: "ETH/USD",
            },
            {
              proName: "BITSTAMP:JUPUSD",
              title: "JUP/USD",
            },
            {
              proName: "BITSTAMP:MEWUSD",
              title: "MEW/USD",
            },
            {
              proName: "BITSTAMP:USDCUSD",
              title: "USDC/USD",
            },
          ]}
        />
      </div>
      <div className={`${Custom.section}`}>
        <Navbar />
        <div className="flex items-center flex-col gap-8 py-11">
          <div className="rounded-2xl px-4 py-1 border border-dark-50/50">
            <p className={`${Custom.goldgradient}`}>The Future of Trading</p>
          </div>
          <h2 className={`${Custom.goldgradient} text-3xl xl:text-5xl font-bold max-w-3xl text-center leading-12 xl:leading-16`}>Trade People, Teams & Brands Like Stocks—Only on WSE</h2>
          <p className={`${Custom.desc} text-center max-w-2xl text-3xl`}>The first platform where you can mint, trade, and speculate on real-world names, brands, andentities—all powered by blockchain.</p>
          <div className="flex gap-4 mt-2">
            <ActionButton name="Start Trading" />
            <NormalButton name="Mint Your First ICO" />
          </div>
        </div>
      </div>
    </section>
      : <></>
  )
}


export default HeroSecion