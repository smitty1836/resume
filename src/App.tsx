import './App.css'

const resumeUrl =
  'https://drive.google.com/file/d/1BwPouF5WsZ4SR1-lJuhOFUlGV4Ixd07N/view?usp=drivesdk'
const resumePreviewUrl =
  'https://drive.google.com/file/d/1BwPouF5WsZ4SR1-lJuhOFUlGV4Ixd07N/preview'

function App() {
  return (
    <main className="resume-site">
      <header className="hero">
        <p className="kicker">Resume</p>
        <h1>Leadership Profile</h1>
        <p className="subtitle">
          A responsive online resume that works on desktop and mobile.
        </p>
        <a className="resume-link" href={resumeUrl} target="_blank" rel="noreferrer">
          Open full resume
        </a>
      </header>

      <section className="content" aria-label="Resume preview and highlights">
        <div className="preview-card">
          <h2>Resume Preview</h2>
          <iframe
            title="Resume preview"
            src={resumePreviewUrl}
            loading="lazy"
            className="resume-preview"
          />
          <p className="preview-note">
            If the preview does not load, use the button above to open the resume directly.
          </p>
        </div>

        <aside className="summary-card">
          <h2>Highlights</h2>
          <ul>
            <li>Strategic leadership and team development</li>
            <li>Cross-functional collaboration and delivery</li>
            <li>Operational excellence and measurable outcomes</li>
            <li>Clear communication with executive stakeholders</li>
          </ul>
          <p>
            Replace these summary points with details from your current resume as
            needed.
          </p>
        </aside>
      </section>
      <footer className="site-footer">
        <a href={resumeUrl} target="_blank" rel="noreferrer">
          Resume source
        </a>
      </footer>
    </main>
  )
}

export default App
