import React from 'react'
// import { IconDashboard , IconUserCircle , IconComponents , IconCalendar , IconScript } from '@tabler/icons-react';
const SidebarItem = ({icon,Item}) => {
  return (
    <>
      <li><a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-slate-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <i class={`fa-solid ${icon}`}></i>
        {Item}
      </a></li>
    </>
  )
}

export default SidebarItem