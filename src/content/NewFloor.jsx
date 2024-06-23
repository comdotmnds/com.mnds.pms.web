import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

function NewFloor() {

    const [floorId, setFloorId] = useState("");
    const [avlTwo, setAvlTwo] = useState("");
    const [avlFour, setAvlFour] = useState("");
  return (
    <>
    <Navbar/>
        <div>
            <form className="bg-gray-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">

          
            <div className="mb-4">
            <label
              className="flex text-white text-sm font-bold mb-2"
              htmlFor="floorId"
            >
              Floor id
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="floorId"
              type="text"
              placeholder="Floor Id"
              value={floorId}
              onChange={(e) => setFloorId(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="flex text-white text-sm font-bold mb-2"
              htmlFor="avlTwo"
            >
              Number of available 2-wheeler spot
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avlTwo"
              type="text"
              placeholder="Available 2-wheeler spot"
              value={avlTwo}
              onChange={(e) => setAvlTwo(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="flex text-white text-sm font-bold mb-2"
              htmlFor="avlFour"
            >
              Number of available 4-wheeler spot
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="avlFour"
              type="text"
              placeholder="Available 4-wheeler spot"
              value={avlFour}
              onChange={(e) => setAvlFour(e.target.value)}
              required
            />
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

export default NewFloor