import { IoMdArrowUp } from "react-icons/io";

const Dashboard = () => {
  return (
    <div className="w-11/12" >

{/* first cards */}

  <div className="grid grid-cols-3 text-black font-bold gap-12 ">
    <div className="bg-green-200 rounded-3xl p-4">
      <h1 className="pb-4 text-2xl">Summary</h1>
      <div className="grid grid-rows-4 gap-2">
      <h1 className="bg-purple-300 rounded-xl p-2 flex items-center">
  Overview 
  <span className="bg-purple-200 px-2 rounded-xl ml-auto">1,552</span>
</h1>

      <h1 className="bg-blue-300 rounded-xl p-2 flex items-center">
  Campaigns 
  <span className="bg-purple-200 px-2 rounded-xl ml-auto">1,552</span>
</h1>

      <h1 className="bg-cyan-300 rounded-xl p-2 flex items-center">
  Ad Group 
  <span className="bg-purple-200 px-2 rounded-xl ml-auto">1,552</span>
</h1>

      <h1 className="bg-yellow-200 rounded-xl p-2 flex items-center">
  Keywords 
  <span className="bg-purple-200 px-2 rounded-xl ml-auto">1,552</span>
</h1>


      </div>
    
    </div>
    <div className="bg-cyan-100 rounded-3xl p-4  flex flex-col justify-end">
  <h1 className="pb-4 text-2xl">Top 5 products by spend</h1>
  <p className="font-normal text-center">Total Score</p>
  <h1 className="text-3xl text-center">2,985</h1>

  <div className="bg-cyan-200 rounded-xl px-2 mt-auto ">
    <h1 className="">$1,815.67</h1>
    <p className="font-normal">B07MCGRV7M</p>
  </div>
</div>
    <div className="bg-purple-200 rounded-3xl p-4  ">
      <h1 className="pb-4 text-2xl">Highest ACoS campaigns</h1>
      <div className="bg-purple-200 rounded-3xl p-4">
  <h1 className="pb-4 text-2xl">Highest ACoS campaigns</h1>

  <table className="border-collapse text-center" style={{ width: "100%" }}>
    <thead>
      <tr>
        <th className="p-2">Campaign</th>
        <th className="p-2">ACoS</th>
        <th className="p-2">Spend</th>
        <th className="p-2">Sales</th>
        <th className="p-2">Orders</th>
        <th className="p-2">CTR</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="p-2">B08NY93MT</td>
        <td className="p-2">15%</td>
        <td className="p-2">$500</td>
        <td className="p-2">$1,000</td>
        <td className="p-2">10</td>
        <td className="p-2">5%</td>
      </tr>
      <tr>
        <td className="p-2">Research</td>
        <td className="p-2">20%</td>
        <td className="p-2">$400</td>
        <td className="p-2">$800</td>
        <td className="p-2">8</td>
        <td className="p-2">4%</td>
      </tr>
      <tr>
        <td className="p-2">B087C75QQJ</td>
        <td className="p-2">12%</td>
        <td className="p-2">$600</td>
        <td className="p-2">$1,200</td>
        <td className="p-2">12</td>
        <td className="p-2">6%</td>
      </tr>
      <tr>
        <td className="p-2">House Number</td>
        <td className="p-2">18%</td>
        <td className="p-2">$450</td>
        <td className="p-2">$900</td>
        <td className="p-2">9</td>
        <td className="p-2">4.5%</td>
      </tr>
    </tbody>
  </table>
</div>
     
    
    </div>
  
  </div>
  {/* another cards */}


<div className="grid grid-cols-5  text-black pt-4 gap-8 ">

<div className="bg-gray-400 p-4 rounded-3xl shadow-md shadow-green-400 ">
  <h1 className="text-white font-semibold">Orders Created</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="text-white font-semibold">$134,970</h1>
  <div className="flex font-thin">
    <p className=" ">$128,451</p>
    <p className="flex bg-green-400 text-black px-2 rounded-2xl  ml-auto">+12,98% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

<div className="bg-gray-400 p-4 rounded-3xl shadow-md shadow-red-700 ">
  <h1 className="text-white font-semibold">Total Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className=" font-semibold text-red-700 ">$2,145,132.80</h1>
  <div className="flex font-thin">
    <p className="">$2,114,114.80</p>
    <p className="flex bg-red-700 text-black px-2 rounded-2xl  ml-auto">+4.89% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

<div className="bg-gray-400 p-4 rounded-3xl shadow-md shadow-green-400 ">
  <h1 className="text-white font-semibold">PPC Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="text-white font-semibold">$890.00</h1>
  <div className="flex font-thin">
    <p className=" ">$872.00</p>
    <p className="flex bg-green-400 text-black px-2 rounded-2xl  ml-auto">+0,17% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

<div className="bg-gray-400 p-4 rounded-3xl shadow-md shadow-yellow-300 ">
  <h1 className="text-white font-semibold">Units Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="text-white font-semibold">$151,740</h1>
  <div className="flex font-thin">
    <p className=" ">$145,869</p>
    <p className="flex bg-yellow-300 text-black px-2 rounded-2xl  ml-auto">=</p>
  </div>
</div>
<div className="bg-gray-400 p-4 rounded-3xl shadow-md shadow-green-400 ">
  <h1 className="text-white font-semibold">Organic Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="text-white font-semibold">100,00%</h1>
  <div className="flex font-thin">
    <p className=" ">100,00%</p>
    <p className="flex bg-green-400 text-black px-2 rounded-2xl  ml-auto">+0,12% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

</div>

</div>
  )
}

export default Dashboard
