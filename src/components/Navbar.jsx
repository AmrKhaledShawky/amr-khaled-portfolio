import { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Writeups", path: "/writeups" },
  { name: "Projects", path: "/projects" },
  { name: "Research", path: "/research" },
  { name: "CV", path: "/cv" },
];

const contactMethods = [
  {
    name: "LinkedIn",
    value: "Connect professionally",
    href: "https://www.linkedin.com/in/amr-khaled-010475254/",
    icon: "linkedin",
    external: true,
  },
  {
    name: "Phone",
    value: "+201555026100",
    href: "tel:+201555026100",
    icon: "phone",
  },
  {
    name: "GitHub",
    value: "View my repositories",
    href: "https://github.com/AmrKhaledShawky",
    icon: "github",
    external: true,
  },
  {
    name: "Email",
    value: "amrkhalid25sh@email.com",
    href: "mailto:amrkhalid25sh@email.com",
    icon: "email",
  },
];

function ContactIcon({ name }) {
  if (name === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  }

  if (name === "phone") {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.18 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 3.18 2 2 0 0 1 4.07 1h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.65 2.62a2 2 0 0 1-.45 2.11L8 8.72a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.84.31 1.72.53 2.62.65A2 2 0 0 1 22 16.92Z" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.26-1.65-1.26-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.17 1.74 1.17 1.01 1.73 2.65 1.23 3.3.94.1-.73.4-1.23.72-1.52-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.64 0c2.15-1.45 3.1-1.15 3.1-1.15.62 1.55.23 2.69.12 2.98.72.79 1.15 1.79 1.15 3.02 0 4.32-2.63 5.27-5.14 5.55.41.36.77 1.03.77 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="2.5" y="4.5" width="19" height="15" rx="1.5" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </svg>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactPhase, setContactPhase] = useState("closed");
  const navbarRef = useRef(null);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const closeTimerRef = useRef(null);

  const closeContact = useCallback(() => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
    }

    setContactPhase("closing");
    closeTimerRef.current = window.setTimeout(() => {
      setContactOpen(false);
      setContactPhase("closed");
      closeTimerRef.current = null;
    }, 380);
  }, []);

  const openContact = () => {
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }

    setMenuOpen(false);
    setContactOpen(true);
    setContactPhase("opening");
    window.requestAnimationFrame(() => setContactPhase("open"));
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        event.type === "mousedown" &&
        navbarRef.current &&
        !navbarRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  useEffect(() => {
    if (!contactOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleDialogKeys = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeContact();
        return;
      }

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled])',
      );
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleDialogKeys);
    return () => {
      document.removeEventListener("keydown", handleDialogKeys);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [contactOpen, closeContact]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

  return (
    <>
      <header className="navbar" ref={navbarRef}>
        <div className="navbar-inner">
          <NavLink
            className="brand"
            to="/"
            aria-label="0xWIZKEY, Home"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-wordmark">0xWIZKEY</span>
          </NavLink>

          <button
            className={"menu-button" + (menuOpen ? " active" : "")}
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="site-menu"
            aria-expanded={menuOpen}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav
            className={"menu" + (menuOpen ? " show" : "")}
            id="site-menu"
            aria-label="Main navigation"
          >
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  isActive ? "menu-link active" : "menu-link"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          <button
            className="navbar-contact"
            type="button"
            onClick={openContact}
            aria-haspopup="dialog"
            aria-controls="contact-dialog"
            aria-expanded={contactOpen}
          >
            Let’s Talk <span aria-hidden="true">↗</span>
          </button>
        </div>

      </header>

      {contactOpen ? (
        <div
          className={"contact-overlay " + contactPhase}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeContact();
          }}
        >
          <section
            className="contact-panel"
            id="contact-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-title"
            ref={dialogRef}
          >
            <div className="contact-heading-row">
              <div>
                <p className="contact-eyebrow">CONTACT</p>
                <h2 id="contact-title">Let’s connect.</h2>
                <p className="contact-description">
                  Choose the best way to reach me.
                </p>
              </div>
              <button
                ref={closeButtonRef}
                className="contact-close"
                type="button"
                onClick={closeContact}
                aria-label="Close contact window"
              >
                ×
              </button>
            </div>

            <div className="contact-links">
              {contactMethods.map((method) => (
                <a
                  className="contact-link"
                  href={method.href}
                  key={method.name}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                >
                  <span className="contact-icon">
                    <ContactIcon name={method.icon} />
                  </span>
                  <span className="contact-link-copy">
                    <span className="contact-link-name">{method.name}</span>
                    <span className="contact-link-value">{method.value}</span>
                  </span>
                  <span className="contact-link-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
