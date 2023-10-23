// pages/[slug].js
import { useRouter } from 'next/router';
import { getBlogPostBySlug, getAllBlogPostSlugs } from '../lib/blogPosts';

const BlogPost = ({ post }) => {
    const router = useRouter();

    if (router.isFallback) {
        return <div className="text-center mt-8">Loading...</div>;
    }

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div
                className="prose prose-blue"
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </div>
    );
};

export async function getStaticPaths() {
    const paths = getAllBlogPostSlugs();
    return {
        paths,
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const post = getBlogPostBySlug(params.slug);
    return {
        props: { post },
    };
}

export default BlogPost;