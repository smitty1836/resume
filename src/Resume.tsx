export function Resume() {
  return (
    <div className="wrapper" role="main" aria-label="Resume">

      {/* ── Sidebar ── */}
      <aside className="sidebar-wrapper" aria-label="Contact and background">

        <div className="profile-container">
          <h1 className="name">Your Name</h1>
          <h3 className="tagline">Senior Leadership Professional</h3>
        </div>

        {/* Contact */}
        <div className="container-block">
          <h2 className="container-block-title">Contact</h2>
          <ul className="contact-list">
            <li>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>City, State</span>
            </li>
            <li>
              <i className="fas fa-phone" aria-hidden="true"></i>
              <a href="tel:5555555555">(555) 555-5555</a>
            </li>
            <li>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </li>
            <li>
              <i className="fab fa-linkedin" aria-hidden="true"></i>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yourprofile
              </a>
            </li>
          </ul>
        </div>

        {/* Education (sidebar) */}
        <div className="container-block">
          <h2 className="container-block-title">Education</h2>
          <div className="education-container">
            <div className="item">
              <h4 className="degree">Master of Business Administration (MBA)</h4>
              <p className="meta">University Name</p>
              <p className="time">2012</p>
            </div>
            <div className="item">
              <h4 className="degree">Bachelor of Science, Business Administration</h4>
              <p className="meta">University Name</p>
              <p className="time">2009</p>
            </div>
          </div>
        </div>

      </aside>

      {/* ── Main content ── */}
      <div className="main-wrapper">

        {/* Career Profile */}
        <section className="summary-section section" aria-labelledby="summary-heading">
          <h2 className="section-title" id="summary-heading">
            <span className="fa-stack fa-xs" aria-hidden="true">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-user fa-stack-1x fa-inverse"></i>
            </span>
            Career Profile
          </h2>
          <div className="summary">
            <p>
              Results-driven leader with a proven track record of driving
              organizational transformation and delivering measurable outcomes.
              Skilled at building high-performing teams, fostering cross-functional
              collaboration, and communicating strategic vision to executive
              stakeholders. Passionate about operational excellence and developing
              the next generation of talent.
            </p>
          </div>
        </section>

        {/* Experiences */}
        <section className="experiences-section section" aria-labelledby="experience-heading">
          <h2 className="section-title" id="experience-heading">
            <span className="fa-stack fa-xs" aria-hidden="true">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-briefcase fa-stack-1x fa-inverse"></i>
            </span>
            Experiences
          </h2>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Vice President of Operations</h3>
                <div className="time">2020 &ndash; Present</div>
              </div>
              <div className="company">Company Name &mdash; City, State</div>
            </div>
            <div className="details">
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
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Director of Program Management</h3>
                <div className="time">2016 &ndash; 2020</div>
              </div>
              <div className="company">Company Name &mdash; City, State</div>
            </div>
            <div className="details">
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
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Senior Manager, Strategy &amp; Planning</h3>
                <div className="time">2012 &ndash; 2016</div>
              </div>
              <div className="company">Company Name &mdash; City, State</div>
            </div>
            <div className="details">
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
          </div>
        </section>

        {/* Skills */}
        <section className="skills-section section" aria-labelledby="skills-heading">
          <h2 className="section-title" id="skills-heading">
            <span className="fa-stack fa-xs" aria-hidden="true">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-wrench fa-stack-1x fa-inverse"></i>
            </span>
            Core Competencies
          </h2>
          <div className="skillset">
            <div className="item">
              <h3 className="level-title">Strategic Leadership</h3>
              <div className="level-bar" role="meter" aria-label="Strategic Leadership proficiency" aria-valuenow={98} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Cross-Functional Collaboration</h3>
              <div className="level-bar" role="meter" aria-label="Cross-Functional Collaboration proficiency" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Operational Excellence</h3>
              <div className="level-bar" role="meter" aria-label="Operational Excellence proficiency" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Executive Communication</h3>
              <div className="level-bar" role="meter" aria-label="Executive Communication proficiency" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Change Management</h3>
              <div className="level-bar" role="meter" aria-label="Change Management proficiency" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '88%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Budget &amp; Resource Planning</h3>
              <div className="level-bar" role="meter" aria-label="Budget &amp; Resource Planning proficiency" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Performance Management</h3>
              <div className="level-bar" role="meter" aria-label="Performance Management proficiency" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Data-Driven Decision Making</h3>
              <div className="level-bar" role="meter" aria-label="Data-Driven Decision Making proficiency" aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

