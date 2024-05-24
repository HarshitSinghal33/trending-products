import React from 'react'

export default function Error({error}) {
  return (
    <div className='flex justify-center font-semibold'>
      {error}
    </div>
  )
}
