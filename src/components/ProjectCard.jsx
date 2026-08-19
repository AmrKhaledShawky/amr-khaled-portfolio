import { formatProjectDate } from "../utils/dates.js";

function ProjectCard({ project }) {
  const hasActions = project.github || project.demo || project.detailsPath;

  return (
    <article className="archive-card">
      <div className="card-media">
        <img src={project.image} alt={`${project.title} thumbnail`} loading="lazy" />
        {project.isPlaceholder ? (
          <span className="placeholder-ribbon">Placeholder Data</span>
        ) : null}
      </div>

      <div className="card-body">
        <h2>{project.title}</h2>

        <dl className="metadata-list">
          <div className="metadata-row">
            <dt>Category:</dt>
            <dd>{project.category}</dd>
          </div>
          <div className="metadata-row metadata-row-stack">
            <dt>Technologies:</dt>
            <dd>
              <span className="tag-list compact">
                {project.technologies.map((technology) => (
                  <span className="tag-badge" key={technology}>
                    {technology}
                  </span>
                ))}
              </span>
            </dd>
          </div>
          <div className="metadata-row">
            <dt>Date:</dt>
            <dd>{formatProjectDate(project.date)}</dd>
          </div>
        </dl>

        {project.tags?.length ? (
          <div className="tag-list" aria-label={`${project.title} tags`}>
            {project.tags.map((tag) => (
              <span className="tag-badge muted" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {hasActions ? (
          <div className="card-actions">
            {project.github ? (
              <a className="button-link secondary" href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            ) : null}

            {project.demo ? (
              <a className="button-link" href={project.demo} target="_blank" rel="noreferrer">
                View Project
              </a>
            ) : null}

            {project.detailsPath ? (
              <a className="button-link" href={project.detailsPath}>
                Project Details
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
