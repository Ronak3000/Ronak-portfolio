import React, { useState } from 'react';
import axios from 'axios';

function Form() {
    const [owner, setOwner] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const comment = await axios.post('http://localhost:3000/api/comments', {
                owner,
                content,
            });
            console.log('Comment successfully submitted:', comment.data);
            setOwner('');
            setContent('');
        } catch (error) {
            console.log('Comment cannot be submitted:', error);
        }
    };

    function Button({ title }) {
        return <button type="submit">{title}</button>;
    }

    return (
        <div className="w-full text-white">
            <div className="leading-loose">
                <form
                    onSubmit={handleSubmit}
                    className="w-full p-6 sm:p-10 bg-[#3f5575] dark:bg-secondary-dark  shadow-xl text-left"
                >
                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                        Feedback Form
                    </p>
                    <div className="font-general-regular mb-4 text-white">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                            htmlFor="Name"
                        >
                            Name
                        </label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-black dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            type="text"
                            id="Name"
                            name="Name"
                            placeholder="Your Name"
                            aria-label="Name"
                            value={owner}
                            onChange={(e) => setOwner(e.target.value)}
                            required
                        />
                    </div>
                    <div className="font-general-regular mb-4 text-white">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-1"
                            htmlFor="Feedback"
                        >
                            Feedback
                        </label>
                        <input
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-black dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            type="text"
                            id="Feedback"
                            name="Feedback"
                            placeholder="Your feedback"
                            aria-label="Feedback"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-center">
                    <button
                        type="submit"
                        className="font-general-medium w-96 px-4 py-2.5 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500"
                        aria-label="Post"
                    >
                        Post
                    </button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Form;
