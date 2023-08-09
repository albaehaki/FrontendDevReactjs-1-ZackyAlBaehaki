"use client";
import Rating from "@/components/ratings";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

// store
import useDetailStore from "@/store/detailStore";
import { dummyData } from "@/store/dummyData";

const Index = () => {
  // const dataDetail = useDetailStore((state) => state.dataDetail[0])
  const add = useDetailStore((state) => state.add);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const data = dummyData.filter((a: any) => a.id === id)[0];

  useEffect(() => {
    // fetch('https://cors-anywhere.herokuapp.com/https://64cb063c700d50e3c705628f.mockapi.io/')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }, []);
  console.log(data);
  return (
    <div className="py-10">
      <div className="px-10 pb-5">
        <p className="text-3xl">{data.name}</p>
        
        <Rating rating={4} />
        <p className="text-sm">{data.open? "buka": "tutup"}</p>
      </div>
      <button className="absolute top-12 right-10 bg-slate-700 text-white font-bold py-1 px-3">
        <button onClick={() => {
          router.push("/")
        }}>Close</button>
      </button>
      <div
        className="bg-cover bg-center h-[500px] w-full"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      ></div>
      <div className="px-10 py-5 ">
        <p>supartman</p>
        <Rating rating={4} />

        <p className="justify-self-start text-sm">
          {parseFloat(data.price1) > parseFloat(data.price2)
            ? `${data.price2} - ${data.price1}`
            : `${data.price1} - ${data.price2}`}
        </p>

        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Index;
