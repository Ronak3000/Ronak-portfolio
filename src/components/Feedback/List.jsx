import React, { useState, useEffect } from 'react';
import axios from 'axios';

function List() {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/comments');
                setComments(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    if (loading) return <p className="text-white">Loading comments...</p>;
    if (error) return <p className="text-red-500">Error loading comments: {error.message}</p>;

    return (
        <div className="w-full p-6 bg-[#3f5575] dark:bg-secondary-dark  shadow-xl text-left">
            <h2 className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment._id} className="flex mb-4">
                        <div className="mr-4">
                            <img src="https://via.placeholder.com/40" alt="avatar" className="rounded-full" />
                        </div>
                        <div>
                            <p className="text-lg font-semibold text-primary-dark dark:text-primary-light">{comment.owner}</p>
                            <p className="text-md text-secondary-dark dark:text-secondary-light">{comment.content}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
