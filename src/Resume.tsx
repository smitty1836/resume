export function Resume() {
  return (
    <article className="resume" aria-label="Resume">
      <header className="resume-header">
        <div className="resume-name-block">
          <h1 className="resume-name">Your Name</h1>
          <p className="resume-title">Senior Leadership Professional</p>
        </div>
        <address className="resume-contact">
          <span>City, State</span>
          <span>(555) 555-5555</span>
          <span>your.email@example.com</span>
          <span>linkedin.com/in/yourprofile</span>
        </address>
      </header>

      <section className="resume-section" aria-labelledby="summary-heading">
        <h2 id="summary-heading">Professional Summary</h2>
        <p>
          Results-driven leader with a proven track record of driving
          organizational transformation and delivering measurable outcomes.
          Skilled at building high-performing teams, fostering cross-functional
          collaboration, and communicating strategic vision to executive
          stakeholders. Passionate about operational excellence and developing
          the next generation of talent.
        </p>
      </section>

      <section className="resume-section" aria-labelledby="competencies-heading">
        <h2 id="competencies-heading">Core Competencies</h2>
        <ul className="competency-list">
          <li>Strategic Leadership &amp; Team Development</li>
          <li>Cross-Functional Collaboration &amp; Delivery</li>
          <li>Operational Excellence &amp; Process Improvement</li>
          <li>Executive Stakeholder Communication</li>
          <li>Change Management</li>
          <li>Budget &amp; Resource Planning</li>
          <li>Performance Management</li>
          <li>Data-Driven Decision Making</li>
        </ul>
      </section>

      <section className="resume-section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">Professional Experience</h2>

        <div className="resume-job">
          <div className="resume-job-header">
            <div>
              <h3 className="resume-job-title">Vice President of Operations</h3>
              <p className="resume-company">Company Name &mdash; City, State</p>
            </div>
            <span className="resume-dates">2020 &ndash; Present</span>
          </div>
          <ul>
            <li>
              Led a cross-functional team of 50+ employees across multiple
              business units, achieving a 20% increase in operational efficiency.
            </li>
            <li>
              Drove strategic initiatives that resulted in $5M in annual cost
              savings while maintaining service quality benchmarks.
            </li>
            <li>
              Partnered with C-suite executives to define and execute a
              three-year organizational growth strategy.
            </li>
            <li>
              Established a talent development program that improved employee
              retention by 30% year over year.
            </li>
          </ul>
        </div>

        <div className="resume-job">
          <div className="resume-job-header">
            <div>
              <h3 className="resume-job-title">Director of Program Management</h3>
              <p className="resume-company">Company Name &mdash; City, State</p>
            </div>
            <span className="resume-dates">2016 &ndash; 2020</span>
          </div>
          <ul>
            <li>
              Oversaw a portfolio of 15+ concurrent projects totaling $12M in
              budget, delivering 95% on time and within scope.
            </li>
            <li>
              Implemented agile delivery frameworks that reduced time-to-market
              by 25% across product lines.
            </li>
            <li>
              Built and mentored a program management team of 12, establishing
              career paths and performance frameworks.
            </li>
          </ul>
        </div>

        <div className="resume-job">
          <div className="resume-job-header">
            <div>
              <h3 className="resume-job-title">Senior Manager, Strategy &amp; Planning</h3>
              <p className="resume-company">Company Name &mdash; City, State</p>
            </div>
            <span className="resume-dates">2012 &ndash; 2016</span>
          </div>
          <ul>
            <li>
              Developed annual strategic plans and KPI dashboards used by
              executive leadership to guide business decisions.
            </li>
            <li>
              Facilitated quarterly business reviews with department heads,
              translating data into actionable insights.
            </li>
            <li>
              Championed a culture of continuous improvement, introducing
              process automation that saved 1,500 staff hours per year.
            </li>
          </ul>
        </div>
      </section>

      <section className="resume-section" aria-labelledby="education-heading">
        <h2 id="education-heading">Education</h2>

        <div className="resume-education-item">
          <div className="resume-job-header">
            <div>
              <h3 className="resume-degree">Master of Business Administration (MBA)</h3>
              <p className="resume-school">University Name &mdash; City, State</p>
            </div>
            <span className="resume-dates">2012</span>
          </div>
        </div>

        <div className="resume-education-item">
          <div className="resume-job-header">
            <div>
              <h3 className="resume-degree">Bachelor of Science, Business Administration</h3>
              <p className="resume-school">University Name &mdash; City, State</p>
            </div>
            <span className="resume-dates">2009</span>
          </div>
        </div>
      </section>
    </article>
  )
}
