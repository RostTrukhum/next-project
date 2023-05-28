interface IPostProps {
  params: {
    id: string;
  };
}

const getData = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60,
    },
  });

  return response.json();
};

export const generateMetadata = async ({ params: { id } }: IPostProps) => {
  const post = await getData(id);

  return {
    title: post.title,
  };
};

const Post = async ({ params: { id } }: IPostProps) => {
  const post = await getData(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
};

export default Post;
