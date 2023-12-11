import { IoMdArrowUp } from "react-icons/io";
import Charts from "./Charts";

const Dashboard = () => {
  return (
    <div className="w-11/12" >

{/* first cards */}

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-black font-bold gap-12 ">
  <div className="bg-[#D2E0FB] rounded-3xl p-4">
    <h1 className="pb-4 text-2xl">Summary</h1>
    <div className="grid grid-rows-4 gap-2">
      <h1 className="bg-[#CDF5FD] rounded-xl p-2 flex items-center">
        Overview
        <span className="bg-[#E0F4FF] px-2 rounded-xl ml-auto">1,552</span>
      </h1>

      <h1 className="bg-[#A6F6FF]  rounded-xl p-2 flex items-center">
        Campaigns
        <span className="bg-[#E0F4FF] px-2 rounded-xl ml-auto">1,552</span>
      </h1>

      <h1 className="bg-[#A6F6FF]  rounded-xl p-2 flex items-center">
        Ad Group
        <span className="bg-[#E0F4FF] px-2 rounded-xl ml-auto">1,552</span>
      </h1>

      <h1 className="bg-[#F5E8B7]  rounded-xl p-2 flex items-center">
        Keywords
        <span className="bg-[#E0F4FF] px-2 rounded-xl ml-auto">1,552</span>
      </h1>
    </div>
  </div>

  <div className="bg-cyan-100 rounded-3xl p-4 flex flex-col justify-end">
    <h1 className="pb-4 text-2xl">Top 5 products by spend</h1>
    <p className="font-normal text-center">Total Score</p>
    <h1 className="text-3xl text-center">2,985</h1>

    <div className="bg-cyan-200 rounded-xl px-2 mt-auto">
      <h1 className="">$1,815.67</h1>
      <p className="font-normal">B07MCGRV7M</p>
    </div>
  </div>

  <div className=" rounded-3xl p-4 bg-[#D2E0FB]">
    <div className=" rounded-3xl p-4">
      <h1 className="pb-4 text-2xl">Highest ACoS campaigns</h1>

      <div className="overflow-x-auto">
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
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  {/* another cards */}


<div className="grid grid-cols-5  text-black pt-4 gap-8 ">

<div className=" bg-gray-400 p-4 rounded-3xl" >
  <h1 className="text-white font-semibold">Orders Created</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="font-bold  text-[#98EECC]">$134,970</h1>
  <div className="flex ">
    <p >$128,451</p>
    <p className="flex bg-[#98EECC] text-black px-2 rounded-2xl  ml-auto">+12,98% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

<div className="bg-gray-400 p-4 rounded-3xl  ">
  <h1 className="text-white font-semibold">Total Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className=" font-semibold text-red-700 ">$2,145,132.80</h1>
  <div className="flex font-thin">
    <p className="">$2,114,114.80</p>
    <p className="flex bg-[#FF8989] text-black px-2 rounded-2xl  ml-auto">+4.89% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

<div className="bg-gray-400 p-4 rounded-3xl  ">
  <h1 className="text-white font-semibold">PPC Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="text-[#98EECC] font-semibold">$890.00</h1>
  <div className="flex font-thin">
    <p className=" ">$872.00</p>
    <p className="flex bg-[#98EECC] text-black px-2 rounded-2xl  ml-auto">+0,17% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

<div className="bg-gray-400 p-4 rounded-3xl  ">
  <h1 className="text-white font-semibold">Units Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="text-[#98EECC] font-semibold">$151,740</h1>
  <div className="flex font-thin">
    <p className=" ">$145,869</p>
    <p className="flex bg-yellow-100 text-black px-2 rounded-2xl  ml-auto">=</p>
  </div>
</div>
<div className="bg-gray-400 p-4 rounded-3xl  ">
  <h1 className="text-white font-semibold">Organic Sales</h1>
  <p>Oct 16 /21 - Nov 14 /21</p>
  <h1 className="text-[#98EECC] font-semibold">100,00%</h1>
  <div className="flex font-thin">
    <p className=" ">100,00%</p>
    <p className="flex bg-[#98EECC] text-black px-2 rounded-2xl  ml-auto">+0,12% <span className="p-1" ><IoMdArrowUp size={15} /></span></p>
  </div>
</div>

</div>
<Charts/>
</div>
  )
}

export default Dashboard
