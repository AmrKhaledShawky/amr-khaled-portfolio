import { Link, useParams } from "react-router-dom";
import CarCallingProjectDetail from "./CarCallingProjectDetail.jsx";
import GenesisProjectDetail from "./GenesisProjectDetail.jsx";
import Footer from "../components/Footer.jsx";
import ProjectStatusBadge from "../components/ProjectStatusBadge.jsx";
import { projects } from "../data/projects.js";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((item) => item.id === slug);

  if (!project) {
    return (
      <main className="page">
        <section className="content-shell narrow-shell">
          <Link className="back-link" to="/projects">
            &larr; Back to Projects
          </Link>
          <div className="empty-panel">
            <h1>Project not found.</h1>
            <p>The requested project is not listed in the project data.</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (project.id === "car-calling") {
    return <CarCallingProjectDetail project={project} />;
  }

  if (project.id === "genesis-p2p") {
    return <GenesisProjectDetail />;
  }

  return (
    <main className="page project-detail-page">
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
            <span>{project.phase}</span>
          </div>
          <h1 id="project-detail-title">{project.title}</h1>
          <p className="page-intro">{project.description}</p>
          <p className="research-detail-area">{project.field}</p>
          <p className="research-detail-project">
            Project type: <strong>Graduation Project</strong> · Institution: {" "}
            <strong>Alamein International University</strong>
          </p>
        </header>

        <article className="research-document">
          <section className="research-document-section">
            <h2>Project Overview</h2>
            {project.brief.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <h3 className="project-subheading">Target Users</h3>
            <ul>
              {project.targetUsers.map((user) => <li key={user}>{user}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>End-to-End Product Flow</h2>
            <ol className="research-workflow project-flow-list">
              {project.productFlow.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="research-document-section">
            <h2>Platform and Architecture</h2>
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
            <h2>Current Progress</h2>
            <div className="project-progress-list">
              {project.progress.map((group) => (
                <section className="project-progress-group" key={group.title}>
                  <div className="project-flow-heading">
                    <h3>{group.title}</h3>
                    <ProjectStatusBadge status={group.status} />
                  </div>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </section>

          <section className="research-document-section">
            <h2>Technology Stack</h2>
            <dl className="project-stack">
              {project.stack.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd><strong>{item.value}</strong></dd>
                </div>
              ))}
            </dl>
          </section>

          <aside className="research-integrity" aria-labelledby="project-cv-title">
            <h2 id="project-cv-title">Project Summary</h2>
            <p>{project.cvBrief}</p>
          </aside>
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default ProjectDetail;
