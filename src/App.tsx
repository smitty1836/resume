import './App.css'
import { Resume } from './Resume'

function App() {
  return (
    <>
      <button
        className="print-button"
        onClick={() => window.print()}
        type="button"
      >
        <i className="fas fa-print" aria-hidden="true"></i>
        Print / Save PDF
      </button>

      <Resume />
    </>
  )
}

export default App
