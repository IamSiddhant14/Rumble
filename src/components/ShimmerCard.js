import React from 'react'

const ShimmerCard = () => {
    return (
        <div className='h-72 bg-slate-200 w-60 shadow-2xl rounded-lg p-2 m-2 flex  flex-wrap justify-start '>

            <div className=" w-[95%] h-32 rounded-lg shadow-xl bg-slate-400 m-2"> </div>
            <div className='w-52 h-4 bg-slate-400 rounded-lg' ></div>
            <div className='w-52 h-4 bg-slate-400 rounded-lg' ></div>
            <div className='w-24 h-4 bg-slate-400 rounded-lg' ></div>

        </div>
    )
}

export default ShimmerCard
