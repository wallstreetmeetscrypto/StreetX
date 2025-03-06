"use client"
import ActionButton from "@/components/Buttons/ActionButton"
import NormalButton from "@/components/Buttons/Normal"
import { Icons } from "@/components/Icons/icons"
import { Input } from "@/components/Input/input"
import { Label } from "@/components/Labels/base"
import { Custom } from "@/styles/custom"
import { useState } from "react"
import TradingViewWidget from "./tradingview"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets"


const tabList = [
  {
    id: 0,
    title: "Trading",
    icon: Icons.MenuDashboard
  },
  {
    id: 1,
    title: "Minting",
    icon: Icons.MenuMint
  },
  {
    id: 2,
    title: "Portfolio",
    icon: Icons.MenuProfile
  },
  {
    id: 3,
    title: "Liquidity",
    icon: Icons.Liquidity
  },
  {
    id: 4,
    title: "Swap",
    icon: Icons.Swap
  },
]

const DashboardPage = () => {

  const [tabIndex, setTabIndex] = useState(0)


  const tabHandler = (id: number) => {
    switch (id) {
      case 0:
        break
      case 1:
        break
    }
  }

  return (
    <div className={`${Custom.section} xl:p-5 md:p-10 lg:p-12 p-5 md:mt-12 mt-[100px] min-h-screen w-full mx-auto`}>
      <div className="flex flex-col lg:flex-row gap-4  w-full mx-auto items-start sticky">
        <div className="sticky flex flex-col bg-dark-200 rounded-3xl py-8 px-6 w-full lg:w-60">
          <h3 className="text-2xl hidden lg:flex">Menu</h3>
          <div className="flex flex-row lg:flex-col gap-2 lg:mt-4 overflow-auto">
            {tabList.map((item) => (
              <div key={item.id} className="bg-dark-50/10 rounded-2xl px-4 py-1 cursor-pointer flex items-center mb-1">
                <div className="w-8">
                  <item.icon />
                </div>
                <p className="">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

        </div>
        <div className="tab-content flex-1 gap-4">
          {/* {tabIndex === 0 && */}

          <div className="flex flex-col gap-4">
            <div className="grid-cols-2 grid lg:grid-cols-4 gap-4">
              <div className="flex items-start flex-col gap-4 rounded-2xl bg-dark-200 p-8">
                <p className={`${Custom.desc}`}>MUSK Price</p>
                <div className="flex items-center">
                  <p className="text-4xl font-semibold">
                    0.0035
                  </p>
                  <div className="text-green-500 text-xl">
                    ↗15.6%
                  </div>
                </div>
              </div>
              <div className="flex items-start flex-col gap-4 rounded-2xl bg-dark-200 p-8">
                <p className={`${Custom.desc}`}>24h Volume</p>
                <div className="flex items-center">
                  <p className="text-4xl font-semibold">
                    $1.24M
                  </p>
                </div>
              </div>
              <div className="flex items-start flex-col gap-4 rounded-2xl bg-dark-200 p-8">
                <p className={`${Custom.desc}`}>Total Liquidity</p>
                <div className="flex items-center">
                  <p className="text-4xl font-semibold">
                    $4.56M
                  </p>
                </div>
              </div>
              <div className="flex items-start flex-col gap-4 rounded-2xl bg-dark-200 p-8">
                <p className={`${Custom.desc}`}>Market Cap</p>
                <div className="flex items-center">
                  <p className="text-4xl font-semibold">
                    $89.2M
                  </p>
                </div>
              </div>
            </div>

            <AdvancedRealTimeChart
              theme="dark"
              height={500}
              width={"100%"} />

            <div className="flex flex-col md:flex-row w-full gap-4">
              <div className="rounded-3xl bg-dark-200 p-6 basis-1/2 ">
                <p className="text-2xl mb-8">Trade MUSK</p>
                <div className="flex flex-col gap-4">
                  <Input label="Amount (MUSK)" placeholder="0.00" />
                  <Input label="Price (USD)" placeholder="0.00" />
                  <div className="flex flex-col md:flex-row w-full gap-8">
                    <ActionButton className="basis-1/2" name="Buy Musk" showIcon={false} />
                    <NormalButton className="basis-1/2" name="Sell MUSK" />
                  </div>
                </div>
              </div>
              <div className="rounded-3xl bg-dark-200 p-6 basis-1/2 ">
                <p className="text-2xl mb-8">Portfolio</p>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between">
                    <p className={`${Custom.desc}`}>
                      Available Balance
                    </p>
                    <p>
                      $12,456.78
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className={`${Custom.desc}`}>
                      MUSK Balance
                    </p>
                    <p>
                      3,500,000 MUSK
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className={`${Custom.desc}`}>
                      Unrealized P/L
                    </p>
                    <p>
                      $73,126.00
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className={`${Custom.desc}`}>
                      MUSK Price (Live)
                    </p>
                    <p>
                      $560.00XX
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className={`${Custom.desc}`}>
                      Total Portfolio Value
                    </p>
                    <p>
                      +$890.45
                    </p>
                  </div>

                </div>
              </div>
            </div>

            <TokenHistory />
          </div>
          {/* } */}

        </div>
      </div>
    </div>
  )
}


const TokenHistory = () => {

  const history = [
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: 1,
      label: "buy",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
    {
      type: -1,
      label: "sell",
      amount: 0.0002,
      value: 2500,
      date: "Just Now"
    },
  ]

  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="bg-dark-200 rounded-3xl p-6 flex flex-col gap-4">
      <div className="flex gap-3">
        <div className="bg-dark-50/20 px-3 py-1 rounded-lg cursor-pointer">
          Market Trade
        </div>
        <div className="px-3 py-1 rounded-lg cursor-pointer">
          Order Book
        </div>
      </div>

      <div className="w-full border-t border-dark-50/40 pt-4">
        <table className="w-full">
          {
            history.map((item, idx) => (
              <tr key={idx}>
                <td className={`${item.type > 0 ? "text-green-500" : "text-red-500"}`}>{item.label}</td>
                <td className={`py-1 ${Custom.desc}`}>{item.value}</td>
                <td className={`py-1 ${Custom.desc}`}>{item.amount}</td>
                <td className="text-right">{item.date}</td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}




export default DashboardPage