import React from 'react';
import format from 'date-fns/format';
import { Container, Header, Message, Icon } from 'semantic-ui-react';

import { User, Post } from '../../../types/data';

import styles from './index.module.scss';

interface AuthorPresenterProps {
  author: User | null;
}

export const Author = ({ author }: AuthorPresenterProps) =>
  author && (
    <Message icon>
      <Icon name="user" size="large" />
      <Message.Content>
        <Message.Header>{author.name}</Message.Header>
        {author.email}
      </Message.Content>
    </Message>
  );

export interface BlogPostPresenterProps {
  post: Post;
}

export const BlogPost = ({ post }: BlogPostPresenterProps) => (
  <Container>
    <Header as="h1">{post.title}</Header>
    <small>{`created at: ${format(post.createdAt, 'yyyy/MM/dd')}`}</small>
    <article className={styles.content}>{post.content}</article>
    <Author author={post.author} />
  </Container>
);

export default BlogPost;
