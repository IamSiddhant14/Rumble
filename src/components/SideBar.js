import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../utils/constants';

const SideBar = () => {

  const a = useSelector((store) => store.app.isMenuOpen);

  if (a === false) {
    return null;
  }

  return (

    <div className='sidd overflow-y-scroll z-10  w-[275px] bg-white shadow-2xl text-xl mt-14 p-4 fixed h-full '>
      {categories.map((category , i) => (

        <Link key={i} to={`/search/${category.name}`}>

          <button
            key={category.name}
            className=' h-14 hover:bg-slate-600 transition duration-300 cursor-pointer  bg-slate-400 rounded-xl text-slate-50 font-bold m-2 w-full '
          >
            <span >
              {category.icon}
            </span>
            <span >
              {category.name}
            </span>
          </button>
        </Link>


      ))}
    </div>


    // <div className='w-48 h-screen shadow-2xl text-xl mt-14 p-4'>
    //   <ul>
    //     <li className='font-bold' ><Link to="/">Home</Link></li>
    //     <li>Shorts</li>
    //     <li>Vedio</li>
    //     <li>Live</li>

    //   </ul>

    //   <h1 className='font-bold' > Subscription </h1>
    //   <ul>
    //     <li>Music</li>
    //     <li>Sports</li>
    //     <li>Gaming</li>
    //     <li>Movies</li>

    //   </ul>

    //   <h1 className='font-bold' > Watch Later </h1>
    //   <ul>
    //     <li>Sports</li>
    //     <li>Gaming</li>
    //     <li>Movies</li>
    //     <li>Live</li>

    //   </ul>

    // </div>
  )
}

export default SideBar;
