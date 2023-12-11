import {
  AiOutlineApartment,
  AiOutlineAppstore,
  AiOutlineSearch,
  AiOutlineDown,
  AiOutlineBell,
  AiOutlineMessage
} from "react-icons/ai";
import flag from "../assets/flag.jpg";
import profile from "../assets/profile.jpg";

const Header = () => {
  return (
    <div className="w-screen">
      <div className="mx-auto text-white justify-between items-center gap-5 pr-10 ">
        <div className="grid grid-cols-3">
          <div className="flex gap-8">
            <h1 className="text-2xl hidden lg:block">Dashboard</h1>
            <div className="mt-1 text-[#FDF7E4]">
              <AiOutlineApartment size={15} />
            </div>
            <div className="mt-1 text-[#FDF7E4]">
              <AiOutlineAppstore size={15} />
            </div>
          </div>

          <div className="flex bg-gray-700 rounded-full w-3/4">
            <span className="p-2 text-[#FDF7E4]">
              <AiOutlineSearch />
            </span>
            <input
              type="text"
              placeholder="Search for anything here"
              className="text-[#FDF7E4] bg-gray-700 p-1 w-full rounded-full focus:outline-none"
            />
          </div>
          
          <div className="grid grid-cols-3">
            <div
              className="gap-1 bg-gray-700 flex px-2 rounded-full items-center"
              style={{ maxWidth: "fit-content" }}
            >
              <img
                src={flag}
                alt="Flag"
                className="rounded-full"
                style={{ width: "20px", height: "20px", marginRight: "5px" }}
              />
              <AiOutlineDown size={10} className="mt-1 text-[#FDF7E4]" />
            </div>
            <div className="flex items-center">
              <h1 className="bg-red-500 px-1 w-5 h-5 rounded-full text-center text-sm">
                9
              </h1>
              <AiOutlineBell className="text-[#FDF7E4]" size={20} />
            </div>
            <div className="flex items-center gap-6">
              <AiOutlineMessage className="text-[#FDF7E4]" size={20} />
              <img
                src={profile}
                alt="Profile Picture"
                className="w-8 h-8 rounded-full mr-2 mr-4"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;