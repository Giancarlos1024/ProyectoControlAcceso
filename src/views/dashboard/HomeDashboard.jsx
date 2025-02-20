import Card from "../../components/ui/Card";
import {
  Compass,
  UserPlus,
  DollarSign
} from "lucide-react";

import { SearchComponente } from "../../components/ui/SearchComponente";
import Lineal from "./graficos/Lineal";
import { Circular } from "./graficos/Circular";
import { Calendar } from "../../components/ui/Calendar";
import TripProgressCard from "../../components/ui/TripProgressCard";
import TravelPackages from "../../components/ui/TravelPackages";
import MessagesList from "../../components/ui/MessagesList";

import UserProfile from "../../components/ui/User/UserProfile";

const HomeDashboard = () => {
  return (

    <div className="">
      <div className="flex items-center gap-5 justify-between mb-6">
        <div>
          <h1 className="font-bold text-xl">Dashboard</h1>
        </div>
        <div className="flex gap-4">
          <SearchComponente />
          <UserProfile />
        </div>
      </div>
      <div className="flex  w-full p-0 m-0 gap-2">
        <section className=" lg:w-full ">
          <section>
            <div className="flex gap-8">
              <Card 
                icon={<Compass />}
                title={"Total Booking"} 
                cantidad={"1,200"} 
                porcentaje={"+2.98%"} 
              />
              <Card
                icon={<UserPlus />} 
                title={"Total New Customers"} 
                cantidad={"2,845"} 
                porcentaje={"-1.45%"} 
              />
              <Card
                icon={<DollarSign />} 
                title={"Total Earnings"} 
                cantidad={"$12,890"} 
                porcentaje={"+3.75%"} 
              />
            </div>
            <div className="flex flex-wrap justify-between mt-10  gap-8">
              <Lineal />
              <Circular />
            </div>



          </section>
          <section className=" flex w-full mt-6">
            <div className="w-full mr-6 ">
              <TripProgressCard />
              <TravelPackages />
            </div>
            <div className="  lg:w-1/3">
              <MessagesList />
            </div>
          </section>
        </section>
        <section className="  lg:w-1/4 flex justify-end ml-2 h-auto" >
          <Calendar />
        </section>
      </div>

    </div>
  );
}

export default HomeDashboard;
