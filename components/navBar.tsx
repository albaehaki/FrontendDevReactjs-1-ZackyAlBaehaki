import React from "react";

// icon
import { ChevronDownIcon } from "@heroicons/react/24/solid";

// components
import DropdownButton from "@/components/dropDown";

const navBar = () => {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  return (
    <>
      <div className="grid grid-cols-2 justify-evenly  border-t-2 border-b-2 border-gray-200 px-10">
        <div className="flex col-span-1 gap-5 ">
          <p className="my-5">Filter By: </p>
          
          <label className="flex items-center cursor-pointer border-b-2 my-auto">
            <input
              type="radio"
              className="form-radio h-4 w-4 text-gray-600"
              // checked={isChecked}
              // onChange={onChange}
            />
            <span className="ml-2">Open Now</span>
          </label>

          <DropdownButton buttonText="Price" options={dropdownOptions} />
          <DropdownButton buttonText="Categories" options={dropdownOptions} />
        </div>
        <div className="flex justify-end">
          <button className="border-gray-200 border-2 px-5 py-1 my-3">
            Clear All
          </button>
        </div>
      </div>
    </>
  );
};

export default navBar;
