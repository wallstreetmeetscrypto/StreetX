import * as motion from "motion/react-client"
import { ReactNode } from "react"
import { Icons } from "../Icons/icons";


interface ActionButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
}
const ActionButton = ({ name, onClick, className }: ActionButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`${className} flex items-center rounded-4xl bg-gradient-to-b from-gold-100 to-gold-300 text-dark-300 p-2 gap-2 shadow-gold-200 shadow-lg`}>
      <p className="font-bold pl-2">{name}</p>
      <Icons.ArrowRight />
    </motion.button>
  )
}

export default ActionButton