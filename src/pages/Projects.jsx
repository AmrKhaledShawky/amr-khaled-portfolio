import { useMemo, useState } from "react";
import Footer from "../components/Footer.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { projects } from "../data/projects.js";

function Projects() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return projects;
    }

    return projects.filter((project) =>
      [
        project.title,
        project.category,
        ...(project.technologies || []),
        ...(project.tags || []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [searchTerm]);

  return (
    <main className="page archive-page">
      <section className="content-shell" aria-labelledby="projects-title">
        <header className="page-header">
          <span className="page-label">02</span>
          <h1 id="projects-title">Projects</h1>
          <p className="page-intro">
            Software, AI, cybersecurity, and engineering projects.
          </p>
        </header>

        <div className="archive-controls projects-controls">
          <SearchBar
            id="project-search"
            label="Search projects"
            placeholder="Search by project, category, technology, or tag"
            value={searchTerm}
            onChange={setSearchTerm}
          />
        </div>

        <p className="results-summary">
          Showing {filteredProjects.length} of {projects.length} projects
        </p>

        {filteredProjects.length ? (
          <div className="card-grid">
            {filteredProjects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No projects found.</p>
        )}
      </section>

      <Footer />
    </main>
  );
}

export default Projects;
