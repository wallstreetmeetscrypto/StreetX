import * as motion from "motion/react-client"


interface WalletConnectButtonProps {
  onClick?: () => void;
  className?: string;
}
const WalletConnectButton = ({  onClick, className }: WalletConnectButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`${className} cursor-pointer z-10 flex items-center rounded-4xl bg-dark-200 border border-white/10 text-white p-2 gap-200 shadow-lg`}>
      <p className="font-bold pl-3">Connect Wallet</p>
    </motion.button>
  )
}

export default WalletConnectButton