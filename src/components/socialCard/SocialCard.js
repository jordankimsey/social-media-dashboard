import React from 'react'
import facebook from '../../images/icon-facebook.svg'
import uparrow from '../../images/icon-up.svg'


const SocialCard = () => {
  return (
    <div className='container flex flex-col justify-center items-center text-center  bg-gray-200 p-8 w-11/12 rounded-md'>
      <div className='social flex'>
        <img src={facebook} alt='' />
        <h3 className='ml-3'>@nathanf</h3>
      </div>
      <div className='follower_count'>
        <h2>
          <b>1987</b>
        </h2>
        <p>FOLLOWERS</p>
      </div>
      <div className='percent_change flex items-center'>
        <img src={uparrow} alt='' />
        <p className='ml-2'>12 Today</p>
      </div>
    </div>
  );
}

export default SocialCard