"use client";
import Rating from '@/components/ratings';
import React, {useEffect} from 'react'

const Index = () => {
  useEffect(() => {
    // fetch('https://cors-anywhere.herokuapp.com/https://64cb063c700d50e3c705628f.mockapi.io/')
    //   .then(response => response.json())
    //   .then(json => console.log(json))
  }, [])
  

  return (
    <>
      <p className='text-3xl'>Tittle Utama</p>
      <div
            className="bg-cover bg-center h-[500px] w-full"
            style={{
              backgroundImage:
                "url('https://api.duniagames.co.id/api/content/upload/file/12614546371683275585.jpg')",
            }}
          ></div>
          <p>supartman</p>
          <Rating rating={4} />
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, non? Maxime quibusdam possimus dolor fuga nam dolorem, ex doloribus error tempore perspiciatis culpa magnam eveniet ad id, a hic quos ullam ipsum facere atque ratione dicta! Voluptatum velit harum reiciendis voluptatibus quod tenetur blanditiis voluptate laborum consequuntur pariatur, sit nam, ab, ullam id. Fugiat, error ratione perferendis dolor quod debitis magni voluptatem, similique quo recusandae dolores nulla atque nihil doloremque natus facere ad praesentium? Alias corrupti placeat sapiente repellendus deleniti animi commodi odio mollitia, voluptate accusantium? Dolorum aspernatur unde similique culpa omnis! Obcaecati inventore incidunt cumque quidem, quo vel pariatur?</p>
    </>
  )
}

export default Index