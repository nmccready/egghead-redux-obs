import React from 'react';

export default function User(props) {
  return (
    <div className="user">
      <figure>
        <img src={props.avatar_url} alt="" />
      </figure>
      <p>
        {props.name} ({props.login})
      </p>
    </div>
  );
}
