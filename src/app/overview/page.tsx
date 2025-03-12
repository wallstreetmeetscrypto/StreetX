'use client'
import BackgroundImage from "@/components/BackgroundImage";
import ActionButton from "@/components/Buttons/ActionButton";
import NormalButton from "@/components/Buttons/Normal";
import { Icons } from "@/components/Icons/icons";
import { Custom } from "@/styles/custom"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from "@heroui/react";
import Link from "next/link";


const OverviewPage = () => {

  const data = [
    {
      feature: "What Are you Launching?",
      pump: "Any random meme token 🤡",
      streetx: "A digital collectible (ICO) for sports, music, business, and cultural icons 🌍"
    },
    // {
    //   feature: "Launch Process",
    //   pump: "Instant, but Chaotic",
    //   streetx: "Structured ICO - 1B total tokens (10% sold at launch) 📊"
    // },
    {
      feature: "What Can You Mint?",
      pump: "Any name, no real world tie",
      streetx: "Icons like  Sam Altman with Elon Musk, or Taylor Swift 🎤"
    },
    {
      feature: "Can You Launch Digital IPOs for Future Stars?",
      pump: "❌ No",
      streetx: "✅ Yes - Be first to mint and up-and-coming athlete, artist, or entrepeneur"
    },
    {
      feature: "Market Mechanics",
      pump: "❌ Pumps & Dumps",
      streetx: "✅ Bonding Curve ensures steady price increases as demand grows 📈"
    },
    {
      feature: "AI Generated Collectibles?",
      pump: "❌ No",
      streetx: "✅ Yes - Each ICO gets unique AI-generated art 🎨"
    },
    {
      feature: "Verification System",
      pump: "❌ None - Anyone can copy a name",
      streetx: "✅ Yes - Athletes, celebrities and organizations can officially claim tokens 🔒"
    },
    {
      feature: "Passive Growth?",
      pump: "❌ No - You must keep flipping",
      streetx: "✅ Yes - Mint ICO, buy & hold collectibles as their market grows 💎"
    },
    {
      feature: "Bring Friends?",
      pump: "❌ No reason to invite others",
      streetx: "✅ Yes - The more people buy, the more valuable your collectible becomes 💡"
    },
  ]

  return (
    <div className="min-h-screen px-4 lg:px-8 xl:px-12 flex flex-col items-center gap-6">
      <div className={`${Custom.section} mx-auto  rounded-3xl flex flex-col items-center gap-12`}>
        <div className="py-12 flex gap-2 items-center">
          <Icons.GoldRocket />
          <h1 className="text-2xl lg:text-5xl 2xl:text-6xl font-bold">Welcome to <span className={`${Custom.goldgradient} `}>StreetX</span></h1>
        </div>
        <p className="text-center font-semibold">The Next Evolution of <span className={`${Custom.goldgradient}`}>Solana ICOs</span> Is Here. <br />💰  Pump Fun Was Just the Beginning.<br /> 📈 Now, It's Time to Think Bigger.</p>
        <div className="relative p-8 flex items-center flex-col bg-dark-200 xl:w-3/5 w-10/12 z-0">
          <div className="w-8 h-8 bg-gold-300 -translate-x-[1px] -translate-y-[1px] absolute left-0 top-0 "></div>
          <div className="w-8 h-8 bg-gold-300 -translate-x-[1px] translate-y-[1px] absolute left-0 bottom-0 "></div>
          <div className="w-8 h-8 bg-gold-300 translate-x-[1px] -translate-y-[1px] absolute right-0 top-0 "></div>
          <div className="w-8 h-8 bg-gold-300 translate-x-[1px] translate-y-[1px] absolute right-0 bottom-0 "></div>
          <div className="left-0 absolute right-0 top-0 bottom-0 bg-dark-200">
          </div>
          <div className="absolute right-0 top-0 -translate-y-1/2 rotate-12 translate-x-1/2">
            <Icons.GoldChart />
          </div>
          <div className="flex z-0 flex-col gap-4">
            <p className="italic">🃏 You’ve seen the meme token hype—fast mints, quick pumps, even quicker dumps.</p>
            <p className="italic">💡 But what if you could still flip tokens, still trade fast, but with actual value? What if you could be early to digital IPOs for the biggest names in sports, music, and pop culture?</p>
            <p className={`${Custom.goldgradient} font-bold text-xl text-center`}>That's StreetX</p>
          </div>
        </div>

      </div>

      <div className={`${Custom.section} mx-auto  rounded-3xl flex flex-col gap-12 items-center`}>
        <div className="bg-gold-100/10 rounded-2xl border-gold-300 px-8 py-1 border">
          <p className={`${Custom.goldgradient} font-semibold text-center`}>WHY StreetX?</p>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold  text-center">
          🔥 The Smarter Alternative to Pump.Fun 🔥 
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 pt-1 rounded-2xl rounded-b-3xl">
            <div className="flex flex-col rounded-2xl p-6 bg-dark-200">
              <h5 className="font-semibold text-xl">Trade Smarter 🧠 </h5>
              <p className="mt-2">✅ Stop flipping garbage and start flipping
                assets with potential. The best
                collectibles won't stay unminted forever.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 pt-1 rounded-2xl rounded-b-3xl">
            <div className="flex flex-col rounded-2xl p-6 bg-dark-200 h-full">
              <h5 className="font-semibold text-xl"> Still Fast ⚡ </h5>
              <p className="mt-2">✅ Still fast, still fun—just with bigger upside. First movers always win in this space.</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 pt-1 rounded-2xl rounded-b-3xl">
            <div className="flex flex-col rounded-2xl p-6 bg-dark-200">
              <h5 className="font-semibold text-xl"> Bigger Upside 📈</h5>
              <p className="mt-2">✅ Imagine minting Sam Altman before
                OpenAI's trillion-dollar IPO or the next
                NBA superstar before they went pro.</p>
            </div>
          </div>

        </div>
      </div>

      <div className={`${Custom.section} mx-auto bg-dark-200 rounded-3xl flex flex-col gap-20 py-20`}>
        <div className="relative flex items-center mx-auto">
          <h3 className="text-2xl lg:text-3xl font-bold  text-center">
            Why <span className={`${Custom.goldgradient} text-2xl`}>StreetX</span> is the Smarter Alternative to <br />Pump.Fun
          </h3>
          <div className="absolute bottom-0 translate-y-16 rotate-12 right-20 translate-x-full">
            <Icons.GoldLight />
          </div>
        </div>
        <Table className="lg:w-11/12  mx-auto rounded-3xl" classNames={{ base: "bg-transparent rounded-3xl", table: "bg-transparent", wrapper: "bg-transparent ", thead: "bg-transparent/10", th: "bg-dark-50/10" }}>
          <TableHeader className="bg-dark-50/10">
            <TableColumn className="text-lg py-4">Feature</TableColumn>
            <TableColumn className="text-lg py-4">Pump.Fun - Meme Tokens</TableColumn>
            <TableColumn className="text-lg py-4" align="end">StreetX.io - Digital IPOs for the future🔥</TableColumn>
          </TableHeader>
          <TableBody className="bg-transparent">
            {
              data.map((item, idx) => (
                <TableRow key={idx} className="my-1 rounded-2xl cursor-pointer">
                  <TableCell className={`py-4 border-x-2 whitespace-nowrap border-gold-200 bg-gold-100/2 first:border-t-gold-200 ${idx === 0 ? "border-t-2" : ""} ${idx === data.length - 1 ? "border-b-2" : ""}`}>
                    <div className="">{item.feature}
                    </div>
                  </TableCell>
                  <TableCell className={`py-4 border-x-2 border-gold-200 bg-gold-100/5 first:border-t-gold-200 ${idx === 0 ? "border-t-2" : ""} ${idx === data.length - 1 ? "border-b-2" : ""}`}>
                    <div className="flex flex-col ">
                      {item.pump}
                    </div>
                  </TableCell>
                  <TableCell className={`py-4 border-x-4 border-gold-300 bg-gold-100/10 first:border-t-gold-200 ${idx === 0 ? "border-t-4" : ""} ${idx === data.length - 1 ? "border-b-4" : ""}`}>
                    <div className="flex flex-col text-start">
                      {item.streetx}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </div>

      <div className={`${Custom.section} mx-auto  rounded-3xl flex flex-col gap-12 items-center`}>
        <div className="bg-gold-100/10 rounded-2xl border-gold-300 px-8 py-1 border">
          <p className={`${Custom.goldgradient} font-semibold text-center`}>🚀 The Opportunity</p>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold  text-center">
          Trade Smarter, Speculate Bigger
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="relative rounded-2xl bg-dark-200 rounded-b-3xl flex flex-col items-center p-6 gap-6">
            <div className="items-center flex">
              <Icons.Matter />
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <Icons.Dot />
            </div>
            <div className="flex flex-col rounded-2xl bg-dark-200">
              <h5 className={`font-semibold text-xl ${Custom.goldgradient}`}>🏆  Emphasizes exclusivity</h5>
              <p className="mt-2">💡 Imagine getting early access to the digital identity of rising stars before they reach global fame. The earlier you mint, the greater your potential returns.</p>
            </div>
          </div>
          <div className="relative rounded-2xl bg-dark-200 rounded-b-3xl flex flex-col items-center p-6 gap-6">
            <div className="items-center flex">
              <Icons.Value />
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <Icons.Dot />
            </div>
            <div className="flex flex-col rounded-2xl bg-dark-200 h-full">
              <h5 className={`font-semibold text-xl ${Custom.goldgradient}`}>🚀  Growth & future gains</h5>
              <p className="mt-2">💡 What if you could have minted Sam Altman before OpenAI's trillion-dollar valuation? StreetX makes investing in digital identities as simple as buying a token.</p>
            </div>
          </div>
          <div className="relative rounded-2xl bg-dark-200 rounded-b-3xl flex flex-col items-center p-6 gap-6">
            <div className="items-center flex">
              <Icons.Global />
            </div>
            <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
              <Icons.Dot />
            </div>
            <div className="flex flex-col rounded-2xl bg-dark-200">
              <h5 className={`font-semibold text-xl ${Custom.goldgradient}`}>📈  Expanding opportunities</h5>
              <p className="mt-2">💡 global superstar before they reach mainstream. Expand your portfolio with digital assets that have real world connections.</p>
            </div>
          </div>
        </div>
      </div>

      <div className={`${Custom.section} mx-auto  rounded-3xl flex flex-col gap-12 items-center`}>
        <div className="bg-gold-100/10 rounded-2xl border-gold-300 px-8 py-1 border">
          <p className={`${Custom.goldgradient} font-semibold text-center`}>🔥 The Future Is Here</p>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold  text-center">
          Own The Next Big Thing
        </h3>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="grid grid-cols-1 gap-8 basis-1/2 w-full">
            <div className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 pt-1 rounded-2xl rounded-b-3xl">
              <div className="flex flex-col rounded-2xl p-6 bg-dark-200 h-full">
                <h5 className="font-semibold text-xl">🎟️ Exclusive access</h5>
                <p className="mt-2">🔵 Get in before they go mainstream and secure your position
                  in thedigital collectibles market.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 pt-1 rounded-2xl rounded-b-3xl">
              <div className="flex flex-col rounded-2xl p-6 bg-dark-200 h-full">
                <h5 className="font-semibold text-xl">🏅 Valuable digital assets</h5>
                <p className="mt-2">🔵 Not just memes – invest in digital assets with real-world connections to rising stars in every field.</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 pt-1 rounded-2xl rounded-b-3xl">
              <div className="flex flex-col rounded-2xl p-6 bg-dark-200 h-full">
                <h5 className="font-semibold text-xl"> 📊 Financial market-related</h5>
                <p className="mt-2">🔵 Instead of gambling on tokens that go to zero, build a portfolio of high- potential digital assets.</p>
              </div>
            </div>
          </div>
          <div className="basis-1/2">
            <Image src="/img/ecosystem.png" alt="eco-system" />
          </div>
        </div>
      </div>

      <div className={`${Custom.section} mx-auto  rounded-3xl flex flex-col gap-12 items-center`}>
        <h4 className="text-4xl font-bold text-center">🚀 <span className={`${Custom.goldgradient}`}>Be the First, Own the Future</span></h4>
        <div className="flex items-center flex-col md:flex-row gap-4">
          <Link href="/mint">
            <ActionButton name="Start Trading" />
          </Link>
          <Link href="/explorer">
            <NormalButton name="Mint Your First ICO" />
          </Link>
        </div>
        <p>📍<span className={`${Custom.goldgradient}`}>StreetX.io – The Next Evolution of Solana ICOs.</span></p>
      </div>
    </div>
  )
}


export default OverviewPage