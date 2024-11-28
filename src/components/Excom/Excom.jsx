import React from 'react'

function Excom() {
  return (
    <div className="flex flex-col items-center ">
    <h1 className="text-2xl ">Execcom</h1>
    <div className="flex space-x-4">
      <div className="rounded-lg overflow-hidden">
        <img
          src="https://placehold.co/160x160"
          alt="Profile of a smiling person with a purple background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-40 h-40 bg-gray-400 rounded-lg"></div>
      <div className="w-40 h-40 bg-gray-400 rounded-lg"></div>
      <div className="w-40 h-40 bg-gray-400 rounded-lg"></div>
    </div>
  </div>
  )
}

export default Excom;
