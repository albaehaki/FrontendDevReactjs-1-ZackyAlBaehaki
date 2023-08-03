import Image from "next/image";
import Layout from "./layout";

// components
// import Rating from "@/components/ratings";
import  Card from "@/components/card";

// icon
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// data dummy
import {dummyData} from "@/store/dummyData"

export default function Home() {
  return (
    <Layout>
      <div className="mx-10 my-5">
      <p className="text-2xl">hallo</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        at temporibus ipsum officiis sequi labore eius nam odit consequatur
        alias.
      </p>
      </div>
      <div className="grid grid-cols-2 justify-evenly  border-t-2 border-b-2 border-gray-500 px-10">
        <div className="flex col-span-1 gap-2 ">
          <p className="my-3">Filter By: </p>
          <div className="flex align-middle border-b-2 border-gray-500 my-3">
            <input className="mr-5" type="radio" />
            <label> pilih </label>
          </div>
          <button className="flex align-middle border-b-2 border-gray-500 my-3">
            button <ChevronDownIcon className="w-3 m-auto ml-5" />
          </button>
          <button className="flex align-middle border-b-2 border-gray-500 my-3">
            button <ChevronDownIcon className="w-3 m-auto ml-5" />
          </button>
        </div>
        <div className="flex justify-end">
          <button className="border-gray-500 border-2 px-5 py-1 my-3">button</button>
        </div>
      </div>
      <p className="text-3xl mx-10 my-10">Restorans</p>
      <div className="grid grid-cols-4 mx-10 gap-5">
        {dummyData.map((data: any) => (
          <Card data={data} />
        ))}
        
      </div>
    </Layout>
  );
}
