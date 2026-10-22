import { portfolioData } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer-shell">
      <div className="portfolio-shell footer-inner">
        <p style={{ margin: 0 }}>© 2027 {portfolioData.personal.name}</p>
        <p style={{ margin: 0 }}>Built for AI, ML, and web development opportunities.</p>
      </div>
    </footer>
  );
}
