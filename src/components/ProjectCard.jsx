import { formatProjectDate } from "../utils/dates.js";

function ProjectCard({ project }) {
  return (
    <article className="archive-card project-card">
      <div className="card-media project-card-media">
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          loading="lazy"
        />
      </div>

      <div className="card-body project-card-body">
        <h2>{project.title}</h2>

        <dl className="metadata-list">
          <div className="metadata-row">
            <dt>Field:</dt>
            <dd>{project.field || "Research"}</dd>
          </div>
          <div className="metadata-row">
            <dt>Date:</dt>
            <dd>{formatProjectDate(project.date)}</dd>
          </div>
        </dl>

        {project.link ? (
          <div className="card-actions">
            <a
              className="button-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
