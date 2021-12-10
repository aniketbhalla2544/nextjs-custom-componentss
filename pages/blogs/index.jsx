import Link from 'next/link';
export default function BlogsPage({ posts }) {
  if (!posts) {
    return <h1>No posts data found</h1>
  }
  return (
    <ul>
      {
        posts.map(post => {
          if (post.id < 6) {
            return (
              <li>
                <h3>{post.title}</h3>
                <Link href={`blogs/${post.id}`}>
                  <a>Read More</a>
                </Link>
              </li>
            )
          }
        })
      }
    </ul>
  )
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return {
    props: {
      posts: data
    }
  }
}
