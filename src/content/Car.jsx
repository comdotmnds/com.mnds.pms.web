import React,{useState,useEffect} from 'react'
import PopupWindow from './PopupWindow';

function Car() {

  const [showPopup, setShowPopup] = useState(false);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const openPopup = () =>{
   
    setShowPopup(!showPopup);

  }

  // Api 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/pms/get/spot/detail/7');
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
  
  return (
    <>
    <div className=" rounded-lg inline-block m-3">
        <img onClick={openPopup} src="4wheel.jpg" alt="Car Image" className="mx-auto h-20 w-13 rounded-full inline-block  hover:text-yellow-500 cursor-pointer" />
        {showPopup && <PopupWindow/>}
    <p className="text-lg font-semibold">Spot ID: {data.spotId}</p>
  </div>
    </>
  )
}

export default Car