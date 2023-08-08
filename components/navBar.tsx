import React from 'react'

// icon
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const navBar = () => {
  return (
    <>
        <div className="grid grid-cols-2 justify-evenly  border-t-2 border-b-2 border-gray-200 px-10">
        <div className="flex col-span-1 gap-5 ">
          <p className="my-3">Filter By: </p>
          <div className="flex align-middle border-b-2 border-gray-200 my-3">
            <input className="mr-5" type="radio" />
            <label> Open Now </label>
          </div>
          <button className="flex align-middle border-b-2 border-gray-200 my-3">
            Price <ChevronDownIcon className="w-3 m-auto ml-5" />
          </button>
          <button className="flex align-middle border-b-2 border-gray-200 my-3">
            Categories <ChevronDownIcon className="w-3 m-auto ml-5" />
          </button>
        </div>
        <div className="flex justify-end">
          <button className="border-gray-200 border-2 px-5 py-1 my-3">Clear All</button>
        </div>
      </div>
    </>
  )
}

export default navBar