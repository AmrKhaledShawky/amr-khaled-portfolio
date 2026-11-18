import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import { research } from "../data/research.js";

function ResearchDetail() {
  const { slug } = useParams();
  const researchItem = research.find((item) => item.id === slug);

  if (!researchItem) {
    return (
      <main className="page">
        <section className="content-shell narrow-shell">
          <Link className="back-link" to="/research">
            &larr; Back to Research
          </Link>
          <div className="empty-panel">
            <h1>Research entry not found.</h1>
            <p>The requested research is not listed in the research data.</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="page research-detail-page">
      <section
        className="content-shell detail-shell"
        aria-labelledby="research-detail-title"
      >
        <Link className="back-link" to="/research">
          &larr; Back to Research
        </Link>

        <header className="page-header research-detail-header">
          <p className="page-label">Research / {researchItem.status}</p>
          <h1 id="research-detail-title">{researchItem.title}</h1>
          <p className="page-intro">{researchItem.summary}</p>
          <p className="research-detail-area">{researchItem.field}</p>
          <p className="research-detail-project">
            Project: <strong>{researchItem.projectTitle}</strong>
          </p>
        </header>

        <article className="research-document">
          <section className="research-document-section">
            <h2>Research Brief</h2>
            {researchItem.brief.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>

          <section className="research-document-section">
            <h2>Research Workflow</h2>
            <ol className="research-workflow">
              {researchItem.workflow.map((step) => (
                <li key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="research-document-section">
            <h2>Research Scope</h2>
            <ul>
              {researchItem.scope.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>Current Progress</h2>
            <ul>
              {researchItem.progress.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="research-document-section">
            <h2>Ongoing Work</h2>
            <ul>
              {researchItem.ongoingWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <aside className="research-integrity" aria-labelledby="research-integrity-title">
            <h2 id="research-integrity-title">Research Integrity</h2>
            <p>{researchItem.integrity}</p>
          </aside>
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default ResearchDetail;
