import React from 'react'
import Switch from './switch/Switch'


const DarkMode = () => {
  return (
    <div className='flex justify-between py-4'>
      <h3 className='text-slate-500 font-semibold'>Dark Mode</h3>
      <Switch />
    </div>
  );
}

export default DarkMode