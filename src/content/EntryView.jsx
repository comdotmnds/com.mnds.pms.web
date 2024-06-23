import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faAppleAlt, faArrowLeftRotate } from '@fortawesome/free-solid-svg-icons';

function EntryView() {

    const [vehicleNumber, setVehicleNumber] = useState("");
    const [vehicleType, setVehicleType] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/home')
    }
  return (
    <>
    <Navbar/>
    <div className='text-3xl m-5'>Vehicle Entry </div>
    <div>
            <form className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">

          
            <div className="mb-4">
            <label
              className="flex text-white text-sm font-bold mb-2"
              htmlFor="vehicleNumber"
            >
              Vehicle Number
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="vehicleNumber"
              type="text"
              placeholder="Vehicle Number"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="flex text-white text-sm font-bold mb-2"
              htmlFor="vehicleType"
            >
              Vehicle type
            </label>
            <select
              id="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select</option>
              <option value="WH2">WH2</option>
              <option value="WH4">WH4</option>
              
            </select>
          </div>

          <div className="mb-4">
            <label
              className="flex text-white text-sm font-bold mb-2"
              htmlFor="ownerName"
            >
              Owner name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ownerName"
              type="text"
              placeholder="Owner name"
              value={ownerName}
              onChange={(e) => setOwnerName(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="contact"
              className="flex text-white text-sm font-bold mb-2"
            >
              Contact
            </label>
            <input
              id="contact"
              type="tel"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              pattern="[0-9]{10}"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="flex text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center ">
          <div className="flex items-center justify-center ">
            <button onClick={goBack}
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-4"
              type="submit"
            >
                <FontAwesomeIcon icon={faArrowLeftRotate}/>
              Go Back
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
                <FontAwesomeIcon icon={faAppleAlt}/>
              Submit
            </button>
          </div>
          </div>
            </form>
        </div>
    </>
  )
}

export default EntryView