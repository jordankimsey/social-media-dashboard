import React from 'react'
import OverviewContainer from './OverviewContainer'

const Overview = () => {
  return (
    <div className='mb-5 p-8 mx-5 w-11/12 bg-gray-600 rounded-md'>
      <h2 className='text-gray-600 text-left'>Overview - Today</h2>
          <div className="overviewSection text-left">
              <OverviewContainer/>
      </div>
    </div>
  );
}

export default Overview