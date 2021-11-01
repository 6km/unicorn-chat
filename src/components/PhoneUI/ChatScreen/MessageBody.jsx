import React from 'react';

export default function MessageBody (props) {
  return (
    <div role="presentation" className={`msg ${props.isCurrent ? 'is_current' : ""}`}>
      {props.isCurrent || <img src={props.avatar} alt={props.username} />}
      <span>{props.content}</span>
    </div>
  )
}
