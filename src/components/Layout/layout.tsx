import { ReactNode } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <main className="flex flex-col items-center relative w-full">
      <div className="w-full flex items-center justify-start flex-col z-10">
        <Navbar />
        {children}
      </div>
    </main>
  )
}

export default Layout