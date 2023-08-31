import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './iceCreamSlice'

export const IceCreamView = () => {
  const [value, setValue] =React.useState(1);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams)

  const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of ice Creams - {numOfIceCreams} </h2>
        <button className='btn' onClick={()=> dispatch(ordered())}>Order ice Creams</button>

        <input type='number' value={value} onChange={ e => setValue(parseInt(e.target.value))}/>
        
        <button className='btn' onClick={()=> dispatch(restocked(value))}>Restock ice Creams</button>
      
    </div>
  )
}