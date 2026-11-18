import { formatProjectDate } from "../utils/dates.js";
import { Link } from "react-router-dom";
import ProjectStatusBadge from "./ProjectStatusBadge.jsx";

function ProjectCard({ project }) {
  return (
    <article className="archive-card project-card">
      <div
        className={
          "card-media project-card-media" +
          (project.imageSurface === "light" ? " project-card-media-light" : "")
        }
      >
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
          {project.status ? (
            <div className="metadata-row">
              <dt>Status:</dt>
              <dd><ProjectStatusBadge status={project.status} /></dd>
            </div>
          ) : null}
          {project.date ? (
            <div className="metadata-row">
              <dt>Date:</dt>
              <dd>{formatProjectDate(project.date)}</dd>
            </div>
          ) : null}
        </dl>

        {project.tags?.length ? (
          <div className="tag-list compact" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <span className="tag-badge" key={tag}>{tag}</span>
            ))}
          </div>
        ) : null}

        {project.projectPath || project.link ? (
          <div className="card-actions">
            {project.link ? (
              <a
                className="button-link"
                href={project.link}
                target="_blank"
                rel="noreferrer"
              >
                {project.linkLabel || "Live Website"}
              </a>
            ) : null}
            {project.projectPath ? (
              <Link className="button-link secondary" to={project.projectPath}>
                View Details
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default ProjectCard;
