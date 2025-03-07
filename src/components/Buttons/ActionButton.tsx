import { Icons } from "../Icons/icons";


interface ActionButtonProps {
  name: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean
}
const ActionButton = ({ name, onClick, className, showIcon = true }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer z-10 hover:scale-105 duration-200 active:scale-100 flex items-center rounded-3xl bg-gradient-to-b transform-stroke from-gold-100 to-gold-300 text-dark-300 p-2 gap-2 hover:shadow-gold-200 shadow-lg`}>
      <p className="font-bold pl-3 w-full text-center">{name}</p>
      {showIcon && <Icons.ArrowRight />}
    </button>
  )
}

export default ActionButton