"use client";

import { useEffect, useState } from "react";

const CoutryLookup = () => {
    const [country, setCountry] = useState("Bangladesh");
    useEffect(()=> {
        fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
        .then(res => res.json())
        .then(data => setCountry(data))

    },[])


  return (
    <div  className=" flex space-x-3">
        <p> <span className=" text-slate-400"> Country:</span>{country.country}</p>
        <p> <span className=" text-slate-400">City</span>:{country.city}</p>

    </div>
  )
}

export default CoutryLookup