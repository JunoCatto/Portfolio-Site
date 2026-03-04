import React from "react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {project.image && <img src={project.image} alt={project.title} />}
      <div className="project-body">
        <h3>{project.title}</h3>
        <p className="desc">{project.description}</p>
        <p className="tech">{project.tech?.join(" • ")}</p>
        <p className="links">
          <span>
            {project.repo && (
              <a href={project.repo} target="_blank" rel="noreferrer">
                Repo
              </a>
            )}
          </span>
          <span>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Demo
              </a>
            )}
          </span>
        </p>
      </div>
    </article>
  );
}
