import { useEffect, useState } from 'react';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(''); // '' equals false
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((apiPosts) => setPosts(apiPosts))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Posts;
