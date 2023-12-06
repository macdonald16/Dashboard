import Dashboard from "./Dashboard"
import Header from "./Header"
import Overview from "./Overview"
import SideNav from "./SideNav"


const layout = () => {
  return (
    <div className="flex flex-row  h-screen w-screen overflow-hidden  bg-black">
      <SideNav/>
      <div className="p-4">
      <Header/>
      <Overview/>
      <Dashboard/>

      </div>
    </div>
  )
}

export default layout
