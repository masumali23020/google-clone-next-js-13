"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

import { AiOutlineSearch } from "react-icons/ai"
import { BsFillMicFill } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"


const SearchBox = () => {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("searchTerm");
    const router = useRouter()
  
    const [term, setTerm] = useState(searchTerm || "")

    const handelSubmit = (e) => {
        e.preventDefault()
        if(!term.trim()) return;
        router.push(`/search/web?searchTerm=${term}`)
    }
    
  return (
    <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center" onSubmit={handelSubmit}>
        <input className="w-full focus:outline-none " type="text" value={term} onChange={(e)=> setTerm(e.target.value)} />
            <RxCross2 onClick={() => setTerm("")} className=" text-2xl text-gray-500 cursor-pointer sm:mr-2" />
            <BsFillMicFill className=" hidden sm:inline-flex text-blue-500 pl-4 border-l-2  text-4xl mr-3 cursor-pointer  " />
            <AiOutlineSearch className=" text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" onClick={handelSubmit} />
    </form>
  )
}

export default SearchBox