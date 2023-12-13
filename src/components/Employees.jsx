import { AiOutlineSolution, AiOutlineUser  } from "react-icons/ai";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { GiArchiveResearch } from "react-icons/gi";
import { GrGroup } from "react-icons/gr";


const Employees = () => {
    return (
      <div className="mt-4 bg-gray-400 rounded-xl">

        <div className="text-white grid grid-cols-5 mx-auto justify-between border-b p-4 font-bold text-xl">
          <div className="px-4 ">Department</div>
          <div className="px-4">Employees</div>
          <div className="px-4">Deadline</div>
          <div className="px-4">Status</div>
          <div className="px-4">Recruiter</div>
        </div>
        <div className="text-white grid grid-cols-5 mx-auto justify-between border-b p-4">
          <div className="px-4 ">QA</div>
          <div className="px-4">10</div>
          <div className="px-4">2023-12-31</div>
          <div className="px-4">Success</div>
          <div className="px-4">Infomation Systems</div>
        </div>
        <div className="text-white grid grid-cols-5 mx-auto justify-between border-b p-4">
          <div className="px-4 ">Development</div>
          <div className="px-4">15</div>
          <div className="px-4">2023-12-15</div>
          <div className="px-4">Processing</div>
          <div className="px-4">Innovation</div>
        </div>
        <div className="grid grid-cols-3  mx-auto">
  <div className=" px-4 border-r">
    <h1 className="flex gap-4 text-xl p-4 font-semibold">
      <span><AiOutlineSolution  size={25} /></span>100 Employees
    </h1>
    <div className="grid grid-cols-3">
      <div>
        <h1>Hired <br/> <span className="text-2xl font-semibold">74%</span></h1>
        <p>5,321</p>
      </div>
      <div className="items-center mt-6">
        <h1 className="font-semibold ">VS</h1>
      </div>
      <div>
        <h1>Processing <br/> <span className="text-2xl font-semibold">38%</span></h1>
        <p>2,679</p>
      </div>
    </div>
  </div>
  <div className="p-4 items-center justify-center text-center">
    {/* <h1 className="flex text-xl font-semibold gap-4">
      <span><AiOutlineUser size={25} /></span> 1,126
    </h1>
    <h2 className=" text-2xl font-semibold">27% <br/> <span className="font-normal text-lg">On Staff</span></h2> */}
  </div>
  <div className="grid grid-cols-3">
  <div className="items-center justify-center border-l border-r text-center">
    <div className="flex justify-center mx-auto"> {/* Added flex and justify-center classes */}
      <TbBrandCampaignmonitor size={25} />
    </div> 
    <h1 className="ml-2 text-xl">Campaign</h1>
    <h2 className="ml-2 text-2xl py-6 font-bold">+2%</h2>
  </div>
  <div className="items-center justify-center  border-r text-center">
    <div className="flex justify-center mx-auto"> {/* Added flex and justify-center classes */}
      <GrGroup size={25} />
    </div> 
    <h1 className="ml-2 text-xl">Ad Group</h1>
    <h2 className="ml-2 text-2xl py-6 font-bold">-6%</h2>
  </div>
  <div className="items-center justify-center text-center">
    <div className="flex justify-center mx-auto"> {/* Added flex and justify-center classes */}
    <GiArchiveResearch size={25} />
    </div> 
    <h1 className="ml-2 text-xl">Research</h1>
    <h2 className="ml-2 text-2xl py-6 font-bold">+4%</h2>
  </div>
</div>
  
</div>
       
      </div>
    );
  }
  
  export default Employees;