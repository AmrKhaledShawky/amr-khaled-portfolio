import { Link } from "react-router-dom";
import DifficultyBadge from "./DifficultyBadge.jsx";
import { formatDate } from "../utils/dates.js";

function WriteupCard({ writeup }) {
  return (
    <article className="archive-card">

      {/* Challenge Image */}
      <div className="card-media">
        <img
          src={writeup.image}
          alt={`${writeup.title} thumbnail`}
          loading="lazy"
        />
      </div>

      {/* Card Information */}
      <div className="card-body">

        {/* Challenge Name */}
        <h2>{writeup.title}</h2>

        {/* Challenge Parameters */}
        <dl className="metadata-list">

          <div className="metadata-row">
            <dt>Platform:</dt>
            <dd>{writeup.platform}</dd>
          </div>

          <div className="metadata-row">
            <dt>Type:</dt>
            <dd>{writeup.type}</dd>
          </div>

          <div className="metadata-row">
            <dt>OS:</dt>
            <dd>{writeup.os}</dd>
          </div>

          <div className="metadata-row">
            <dt>Difficulty:</dt>
            <dd>
              <DifficultyBadge difficulty={writeup.difficulty} />
            </dd>
          </div>

          <div className="metadata-row">
            <dt>Date:</dt>
            <dd>{formatDate(writeup.date)}</dd>
          </div>

        </dl>

        {writeup.tags?.length ? (
          <div className="tag-list" aria-label={`${writeup.title} tags`}>
            {writeup.tags.map((tag) => (
              <span className="tag-badge" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {/* Read Writeup */}
        <div className="card-actions">
          <Link
            className="button-link"
            to={`/writeups/${writeup.id}`}
          >
            Read The Writeup →
          </Link>
        </div>

      </div>
    </article>
  );
}

export default WriteupCard;
