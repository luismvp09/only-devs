import { Icon } from '@iconify/react/dist/iconify.js'
import { PostImageFrame } from './PostImageFrame'

export const PublicacionCard = () => {
    return (
        <div className='border-b border-gray-500/50 p-4'>
            <div className='flex justify-between'>
                <div className='flex items-center gap-3'>
                    <img src='https://okdiario.com/img/2022/02/14/el-senor-de-los-anillos-new-line-cinema.jpg'
                        className='w-12 h-12 rounded-full object-cover ' />
                    <span className='font-bold'>Nombre de Usuario</span>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-gray-500 text-sm whitespace-nowrap'>
                        hce 8h
                    </span>
                    <button>
                        <Icon
                            icon='mdi:dots-horizontal'
                            className='text-gray-500' />
                    </button>
                </div>
            </div>
            <div className='mt-3'>
                <p className='mb-2'>
                    Titulo
                </p>
                <div>
                    <PostImageFrame src={'https://okdiario.com/img/2022/02/14/el-senor-de-los-anillos-new-line-cinema.jpg'} />
                </div>
                <div className='flex justify-between mt-4'>
                    <button>
                        <Icon icon={"mdi:heart-outline"}
                            className='
                        text-3x1 
                        p-1 
                        rounded-full
                      text-gray-400 
                       hover:bg-[rgba(78,184,233,0.2)]
                       cursor-pointer
                      '
                        />
                    </button>
                    <button className='flex items-center gap-2 cursor-pointer'>
                        <Icon icon={"mdi:comment-outline"}
                            className='
                        text-3x1 
                        p-1 
                        rounded-full
                      text-gray-400 
                       cursor-pointer
                      '
                        />
                        <span className='text-xs md:text-sm text-gray-400'>Comentar</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
