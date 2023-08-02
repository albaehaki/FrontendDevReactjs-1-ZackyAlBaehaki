import Image from "next/image";
import Layout from "./layout";

// icon
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <Layout>
      <p className="text-2xl">hallo</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit
        at temporibus ipsum officiis sequi labore eius nam odit consequatur
        alias.
      </p>
      <div className="grid grid-cols-2 justify-evenly bg-blue-900 border-t-2 border-b-2 border-gray-500 px-10 py-2">
        <div className="flex col-span-1 gap-2 bg-red-900">
          <p>Filter By: </p>
          <div className="flex align-middle border-b-2 border-gray-500">
            <input className="mr-5" type="radio" />
            <label> pilih </label>
          </div>
          <button className="flex align-middle border-b-2 border-gray-500">
            button <ChevronDownIcon className="w-3 m-auto ml-5" />
          </button>
          <button className="flex align-middle border-b-2 border-gray-500">
            button <ChevronDownIcon className="w-3 m-auto ml-5" />
          </button>
        </div>
        <div className="flex justify-end">
          <button className="border-gray-500 border-2">button</button>
        </div>
      </div>

      <div>
        <div className="">
          <div className="bg-cover bg-center h-[200px] w-[200px]" 
          style={{
            backgroundImage: "url('https://api.duniagames.co.id/api/content/upload/file/12614546371683275585.jpg')"
          }}></div>
          <p>Very Beutifful</p>
        </div>
        <div>
          <div className="bg-[https://api.duniagames.co.id/api/content/upload/file/12614546371683275585.jpg] bg-cover bg-center h-[200px] w-[200px] bg-slate-500"></div>
        </div>
      </div>
    </Layout>
  );
}
