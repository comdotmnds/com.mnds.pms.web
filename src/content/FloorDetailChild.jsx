import React from 'react'

function FloorDetailChild({id,value}) {
  return (
    <div className='px-4 outline-none py-1 rounded-full text-black bg-green-500 font-extrabold'>
        <span>{`${id}  : ${value}`}</span>
    </div>
  )
}

export default FloorDetailChild