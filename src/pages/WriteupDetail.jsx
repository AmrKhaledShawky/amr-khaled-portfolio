import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DifficultyBadge from "../components/DifficultyBadge.jsx";
import Footer from "../components/Footer.jsx";
import { writeups } from "../data/writeups.js";
import { formatDate } from "../utils/dates.js";

const loadStates = {
  idle: "idle",
  loading: "loading",
  loaded: "loaded",
  error: "error",
};

function resolveEmbeddedUrl(value, baseUrl) {
  if (!value || /^(?:[a-z][a-z\d+.-]*:|\/|#)/i.test(value)) {
    return value;
  }

  const resolvedUrl = new URL(value, baseUrl);

  return `${resolvedUrl.pathname}${resolvedUrl.search}${resolvedUrl.hash}`;
}

function getBodyMarkup(html, sourcePath) {
  const parser = new DOMParser();
  const document = parser.parseFromString(html, "text/html");
  const baseUrl = new URL(sourcePath, window.location.href);

  document.body.querySelector("header")?.remove();

  document.body.querySelectorAll("[src]").forEach((element) => {
    element.setAttribute("src", resolveEmbeddedUrl(element.getAttribute("src"), baseUrl));
  });

  document.body.querySelectorAll("a[href]").forEach((element) => {
    element.setAttribute("href", resolveEmbeddedUrl(element.getAttribute("href"), baseUrl));
  });

  return document.body.innerHTML.trim() || html;
}

function WriteupDetail() {
  const { slug } = useParams();
  const writeup = useMemo(
    () => writeups.find((currentWriteup) => currentWriteup.id === slug),
    [slug],
  );
  const [status, setStatus] = useState(loadStates.idle);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (!writeup?.writeupPath) {
      return;
    }

    const controller = new AbortController();

    async function loadWriteup() {
      setStatus(loadStates.loading);
      setContent("");

      try {
        const response = await fetch(writeup.writeupPath, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Unable to load ${writeup.writeupPath}`);
        }

        const html = await response.text();
        setContent(getBodyMarkup(html, writeup.writeupPath));
        setStatus(loadStates.loaded);
      } catch (error) {
        if (error.name !== "AbortError") {
          setStatus(loadStates.error);
        }
      }
    }

    loadWriteup();

    return () => controller.abort();
  }, [writeup]);

  if (!writeup) {
    return (
      <main className="page">
        <section className="content-shell narrow-shell">
          <Link className="back-link" to="/writeups">
            &larr; Back to Writeups
          </Link>
          <div className="empty-panel">
            <h1>Writeup not found.</h1>
            <p>The requested writeup is not listed in the writeup data.</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="page writeup-detail-page">
      <section className="content-shell detail-shell" aria-labelledby="writeup-detail-title">
        <div className="writeup-topbar">
          <Link className="back-link" to="/writeups">
            &larr; Back to Writeups
          </Link>
          <p className="writeup-author">0xWIZKEY</p>
          <span className="writeup-navbar-space" aria-hidden="true"></span>
        </div>

        <header className="writeup-detail-header">
          <p className="writeup-date">{formatDate(writeup.date)}</p>
          <h1 id="writeup-detail-title">{writeup.title}</h1>

          <div className="detail-metadata" aria-label="Writeup metadata">
            <span>{writeup.platform}</span>
            <span aria-hidden="true">·</span>
            <span>{writeup.type}</span>
            <span aria-hidden="true">·</span>
            <span>{writeup.os}</span>
            <span aria-hidden="true">·</span>
            <DifficultyBadge difficulty={writeup.difficulty} />
          </div>

        </header>

        <figure className="writeup-featured-image">
          <img src={writeup.image} alt={`${writeup.title} challenge`} />
        </figure>

        <article className="writeup-content">
          {status === loadStates.loading ? <p>Loading writeup...</p> : null}
          {status === loadStates.error ? (
            <p>
              The HTML writeup could not be loaded from{" "}
              <code>{writeup.writeupPath}</code>.
            </p>
          ) : null}
          {status === loadStates.loaded ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : null}
        </article>
      </section>

      <Footer />
    </main>
  );
}

export default WriteupDetail;
