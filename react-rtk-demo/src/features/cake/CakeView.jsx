import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

export const CakeView = () => {
  const numofCakes = useSelector((state) => state.cake.numofCakes)

  const dispatch =  useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numofCakes}</h2>
      <button className='btn' onClick={() => dispatch(ordered()) }>Order cake</button>
      <button className='btn' onClick={() => dispatch(restocked(5))}>Restock cakes</button>
    </div>
  )
}

