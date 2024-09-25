import { createStitches } from '@stitches/react';

export const { styled, keyframes } = createStitches({
  theme: {
    colors: {
      red: 'red',
      green: 'green',
      blue: 'blue',
      orange: 'orange',
      purple: 'purple',
    },
    fontSizes: {
      small: '12px',
      medium: '16px',
      large: '20px',
      xlarge: '24px',
      xxlarge: '28px',
    },
  },
});