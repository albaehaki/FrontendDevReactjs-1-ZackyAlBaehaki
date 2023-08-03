import React from 'react'

// {
//     "name": "Recycled Metal Computer",
//     "image": "https://loremflickr.com/640/480/business",
//     "price1": "795.00",
//     "open": false,
//     "price2": "890.00",
//     "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
//     "id": "2"
//    }

// components
import Rating from './ratings'

function card({data}: any) {


  return (
    <div>
          <div
            className="bg-cover bg-center h-[200px] w-full"
            style={{
              backgroundImage:
                `url(${data.image})`,
            }}
          ></div>
          <p className='py-1 text-lg font-bold'>{data.name}</p>
          <Rating rating={4.5} />
          <div className="flex justify-between">
            <p className="justify-self-start text-sm">{parseFloat(data.price1) > parseFloat(data.price2) ? `${data.price2} - ${data.price1}` : `${data.price1} - ${data.price2}`}</p>
            <p className="justify-self-end text-sm">{data.open? "buka": "tutup"}</p>
          </div>
          <button className="w-full bg-[#002b56] text-white py-1 text-base font-medium">Learn More</button>
        </div>
  )
}

export default card