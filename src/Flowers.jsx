import './App.css'
import logo from './assets/lotus-flower-svgrepo-com.svg'

function Flowers() {
  return (
    <>
      <div>
        <div className=''>
          <div className='flex flex-col justify-between h-full p-10 bg-slate-900'>
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
          <div>
            <div className='grid grid-cols-3'>
              <div>
                <div className='rounded-full overflow-hidden w-60 h-60 bg-cover bg-center' style={{backgroundImage: "url('https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4f492b22-2d29-4360-80a6-79879487c7b7-e07922e.jpg?quality=90&webp=true&fit=1300,866')"}}>
                </div>
                <div className='text-center'>
                  <p>Cosmos</p>
                </div>
              </div>
              <div>
                <div className='rounded-full overflow-hidden w-60 h-60 bg-cover bg-center' style={{backgroundImage: "url('https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4f492b22-2d29-4360-80a6-79879487c7b7-e07922e.jpg?quality=90&webp=true&fit=1300,866')"}}>
                </div>
                <div className='text-center'>
                  <p>Cosmos</p>
                </div>
              </div>
              <div>
                <div className='rounded-full overflow-hidden w-60 h-60 bg-cover bg-center' style={{backgroundImage: "url('https://images.immediate.co.uk/production/volatile/sites/10/2018/02/4f492b22-2d29-4360-80a6-79879487c7b7-e07922e.jpg?quality=90&webp=true&fit=1300,866')"}}>
                </div>
                <div className='text-center'>
                  <p>Cosmos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Flowers
