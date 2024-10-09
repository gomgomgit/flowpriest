import './App.css'
import logo from './assets/lotus-flower-svgrepo-com.svg'
import floLine from './assets/flo-line.svg'
import Navbar from './layouts/navbar'

import { Flower, FlowerOutline } from 'react-ionicons'
import { useState } from 'react'
import Footer from './layouts/footer'

function App() {

  const [rotate, setRotate] = useState(false)

  return (
    <>
      <div>
        <section className='h-screen bg-cover bg-primary'>
          <div className='flex flex-col justify-between h-full p-10 bg-slate-900 bg-opacity-20'>
            <Navbar type="transparent" />
            <div className='flex justify-between items-end'>
              <div className='text-8xl text-white font-playfair leading-tight'>
                <h2>GET YOUR</h2>
                <h2>BOUQUET FLOWER</h2>
                <h2>BY OCCASIONS</h2>
              </div>
              <div>
                <a href="/flowers">
                  <div className='rounded-xl bg-slate-500/65 hover:bg-slate-400/80 hover:drop-shadow-lg duration-500 px-4 py-5 group cursor-pointer'
                          onMouseEnter={() => setRotate(true)}
                          onMouseLeave={() => setRotate(false)}>
                    <div className='h-32 w-80 rounded-lg mb-2 bg-primary bg-center duration-500 bg-[length:350px] group-hover:bg-[length:450px]'/>
                    <div className='text-white flex justify-between items-center'>
                      <div>
                        <h3 className='font-semibold text-xl'>See All Flowers</h3>
                        <p className='text-sm'>get your favorites flowers</p>
                      </div>
                      <div>
                        <FlowerOutline
                          color={'#fff'}
                          height="40px"
                          width="40px"
                          rotate={rotate}
                        />
                      </div>
                    </div>
                  </div>
                </a>
                <h2></h2>
              </div>
            </div>
          </div>
        </section>
        <div className='py-28 px-72 bg-emerald-600 text-white font font-medium text-center relative'>
          <img className='absolute inset-x-0 inset-y-12 z-10' src={floLine} alt="" />
          <h4 className='text-4xl font-playfair leading-snug relative z-30'>We blend nature's beauty with artistic flair to bring you the finest blooms for your special moments. Explore our collections and find the perfect arrangement for every occasion</h4>
        </div>
        <div className='pl-16 pr-12 py-16 bg-yellow-50 flex gap-20 items-center justify-between'>
          <div className='font-medium'>
            <div>
              TYPE OF BOUQUET
            </div>
            <div className='text-6xl font-medium font-playfair leading-tight'>
              <h3>Find your perfect</h3>
              <h3>bouquet flower</h3>
            </div>
            <div className='mt-4'>
              <button className='flex py-4 pl-6 pr-10 bg-amber-500 rounded-e-full text-white font-sans text-lg font-semibold hover:drop-shadow-xl hover:bg-amber-400 duration-300'
              onMouseEnter={() => setRotate(true)}
              onMouseLeave={() => setRotate(false)}>
                <Flower
                  color={'#fff'}
                  height="30px"
                  width="30px"
                  rotate={rotate}
                />
                <span className='pl-4'>
                  Get Bouquet
                </span>
              </button>
            </div>
          </div>
          <div className='flex gap-3'>
            <div className='w-64 h-80 skew-x-6 hover:skew-y-3 hover:drop-shadow-xl duration-300 relative overflow-hidden'>
              <div className='absolute -inset-6 hover:-skew-y-3 duration-300 -skew-x-6 bg-cover' style={{backgroundImage: 'url("https://m.media-amazon.com/images/I/8123WJ5r2gL._AC_UF894,1000_QL80_.jpg")'}}>
              </div>
            </div>
            <div className='w-64 h-80 skew-x-6 hover:skew-y-3 hover:drop-shadow-xl duration-300 relative overflow-hidden'>
              <div className='absolute -inset-6 hover:-skew-y-3 duration-300 -skew-x-6 bg-cover' style={{backgroundImage: 'url("https://sevenrose.co.id/cdn/shop/products/WhatsAppImage2020-11-24at17.45.52.jpg")'}}>
              </div>
            </div>
            <div className='w-64 h-80 skew-x-6 hover:skew-y-3 hover:drop-shadow-xl duration-300 relative overflow-hidden'>
              <div className='absolute -inset-6 hover:-skew-y-3 duration-300 -skew-x-6 bg-cover' style={{backgroundImage: 'url("https://cdn11.bigcommerce.com/s-lzx6le/images/stencil/1280x280/products/1241/2902/167398L__04164.1557610883.jpg?c=2")'}}>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
