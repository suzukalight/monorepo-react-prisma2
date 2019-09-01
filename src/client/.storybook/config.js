import { configure, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';

import 'semantic-ui-css/semantic.min.css';

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Blog',
    }),
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/components', true, /.stories.tsx?$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
