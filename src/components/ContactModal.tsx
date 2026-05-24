import { type FC, useState, useEffect } from "react";
import { data } from "../data";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isClosing, setIsClosing] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      setIsClosing(false);
    } else if (shouldRender) {
      setIsClosing(true);
      const timer = setTimeout(() => {
        setShouldRender(false);
        setIsClosing(false);
      }, 250); 
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(onClose, 250);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  return (
    <div
      className={`modal-backdrop ${isClosing ? "closing" : ""}`}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "rgba(11,12,15,0.85)",
        backdropFilter: "blur(12px)",
      }}
      onClick={handleClose}
    >
      <div
        className={`modal-content ${isClosing ? "closing" : ""}`}
        style={{
          width: "100%",
          maxWidth: 440,
          background: "var(--bg-secondary)",
          border: "1px solid var(--border-color)",
          borderRadius: 16,
          padding: 32,
          position: "relative",
          boxShadow: "0 24px 48px rgba(0,0,0,0.5), 0 0 32px rgba(189,0,255,0.05)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "transparent",
            border: "none",
            color: "var(--text-dim)",
            cursor: "pointer",
            fontSize: 20,
          }}
        >
          <i className="ti ti-x" />
        </button>

        <h3
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 24,
            fontWeight: 800,
            color: "var(--text-primary)",
            marginBottom: 8,
          }}
        >
          Let's connect
        </h3>
        <p
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            marginBottom: 32,
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <a
            href={`mailto:${data.email}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 20px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: 12,
              color: "var(--text-primary)",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            className="modal-link"
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(189,0,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#BD00FF",
                fontSize: 20,
              }}
            >
              <i className="ti ti-mail" />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Email</div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{data.email}</div>
            </div>
          </a>

          <a
            href={`tel:${data.phone.replace(/\s/g, "")}`}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "16px 20px",
              background: "var(--bg-card)",
              border: "1px solid var(--border-color)",
              borderRadius: 12,
              color: "var(--text-primary)",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            className="modal-link"
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(189,0,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#BD00FF",
                fontSize: 20,
              }}
            >
              <i className="ti ti-phone" />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--text-dim)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>Phone</div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{data.phone}</div>
            </div>
          </a>

          <div
            style={{
              display: "flex",
              gap: 12,
              marginTop: 16,
              paddingTop: 24,
              borderTop: "1px solid var(--border-color)",
              justifyContent: "center",
            }}
          >
            {[
              { icon: "ti-brand-github", url: data.github },
              { icon: "ti-brand-linkedin", url: data.linkedin },
              { icon: "ti-brand-medium", url: data.medium },
            ].map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--text-secondary)",
                  fontSize: 20,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                className="modal-social-link"
              >
                <i className={`ti ${social.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
