import React from 'react';

export default function(props){
  return (
    <div className='stage stage__1-contacts'>
      {<div className='contact-on-stage' data-tooltip={props.participant.name}> 
          <div className='contact-on-stage-video=container'>
            <img src={props.participant.avatar} alt={props.participant.name} className='user-avatar contact-on-starge-video-avatar' />
          </div>
          <div className='contact-on-stage-details'>
            <span className='contact-on-stage-details-text'>
              {props.participant.name}
            </span>
            <button className='contact-on-stage-details-button'>
              <span name='highvolume' className='tui-icon icon-highvolume' aria-hidden='true'>
                &#x1f50a;
              </span>
            </button>
            <div className='volulme-indicator-container'>
              <div className='volume-indicator'>
                <canvas id='meter' width='410' height='3' />
              </div>
            </div>
          </div>
       </div>
      }      
    </div>
  )
}
