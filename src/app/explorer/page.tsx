'use client'
import { Custom } from "@/styles/custom"
import { useState } from "react"
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Image } from "@heroui/react";
import { Select, SelectItem } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ExplorerPage = () => {

  const tokenData = [
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
    {
      id:112,
      name: "Bitcoin",
      symbol: "btc",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
      price: 62134.21,
      change: -1.32,
      volume: 32.6,
      marketcap: 1200,
      holders: 200
    },
  ]

  const router = useRouter()

  const filterItems = [
    { key: 1, label: "Market Cap" },
    { key: 2, label: "Market Cap" },
  ]

  const handleRedirect = (id: number)=>{
    router.push(`/explorer/${id}`)
  }


  return (
    <div className={`flex flex-col gap-8 w-full ${Custom.section} mx-auto bg-dark-200 rounded-3xl`}>
      <div className="flex flex-col items-start">
        <h3>Token Explorer</h3>
        <p className={`${Custom.desc}`}>Browse and discover top tokens across various categories</p>
      </div>

      <div className="flex justify-between flex-col lg:flex-row items-start">
        {/* Filter category */}
        <div className="flex">
          <FilterCategory />
        </div>
        <Select
          classNames={{
            label: "group-data-[filled=true]:-translate-y-5 bg-dark-200",
            trigger: "min-h-12",
            listboxWrapper: "max-h-[400px]",
            base: "max-w-[150px]",
          }}>
          {filterItems.map((filterItem: any) => (
            <SelectItem key={filterItem.key} className="bg-dark-200">{filterItem.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Token</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Volume 24h</TableColumn>
          <TableColumn>Market Cap</TableColumn>
          <TableColumn align="end">Holders</TableColumn>
        </TableHeader>
        <TableBody className="">
          {
            tokenData.map((token) => (
                <TableRow key="1" className="border border-dark-50/10 my-1 rounded-xl cursor-pointer" onClick={()=>handleRedirect(token.id)}> 
                  <TableCell className="">
                    <div className="flex items-center gap-2">
                      <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" width={30} />
                      <div className="flex flex-col">
                        <p className="font-semibold">{token.name}</p>
                        <p>{token.symbol}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <p>${token.price}</p>
                      <p className={`${token.change > 0 ? "text-green-500" : "text-red-500"}`}>{token.change}%</p>
                    </div>
                  </TableCell>
                  <TableCell>${token.volume}B</TableCell>
                  <TableCell>${token.marketcap}B</TableCell>
                  <TableCell align="right">{token.holders}M</TableCell>
                </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}


const FilterCategory = () => {

  const categories = [
    {
      id: 1,
      label: "All Tokens"
    },
    {
      id: 2,
      label: "DeFi"
    },
    {
      id: 3,
      label: "Gaming"
    },
    {
      id: 4,
      label: "NFT"
    },
    {
      id: 5,
      label: "Layer 1"
    },
    {
      id: 6,
      label: "Layer 2"
    },
  ]
  const [selected, setSelected] = useState<number>(categories[0].id)

  return (
    <ul className="flex gap-4">
      {categories.map((category) => (
        <li key={category.id} className={`px-3 py-1 border border-dark-50/10 rounded-2xl cursor-pointer ${selected === category.id ? "bg-dark-50/20" : ""}`} onClick={() => setSelected(category.id)}>
          <p>{category.label}</p>
        </li>
      ))}
    </ul>
  )
}


export default ExplorerPage