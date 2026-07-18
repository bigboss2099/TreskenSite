const capabilities = [
  {
    number: "01",
    title: "Operational intelligence",
    copy: "AI that works inside the operation—interpreting documents, surfacing exceptions, and helping teams move from signal to action.",
  },
  {
    number: "02",
    title: "Connected execution",
    copy: "Purpose-built workflows that connect the office, warehouse, field, client, and leadership without losing the operational thread.",
  },
  {
    number: "03",
    title: "Built for the real world",
    copy: "Software shaped around people, physical assets, imperfect inputs, and the pace of transportation and logistics.",
  },
];

const productModules = [
  "AI-assisted receiving",
  "Inventory command",
  "Field operations",
  "Dispatch & loadout",
  "Client visibility",
  "Tenant-ready control",
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Tresken home">
          <img src="/tresken-mark.png" alt="" />
          <span>Tresken</span>
        </a>
        <div className="navLinks">
          <a href="#elyndra">ElyndraOS</a>
          <a href="#approach">Approach</a>
          <a href="#company">Company</a>
        </div>
        <a className="navCta" href="mailto:hello@tresken.com">
          Start a conversation <span aria-hidden="true">↗</span>
        </a>
      </nav>

      <section className="hero" id="top">
        <div className="heroGlow" aria-hidden="true" />
        <div className="heroCopy">
          <p className="eyebrow"><span /> AI-powered software company · Founded 2025</p>
          <h1>Intelligence,<br /><em>built to move.</em></h1>
          <p className="heroLead">
            Tresken designs world-class software for real-world operations.
            We turn complex logistics and transportation workflows into
            connected, intelligent systems.
          </p>
          <div className="heroActions">
            <a className="button primary" href="#elyndra">Explore ElyndraOS <span>↓</span></a>
            <a className="textLink" href="#approach">How we build <span>↗</span></a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Tresken pyramid mark">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="logoStage">
            <img src="/tresken-mark.png" alt="Tresken silver pyramid mark" />
          </div>
          <p className="visualNote"><span>01</span> Purpose-built intelligence</p>
        </div>
        <div className="heroRail">
          <span>Software / AI / Operations</span>
          <span>United States</span>
        </div>
      </section>

      <section className="statement" id="company">
        <p className="sectionLabel">The company</p>
        <div className="statementGrid">
          <h2>Software should understand the work—not stand in its way.</h2>
          <div>
            <p>
              Founded in 2025, Tresken exists to help logistics and transportation
              businesses operate with greater clarity, speed, and control.
            </p>
            <p>
              We combine thoughtful product design, operational depth, and applied
              AI to build systems that teams can trust where the work actually happens.
            </p>
          </div>
        </div>
        <div className="factRow">
          <div><strong>2025</strong><span>Founded with a real-world mission</span></div>
          <div><strong>AI + OS</strong><span>Intelligence connected to execution</span></div>
          <div><strong>One system</strong><span>From intake to final mile</span></div>
        </div>
      </section>

      <section className="product" id="elyndra">
        <div className="productHeader">
          <p className="sectionLabel light">Flagship platform</p>
          <div className="productWordmark">
            <span className="star">✦</span>
            <span>Elyndra<span>OS</span></span>
          </div>
          <p>
            A one-of-a-kind operating system for the flow of goods, information,
            people, and decisions.
          </p>
        </div>
        <div className="productCanvas">
          <div className="canvasTop">
            <span>Live operational layer</span>
            <span className="systemStatus"><i /> Systems connected</span>
          </div>
          <div className="productCenter">
            <div className="productMark"><img src="/tresken-mark.png" alt="" /></div>
            <div>
              <p>ElyndraOS connects the entire operation</p>
              <h3>See the work.<br />Guide the work.<br /><em>Transform the work.</em></h3>
            </div>
          </div>
          <div className="moduleGrid">
            {productModules.map((module, index) => (
              <div key={module}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{module}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="productFooter">
          <p>
            Built for operations that cannot pause, ElyndraOS creates a shared
            source of truth across receiving, inventory, field teams, transportation,
            and customer service.
          </p>
          <a href="mailto:hello@tresken.com?subject=ElyndraOS%20Inquiry">Discuss ElyndraOS <span>↗</span></a>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="approachIntro">
          <p className="sectionLabel">How we build</p>
          <h2>Deeply practical.<br /><em>Decidedly ambitious.</em></h2>
          <p>
            We start with the operation, find the friction that matters, and build
            the intelligence and software architecture to remove it.
          </p>
        </div>
        <div className="capabilityList">
          {capabilities.map((capability) => (
            <article key={capability.number}>
              <span>{capability.number}</span>
              <div>
                <h3>{capability.title}</h3>
                <p>{capability.copy}</p>
              </div>
              <i aria-hidden="true">↗</i>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <div className="closingMark"><img src="/tresken-mark.png" alt="" /></div>
        <p className="sectionLabel light">Build what moves business forward</p>
        <h2>The real world is complex.<br /><em>Your software shouldn&apos;t be.</em></h2>
        <a className="button bright" href="mailto:hello@tresken.com">
          Work with Tresken <span>↗</span>
        </a>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">
          <img src="/tresken-mark.png" alt="" />
          <span>Tresken</span>
        </a>
        <p>Tresken Inc. designs and builds AI-powered software solutions for real-world use.</p>
        <div>
          <a href="#elyndra">ElyndraOS</a>
          <a href="mailto:hello@tresken.com">Contact</a>
          <span>© {new Date().getFullYear()} Tresken Inc.</span>
        </div>
      </footer>
    </main>
  );
}
