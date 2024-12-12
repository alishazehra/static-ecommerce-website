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
  return  (
    <div >
     

<nav className='sm:text-xl md:text:2xl lg:text-4xl flex gap-2 hover:text-gray-400  ' >
  <img className='w-10 h-10 flex gap-2' src="https://th.bing.com/th/id/OIP.iw4v1KAhLTdeBrhWTDBlyQHaHP?w=800&h=782&rs=1&pid=ImgDetMain" alt="" />
<img className='w-10 h-10 ' src="https://th.bing.com/th/id/OIP.vyhkMafwzVBCCSsgGJfI4wHaHa?rs=1&pid=ImgDetMain" alt="search" />
<img className='w-10 h-10 ml-auto' src="https://th.bing.com/th/id/OIP.Rcgld8bUghDAQpuH1JL4sgAAAA?rs=1&pid=ImgDetMain" alt="" />


<img className='w-10 h-10' src="https://icon-library.com/images/white-menu-icon/white-menu-icon-15.jpg" alt="" />

 </nav>
 

      <h1 className='sm:text-xl md:text-2xl lg:2xl  '> Avion </h1> 
      <hr />
      <ul className="flex flex-col sm:flex-row justify-center items-center gap-y-4 sm:gap-x-6 text-gray-500 text-xl sm:text-xl md:text-2xl lg:text-4xl">
  <li className='px-4'> {/* Optional padding for better spacing */}
    <Link href="/plantpots">PlantPots</Link>
  </li>
  <li className="px-4">
    <Link href="/plantpots">Ceramics</Link>
  </li>
  <li className="px-4">
    <Link href="/plantpots">Tables</Link>
  </li>
  <li className="px-4">
    <Link href="/plantpots">Chairs</Link>
  </li>
  <li className="px-4">
    <Link href="/plantpots">Crockery</Link>
  </li>
  <li className="px-4">
    <Link href="/plantpots">Tableware</Link>
  </li>
  <li className="px-4">
    <Link href="/plantpots">Cutlery</Link>
  </li>
</ul>

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

