import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Slider } from "../components/ui/Slider";

export function Dashboard() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen w-full bg-white">
    
      <Slider isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      

      <div className={`transition-all duration-300 ${isCollapsed ? 'ml-20' : 'ml-64'} p-6 w-full overflow-auto`}>
        <Outlet />
      </div>
    </div>
  );
}
