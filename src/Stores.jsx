import './App.css'
import Navbar from './layouts/navbar'
import Footer from './layouts/footer'
import { useEffect, useState } from 'react'

function Stores() {
  const [dataStores, setDataStores] = useState([])

  const getData=()=>{
    fetch('store.json',
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
        setDataStores(myJson)
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
              <h2 className='font-playfair text-7xl font-medium mb-6'>Our Stores</h2>

              <div className='grid grid-cols-2 gap-8'>
                {dataStores.map((store) => (
                  <div className='border rounded flex gap-4 p-6' key={store.id}>
                    <div className='font-semibold'>
                      <p>Nama</p>
                      <p>Alamat</p>
                      <p>Telepon</p>
                    </div>
                    <div className='font-semibold'>
                      <p>:</p>
                      <p>:</p>
                      <p>:</p>
                    </div>
                    <div className=''>
                      <p>FloPriest {store.id} {store.city}</p>
                      <p>{store.street}, {store.city}, {store.state_province_area}, {store.zip_code}</p>
                      <p>{store.phone_number}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Stores
