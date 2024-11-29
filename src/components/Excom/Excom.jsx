import React from 'react'
import './Excom.css'
function Excom() {
  return (
    <div className="flex flex-col items-center ">
    <h1 className="text-2xl ex-1 ">Execcom</h1>
    <div className="flex space-x-4">
      <div className="rounded-lg overflow-hidden">
        <img
          src='./Excom.png'
          alt="Profile of a smiling person with a purple background"
          className="w-full h-full object-cover pic-2"
        />
      </div>
      <div className="w-40 h-40 bg-gray-400 rounded-lg pic-2"></div>
      <div className="w-40 h-40 bg-gray-400 rounded-lg pic-2"></div>
      <div className="w-40 h-40 bg-gray-400 rounded-lg pic-2"></div>
    </div>
  </div>
  )
}

export default Excom;
