'use client'
import { Custom } from "@/styles/custom"
import { Image } from "@heroui/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { FaCopy, FaExpand, FaLongArrowAltLeft, FaTwitter } from "react-icons/fa"
import { FaAngleLeft, FaEarthAmericas, FaWebflow } from "react-icons/fa6"

const TokenDetailPage = () => {

  const router = useRouter()

  return (
    <div className={`flex flex-col gap-8 w-full ${Custom.section} mx-auto rounded-3xl`}>
      <div className="w-full">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.back()}>
          <FaLongArrowAltLeft />
          <p>Back to Tokens</p>
        </div>
        <div className="flex flex-col py-12 gap-6">
          <div className="flex justify-between sm:items-center flex-col sm:flex-row gap-6">
            <div className="flex items-center gap-2">
              <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/1.png" width={60} height={60} />
              <div className="flex flex-col">
                <div className="flex gap-2 items-start">
                  <p className="text-2xl font-bold">Bitcoin</p>
                  <p className="mt-1 text-dark-50/50">BTC</p>
                </div>
                <div className="flex gap-2 items-center">
                  <p>Contract: 0xbtc...123 </p>
                  <FaCopy />
                </div>
              </div>

            </div>
            <div className="flex gap-3 flex-row sm:flex-col md:flex-row">
              <div className="flex items-center gap-1 border border-dark-50/20 rounded-lg px-4 hover:bg-dark-50/10 py-1 hover:scale-101 active:scale-100 cursor-pointer">
                <FaTwitter />
                <p>Twitter</p>
              </div>
              <div className="flex items-center gap-1 border border-dark-50/20 rounded-lg px-4 hover:bg-dark-50/10 py-1 hover:scale-101 active:scale-100 cursor-pointer">
                <FaEarthAmericas />
                <p>Website</p>
              </div>
            </div>
          </div>

          <div className="flex gap-6 flex-col md:flex-row">
            <div className="flex-1 flex flex-col gap-6">
              <div className="bg-dark-200 p-6 flex flex-col rounded-3xl gap-4">

                <div className="flex flex-col">
                  <p className="text-xl">
                    $62,134.21
                  </p>
                  <p className="text-red-500">-1.32% (24h)</p>
                </div>
                <Image src="/img/chart.png" alt="chart" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="flex flex-col gap-1 bg-dark-300 rounded-2xl p-4">
                    <p className="text-dark-50/50">Market Cap</p>
                    <p>$1200.0B</p>
                  </div>
                  <div className="flex flex-col gap-1 bg-dark-300 rounded-2xl p-4">
                    <p className="text-dark-50/50">Volume (24h)</p>
                    <p>$32.6B</p>
                  </div>
                  <div className="flex flex-col gap-1 bg-dark-300 rounded-2xl p-4">
                    <p className="text-dark-50/50">Holders</p>
                    <p>200.0M</p>
                  </div>
                  <div className="flex flex-col gap-1 bg-dark-300 rounded-2xl p-4">
                    <p className="text-dark-50/50">Category</p>
                    <p>layer1</p>
                  </div>
                </div>
              </div>
              <div className="bg-dark-200 p-6 flex flex-col rounded-3xl gap-4">
                <div className="flex flex-col gap-2">
                  <p>Bonding Curve Progress: 2%</p>
                  <p className="text-dark-50/50">King of the hill progress: 78%. Current market cap at $1.2T.</p>
                </div>
                <div className="w-full h-2 bg-dark-50/50 rounded-lg">
                  <div className={`bg-gradient-to-r from-gold-200 to-gold-300 w-1/5 rounded-lg h-full`}>{` `}</div>
                </div>
              </div>
              <div className="bg-dark-200 p-6 rounded-3xl gap-4 flex flex-col">
                <p>
                  Similar Tokens
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex gap-6 items-center p-6 bg-dark-300 rounded-3xl">
                    <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" width={30} height={30} />
                    <div className="flex flex-col">
                      <p className="">
                        Ethereum
                      </p>
                      <p>ETH<span className="text-green-500">+2.45%</span></p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-center p-6 bg-dark-300 rounded-3xl">
                    <Image src="https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png" width={30} height={30} />
                    <div className="flex flex-col">
                      <p className="">
                        Ethereum
                      </p>
                      <p>ETH<span className="text-green-500">+2.45%</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* About */}
            <div className={`w-full md:w-80 bg-dark-200 p-6 flex flex-col rounded-3xl gap-4 text-dark-50/50`}>
              <h4>About Bitcoin</h4>
              <p>Bitcoin is a decentralized digital currency, without a
                central bank or single administrator, that can be sent
                from user to user on the peer-to-peer bitcoin network.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default TokenDetailPage