import { FC, ReactNode } from "react"
import { Footer } from "../home/Footer"

type LayoutParams = {
  children: ReactNode
}

export const Layout: FC<LayoutParams> = ({ children }) => {
  return (
    <div className="bg-gray-50/80 w-full h-screen">
      <div className="max-w-6xl mx-auto pt-4 font-[Poppins] h-full flex flex-col">
        <div className="flex-grow">
        {children}
        </div>

        <Footer />
      </div>
    </div>
  )
}