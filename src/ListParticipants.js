import React from 'react';
import './listParticipants.css';

export default function listParticipants(props){
  return (
    <ul className='participants'>
      <li className='session-participant'>
          <img src={props.participant.avatar} alt={props.participant.name} className='user-avatar'/>
          <div className='participant-info'>
            <h6 className='participant-name'>{props.participant.name}</h6>
            <div className='participant-status'>
              {props.participant.inSession?props.participant.onStage?'on stage':'in session':'left'}
            </div>
          </div>
        </li>
    </ul>
  )  
}