export default function Blog({ post }) {
  if (!post) {
    return <h1>No post data found.</h1>
  }
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}

function generateRequiedPaths(total) {
  const requiredPaths = [];      
  for (let index = 1; index <= total; index++) {
    requiredPaths.push(String(index));
  }
  return requiredPaths;
}

export async function getStaticPaths() {
  const requiredPaths = generateRequiedPaths(5);
  const paths = requiredPaths.map(id => ({ params: { blogId: id } }));
  return {
    paths: paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`);
  const data = await res.json();
  return {
    props: {
      post: data,
    }
  }
}



