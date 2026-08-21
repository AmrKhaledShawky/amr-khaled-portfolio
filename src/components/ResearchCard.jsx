import ResearchStatusBadge from "./ResearchStatusBadge.jsx";

function ResearchCard({ researchItem }) {
  return (
    <article className="research-card">
      <div className="research-media">
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
          <a className="button-link" href={researchItem.researchPath}>
            Read Research →
          </a>
        </div>
      </div>
    </article>
  );
}

export default ResearchCard;
