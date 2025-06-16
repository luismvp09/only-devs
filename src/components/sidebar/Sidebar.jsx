import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { BtnToggleTheme } from '../ui/buttons/BtnToggleTheme'
import { BtnLogout } from '../ui/buttons/BtnLogout'
import { BtnNewPost } from '../ui/buttons/BtnNewPost'

export const Sidebar = () => {

  const links = [
    { label: "Inicio", icon: "ic:baseline-home", to: "/" },
    {
      label: "Notificaciones",
      icon: "ic:baseline-notifications",
      to: "/notificaciones",
    },
    { label: "Mensajes", icon: "ic:baseline-message", to: "/mensajes" },
    {
      label: "Colecciones",
      icon: "ic:baseline-collections-bookmark",
      to: "/colecciones",
    },
    {
      label: "Suscripciones",
      icon: "ic:baseline-person",
      to: "/suscripciones",
    },
    {
      label: "Añadir tarjeta",
      icon: "ic:baseline-credit-card",
      to: "/tarjeta",
    },
    { label: "Mi perfil", icon: "ic:baseline-account-circle", to: "/miperfil" },
  ]

  return (
    <div
      className='
      h-screen p-2 sm:p-4 bg-white dark:bg-neutral-900 flex flex-col  w-16 sm:w-64 transition-all duration-300 
      '>
      {/*logo */}
      <div className='flex justify-center items-center h-8 w-8  rounded-full bg-blue-100 text-blue-600 font-bold text-sm mb-6'>
        ONLYDEVS
      </div>
      {/*NAV */}
      <nav className='flex-1 flex flex-col gap-2 items-center sm:items-stretch'>
        {
          links.map((item, index) => {
            return (
              <NavLink key={index}
                to={item.to} className={({ isActive }) => `
                flex items-center gap-3 py-2 px-2 sm:px-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:text-[#0091EA]  dark:hover:bg-[#0091EA]/10 transition-all w-full justify-center sm:justify-start
                   ${isActive ? 'text-blue-600 dark:text-white' : ' text-gray-600 dark:text-gray-400'}
                   `}>
                   <Icon icon={item.icon} width={24} height={24} />
                   <span className='hidden sm:inline'>{item.label}</span>
              </NavLink>
            )
          })}
      </nav>
      <BtnToggleTheme />
      <BtnLogout />
      <BtnNewPost />
    </div>
  )
}
