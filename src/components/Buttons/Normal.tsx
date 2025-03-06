import * as motion from "motion/react-client"


interface NormalButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
}
const NormalButton = ({ name, onClick, className }: NormalButtonProps) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
      className={`${className} cursor-pointer hover:scale-105 duration-200 active:scale-100 z-10 flex items-center rounded-4xl bg-dark-200 border border-white/10 text-white p-2 gap-200 shadow-lg`}>
      <p className="font-bold px-3 text-center w-full">{name}</p>
    </motion.button>
  )
}

export default NormalButton