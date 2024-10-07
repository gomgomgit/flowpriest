import './App.css'
import logo from './assets/lotus-flower-svgrepo-com.svg'
import Navbar from './layouts/navbar'

import { Flower, FlowerOutline } from 'react-ionicons'
import { useState } from 'react'

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
        <div className='py-20 px-72 bg-emerald-600 text-white font font-medium text-center'>
          <h4 className='text-4xl font-playfair leading-snug'>We blend nature's beauty with artistic flair to bring you the finest blooms for your special moments. Explore our collections and find the perfect arrangement for every occasion</h4>
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
        <div className='h-96 bg-emerald-600 px-16 py-12'>
          <div className="footer-content">
            <div className='border-b-2 pb-3 flex justify-between items-center'>
              <a href="/" className='flex items-center text-white gap-4 cursor-pointer'>
                <img className='h-10' src={logo} />
                <h1 className='text-lg font-bold'>FLOWPRIEST</h1>
              </a>
              <div className='text-white font-semibold flex gap-8'>
                <p className='cursor-pointer border-b-2 border-transparent duration-300'><a href="/">Home</a></p>
                <p className='cursor-pointer border-b-2 border-transparent duration-300'><a href="/flowers">Variations</a></p>
                <p className='cursor-pointer border-b-2 border-transparent duration-300'><a href="/">Store</a></p>
                <p className='cursor-pointer border-b-2 border-transparent duration-300'><a href="/">About</a></p>
                <p className='cursor-pointer border-b-2 border-transparent duration-300'><a href="/">Contact</a></p>
              </div>
            </div>
            <div className='mt-4 flex justify-between'>
              <div>
                <p className='text-white font-semibold'>Flowpriest is dedicated to delivering the freshest blooms</p>
                <p className='text-white font-semibold'>and the finest arrangements for every special occasion.</p>
              </div>
              <div className='text-white leading-snug flex gap-8'>
                <div>
                  <p className='font-playfair text-3xl'>CAREER</p>
                </div>
                <div>
                  <p className='font-playfair text-3xl'>BUSINESS</p>
                  <p>Mob. 0811-9-500-989 </p>
                  <p>Tel. 0811-9-500-989 </p>
                </div>
                <div>
                  <p className='font-playfair text-3xl'>OFFICE</p>
                  <p>Jl. Laksda Yos Sudarso - Sunter 1</p>
                  <p>Jakarta 14350, Indonesia </p>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom flex justify-between mt-24 border-t-2 text-white pt-4">
            <div className="flex gap-4">
                <a href="#"><img src="path-to-facebook-icon.png" alt="Facebook"/></a>
                <a href="#"><img src="path-to-instagram-icon.png" alt="Instagram"/></a>
                <a href="#"><img src="path-to-twitter-icon.png" alt="Twitter"/></a>
            </div>
            <div>
              <p>&copy; 2024 <span className='font-semibold'>Flowpriest</span>. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
