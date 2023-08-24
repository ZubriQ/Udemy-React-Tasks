function Post({ userId, id, title, body }) {
  return (
    <div>
      <h1>{userId}</h1>
      <h2>{id}</h2>
      <h4>{title}</h4>
      <p>{body}</p>
    </div>
  );
}

export default Post;
