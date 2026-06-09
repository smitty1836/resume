export function Resume() {
  return (
    <div className="wrapper" role="main" aria-label="Resume">

      {/* ── Sidebar ── */}
      <aside className="sidebar-wrapper" aria-label="Contact and background">

        <div className="profile-container">
          <img
            src="https://avatars.githubusercontent.com/smitty1836"
            alt="Michael Schmitt"
            className="profile-pic"
          />
          <h1 className="name">Michael Schmitt</h1>
          <h3 className="tagline">Manager, Systems Engineering | Solutions Architect</h3>
        </div>

        {/* Contact */}
        <div className="container-block">
          <h2 className="container-block-title">Contact</h2>
          <ul className="contact-list">
            <li>
              <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
              <span>Castle Rock, CO</span>
            </li>
            <li>
              <i className="fas fa-phone" aria-hidden="true"></i>
              <a href="tel:3175903092">(317) 590-3092</a>
            </li>
            <li>
              <i className="fas fa-envelope" aria-hidden="true"></i>
              <a href="mailto:schmitt.g.michael@gmail.com">schmitt.g.michael@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Education (sidebar) */}
        <div className="container-block">
          <h2 className="container-block-title">Education</h2>
          <div className="education-container">
            <div className="item">
              <h4 className="degree">Bachelor of Science, Computer Information Systems</h4>
              <p className="meta">University of Indianapolis</p>
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
              Strategic infrastructure leader with 20+ years of experience delivering
              high-security hybrid-cloud transformations. Specialized in architecting
              secure AI environments with Azure AI Foundry, private networking with
              Azure Private Link and Private Endpoints, and CI/CD modernization with
              GitHub Actions. Proven record of leading engineering teams and vendors
              to deliver standardized, SOX-compliant enterprise solutions.
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
                <h3 className="job-title">Manager, Systems Engineering</h3>
                <div className="time">Dec 2021 &ndash; Present</div>
              </div>
              <div className="company">Redwood Trust, Inc. &mdash; Englewood, CO</div>
            </div>
            <div className="details">
              <ul>
                <li>
                  Architected Azure AI Foundry deployment for enterprise GenAI
                  initiatives with zero-trust isolation using Private Link and
                  Private Endpoints.
                </li>
                <li>
                  Established AI hubs and projects with fine-grained RBAC and
                  managed identities to meet enterprise privacy and risk standards.
                </li>
                <li>
                  Led multiple direct reports and contractors while coordinating
                  third-party providers to maintain 99.99% infrastructure availability.
                </li>
                <li>
                  Spearheaded Fortinet security fabric modernization across all
                  corporate sites (FortiGate, FortiManager, FortiAnalyzer, EMS,
                  FortiSwitches, and FortiAPs).
                </li>
                <li>
                  Migrated legacy delivery workflows to GitHub Actions, improving
                  infrastructure standardization and deployment speed.
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Lead Systems Engineer</h3>
                <div className="time">Jan 2019 &ndash; Dec 2021</div>
              </div>
              <div className="company">Redwood Trust, Inc. &mdash; Englewood, CO</div>
            </div>
            <div className="details">
              <ul>
                <li>
                  Architected end-to-end infrastructure for highly available
                  production environments.
                </li>
                <li>
                  Partnered with Risk and Compliance to design and enforce SOX
                  controls, maintaining consistent audit readiness.
                </li>
                <li>
                  Managed large data center migrations and hardware lifecycle
                  refreshes to reduce operating costs through consolidation.
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Sr Systems Engineer</h3>
                <div className="time">Dec 2015 &ndash; Dec 2019</div>
              </div>
              <div className="company">Redwood Trust, Inc. &mdash; Englewood, CO</div>
            </div>
            <div className="details">
              <ul>
                <li>
                  Implemented Pure Storage all-flash arrays to achieve
                  sub-millisecond shared infrastructure latency.
                </li>
                <li>
                  Standardized virtualization, monitoring, and alerting across
                  critical infrastructure components.
                </li>
                <li>
                  Led migration off end-of-life infrastructure to supported,
                  modernized platforms.
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Contract: Systems Engineering Lead</h3>
                <div className="time">Jul 2015 &ndash; Dec 2015</div>
              </div>
              <div className="company">Progressive Insurance (via Precision Systems) &mdash; Colorado Springs, CO</div>
            </div>
            <div className="details">
              <ul>
                <li>
                  Served as technical lead for enterprise build activities,
                  including Windows Failover Clustering and complex IIS delivery.
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Lead Systems Engineer / DevOps</h3>
                <div className="time">Jan 2015 &ndash; Jul 2015</div>
              </div>
              <div className="company">Troppus Software (EchoStar Company) &mdash; Superior, CO</div>
            </div>
            <div className="details">
              <ul>
                <li>
                  Developed PowerShell release scripts for global development
                  teams, enabling near-zero downtime deployments.
                </li>
                <li>
                  Implemented NoSQL on RHEL for high-performance data services.
                </li>
              </ul>
            </div>
          </div>

          <div className="item">
            <div className="meta">
              <div className="upper-row">
                <h3 className="job-title">Sr Systems Engineer</h3>
                <div className="time">Apr 2011 &ndash; Jul 2014</div>
              </div>
              <div className="company">CNO Financial Group &mdash; Carmel, IN</div>
            </div>
            <div className="details">
              <ul>
                <li>
                  Managed 300+ RHEL virtual machines and redesigned identity and
                  access integrations using Kerberos and Active Directory.
                </li>
                <li>
                  Built and managed AIX environments with 120+ LPARs and HACMP
                  clustering for Oracle database workloads.
                </li>
                <li>
                  Automated infrastructure workflows with Bash and PowerShell
                  scripts for IT service catalog self-service.
                </li>
                <li>
                  Led datacenter virtualization initiatives to exceed 95%
                  virtualization coverage.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="certifications-heading">
          <h2 className="section-title" id="certifications-heading">
            <span className="fa-stack fa-xs" aria-hidden="true">
              <i className="fas fa-circle fa-stack-2x"></i>
              <i className="fas fa-certificate fa-stack-1x fa-inverse"></i>
            </span>
            Certifications
          </h2>
          <div className="details">
            <ul>
              <li>Red Hat Certified Systems Administrator (Cert #140-075-003)</li>
              <li>Microsoft Certified IT Professional &ndash; Enterprise Administrator (MCPID: 6702093)</li>
              <li>VMware Certified Professional 3/4 (Candidate ID: VMW-00112902T-00036930)</li>
            </ul>
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
              <h3 className="level-title">Azure AI Foundry &amp; Azure OpenAI</h3>
              <div className="level-bar" role="meter" aria-label="Azure AI Foundry and Azure OpenAI proficiency" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Private Link &amp; Zero-Trust Networking</h3>
              <div className="level-bar" role="meter" aria-label="Private Link and zero-trust networking proficiency" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">GitHub Actions CI/CD</h3>
              <div className="level-bar" role="meter" aria-label="GitHub Actions CI/CD proficiency" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Fortinet Security Fabric</h3>
              <div className="level-bar" role="meter" aria-label="Fortinet security fabric proficiency" aria-valuenow={94} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '94%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">PowerShell / PowerCLI Automation</h3>
              <div className="level-bar" role="meter" aria-label="PowerShell and PowerCLI automation proficiency" aria-valuenow={92} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Infrastructure as Code (Bicep/ARM)</h3>
              <div className="level-bar" role="meter" aria-label="Infrastructure as code proficiency" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Team &amp; Vendor Leadership</h3>
              <div className="level-bar" role="meter" aria-label="Team and vendor leadership proficiency" aria-valuenow={93} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '93%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">SOX Controls &amp; Compliance</h3>
              <div className="level-bar" role="meter" aria-label="SOX controls and compliance proficiency" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '90%' }}></div>
              </div>
            </div>
            <div className="item">
              <h3 className="level-title">Virtualization &amp; Datacenter Modernization</h3>
              <div className="level-bar" role="meter" aria-label="Virtualization and datacenter modernization proficiency" aria-valuenow={91} aria-valuemin={0} aria-valuemax={100}>
                <div className="level-bar-inner" style={{ width: '91%' }}></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
