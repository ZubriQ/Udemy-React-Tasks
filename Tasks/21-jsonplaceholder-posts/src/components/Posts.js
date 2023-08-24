import { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((apiPosts) => setPosts(apiPosts))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <div>
      {posts.map((post) => {
        const { userId, id, title, body } = post;
        return <Post userId={userId} id={id} title={title} body={body} />;
      })}
    </div>
  );
}

export default Posts;
