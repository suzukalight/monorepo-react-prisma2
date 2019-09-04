import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import path from 'path';

initStoryshots({
  configPath: path.resolve('./src/client/.storybook/config.js'),
  test: multiSnapshotWithOptions({}),
});
