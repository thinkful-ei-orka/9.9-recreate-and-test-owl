import React from 'react';
import './ChatLog.css';

export default function chatLog(props){
  return (
      <div className='message-container'>
        {props.event.message!==undefined?
            <div className='message'>
              <img className='user-avatar message-avatar' alt={props.person.name} src={props.person.avatar} />
              <div className='message-body'>
                <div className='message-header'>
                <h6 className='message-body-header'>
                  {props.person.name}
                </h6>
                <span className='message-body-time'>
                  {new Date(props.event.time).toLocaleTimeString('en-US', {hour: '2-digit',minute:'2-digit'})}
                </span>
                </div>
                <div className='message-body-content'>
                  <p>
                    {props.event.message}
                  </p>
                </div>
              </div>
            </div>
          :
            <div className='system-message'>
            <strong>
              {props.person.name}
            </strong>
            {props.event.type==='thumbs-up'?' gave a thumbs up':null}
            {props.event.type==='thumbs-up'?<span name='thumbsup' className='icon-thumbsup' aria-hidden='true'></span>:null}
            {props.event.type==='thumbs-down'?' gave a thumbs down':null}
            {props.event.type==='thumbs-down'?<span name='thumbsdown' className='icon-thumbsdown' aria-hidden='true'></span>:null}
            {props.event.type==='raise-hand'?' raised their hand':null}
            {props.event.type==='raise-hand'?<span name='raisehand' className='icon-raisehand' aria-hidden='true'></span>:null}
            {props.event.type==='clap'?' clapped':null}
            {props.event.type==='clap'?<span name='clap' className='icon-clap' aria-hidden='true'></span>:null}
            {props.event.type==='join'?' joined':null}
            {props.event.type==='leave'?' left':null}
            {props.event.type==='join-stage'?' joined the stage':null}
            {props.event.type==='leave-stage'?' left the stage':null}
          
          </div>
      }
    </div>
  )
}