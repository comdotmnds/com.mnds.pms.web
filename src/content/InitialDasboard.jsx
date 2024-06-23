import React, { useState ,useContext, useEffect} from 'react'
import SpaceInfo from './SpaceInfo';
import { FloorDetailContext } from './FloorDetailContext'

function InitialDasboard() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const{detail} = useContext(FloorDetailContext);

  // without use eff  code
  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:8080/pms/get/spot');
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     const result = await response.json();
  //     setData(result);
  //   } catch (error) {
  //     setError(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  //  fetchData();
  // 
  // with use eff code
  // const [data, setData] = useState([])
  //   useEffect(() => {
  //     fetch('http://localhost:8080/pms/get/spot')
  //     .then(response => response.json())
  //     .then(data => {
  //       setData(data)
  //     })
      
    
  
  //   }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/pms/get/spot');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
    
  //
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