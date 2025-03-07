import { ReactNode } from "react";
import Navbar from "./navbar";

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <main className="dark flex flex-col relative w-full min-h-screen">
      <div className="w-full flex items-center justify-start flex-col z-10">
        <Navbar />
        {children}
      </div>
    </main>
  )
}

export default Layout