import React from 'react'



const SocialCard = ({ icon, userName, subscriberType, followers, arrow, amountChange }) => {
  return (
    <div className='container mb-5 border-t-4 border-blue-500 flex flex-col justify-center items-center text-center  bg-gray-100 p-8 w-11/12 rounded-md'>
      <div className='social flex'>
        <img src={icon} alt='' />
        <h3 className='ml-3'>{ userName}</h3>
      </div>
      <div className='follower_count'>
        <h2>
          <b className='text-3xl'>{ followers}</b>
        </h2>
        <p>{ subscriberType }</p>
      </div>
      <div className='percent_change flex items-center'>
        <img src={arrow} alt='' />
        <p className='ml-2'>{ amountChange } Today</p>
      </div>
    </div>
  );
}

export default SocialCard