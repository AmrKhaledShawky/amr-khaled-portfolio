import Footer from "../components/Footer.jsx";
import ResearchCard from "../components/ResearchCard.jsx";
import { research } from "../data/research.js";

function Research() {
  return (
    <main className="page">
      <section className="content-shell narrow-shell" aria-labelledby="research-title">
        <header className="page-header">
          <span className="page-label">03</span>
          <h1 id="research-title">Research</h1>
          <p className="page-intro">
            Technical work, focused studies, and research activities that are
            currently active or have been verified.
          </p>
        </header>

        {research.length ? (
          <div className="research-list" aria-label="Research entries">
            {research.map((item) => (
              <ResearchCard key={item.id} researchItem={item} />
            ))}
          </div>
        ) : (
          <div className="empty-panel empty-panel-compact">
            <h2>No research publications or studies added yet.</h2>
            <p>
              This section is ready for verified work, active research, and future
              academic or technical publications.
            </p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}

export default Research;
