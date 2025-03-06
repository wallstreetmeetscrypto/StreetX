import * as motion from "motion/react-client"
import { ReactNode } from "react"
import { Icons } from "../Icons/icons";


interface ActionButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean
}
const ActionButton = ({ name, onClick, className, showIcon = true }: ActionButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`${className} cursor-pointer z-10 hover:scale-105 duration-200 active:scale-100 flex items-center rounded-4xl bg-gradient-to-b transform-stroke from-gold-100 to-gold-300 text-dark-300 p-2 gap-2 hover:shadow-gold-200 shadow-lg`}>
      <p className="font-bold pl-3 w-full text-center">{name}</p>
      {showIcon && <Icons.ArrowRight />}
    </motion.button>
  )
}

export default ActionButton