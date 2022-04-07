import React from 'react'
import DarkMode from './DarkMode';

const header = () => {
    return (
      <>
        <div className='border-b-2 border-gray-600 '>
          <h1>Social Media Dashboard</h1>
          <h3>Total Followers: 23,004</h3>
            </div>
            <DarkMode/>
      </>
    );
}

export default header