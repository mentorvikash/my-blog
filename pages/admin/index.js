import Link from 'next/link';

const Admin = () => {
    // Fetch and list your existing blog posts here
    // You can use API Routes to fetch the data from your backend

    return (
        <div className="max-w-screen-lg mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Admin Panel</h1>
            <Link href="/admin/create" className="text-blue-500 hover:underline">
                Create New Post
            </Link>
            {/* List of existing posts */}
        </div>
    );
};

export default Admin;
