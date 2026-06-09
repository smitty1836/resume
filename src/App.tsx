import './App.css'
import { Resume } from './Resume'

function App() {
  return (
    <main className="resume-site">
      <header className="hero no-print">
        <p className="kicker">Resume</p>
        <h1>Leadership Profile</h1>
        <p className="subtitle">
          A professional online resume. Use the button below to print or save as
          a PDF.
        </p>
        <button
          className="resume-link"
          onClick={() => window.print()}
          type="button"
        >
          Print / Save as PDF
        </button>
      </header>

      <div className="content">
        <Resume />
      </div>

      <footer className="site-footer no-print">
        <button
          className="footer-print-link"
          onClick={() => window.print()}
          type="button"
        >
          Print / Save as PDF
        </button>
      </footer>
    </main>
  )
}

export default App
