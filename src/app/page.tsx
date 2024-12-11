import React from 'react'
import Link from 'next/link'
import SignupPage from './signup/page'
import { FaShoppingCart,  FaSearch } from 'react-icons/fa'
 import {
  Sheet,
  SheetContent,
  SheetDescription,
 SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Home() {
  return  (
    <div >
     

<nav className='sm:text-xl md:text:2xl lg:text-4xl flex gap-2 hover:text-gray-400  ' >

< FaShoppingCart/> <FaSearch/> 
 </nav>
 <Sheet>
  <SheetTrigger className='nav'><img className='w-20 h-20 ' src="https://icon-library.com/images/sidebar-icon/sidebar-icon-22.jpg" alt="hi" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='text-center'>Fashion</SheetTitle>
      <SheetDescription>Shop your Favourite Products from <br />Women Fashion <br />Men Fashion <br />Kids</SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

      <h1 className='sm:text-xl md:text-2xl lg:2xl  '> Avion </h1> 
      <hr />
      <ul className='  flex justify-center items-center gap-x-6 text-gray-500 sm:text-xl md:text-2xl lg:text-4xl'><li > <Link href="/plantpots"> PlantPots</Link>
         </li ><li ><Link href="/plantpots">Ceramics</Link></li>
      <li><Link  href="/plantpots">Tables</Link></li><li><Link href="/plantpots">Chairs</Link></li><li><Link href="/plantpots">Crockery</Link></li><li><Link href="/plantpots">Tableware</Link></li><li><Link href="/plantpots">Cutlery</Link></li></ul>
      <div >
      <img className='imgi'  src="image.png" alt="chair"  /></div>
      <img className='sm:text-xl md:text-2xl lg:4xl' src="image copy 2.png" alt="logo" />
      <img src="image copy 3.png" alt="furniture" />
      <img src="image copy 4.png" alt="furnitures" />
      <img src="image copy 10.png" alt="product" />
      <h4 className='text-center p-8'><strong > Join the Club and get the benefits</strong> <br /> </h4><p className='sm:text-xl md:text-2xl lg:text-4xl text-center'>Signup for our newsletter and receive exclusive <br /> offers on new ranges,sales, <br /> pop up stores and more </p>
      <SignupPage/>
      <img src="image copy 14.png" alt="" />
      <img src="image copy 6.png" alt="wood" />
      <img className='sm:text-xl md:text-2xl lg:text-4xl' src="image copy 7.png" alt="footer" height={"80%"} width={"100%"} />
    </div>
  )
}

export default Home

