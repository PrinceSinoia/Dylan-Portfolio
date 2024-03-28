import React from 'react';
import { useQuery, gql } from '@apollo/client';
import client from './Client';

const GET_POSTS = gql`
  query {
    posts {
      nodes {
        id
        title
        content
      }
    }
  }
`;

function PostList() {
  const { loading, error, data } = useQuery(GET_POSTS, { client });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.posts.nodes.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      ))}
    </div>
  );
}

export default PostList;