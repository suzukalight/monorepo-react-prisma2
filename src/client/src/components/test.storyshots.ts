import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import path from 'path';

initStoryshots({
  configPath: path.resolve(__dirname, '../../.storybook/config.js'),
  test: multiSnapshotWithOptions({}),
});
