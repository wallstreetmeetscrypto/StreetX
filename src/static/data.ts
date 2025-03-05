import { Icons } from "@/components/Icons/icons";

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
    icon: Icons.Assets
  },
  {
    id: 2,
    name: "Connect Wallet",
    desc: "Connect with Phantom, Solflare, or Backpack to start your journey",
    icon: Icons.PriceUp
  },
  {
    id: 3,
    name: "Mint or buy and ICO",
    desc: "Choose from trending projects or create your own ICO",
    icon: Icons.Reward
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
    name: "Price Grows with Demand",
    desc: "",
    icon: Icons.Assets
  },
  {
    name: "Price Grows with Demandd",
    desc: "",
    icon: Icons.PriceUp
  },
  {
    name: "",
    desc: "Receive rewards for providing market liquidity",
    icon: Icons.Reward
  },

]
export { socialLink, tradingSteps, markets }