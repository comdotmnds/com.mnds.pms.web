import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function ExitView() {
    const [ticketNumber, setTicketNumber] = useState("");

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/home')
    }
  return (
    <>
        <Navbar/>
    <div className='text-3xl m-5'>Vehicle Exit </div>
    <div>
            <form className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">

          
            <div className="mb-4">
            <label
              className="flex text-white text-sm font-bold mb-2"
              htmlFor="ticketNumber"
            >
              Ticket Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ticketNumber"
              type="text"
              placeholder="Ticket Number"
              value={ticketNumber}
              onChange={(e) => setTicketNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button onClick={goBack}
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Go Back
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
            </form>
        </div>
    </>
  )
}

export default ExitView