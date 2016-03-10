import React from 'react';
import ReactDOM from 'react-dom';
import reactStamp from 'react-stamp'

import container from './components/container';
import buttonBehavior from './mixins/buttonBehavior';

const Component = reactStamp(React).compose(
  container,
  buttonBehavior
);

ReactDOM.render(
  <Component text='behavior driven composition' />,
  document.getElementById('root')
);
