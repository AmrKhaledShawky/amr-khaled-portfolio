import { Link } from "react-router-dom";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:amrkhalid25sh@email.com",
    mark: "@",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/amr-khaled-010475254/",
    mark: "in",
  },
  {
    label: "GitHub",
    href: "https://github.com/AmrKhaledShawky",
    mark: "GH",
  },
];

function Home() {
  return (
    <main className="home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-copy">
          <p className="hero-command">
            <span>root@0xWIZKEY:~#</span> whoami
          </p>
          <p className="hero-kicker">CYBERSECURITY / COMPUTER ENGINEERING</p>

          <h1 id="home-title" className="hero-title">
            <span>CYBER SECURITY</span>
            <span className="hero-title-accent">ANALYST</span>
          </h1>

          <p className="hero-description">
            I’m Amr Khaled, a Computer Engineer focused on cybersecurity. My
            hands-on work spans digital forensics, network security,
            steganography, CTFs, internships, and security projects. I also
            explore software development and AI, bringing an engineering
            perspective to security analysis, investigation, and practical
            problem-solving.
          </p>

          <div className="hero-actions">
            <Link className="hero-button hero-button-primary" to="/writeups">
              Explore Writeups <span aria-hidden="true">↗</span>
            </Link>
            <Link className="hero-button hero-button-secondary" to="/projects">
              View Projects
            </Link>
          </div>

          <div className="hero-bottom">
            <p className="system-status">
              <span aria-hidden="true"></span> LEARNING &amp; BUILDING
            </p>
            <div className="social-links" aria-label="Social links">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {item.mark}
                </a>
              ))}
            </div>
          </div>
        </div>

        <aside className="terminal-window" aria-label="Profile terminal">
          <div className="terminal-topbar">
            <span className="terminal-caption">PROFILE.EXE</span>
            <span className="terminal-lights" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>
          </div>
          <div className="terminal-body">
            <p className="terminal-command">
              <span>root@0xWIZKEY:~#</span> whoami
            </p>
            <p className="terminal-output terminal-name">0xWIZKEY</p>
            <p className="terminal-command">
              <span>root@0xWIZKEY:~#</span> cat profile.txt
            </p>

            <dl className="terminal-fields">
              <div>
                <dt>Role</dt>
                <dd>SOC Analyst</dd>
              </div>
              <div>
                <dt>Background</dt>
                <dd>Computer Engineering</dd>
              </div>
              <div>
                <dt>Focus</dt>
                <dd>DFIR</dd>
              </div>
              <div>
                <dt>Mode</dt>
                <dd>Learning &amp; Building</dd>
              </div>
            </dl>

            <p className="terminal-ready">
              <span>root@0xWIZKEY:~#</span> ready for the next challenge
              <i aria-hidden="true">_</i>
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default Home;
