import React from 'react'
import facebook from '../../images/icon-facebook.svg'

const SocialCard = () => {
  return (
      <div>
          <div className="social">
              <img src={facebook} alt="" />
              <h3>@nathanf</h3>
          </div>  
    </div>
  )
}

export default SocialCard