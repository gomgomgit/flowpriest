import logo from '../assets/lotus-flower-svgrepo-com.svg'
import PropTypes from "prop-types";

function Footer() {
  return (
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
  )
}

Footer.defaultProps = {
  type: "",
};

Footer.propTypes = {
  type: PropTypes.string,
};

export default Footer