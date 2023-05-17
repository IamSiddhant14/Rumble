import React, { useEffect, useState } from 'react';
import ChatMessage from './ChatMessage';
import '../App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utils/chatSlice'
import generateRandomName from '../utils/Helper'
import { generateRandomString } from '../utils/Helper';

const LiveChat = () => {

  const dispatch = useDispatch();
  const mess = useSelector((store) => store.chat.messages);
  const [inputMess, setInputMess] = useState('')

  useEffect(() => {

    const a = setInterval(() => {
      //  console.log('Api Polling');
      dispatch(addMessage({ name: generateRandomName(), message: generateRandomString(20) }));

    }, 2000);

    return () => {
      clearInterval(a);
    }

  }, []);

  const handleKeyPress = event => {
    if (event.key === 'Enter' || event.keyCode === 13) {
      dispatch(addMessage({ name: 'siddhant ', message: inputMess }))
      setInputMess('')
    }
  };

  const buttonPress = () => {
    console.log('ca')
    dispatch(addMessage({ name: 'siddhant ', message: inputMess }))
    setInputMess('')

  };

  return (
    <div className=' p-2 h-full w-full '>

      <div className='font-bold  px-2 rounded-full bg-slate-300'>Chat</div>

      <div className='border border-black p-2  bg-slate-300 w-full h-[87%] mt-1 rounded-xl overflow-y-scroll overflow-auto  sidd flex flex-col-reverse'>

        {
          mess.map((ele, i) => {

            return <ChatMessage key={i} text={ele.message} url='https://source.unsplash.com/random' name={ele.name} />
          })
        }

      </div>

      <div className='flex'>
       
        <input className='outline-none border border-black p-1 w-full mt-1 rounded-lg' type='text' value={inputMess} onChange={(e) => setInputMess(e.target.value)} placeholder='Chat here' onKeyDown={handleKeyPress} />

        <button onClick={()=>  buttonPress()}>✈️</button>
      </div>

    </div>
  )
}

export default LiveChat
