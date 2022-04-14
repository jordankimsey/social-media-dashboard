import React from 'react'
import SocialCard from './SocialCard';
import facebook from '../../images/icon-facebook.svg';
import twitter from '../../images/icon-twitter.svg';
import instagram from '../../images/icon-instagram.svg';
import youtube from '../../images/icon-youtube.svg';
import upArrow from '../../images/icon-up.svg';
import downArrow from '../../images/icon-down.svg';

const SocialCardSection = () => {
    return (
      <>
        <SocialCard
          icon={facebook}
          userName={'@nathanf'}
          followers={1987}
          arrow={upArrow}
          amountChange={12}
          subscriberType={'FOLLOWERS'}
        />
        <SocialCard
          icon={twitter}
          userName={'@nathanf'}
          followers={1044}
          arrow={upArrow}
          amountChange={99}
          subscriberType={'FOLLOWERS'}
        />
        <SocialCard
          icon={instagram}
          userName={'@nathanf'}
          followers={'11k'}
          arrow={upArrow}
          amountChange={1099}
          subscriberType={'FOLLOWERS'}
        />
        <SocialCard
          icon={youtube}
          userName={'@nathan F'}
          followers={8239}
          arrow={downArrow}
          amountChange={144}
          subscribers={'SUBSCRIBERS'}
          subscriberType={'SUBSCRIBERS'}
        />
      </>
    );
}

export default SocialCardSection;