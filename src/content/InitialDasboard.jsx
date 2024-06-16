import React, { useState ,useContext} from 'react'
import SpaceInfo from './SpaceInfo';
import { FloorDetailContext } from './FloorDetailContext'

function InitialDasboard() {

  const [data, setData] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const{detail} = useContext(FloorDetailContext);


  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/pms/get/spot');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  fetchData();
  
    const child = [];
    const flrdtls  = new Map();


    for (let index = 0; index <data.length; index++) {
        child.push(<SpaceInfo floorDtl={data[index]}/>)
        flrdtls.set(data[index].floorId , data[index])
        
    }

    detail(data);
  return (
    <div className='bg-black'>
    
      {child}
    </div>
      
  )
}

export default InitialDasboard