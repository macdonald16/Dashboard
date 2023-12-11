
import { AiOutlineDribbble, AiOutlineLogout,AiOutlinePoundCircle,AiOutlineSketch,AiOutlineTeam,AiOutlineSetting,AiOutlineInfoCircle    } from "react-icons/ai";

export default function SideNav() {
  return (
    <div className="bg-black text-[#FDF7E4] w-30 p-3  flex flex-col m-2">
    <div className="border border-[#FDF7E4] rounded-full">
  <h1 className="text-3xl px-2">S</h1>
</div>
    <div className="flex-1  ">
    <div className="pt-8">
    <AiOutlineDribbble  size={30} /> 
    </div>
    <div className="pt-8">
    <AiOutlinePoundCircle  size={30} /> 
    </div>
    <div className="pt-8">
    <AiOutlineSketch   size={30} /> 
    </div>
    <div className="pt-8">
    <AiOutlineTeam   size={30} /> 
    </div>
    <div className="pt-8">
    <AiOutlineSetting   size={30} /> 
    </div>
    <div className="pt-8">
    <AiOutlineInfoCircle   size={30} /> 
    </div>
   
     </div>
    <div>
    <AiOutlineLogout size={30} />
    
     </div>
      
    </div>
  )
}
