function Post({ userId, id, title, body }) {
  return (
    <div>
      <h1>User {userId}</h1>
      <h1>Post {id}</h1>
      <h2>{title}</h2>
      <p>
        <i>Comment:</i> {body}
      </p>
    </div>
  );
}

export default Post;
