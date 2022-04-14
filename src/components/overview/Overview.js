import React from 'react'
import OverviewContainer from './OverviewContainer'

const Overview = () => {
  return (
    <div className='mb-5'>
      <h2 className='text-gray-600'>Overview - Today</h2>
          <div className="overviewSection">
              <OverviewContainer/>
      </div>
    </div>
  );
}

export default Overview