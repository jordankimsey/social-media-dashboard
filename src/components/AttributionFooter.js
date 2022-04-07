import React from 'react'

const attributionFooter = () => {
  return (
    <div
      className='attribution fixed
             inset-x-0
             bottom-0
             p-4'
    >
      Challenge by{' '}
      <a
        href='https://www.frontendmentor.io?ref=challenge'
        rel='noreferrer'
        target='_blank'
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a href='https://github.com/jordankimsey/social-media-dashboard'>
        Isaac Kimsey
      </a>
      .
    </div>
  );
}

export default attributionFooter