import React from 'react'
import Link from 'next/link'
import SignupPage from './signup/page'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Home() {
  return (
    <div >
      <Sheet>
  <SheetTrigger><img className="w-8 h-8 md:w-12 md:h-12 mt-10 ml-4 flex space-x-4 "src="https://icon-library.com/images/sidebar-icon/sidebar-icon-22.jpg" alt="sidebar"  /> </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Fashion</SheetTitle>
      <SheetDescription>
        Shop your favourite products from here
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

      <h1> Avion</h1> 
      <hr />
      <ul className='  flex justify-center items-center gap-x-6 text-gray-500 '><li > <Link href="/plantpots"> PlantPots</Link>
         </li ><li ><Link href="/plantpots">Ceramics</Link></li>
      <li><Link href="/plantpots">Tables</Link></li><li><Link href="/plantpots">Chairs</Link></li><li><Link href="/plantpots">Crockery</Link></li><li><Link href="/plantpots">Tableware</Link></li><li><Link href="/plantpots">Cutlery</Link></li></ul>
      <div >
      <img className='imgi'  src="image.png" alt="chair"  /></div>
      <img src="image copy 2.png" alt="logo" />
      <img src="image copy 3.png" alt="furniture" />
      <img src="image copy 4.png" alt="furnitures" />
      
      
      <SignupPage/>
      <img src="image copy 6.png" alt="wood" />
      <img src="image copy 7.png" alt="footer" height={"80%"} width={"100%"} />
    </div>
  )
}

export default Home

