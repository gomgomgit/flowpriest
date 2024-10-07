import React from 'react'
import logo from '../assets/lotus-flower-svgrepo-com.svg'

class Navbar extends React.Component{
  render() {
    return (
      <div className='flex flex-col justify-between h-full p-10 bg-emerald-600'>
        <div className='navbar flex justify-between items-center'>
          <div className='flex items-center text-white gap-4'>
            <img className='h-10' src={logo} alt="" />
            <h1 className='text-lg font-bold'>FLOWPRIEST</h1>
          </div>
          <div className='text-white flex gap-8'>
            <p className='cursor-pointer border-b-2 border-transparent hover:border-orangetext-white duration-300'>Home</p>
            <p className='cursor-pointer border-b-2 border-transparent hover:border-orangetext-white duration-300'>Variations</p>
            <p className='cursor-pointer border-b-2 border-transparent hover:border-orangetext-white duration-300'>Store</p>
            <p className='cursor-pointer border-b-2 border-transparent hover:border-orangetext-white duration-300'>About</p>
            <p className='cursor-pointer border-b-2 border-transparent hover:border-orangetext-white duration-300'>Contact</p>
          </div>
          <div className='bg-transparent hover:bg-slate-200 duration-300 text-lg text-white hover:text-orange-500 text-end rounded-full px-6 py-2 m-0 font-bold cursor-pointer'>
            <span>Get Started</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar