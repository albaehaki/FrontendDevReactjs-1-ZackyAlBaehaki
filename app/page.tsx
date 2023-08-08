import Image from "next/image";
import Layout from "./layout";

// components
import NavBar from "@/components/navBar";
import Card from "@/components/card";

// icon
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// data dummy
import { dummyData } from "@/store/dummyData";

export default function Home() {
  return (
    <Layout>
      <div className="mx-10 my-5">
        <p className="text-3xl font-bold">Restaurants</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit at temporibus ipsum officiis sequi labore eius nam odit
          consequatur alias.
        </p>
        
      </div>
      <NavBar />
      <p className="text-3xl mx-10 my-10">Restorans</p>
      <div className="grid grid-cols-4 mx-10 gap-5 pb-10">
        {dummyData.map((data: any) => (
          <Card data={data} />
        ))}
      </div>
    </Layout>
  );
}
