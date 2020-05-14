import React from 'react';
import ListParticipants from './ListParticipants'
import ChatLog from './ChatLog';
import participants from './Participants';
import chatevents from './chatevents';
import Stage from './Stage';
import './stage.css';
import './listParticipants.css';
import './ChatLog.css';

const currentUser = participants.filter(x=>!x.inSession)[0];

export default function App(props=chatevents) {
  return (
    <main className='App'>
      <div className='participants'>
        {participants.filter(x=>x.inSession).concat(participants.filter(x=>!x.inSession)).map((person,i)=>
        <ListParticipants
        participant={person}
        key={`participant-${i}`}/>)}
      </div>
      <div className='stage'>
        {participants.filter(x=>x.onStage).map((participant,i)=>
          <Stage
          participant={participant}
          key={`stageperson-${i}`}/>)}
        <div className='current-user-stage-preview' data-tooltip=   {currentUser.name}>
        <div className="volume-indicator-container">
          <div className="volume-indicator">
            <canvas id="meter" width="410" height="3" />
          </div>
        </div>
        <div className='contact-on-stage-video-container contact-on-stage__no-video'>
          <img src={currentUser.avatar} alt={currentUser.name} className='user-avatar contact-on-stage-video-avatar' />
        </div>
      </div>
      </div>
      <div className='chat'>
        {chatevents.map((obj,i)=><ChatLog
        event={obj}
        person={participants.find(x=>x.id===obj.participantId)}
        key={`event-${i}`}
        />)}
      </div>
    </main>
  );
}

/*
{listParticipants()}
      {stage()}*/