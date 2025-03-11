"use client"
import ActionButton from "@/components/Buttons/ActionButton"
import ControlButton from "@/components/Buttons/ControlButton"
import NormalButton from "@/components/Buttons/Normal"
import { Icons } from "@/components/Icons/icons"
import { Input } from "@/components/Input/input"
import { Label } from "@/components/Labels/base"
import { Custom } from "@/styles/custom"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets"
import { Select, SelectItem, Avatar } from "@heroui/react";
import Layout from "@/components/Layout/layout"


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
  const router = useRouter()


  const tabHandler = (id: number) => {
    switch (id) {
      case 0:
        break
      case 1:
        break
    }
  }

  useEffect(() => {
    if (tabIndex === 1) {
      router.push("mint")
    }
    else if (tabIndex === 2) {
      router.push("portfolio")
    }
  }, [tabIndex])

  return (
    <Layout>
      <div className={`${Custom.section} xl:p-5 md:p-10 lg:p-12 p-5 min-h-screen w-full mx-auto`}>
        <div className="flex flex-col lg:flex-row gap-4  w-full mx-auto items-start sticky">
          <div className="sticky flex flex-col bg-dark-200 rounded-3xl py-8 px-6 w-full lg:w-60">
            <h3 className="text-2xl hidden lg:flex">Menu</h3>
            <div className="flex flex-row lg:flex-col gap-2 lg:mt-4 overflow-auto">
              {tabList.map((item) => (
                <div key={item.id} className={`${tabIndex === item.id ? "bg-dark-50/10" : ""}  rounded-2xl px-4 py-1 cursor-pointer flex items-center mb-1`} onClick={() => setTabIndex(item.id)}>
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
          <div className="tab-content flex-1 gap-4 w-full">
            {tabIndex === 0 &&
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
            }
            {tabIndex === 3 &&
              <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <h3 className="text-xl">Liquidity Pools</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 mt-6 gap-4">
                    <div className="flex bg-dark-200 rounded-2xl p-6 justify-between items-center">
                      <div className="flex flex-col gap-4">
                        <p className={`${Custom.desc}`}>Total Value Locked</p>
                        <p className="text-xl">$1234567</p>
                      </div>
                      <Icons.Money />
                    </div>
                    <div className="flex bg-dark-200 rounded-2xl p-6 justify-between items-center">
                      <div className="flex flex-col gap-4">
                        <p className={`${Custom.desc}`}>24h Volume</p>
                        <p className="text-xl">$1234567</p>
                      </div>
                      <Icons.Volume />
                    </div>
                    <div className="flex bg-dark-200 rounded-2xl p-6 justify-between items-center">
                      <div className="flex flex-col gap-4">
                        <p className={`${Custom.desc}`}>Total Rewards</p>
                        <p className="text-xl">$1234567</p>
                      </div>
                      <Icons.VolumeUpGold />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl">Active Pools</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 mt-6 gap-4">
                    <div className="flex bg-dark-200 rounded-2xl p-6 flex-col gap-8">
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-4 items-start">
                          <p className={`${Custom.desc}`}>Token Pair</p>
                          <p className="text-xl">SOL/USDT</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className={`${Custom.desc}`}>APY </p>
                          <p className={`text-gold-300`}>12.5%</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-4 items-start">
                          <p className={`${Custom.desc}`}>Total Liquidity </p>
                          <p className="text-xl">$500,000</p>
                        </div>
                        <div className="flex items-end flex-col">
                          <p className={`${Custom.desc}`}>Your Share </p>
                          <p className={`text-gold-300`}>%2.5</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className={`${Custom.desc}`}>Earned Rewards </p>
                        <p className={`text-gold-300`}>$1234</p>
                      </div>
                      <div className="flex justify-between w-full gap-4 lg:flex-row flex-col">
                        <ControlButton className="w-full">+ Add</ControlButton>
                        <ControlButton className="w-full">- Remove</ControlButton>
                      </div>
                    </div>
                    <div className="flex bg-dark-200 rounded-2xl p-6 flex-col gap-8">
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-4 items-start">
                          <p className={`${Custom.desc}`}>Token Pair</p>
                          <p className="text-xl">SOL/USDT</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className={`${Custom.desc}`}>APY </p>
                          <p className={`text-gold-300`}>12.5%</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-4 items-start">
                          <p className={`${Custom.desc}`}>Total Liquidity </p>
                          <p className="text-xl">$500,000</p>
                        </div>
                        <div className="flex items-end flex-col">
                          <p className={`${Custom.desc}`}>Your Share </p>
                          <p className={`text-gold-300`}>%2.5</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className={`${Custom.desc}`}>Earned Rewards </p>
                        <p className={`text-gold-300`}>$1234</p>
                      </div>
                      <div className="flex justify-between w-full gap-4 lg:flex-row flex-col">
                        <ControlButton className="w-full">+ Add</ControlButton>
                        <ControlButton className="w-full">- Remove</ControlButton>
                      </div>
                    </div>
                    <div className="flex bg-dark-200 rounded-2xl p-6 flex-col gap-8">
                      <div className="flex justify-between w-full">
                        <div className="flex flex-col gap-4 items-start">
                          <p className={`${Custom.desc}`}>Token Pair</p>
                          <p className="text-xl">SOL/USDT</p>
                        </div>
                        <div className="flex flex-col items-end">
                          <p className={`${Custom.desc}`}>APY </p>
                          <p className={`text-gold-300`}>12.5%</p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex flex-col gap-4 items-start">
                          <p className={`${Custom.desc}`}>Total Liquidity </p>
                          <p className="text-xl">$500,000</p>
                        </div>
                        <div className="flex items-end flex-col">
                          <p className={`${Custom.desc}`}>Your Share </p>
                          <p className={`text-gold-300`}>%2.5</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start">
                        <p className={`${Custom.desc}`}>Earned Rewards </p>
                        <p className={`text-gold-300`}>$1234</p>
                      </div>
                      <div className="flex justify-between w-full gap-4 lg:flex-row flex-col">
                        <ControlButton className="w-full">+ Add</ControlButton>
                        <ControlButton className="w-full">- Remove</ControlButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
            {tabIndex === 4 &&
              <SwapPanel />
            }
          </div>
        </div>
      </div>
    </Layout>
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
          <tbody>
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
          </tbody>
        </table>
      </div>
    </div>
  )
}


const SwapPanel = () => {

  const [from, setFrom] = useState(0)
  const [to, setTo] = useState(0)

  return (
    <div className={`flex flex-col w-full gap-8`}>

      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold"><span className={`${Custom.goldgradient}`}>WSE</span> Swap</h3>
        <p className={`${Custom.desc} text-start`}>Trade tokens instantly with premium execution</p>
      </div>
      <div className="bg-dark-200 rounded-3xl flex flex-col p-6 gap-6">

        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <p className="text-xl">Swap</p>
            <Icons.Gear />
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <Input label="From" value={from} setValue={setFrom} placeholder="0.0" />
            </div>
            <TokenSelector />
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <div className="flex-1">
              <Input label="To" value={to} setValue={setTo} placeholder="0.0" />
            </div>
            <TokenSelector />
          </div>

        </div>
        <ActionButton name="Swap Now" showIcon={false} className="hover:scale-101" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-300 rounded-2xl p-6 flex gap-4 flex-col items-start">
            <p className={`${Custom.desc}`}>Price Impact</p>
            <p>0.05%</p>
          </div>
          <div className="bg-dark-300 rounded-2xl p-6 flex gap-4 flex-col items-start">
            <p className={`${Custom.desc}`}>Network Fee</p>
            <p>~$4.20</p>
          </div>
          <div className="bg-dark-300 rounded-2xl p-6 flex gap-4 flex-col items-start">
            <p className={`${Custom.desc}`}>Min. Received</p>
            <p>1,798.20 USDT</p>
          </div>

        </div>
      </div>
    </div>
  )
}




const TokenSelector = () => {
  const tokens = [
    {
      id: 1,
      name: "ETH",
      role: "CEO",
      team: "Management",
      status: "active",
      age: "29",
      avatar: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
      email: "tony.reichert@example.com",
    },
    {
      id: 2,
      name: "BTC",
      role: "Tech Lead",
      team: "Development",
      status: "paused",
      age: "25",
      avatar: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      email: "zoey.lang@example.com",
    },
    {
      id: 3,
      name: "SOL",
      role: "Sr. Dev",
      team: "Development",
      status: "active",
      age: "22",
      avatar: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
      email: "jane.fisher@example.com",
    },
  ];
  return (
    <Select
      className="max-w-[150px]"
      classNames={{
        label: "group-data-[filled=true]:-translate-y-5",
        trigger: "min-h-12",
        listboxWrapper: "max-h-[400px]",
        base: "max-w-[150px]"
      }}
      items={tokens}
      listboxProps={{
        itemClasses: {
          base: [
            "rounded-md",
            "text-default-500",
            "transition-opacity",
            "data-[hover=true]:text-foreground",
            "data-[hover=true]:bg-default-100",
            "dark:data-[hover=true]:bg-default-50",
            "data-[selectable=true]:focus:bg-default-50",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-default-500",
          ],
        },
      }}
      popoverProps={{
        classNames: {
          base: "before:bg-default-200",
          content: "p-0 border-small border-divider bg-background",
        },
      }}
      renderValue={(items) => {
        return items.map((item: any) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item.data.name}
              className="flex-shrink-0"
              size="sm"
              src={item.data.avatar}
            />
            <div className="flex flex-col">
              <span>{item.data.name}</span>
            </div>
          </div>
        ));
      }}
      variant="bordered"
    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex gap-2 items-center">
            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
}




export default DashboardPage