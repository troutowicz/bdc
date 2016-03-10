import React from 'react';

export default ({ disabled, onClick, value }) => (
  <input
    type='button'
    disabled={disabled}
    onClick={onClick}
    value={value}
  />
)
