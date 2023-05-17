import React from 'react'
import  Button  from './Button'

const ButtonList = () => {
  return (

    <div className='flex justify-evenly flex-wrap  mt-16 '>

       <Button val={'Music'} />
       <Button val={'Live'} />
       <Button val={'News'} />
       <Button val={'Mixes'} />
       <Button val={'Programming'} />
       <Button val={'Comedy'} />
       <Button val={'Podcast'} />
       <Button val={'All'} />
       <Button val={'Mrbeast'} />
       <Button val={'CodeDamn'} />
       <Button val={'Harvad'} />
       <Button val={'Canada'} />

    </div>
  )
}

export default ButtonList ;
