import { useState } from 'react';
import { useRouter } from 'next/router';

const EditPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const router = useRouter();

    // Fetch the existing post data to pre-fill the form for editing
    // You can use an API Route for this

    const handleEdit = async () => {
        // Send a PUT request to your API Route to update the blog post
        const response = await fetch('/api/posts/[id]', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            router.push('/admin'); // Redirect to the admin dashboard after editing the post
        }
    };

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Edit Post</h1>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 mb-4"
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 mb-4"
            />
            <button
                onClick={handleEdit}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
            >
                Save Changes
            </button>
        </div>
    );
};

export default EditPost;
