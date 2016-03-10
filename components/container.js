import React from 'react';

import Button from './button';
import Text from './text';

export default {
  state: {
    showText: false,
    clickable: false
  },

  render () {
    const { clickable, showText } = this.state;
    const { text } = this.props;

    return (
      <div>
        <Button
          disabled={!clickable}
          onClick={() => this.onClick && this.onClick()}
          value='click me'
        />
        <Text
          value={showText && text}
        />
      </div>
    );
  }
};
