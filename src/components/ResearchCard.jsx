import { Link } from "react-router-dom";
import ResearchStatusBadge from "./ResearchStatusBadge.jsx";

function ResearchCard({ researchItem }) {
  return (
    <article className="research-card">
      <div
        className={
          "research-media" +
          (researchItem.imageSurface === "light" ? " research-media-light" : "")
        }
      >
        <img
          src={researchItem.image}
          alt={`${researchItem.title} thumbnail`}
          loading="lazy"
        />
      </div>

      <div className="research-body">
        <div className="research-header-row">
          <h2>{researchItem.title}</h2>
        </div>

        <dl className="research-meta">
          <div className="research-meta-row">
            <dt>Field:</dt>
            <dd>{researchItem.field || "Research"}</dd>
          </div>
          <div className="research-meta-row">
            <dt>Status:</dt>
            <dd>
              <ResearchStatusBadge status={researchItem.status} />
            </dd>
          </div>
        </dl>

        <div className="card-actions">
          <Link className="button-link" to={`/research/${researchItem.id}`}>
            Read Research →
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ResearchCard;
