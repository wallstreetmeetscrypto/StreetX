"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { Icons } from "../Icons/icons";
import WalletConnectButton from "../Buttons/WalletConnect";
import NormalButton from "../Buttons/Normal";
import { useWindowSize } from "@/hooks/useWindowSize";
import { IoIosClose } from "react-icons/io";
import { TickerTape } from "react-ts-tradingview-widgets";
import { Custom } from "@/styles/custom";
import { WalletContext } from "@/contexts/WalletContext";
import ActionButton from "../Buttons/ActionButton";

const menuList = [
  {
    name: "Home",
    link: "/",
    icon: Icons.MenuHome
  },
  {
    name: "Trading Dashboard",
    link: "/dashboard",
    icon: Icons.MenuDashboard
  },
  {
    name: "Mint",
    link: "/mint",
    icon: Icons.MenuMint
  },
  {
    name: "Portfolio",
    link: "/portfolio",
    icon: Icons.MenuProfile
  },
  {
    name: "Help",
    link: "/",
    icon: Icons.MenuHelp
  },
]

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { walletConnected, walletConnect } = useContext(WalletContext)

  const [rendered, setRendered] = useState(false)


  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width > 1024) {
      setIsMobileMenuOpen(false);
    }
  }, [windowSize]);

  useEffect(() => {
    if (window) {
      setRendered(true)
    }
  }, [])

  return (
    rendered ? <motion.header
      className="w-full flex flex-col items-center"
    >
      <div className="w-full">
        <TickerTape
          colorTheme="dark"
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
      <div className={`${Custom.section} w-full`}>
        <div className=" flex items-center space-x-1 justify-between gap-8 xl:gap-12">
          <div className="flex gap-2 items-center z-50">
            <div className="flex lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Icons.Hamburger />
            </div>
            <Link href="/" className="md:text-xl text-lg font-bold">
              <Image src="/wse-logo.webp" alt="logo" width={windowSize.width > 1024 ? 70 : 40} height={windowSize.width > 1024 ? 70 : 40} />
            </Link>
          </div>

          {walletConnected && <ul className="lg:flex gap-4 xl:gap-8 hidden">
            {menuList.map((menu) => (
              <Link href={menu.link} className="flex gap-2 items-center" key={menu.name}>
                <menu.icon />
                <p>{menu.name}</p>
              </Link>
            ))}
          </ul>}
          {/* <WalletConnectButton /> */}
          {walletConnected ? <NormalButton name="Mint Your First ICO" /> :
          <ActionButton name="Wallet Connect" showIcon={false} className=" px-12"/>}
          
        </div>
      </div>
      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
      {/* <div
        className={`absolute top-0 bottom-0 left-0 right-0 bg-dark bg-opacity-85 z-40 block
          }`}
      /> */}
    </motion.header>
      : <></>
  )
}


const MobileMenu = ({
  onClose,
}: {
  onClose: () => void;
}) => {

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-dark-300 z-50 lg:hidden w-full"
      id="mobileMenu"
    >
      <div className="px-12 pt-8">
        <div className="cursor-pointer" onClick={onClose}>
          <IoIosClose size={40} />
        </div>
      </div>
      <div className="w-full flex items-center justify-center flex-col relative font-orbitron text-white gap-7 pt-5">
        {menuList.map((menu) =>
          <Link
            key={menu.name}
            href={menu.link}
            className="hover:text-red duration-200"
            onClick={onClose}
          >
            {menu.name}
          </Link>
        )
        }
      </div>
    </div>
  )
}


export default Navbar