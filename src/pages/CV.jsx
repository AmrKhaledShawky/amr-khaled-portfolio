import Footer from "../components/Footer.jsx";

function CV() {
  return (
    <main className="page">
      <section className="content-shell narrow-shell cv-shell" aria-labelledby="cv-title">
        <header className="page-header">
          <span className="page-label">04</span>
          <h1 id="cv-title">Curriculum Vitae</h1>
          <p className="page-intro">You can download my current CV below.</p>
        </header>

        <a href="/amr.pdf" download className="cv-button">
          Download CV
        </a>
      </section>

      <Footer />
    </main>
  );
}

export default CV;
