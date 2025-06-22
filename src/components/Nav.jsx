import { logo } from '../utils/imagesURL';
import { HiArrowUpRight } from 'react-icons/hi2';

function Nav() {
  return (
    <>
        <nav className="absolute top-4.5 left-34 p-4">
        <img
            className="w-auto h-12"
            src={logo}
            alt="Swiggy Logo"
        />
        </nav>

        <div className="absolute right-27 mr-9 ">
            <ul className="flex gap-9 ">
                <li className="text-white font-bold cursor-pointer relative top-12">Swiggy Corporate</li>
                <li className="text-white font-bold cursor-pointer relative top-12">Partner with us</li>
                <button className='border border-white px-5 py-3.5 rounded-xl flex justify-between gap-1.5 mt-9'>
                    <span className="text-white font-bold cursor-pointer">Get the App </span><HiArrowUpRight className="h-4 w-4 mt-1 text-white font-extrabold" />
                </button>
                <button className='border border-black px-9 bg-black py-3.5 rounded-xl gap-1.5 mt-9 mr-4'>
                    <span className="text-white font-bold cursor-pointer">Sign In</span>
                </button>
            </ul>
        </div>
    </>
  );
}

export default Nav;
