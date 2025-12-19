import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/App.css';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
    } catch (err) {
      console.error(err);
      alert('Failed to fetch projects');
    }
  };

  return (
    <div className="project-list">
      {projects.map(project => (
        <div key={project._id} className="project-card">
          {project.image && (
            <img 
              src={`http://localhost:5000/uploads/${project.image}`} 
              alt={project.title} 
            />
          )}
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p><strong></strong> {project.tags.join(', ')}</p>
          <p><strong>By:</strong> {project.owner?.username || 'Unknown'}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
