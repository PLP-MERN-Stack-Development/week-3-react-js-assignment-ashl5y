import React, {useEffect, useState} from 'react';
import {fetchPosts} from '../api/posts';

const ApiData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-6">
      <h2 className="text-2xl font-bold mb-4">Fetched Posts</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <ul className="space-y-2">
        {posts.map(post => (
          <li key={post.id} className="p-4 border rounded">
            <h3 className="font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiData;

