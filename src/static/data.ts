import { Icons } from "@/components/Icons/icons";
import { symbol } from "framer-motion/client";

const socialLink = [
  {
    name: "discord",
    url: "#",
    icon: Icons.Discord,
  },
  {
    name: "twitter",
    url: "#",
    icon: Icons.Twitter,
  },
  {
    name: "telegram",
    url: "#",
    icon: Icons.Telegram,
  },
]


const tradingSteps = [
  {
    id: 1,
    name: "Trade and Profit",
    desc: "Speculate on price movements and grow your portfolio",
    icon: Icons.Trade
  },
  {
    id: 2,
    name: "Connect Wallet",
    desc: "Connect with Phantom, Solflare, or Backpack to start your journey",
    icon: Icons.Wallet
  },
  {
    id: 3,
    name: "Mint or buy and ICO",
    desc: "Choose from trending projects or create your own ICO",
    icon: Icons.Buy
  },
]


const markets = [
  {
    name: "crypto",
    desc: "Crypto currency Market",
    details: [
      "Traditional cryptocurrency trading with market volatility",
      "Highly volatile pricing based on market speculation",
      "Profit primarily through price speculation"
    ]
  },
  {
    name: "WSE",
    desc: "Web3 Social Exchange",
    ispreferred: true,
    details: [
      "Access unique markets with real-world value and growth potential",
      "Innovative price mechanism that increases with market demand",
      "Earn rewards for providing market liquidity"
    ]
  },
  {
    name: "Stocks",
    desc: "Traditional Market",
    details: [
      "Standard stock market shares, equities, and securities",
      "Traditional market forces determine stock prices",
      "Regular dividend payments from company profits"
    ]
  }
]


const trades = [
  {
    name: "Trade Unique Assets",
    desc: "Access exclusive markets for people, brands, and teams",
    icon: Icons.Assets
  },
  {
    name: "Price Grows with Demand",
    desc: "Benefit from our innovative bonding curve model",
    icon: Icons.PriceUp
  },
  {
    name: "Earn from Market Incentives",
    desc: "Receive rewards for providing market liquidity",
    icon: Icons.Reward
  },
]


const howtoTrading = [
  {
    icon: Icons.TradingMint,
    name: "Mint & List",
    desc: "Select a brand or team to mint as a digital asset and list it on the WSE marketplace"
  },
  {
    icon: Icons.TradingProfit,
    name: "Speculate & Profit",
    desc: "Buy assets you believe will increase in value and sell them for profit"
  },
  {
    icon: Icons.TradingMarketMaking,
    name: "Market-Making",
    desc: "Earn rewards by providing liquidity and maintaining active markets"
  },
]

const tokenList = [
  {
    name: "Donald Trump",
    symbol: "TRUMP",
    price: 2.25,
    volume: 1.25,
    change: 12,
    marketcap: 2.45
  },
  {
    name: "Erling Haaland",
    symbol: "ERLING",
    price: 1.85,
    volume: 0.85,
    change: -3.2,
    marketcap: 1.85
  },
  {
    name: "LeBron James",
    symbol: "JAMES",
    price: 3.20,
    volume: 1.25,
    change: 12,
    marketcap: 2.45
  },
  {
    name: "Vladimir Putin",
    symbol: "PUTIN",
    price: 1.95,
    volume: 0.95,
    change: 12,
    marketcap: 1.95
  },
]
export { socialLink, tradingSteps, markets, trades, howtoTrading, tokenList }