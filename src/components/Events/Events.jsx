import React from 'react'
import './Events.css'
function Events() {
  return (
    <div>
     <div className="flex flex-col items-center py-10">
                    <h1 className="text-3xl font-semibold mb-6 Ev">Events</h1>
                    <div className="flex space-x-4">
                        <div className="w-64 h-96 bg-gray-800 rounded-lg post"></div>
                        <div className="w-64 h-96 bg-white rounded-lg flex flex-col items-center justify-center post ">
                            <div className="text">
                                <img className='pic-1' src='./poster.png'></img>
                            </div>
                        </div>
                        <div className="w-64 h-96 bg-gray-800 rounded-lg post"></div>
                        <div className="w-64 h-96 bg-gray-800 rounded-lg post"></div>
                    </div>
                    <div className="flex justify-between items-center w-full mt-6 px-10">
                        <a href="#" className="text-gray-400 hover:text-gray-200">Browse all events &rarr;</a>
                        <div className="flex space-x-2">
                            <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                <i className="fas fa-chevron-left text-gray-400"></i>
                            </button>
                            <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                                <i className="fas fa-chevron-right text-gray-400"></i>
                            </button>
                        </div>
                    </div>
                </div> 
    
    </div>
  )
}

export default Events;
