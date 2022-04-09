import React from 'react'
import DarkMode from './DarkMode';

const header = () => {
    return (
      <div className='container p-8 bg-gray-100 border-b-1 rounded-b-2xl'>
        <div className='border-b-2 border-gray-600'>
          <h1 className='font-bold text-2xl'>Social Media Dashboard</h1>
          <h3 className='pb-5 text-slate-500'>Total Followers: 23,004</h3>
        </div>
        <DarkMode />
      </div>
    );
}

export default header