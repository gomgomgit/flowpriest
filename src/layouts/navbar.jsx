import logo from '../assets/lotus-flower-svgrepo-com.svg'
import PropTypes from "prop-types";

function Navbar({type}) {
  return (
    <div className={type=='transparent' ? '' :'flex flex-col justify-between h-full p-10 bg-emerald-600'}>
      <div className='navbar flex justify-between items-center'>
        <div className=''>
          <a href="/" className='flex items-center text-white gap-4 cursor-pointer'>
            <img className='h-10' src={logo} />
            <h1 className='text-lg font-bold'>FLOWPRIEST</h1>
          </a>
        </div>
        <div className='text-white flex gap-8'>
          <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'><a href="/">Home</a></p>
          <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'><a href="/flowers">Variations</a></p>
          <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'><a href="/">Store</a></p>
          <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'><a href="/">About</a></p>
          <p className='cursor-pointer border-b-2 border-transparent hover:border-white duration-300'><a href="/">Contact</a></p>
        </div>
        <div className='bg-transparent hover:bg-slate-200 duration-300 text-lg text-white hover:text-amber-600 text-end rounded-full px-6 py-2 m-0 font-bold cursor-pointer'>
          <span>Get Started</span>
        </div>
      </div>
    </div>
  )
}

Navbar.defaultProps = {
  type: "",
};

Navbar.propTypes = {
  type: PropTypes.string,
};

export default Navbar