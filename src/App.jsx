import { useState } from 'react'

import './App.css'

import Spot from './content/Spot'
import TwoWheeler from './content/TwoWheeler'


function App() {
  
  return (
    <>
        <h1 className=' text-5xl font-extrabold shadow-slate-600'>Parking Management System</h1>
        
        <Spot w={24} h={24} clr= {'red'}/>
        
      
        

    </>
  )
}

export default App
