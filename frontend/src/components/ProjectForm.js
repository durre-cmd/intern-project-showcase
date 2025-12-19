import React, { useState } from 'react';
import axios from 'axios';

function ProjectForm() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tags, setTags] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) return alert('You must be logged in to upload a project.');

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('tags', tags);
        if (image) formData.append('image', image);

        try {
            await axios.post('http://localhost:5000/api/projects', formData, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setTitle('');
            setDescription('');
            setTags('');
            setImage(null);

            alert('Project uploaded successfully!');
            window.location.reload(); // refresh to show new project
        } catch (err) {
            console.error('Upload error:', err.response?.data || err.message);
            alert('Error uploading project. Check console for details.');
        }
    };

    return (
        <form className="project-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Project Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Description"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Tags (comma separated)"
                value={tags}
                onChange={e => setTags(e.target.value)}
            />
            <input type="file" onChange={e => setImage(e.target.files[0])} />
            <button type="submit">Upload Project</button>
        </form>
    );
}

export default ProjectForm;
