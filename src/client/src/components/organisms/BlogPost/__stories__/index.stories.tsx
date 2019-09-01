import React from 'react';
import { storiesOf } from '@storybook/react';

import { Post } from '../../../../types/data';

import BlogPost from '..';

const post: Post = {
  id: '1',
  published: true,
  title: 'テスト投稿1',
  createdAt: new Date(2019, 7, 31, 18, 0, 0),
  updatedAt: new Date(2019, 7, 31, 18, 0, 0),
  author: {
    id: '1',
    name: 'テスト太郎',
    email: 'test@example.com',
  },
  content: `
テスト1a
テスト1b

テスト2a`,
};

storiesOf('organisms/BlogPost', module).add('BlogPost', () => <BlogPost post={post} />);
