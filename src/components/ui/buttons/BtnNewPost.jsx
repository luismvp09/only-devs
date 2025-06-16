import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

export const BtnNewPost = () => {
    return (
        <div className='
    mt-4 flex
    justify-center
    bg-primary
     hover:bg-primary/90 
     font-semibold
     p-2
     px-4
     rounded-full
     text-white
     items-center
     justify-center
     gap-2
     transition
     '>
        <Icon icon='ic:baseline-add' width={20} height={20} />
        <span>NUEVA PUBLICACION</span>
     </div>
    )
}
