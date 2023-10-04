"use client"; 
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
export const HomeSearch = () => {
  const [randomSearchloading, setRandomSearchloading] = useState(false)
  const [input, setInput] = useState("")
  const router = useRouter();
  

  const handelSubmit = (e) =>{
    e.preventDefault();
    if(!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`)
  }

  const randomSearch = async () => {
    setRandomSearchloading(true)
    const respons = await fetch("https://random-word-api.herokuapp.com/word")
    .then(res => res.json())
    .then(data => data[0])
    if(!respons) return
    router.push(`/search/web?searchTerm=${respons}`)
    setRandomSearchloading(false)
  }
 
  return (
    <div>
        <form onSubmit={handelSubmit} className=" flex w-full mt-5 mx-auto max-w-[90%] border-gray-200 px-5 py-2  rounded-full focus-within:shadow-md hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
            <AiOutlineSearch className=" text-xl text-gray-500 mr-3" />
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="seach heare" value={input} className=" flex-grow focus:outline-none" />
            <BsFillMicFill className=" text-lg text-gray-500 mr-3"  />
            
        </form>

       <div className=" mt-4 flex flex-col md:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center items-center ">
         <button onClick={handelSubmit} className="btn"> 
          Google search
          </button>
         <button onClick={randomSearch} className="btn"> 
         I am Feeling Lucky
          </button>
       </div>
    </div>
  )
}
