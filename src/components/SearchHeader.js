import Image from "next/image"
import Link from "next/link"
import { RiSettings3Line } from "react-icons/ri"
import { TbGridDots } from "react-icons/tb"
import SearchBox from "./SearchBox"
import SearchHeadrOption from "./SearchHeadrOption"

const SearchHeader = () => {
  return (
    <header className=" sticky top-0 ">
      <div className="flex w-full p-6 items-center justify-between ">
        <Link href={"./"}>
          <Image
            width="120"
            height="40"
            src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
          />
        </Link>
         <div className="flex-1">
          <SearchBox />
         </div>

          <div className="hidden md:inline-flex space-x-2 ">
            <RiSettings3Line className="header-icon" />
            <TbGridDots className="header-icon" />
          </div>
          <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md transition-all cursor-pointer ml-2">Sign in</button>
                 
      </div>
      <SearchHeadrOption />


    </header>
  )
}

export default SearchHeader