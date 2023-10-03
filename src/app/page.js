import HomeHader from '@/components/HomeHader'
import { HomeSearch } from '@/components/HomeSearch'
import Image from 'next/image'

export default function Home() {
  return (
   <>
   {/* header  */}
   <HomeHader />
   {/* body  */}
   <div className=' flex flex-col  items-center mt-24 '>
   <Image
   width="300"
   height="100"
   src="https://play-lh.googleusercontent.com/1-hPxafOxdYpYZEOKzNIkSP43HXCNftVJVttoo4ucl7rsMASXW3Xr6GlXURCubE1tA=w3840-h2160-rw"
    />
   </div>

   <HomeSearch />


   </>
  )
}
