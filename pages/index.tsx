import Link from "next/link";

const Index = () => {
  // Sample list of blog posts; replace with your data source
  const blogPosts = [
    {
      slug: "1",
      title: "My First Blog Post",
      content: "This is the content of my first blog post.",
    },
    {
      slug: "2",
      title: "Another Blog Post",
      content: "This is the content of another blog post.",
    },
    {
      slug: "3",
      title: "A Third Blog Post",
      content: "This is the content of a third blog post.",
    },
    {
      slug: "4",
      title: "The Fourth Blog Post",
      content: "This is the content of the fourth blog post.",
    },
    {
      slug: "5",
      title: "The Fifth Blog Post",
      content: "This is the content of the fourth blog post.",
    },
    {
      slug: "6",
      title: "The Sixth Blog Post",
      content: "This is the content of the fourth blog post.",
    },
  ];

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-gray-600">
        Explore my latest blog posts and enjoy the content!
      </p>
      <ul className="mt-4">
        {blogPosts.map((post) => (
          <li key={post.slug} className="mb-4">
            <Link href={`/${post.slug}`}>
              <div className="text-blue-500 hover:underline">{post.title}</div>
            </Link>
            <p className="text-gray-600">{post.content.slice(0, 150)}...</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
