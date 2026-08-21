import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  return (
    <main className="page archive-page">
      <section className="content-shell" aria-labelledby="projects-title">
        <header className="page-header">
          <span className="page-label">02</span>
          <h1 id="projects-title">Projects</h1>
          <p className="page-intro">
            Software, AI, cybersecurity, and engineering projects I am building
            and refining over time.
          </p>
        </header>

        {projects.length ? (
          <>
            <p className="results-summary">
              Showing {projects.length} project{projects.length === 1 ? "" : "s"}
            </p>

            <div className="card-grid">
              {projects.map((project) => (
                <ProjectCard project={project} key={project.id} />
              ))}
            </div>
          </>
        ) : (
          <div className="empty-panel empty-panel-compact">
            <h2>No projects added yet.</h2>
            <p>
              This page is ready for future project entries, without adding fake
              template content.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

export default Projects;
