// lib/blogPosts.js
// Replace this with your actual data retrieval logic, e.g., from a database or CMS

const blogPosts = [
    {
        slug: '1',
        title: 'My First Blog Post',
        content: 'This is the content of my first blog post.',
    },
    {
        slug: '2',
        title: 'Another Blog Post',
        content: 'This is the content of another blog post.',
    },
    {
        slug: '3',
        title: 'A Third Blog Post',
        content: 'This is the content of a third blog post.',
    },
    {
        slug: '4',
        title: 'The Fourth Blog Post',
        content: 'This is the content of the fourth blog post.',
    },
    {
        slug: '5',
        title: 'Fifth Blog Post',
        content: 'This is the content of the fifth blog post.',
    },
    {
        slug: '6',
        title: 'Sixth Blog Post',
        content: 'This is the content of the sixth blog post.',
    },
    // Add more blog posts here...
];

export function getAllBlogPostSlugs() {
    // Extract and return all the slugs from the blogPosts array
    return blogPosts.map((post) => ({
        params: { slug: post.slug },
    }));
}

export function getBlogPostBySlug(slug) {
    // Find the blog post with the matching slug
    const post = blogPosts.find((post) => post.slug === slug);

    if (!post) {
        // Return a default post or handle the error as needed
        return {
            title: 'Post Not Found',
            content: 'Sorry, the requested post was not found.',
        };
    }

    return post;
}
