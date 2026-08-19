import { publicAsset } from "../utils/paths.js";

function Home() {
  return (
    <main className="home-page">
      <section className="hero" aria-labelledby="home-title">
        <div className="profile-container">
          <img src={publicAsset("profile.jpeg")} alt="Amr Khaled" className="profile-image" />
        </div>

        <h1 id="home-title">Amr Khaled</h1>

        <h2>Cyber Security Researcher</h2>

        <p className="hero-description">
I am a Computer Engineer with a strong interest in cybersecurity and hands-on experience across digital forensics, network security, steganography, and security-focused projects. Through practical labs, CTF challenges, internships, and personal projects, I have developed a solid foundation in security analysis, investigation, and technical problem-solving. I also explore software development and artificial intelligence, allowing me to approach technical and cybersecurity challenges from an engineering perspective. I am continuously developing my skills through practical experimentation, research, and open-source technologies, with a focus on building useful solutions and contributing to the cybersecurity community.
        </p>

        <div className="social-links">
          <a href="/" aria-label="Medium">
            M
          </a>

          <a href="mailto:amrkhalid25sh@email.com" aria-label="Email">
            @
          </a>

          <a
            href="https://www.linkedin.com/in/amr-khaled-010475254/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            in
          </a>

          <a
            href="https://github.com/AmrKhaledShawky"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            GH
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
