import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { projects } from "../data/projects.js";

function GenesisProjectDetail() {
  const project = projects.find((item) => item.id === "genesis-p2p");

  return (
    <main className="page project-detail-page genesis-detail-page">
      <section
        className="content-shell detail-shell"
        aria-labelledby="project-detail-title"
      >
        <Link className="back-link" to="/projects">
          &larr; Back to Projects
        </Link>

        <header className="page-header research-detail-header">
          <div className="project-detail-kicker">{project.field}</div>
          <h1 id="project-detail-title">{project.title}</h1>
          <p className="page-intro">{project.description}</p>
        </header>

        <article className="research-document">
          <section className="research-document-section">
            <h2>Project Overview</h2>
            {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="research-document-section">
            <h2>Problems Addressed</h2>
            <ul>
              {project.challenges.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>Framework Components</h2>
            <ol className="research-workflow project-flow-list">
              {project.components.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="research-document-section">
            <h2>System Message Types</h2>
            <ul>
              {project.systemMessages.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>What Makes Genesis Different</h2>
            <ol className="research-workflow">
              {project.differentiators.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>

          <section className="research-document-section">
            <h2>Technologies and Engineering</h2>
            <dl className="project-stack">
              {project.stack.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <aside className="research-integrity" aria-labelledby="genesis-outcome-title">
            <h2 id="genesis-outcome-title">Project Outcome</h2>
            <p>{project.outcome}</p>
          </aside>
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default GenesisProjectDetail;
