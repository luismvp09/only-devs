import { Icon } from '@iconify/react/dist/iconify.js'


export const BtnLogout = () => {
    return (
        <button
            className='
        flex 
        items-center
        gap-3
        p-2 rounded-lg
        hover:bg-gray-100
        dark:hover:bg-primary/20
        transition-all
        justify-start
        cursor-pointer
        '>
            <Icon icon={"solar:logout-2-bold-duotone"} width={24} height={24} />
            <span className='text-gray-600 dark:text-gray-400'>Cerrar sesión</span>
        </button>
    )
}
