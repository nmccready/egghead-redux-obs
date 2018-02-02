import React from 'react';

export default function Search({
  defaultValue,
  onChange,
  messages,
  loading,
  cancel
}) {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder="Search for a Beer"
        defaultValue={defaultValue}
        onChange={(evt) => onChange(evt.target.value)}
      />
      {loading && (
        <button type="button" onClick={cancel}>
          Cancel
        </button>
      )}

      {messages.length > 0 && (
        <ul>
          {messages.map((message) => (
            <li
              key={message.text}
              className={`message message--${message.type}`}
            >
              {message.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
