import React from 'react'

function Home() {
  return (
    <div>
      <h1> Avion</h1>
      <hr />
      <ul className='  flex justify-center items-center gap-x-6 text-gray-500 '><li >Plant pots</li ><li >Ceramics</li>
      <li>Tables</li><li>Chairs</li><li>Crockery</li><li>Tableware</li><li>Cutlery</li></ul>
      <div >
      <img className='imgi'  src="image.png" alt="chair"  /></div>
      <img src="image copy 2.png" alt="logo" />
      <img src="image copy 3.png" alt="furniture" />
      <img src="image copy 4.png" alt="furnitures" />
      <img className="cursor-pointer transition-all duration-300 hover:ring-4 hover:ring-purple-500 active:ring-4 active:ring-purple-700"
 src="image copy 5.png" alt="signup" />
      <img src="image copy 6.png" alt="wood" />
      <img src="image copy 7.png" alt="footer" />
    </div>
  )
}

export default Home

