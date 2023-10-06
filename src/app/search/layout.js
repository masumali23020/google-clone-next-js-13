
import SearchHeader from '@/components/SearchHeader'



export default function RootLayout({ children }) {
  return (
    <div className=''>
        <SearchHeader />
        {children}
    </div>
  )
}
