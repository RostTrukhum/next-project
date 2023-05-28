import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'blog page',
  description: 'Create blog page',
};

const getData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/postss', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error('fetch error');
  }

  return response.json();
};

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
