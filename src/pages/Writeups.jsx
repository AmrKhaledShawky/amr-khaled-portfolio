import { useMemo, useState } from "react";
import Footer from "../components/Footer.jsx";
import SearchBar from "../components/SearchBar.jsx";
import WriteupCard from "../components/WriteupCard.jsx";
import { writeups } from "../data/writeups.js";

function Writeups() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWriteups = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    return writeups.filter((writeup) => {
      const searchableText = [
        writeup.title,
        writeup.platform,
        writeup.type,
        writeup.os,
        writeup.difficulty,
        ...(writeup.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchableText.includes(query);
      return matchesSearch;
    });
  }, [searchTerm]);

  return (
    <main className="page archive-page">
      <section className="content-shell" aria-labelledby="writeups-title">
        <header className="page-header">
          <span className="page-label">01</span>
          <h1 id="writeups-title">Writeups</h1>
          <p className="page-intro">
            Technical writeups, CTF solutions, digital forensics investigations,
            security challenges, and technical research.
          </p>
        </header>

        <div className="archive-controls">
          <SearchBar
            id="writeup-search"
            label="Search writeups"
            placeholder="Search by challenge, platform, type, OS, difficulty, or tag"
            value={searchTerm}
            onChange={setSearchTerm}
          />

        </div>

        {filteredWriteups.length ? (
          <div className="card-grid">
            {filteredWriteups.map((writeup) => (
              <WriteupCard writeup={writeup} key={writeup.id} />
            ))}
          </div>
        ) : (
          <p className="empty-state">No writeups found.</p>
        )}
      </section>

      <Footer />
    </main>
  );
}

export default Writeups;
