import Footer from "../components/Footer.jsx";

function Research() {
  return (
    <main className="page">
      <section className="content-shell narrow-shell" aria-labelledby="research-title">
        <header className="page-header">
          <span className="page-label">03</span>
          <h1 id="research-title">Research</h1>
          <p className="page-intro">
            Research notes, technical investigations, and focused security
            topics will be organized here as they are published.
          </p>
        </header>

        <div className="empty-panel">
          <h2>No research entries published yet.</h2>
          <p>
            This page is ready for future research records without adding
            placeholder claims or unfinished work.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Research;
