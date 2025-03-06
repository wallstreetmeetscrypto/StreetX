'use client'
import { Custom } from "@/styles/custom";

interface InputProps {
  label: string;
  value?: any;
  setValue?: any;
  placeholder: string;
}

const Input = (props: InputProps) => {
  const { value, setValue, label, placeholder } = props

  return (
    <div className="">
      <label className={`${Custom.desc} mb-4`}>{label}</label>
      <div className="bg-dark-300 rounded-3xl px-4 py-2 mt-3">
        <input value={value} onChange={(e) => setValue(e.target.value)} className="bg-transparent w-full outline-none" placeholder={placeholder}/>
      </div>
    </div>
  )
}

export { Input }