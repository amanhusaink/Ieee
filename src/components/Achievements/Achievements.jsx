import React from 'react'
import './Achievements.css'

function Achievements() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
    <h1 className="text-2xl mb-8 font-montserrat hed">Achievements</h1>
    <div className="flex space-x-4">
        <div className="bg-gray-800 p-8 rounded-lg flex items-center justify-center w-80 h-40 left">
            <span className="text-xl font-montserrat rt-hed">Best Emerging SB 2023</span>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg flex items-center w-80 h-40 right">
            <img src="./Athul.png" alt="Portrait of Athul Raj R" className="  mr-4 pic"/>
            <div className='let'>
                <span className=' font-montserrat text-lg font-bold abt-1'>Athul Raj R</span><br/>
                <span className=' font-montserrat abt'>District Coordinator</span><br/>
                <span className=' font-montserrat abt'>Kozhikode/Malappuram</span><br/>
                <span className='font-montserrat abt'> IEEE LINK TEAM 2024</span>
            </div>
        </div>
    </div>
</div>
  );
}

export default Achievements;
