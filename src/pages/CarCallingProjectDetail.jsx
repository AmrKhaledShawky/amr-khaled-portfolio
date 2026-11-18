import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import ProjectStatusBadge from "../components/ProjectStatusBadge.jsx";

function CarCallingProjectDetail({ project }) {
  return (
    <main className="page project-detail-page car-calling-detail-page">
      <section
        className="content-shell detail-shell"
        aria-labelledby="project-detail-title"
      >
        <Link className="back-link" to="/projects">
          &larr; Back to Projects
        </Link>

        <header className="page-header research-detail-header">
          <div className="project-detail-kicker">
            <ProjectStatusBadge status={project.status} />
            <span>{project.field}</span>
          </div>
          <h1 id="project-detail-title">{project.title}</h1>
          <p className="page-intro">{project.description}</p>
          <div className="project-detail-actions">
            <a
              className="button-link"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              Visit Live Website
            </a>
            <a
              className="button-link secondary"
              href={project.sourceLink}
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>
          </div>
        </header>

        <article className="research-document car-calling-document">
          <section className="research-document-section">
            <h2>Project Overview</h2>
            {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <section className="research-document-section">
            <h2>Main User Roles</h2>
            <div className="car-calling-role-list">
              {project.roles.map((role) => (
                <article className="car-calling-role" key={role.title}>
                  <h3>{role.title}</h3>
                  <p>{role.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="research-document-section">
            <h2>End-to-End Platform Flow</h2>
            <ol className="research-workflow">
              {project.productFlow.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </section>

          <section className="research-document-section">
            <h2>Technical Architecture</h2>
            <ol className="research-workflow project-flow-list">
              {project.architecture.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="research-document-section">
            <h2>Core Domain Modules</h2>
            <ol className="research-workflow project-flow-list">
              {project.coreModules.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="research-document-section">
            <h2>API Design and Data Model</h2>
            <ul>
              {project.apiExamples.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <div className="car-calling-role-list car-calling-data-models">
              {project.dataModels.map((item) => (
                <article className="car-calling-role" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="research-document-section">
            <h2>Security and Reliability Practices</h2>
            <ul>
              {project.securityPractices.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>Testing and Code Quality</h2>
            <ul>
              {project.quality.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>Deployment and Containerization</h2>
            <ul>
              {project.deployment.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>Tools and Technologies</h2>
            <dl className="project-stack">
              {project.stack.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="research-document-section">
            <h2>Engineering Contributions</h2>
            <ol className="research-workflow">
              {project.contributions.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </section>

          <aside className="research-integrity" aria-labelledby="car-calling-summary-title">
            <h2 id="car-calling-summary-title">Portfolio Summary</h2>
            <p>{project.portfolioSummary}</p>
          </aside>
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default CarCallingProjectDetail;
