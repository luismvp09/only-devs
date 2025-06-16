import React from 'react'
import { useThemeStore } from '../../../store/ThemeStore'

export const BtnToggleTheme = () => {

    const { theme, setTheme } = useThemeStore()
    return (
        <button className='
     flex 
     items-center 
     gap-3 
     p-2 
     rounded-lg
     hover:bg-green-100
        dark:hover:bg-primary/20
        transition-all
        justify-start
        cursor-pointer
     '
            onClick={setTheme}
        >
            <span className='hidden sm:block'>
                {theme === "light" ? ('🌞') : ('🌙')}
                <span >{theme === 'light' ? 'Claro' : 'Oscuro'}</span>
            </span>
        </button>
    )
}
