import React, { useEffect, useState } from 'react';
import menu from '../assets/hanburgerImage1.png';
import Profile from '../assets/userIcon.png';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { useSelector } from 'react-redux';
import { cacheResults } from '../utils/searchSlice';


const Header = () => {

    const [val, setVal] = useState('');
    const [res, setRes] = useState([]);
    const [vis, setVis] = useState(true);


    const searchCache = useSelector((store) => store.search );

    // const isOpen = useSelector((store) => store.app.isMenuOpen);
    // console.log(isOpen);

    const dispatch = useDispatch();

    function toogle() {
        dispatch(toggleMenu());
    }

    async function call() {

        const data = await fetch(YOUTUBE_SEARCH_API + val);
        const json = await data.json();

        setRes(json[1]);
        dispatch(cacheResults({[val] : json[1]}));

    }

    function delayIt() {
        setTimeout(() => {
            setVis(false);
            // setVal('');
        }, 200);

    }

    // function callMe() {
    //     console.log('call me called');
    // }

    // let count = 0;
    // let callIsMade = 0;

    // function doSomeMagic(call, time) {

    //     let t;

    //     return function () {
    //         console.log(count++);

    //         if (t) clearTimeout(t);
    //         t = setTimeout(() => {
    //             console.log(`${callIsMade++} times Api called `);
    //             call()
    //         }, time);
    //     }

    // }

    // const betterFunction = doSomeMagic(callMe, 800);


    useEffect(() => {

        // betterFunction();

        const timer = setTimeout(() => {

            if( searchCache[val]){
                setRes(searchCache[val]);
            }else{
                call();
            }
            
          
        }, 200)

        return () => {
            clearTimeout(timer)
           
        }

    }, [val])

    return (

        // < div className='top-0 w-full'>
    < div className='fixed top-0 w-full'> 

            <div className=' bg-white flex  h-14 shadow-lg justify-between '>

                <div className='flex '>

                    <img src={menu} alt="burger" className='h-8 mt-3 mr-6 cursor-pointer ml-3 ' onClick={(e) => toogle()} />

                    <Link className="inline-block"><img src={require('../assets/YouTube-Logo1.png')} alt='ytlogo' className='h-14 cursor-pointer ' /></Link>

                </div>

                <div className=' flex'>

                    <span>

                        <input className='h-8 mt-3 border border-slate-200 focus:outline-none p-3 rounded-l-2xl  cursor-pointer md:w-96 ' type='text' placeholder='Search' value={val} onChange={(e) => setVal(e.target.value)} onFocus={() => setVis(true)}  onBlur={() => delayIt()} />

                        {

                            (res.length > 0 && vis === true ) &&

                            <div className=' h-auto mt-2 rounded-lg shadow-2xl bg-white md:w-96 p-4 '>

                                {res.map((ele, i) => {

                                    return (

                                        <Link key={i} to={`/search/${ele}`} >
                                            <div className=' hover:bg-slate-300 transition duration-300  rounded-lg p-1 cursor-pointer text-slate-950 font-medium '>
                                                {ele}
                                            </div>

                                        </Link>

                                    )


                                })}

                                <Link target="_blank" to='https://forms.gle/ykrHC9nf29V9W3YF7'>

                                    <h6 className='text-sm font-bold mb-0 underline text-right'> Report search predictions</h6>

                                </Link>

                            </div>

                        }
                    </span>

                    <Link to={`/search/${val}`} > <button className='bg-slate-400 hover:bg-slate-600 text-white font-bold rounded-r-2xl border border-slate-200 h-8 px-3 mt-3 transition duration-300 cursor-pointer '>Search </button></Link>
                   


                </div>

                <div>
                    <img className='h-7 mt-4 mr-3 cursor-pointer ' src={Profile} alt="Profile" />
                </div>

            </div>

        </div>
    )

}

export default Header;
