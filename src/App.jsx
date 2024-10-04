import './App.css'
import logo from './assets/lotus-flower-svgrepo-com.svg'
import bg from './assets/base-backround.jpg'

import { ArrowForwardCircleOutline } from 'react-ionicons'
import { useEffect, useState } from 'react'

function App() {

  const [beatArrow, setBeatArrow] = useState(false)
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
        <div className='h-screen bg-cover' style={{backgroundImage: "url(" + bg + ")"}}>
          <div className='flex flex-col justify-between h-full p-10 bg-slate-900 bg-opacity-20'>
            <div className='navbar flex justify-between items-center'>
              <div className='flex items-center text-white gap-4'>
                <img className='h-10' src={logo} alt="" />
                <h1 className='text-lg font-bold'>FLOWPRIEST</h1>
              </div>
              <div className='text-white flex gap-8'>
                <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'>Home</p>
                <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'>Variations</p>
                <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'>Store</p>
                <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'>About</p>
                <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'>Contact</p>
              </div>
              <div className='bg-transparent hover:bg-slate-200 duration-300 text-lg text-white hover:text-orange-500 text-end rounded-full px-6 py-2 m-0 font-bold cursor-pointer'>
                <span>Get Started</span>
              </div>
            </div>
            <div className='flex justify-between items-end'>
              <div className='text-8xl text-white'>
                <h2>GET YOUR</h2>
                <h2>FLOWERS</h2>
                <h2>BY OCCASIONS</h2>
              </div>
              <div>
                <div className='rounded-xl bg-slate-500/65 hover:bg-slate-400 duration-500 px-4 py-5 group cursor-pointer'
                        onMouseEnter={() => setBeatArrow(true)}
                        onMouseLeave={() => setBeatArrow(false)}>
                  <div className='h-32 w-80 rounded-lg mb-2 bg-primary bg-center duration-500 bg-[length:350px] group-hover:bg-[length:450px]'/>
                  <div className='text-white flex justify-between items-center'>
                    <div>
                      <h3 className='font-semibold text-xl'>See All Flowers</h3>
                      <p className='text-sm'>get your favorites flowers</p>
                    </div>
                    <div>
                      <ArrowForwardCircleOutline
                        color={'#00000'}
                        height="45px"
                        width="45px"
                        beat={beatArrow}
                      />
                    </div>
                  </div>
                </div>
                <h2></h2>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='grid grid-cols-2 gap-6 p-6'>
            {dataFlowers.map((flower) => (
              <div className='h-[50vh] relative group bg-cover' style={{backgroundImage: "url(" + flower.image + ")"}} key={flower.id}>
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
    </>
  )
}

export default App
