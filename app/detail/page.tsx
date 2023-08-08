"use client";
import Rating from "@/components/ratings";
import React, { useEffect } from "react";
import Link from "next/link";

const Index = () => {
  useEffect(() => {
    // fetch('https://cors-anywhere.herokuapp.com/https://64cb063c700d50e3c705628f.mockapi.io/')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }, []);

  return (
    <div className="py-10">
      <div className="px-10 pb-5">

      <p className="text-3xl">Tittle Utama</p>
      <Rating rating={4} />
      </div>
      <button className="absolute top-12 right-10 bg-slate-700 text-white font-bold py-1 px-3"><Link href="/">Close</Link></button>
      <div
        className="bg-cover bg-center h-[500px] w-full"
        style={{
          backgroundImage:
            "url('https://api.duniagames.co.id/api/content/upload/file/12614546371683275585.jpg')",
        }}
      ></div>
      <div className="px-10 py-5 ">
        <p>supartman</p>
        <Rating rating={4} />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, non?
          Maxime quibusdam possimus dolor fuga nam dolorem, ex doloribus error
          tempore perspiciatis culpa magnam eveniet ad id, a hic quos ullam
          ipsum facere atque ratione dicta! Voluptatum velit harum reiciendis
          voluptatibus quod tenetur blanditiis voluptate laborum consequuntur
          pariatur, sit nam, ab, ullam id. Fugiat, error ratione perferendis
          dolor quod debitis magni voluptatem, similique quo recusandae dolores
          nulla atque nihil doloremque natus facere ad praesentium? Alias
          corrupti placeat sapiente repellendus deleniti animi commodi odio
          mollitia, voluptate accusantium? Dolorum aspernatur unde similique
          culpa omnis! Obcaecati inventore incidunt cumque quidem, quo vel
          pariatur?
        </p>
      </div>
    </div>
  );
};

export default Index;
