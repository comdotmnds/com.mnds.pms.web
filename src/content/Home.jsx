import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'


function Home() {

    const navigate = useNavigate();
    const handleOnClickForEntry = () => {
        navigate('/entryView')
    }

    const handleOnClickForExit = () => {
        navigate('/exitView')
    }
    
  return (
    <>

    <Navbar/>
        <button onClick={handleOnClickForEntry} type='button' className='bg-lime-500 text-white text-6xl p-5 m-14 hover:bg-blue-700 '>
            {/* <img src="entry.png" className='m-6 size-20 justify-end'></img> */}
        ENTRY  
        </button>
        <button  onClick={handleOnClickForExit} type='button' className='bg-red-600 text-white text-6xl p-5 m-14 hover:bg-blue-700 '>
            {/* <img src="exit.png" className='m-6 size-20'></img> */}
        EXIT
        </button>
    </>
  )
}

export default Home