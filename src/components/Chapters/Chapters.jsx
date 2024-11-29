import React from 'react'
import './Chapters.css'
function Chapters() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-xl mb-6 cp-1">Chapters</h1>
                    <div className="flex space-x-4">
                        <div className="bg-white rounded-lg p-4 w-64 h-96 flex items-center justify-center cp">
                            <img src='./Chap.png' alt="IEEE Women in Engineering logo" className="w-full h-full object-contain" />
                        </div>
                        <div className="bg-gray-800 rounded-lg p-4 w-64 h-96 cp"></div>
                        <div className="bg-gray-800 rounded-lg p-4 w-64 h-96 cp"></div>
                    </div>
                </div>
  )
}

export default Chapters;
