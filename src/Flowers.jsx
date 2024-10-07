import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './layouts/navabar'

function Flowers() {
  
  const [dataFlowers, setDataFlowers] = useState([])

  const getData=()=>{
    fetch('flower.json',
      {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    ).then(function(response){
        console.log(response)
        return response.json();
    }).then(function(myJson) {
        console.log(myJson);
        setDataFlowers(myJson)
    });
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <div>
        <div className=''>
          <Navbar></Navbar>
          <div>
            <div className='p-12 bg-yellow-50'>
              <div className='grid grid-cols-3 gap-12'>
                {dataFlowers.map((flower) => (
                  <div className='h-[50vh] relative group bg-cover cursor-pointer' style={{backgroundImage: "url(" + flower.image + ")"}} key={flower.id}>
                    <div className='bg-yellow-100 opacity-0 absolute inset-0 group-hover:opacity-80 duration-300'>
                    </div>
                    <div className='absolute inset-0 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-8 duration-700'>
                      <div className='font-bold text-xl'>
                        {flower.name}
                      </div>
                      <div className='text-md'>
                        {flower.basic_information}
                      </div>
                      <div className='text-md'>
                        <span className='font-bold'>Sun : </span>{flower.sun}
                      </div>
                      <div className='text-md'>
                        <span className='font-bold'>Soil Needs : </span>{flower.soil_needs}
                      </div>
                      <div className='text-md'>
                        <span className='font-bold'>Bloons In : </span>{flower.blooms_in}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flowers
