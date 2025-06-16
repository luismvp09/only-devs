import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const InputPublicar = () => {
  return (
    <div className='
    p-4 
    border-b
  border-green-200
    
  '>
    <input value={''}
    placeholder='Escribir nueva publicacion...'
     className='
    w-full 
    p-2 rounded 
    focus:outline-none
    placeholder-gray-500
    ' />
    <div className='flex gap-4 mt-2 text-gray-400'>
        <Icon icon='mdi:image-outline' className='text-2x1' />
        <Icon icon='mdi:format-list-bulleted' className='text-2x1' />
        <Icon icon='mdi:gif' className='text-2x1' />
        <Icon icon='mdi:format-text' className='text-2x1' />
    </div>
  </div>
  )
}
