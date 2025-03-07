import * as motion from "motion/react-client"


interface ControlButtonProps {
  children: string;
  onClick?: () => void;
  className?: string;
}
const ControlButton = (props: ControlButtonProps) => {
  const { children, onClick, className } = props
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer hover:scale-105 duration-200 active:scale-100 z-10 flex items-center rounded-3xl bg-dark-50/20  text-white p-2 gap-200 shadow-lg`}>
      <p className="px-3 text-center w-full">{children}</p>
    </button>
  )
}

export default ControlButton