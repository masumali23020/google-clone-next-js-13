import CoutryLookup from "./CoutryLookup"

const Footer = () => {
  return (
    <footer className=" absolute bottom-0 text-sm text-gray-500 bg-[#f2f2f2] w-full px-8 py-3 space-y-5 ">
        <div className="">
            <CoutryLookup />            
        </div>
        <div className="flex flex-col sm:flex-row  justify-between items-center space-y-7 sm:space-y-0 ">
            <ul className="flex items-center space-x-6">
                <li className="link ">About</li>
                <li className="link ">Adertesting</li>
                <li className="link ">Business</li>
                <li className="link ">How Search works</li>
               
            </ul>

            <ul className=" flex items-center space-x-6">
                <li className="link ">Privecy</li>
                <li className="link ">Tarms</li>
                <li className="link ">Settings</li>
            </ul>
        </div>
        
    </footer>
  )
}

export default Footer