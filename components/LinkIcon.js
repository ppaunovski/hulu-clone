import React from 'react'

function LinkIcon({Icon, title}) {
  return (
    <div className='group flex flex-col justify-center items-center cursor-pointer'>
        <p>{Icon}</p>
        <p className='opacity-0 group-hover:opacity-100 uppercase tracking-normal'>{title}</p>
    </div>
  )
}

export default LinkIcon