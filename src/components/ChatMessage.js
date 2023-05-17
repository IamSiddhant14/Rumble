import React from 'react'

const ChatMessage = ({ text, url, name }) => {
    return (
        <div className='rounded-xl hover:scale-105 transition-transform duration-300 p-2 flex flex-col w-full bg-slate-100 mt-1'>
            <div className='flex'>
                <img className="h-5 mt-1 w-5 rounded-full " src={url} alt='mai image hu' />
                <span className='font-bold ml-2 mt-[1px] '>{name}</span>
            </div>
            <p className='px-1'>{text}</p>
        </div>
    )
}

export default ChatMessage
