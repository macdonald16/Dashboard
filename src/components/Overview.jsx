import { SlCalender } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegFolderOpen } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

const Overview = () => {
  return (
    <div className="w-screen">
    <div className="py-8 text-white flex w-11/12">
      <div className="grid grid-cols-3">
      <div className="grid grid-cols-4 justify-between items-center">

      <div className="flex gap-2 ">
        <span className="border border-yellow-200 rounded-full px-1 text-yellow-200">01</span> <h1>Overview</h1>
      </div>
      <div className="flex gap-2 px-3">
        <span className="border border-yellow-200 rounded-full px-1 text-yellow-200">02</span> <h1 className="text-yellow-200">PPC</h1>
      </div>
      <div className="flex gap-2 px-">
        <span className="border border-yellow-200 rounded-full px-1 text-yellow-200 ">03</span> <h1 className="text-yellow-200">Yearly</h1>
      </div>
      <div className="flex gap-2 px-3">
        <span className="border border-yellow-200 rounded-full px-1 text-yellow-200">04</span> <h1 className="text-yellow-200">Customize</h1>
      </div>
      </div>
      <div className="flex justify-end">
      <div className="flex gap-1 bg-gray-700  px-2 rounded-full items-center " style={{ maxWidth: "fit-content" }}>

      <span className="text-yellow-200"><SlCalender  /></span> 
      <h1 className="text-yellow-200"> <span className="pl-2 text-white">30 days</span> Oct 16 / 21-Nov 14 / 21</h1>
      <span className="pl-8 text-yellow-200"><IoIosArrowDown size={15} /></span>

      </div>
      </div>
      <div className="flex  justify-end ">
  <div className="ml-20 gap-6 flex">
    <FaRegFolderOpen className="text-yellow-200 ml-auto " size={25} />
    <CiSquarePlus className="text-yellow-200 " size={25} />
  </div>
</div>
      </div>
    </div>
    </div>
  )
}

export default Overview
