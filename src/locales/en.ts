import dataPipeline from '../assets/diagrams/data-pipeline.png'
import signalLifecycle from '../assets/diagrams/signal-lifecycle.png'
import userInteraction from '../assets/diagrams/user-interaction.png'
import dashboard from '../assets/images/dashboard.png'
import signals from '../assets/images/signals.png'
import details from '../assets/images/details.png'

export const en = {
  meta: {
    name: 'Ekaterina Chitova',
    tagline: 'Product Manager · Business Analyst',
  },

  header: {
    getInTouch: 'Get in touch',
    navAriaLabel: 'Page sections',
    nav: [
      { label: 'Overview', href: '#overview' },
      { label: 'Problem', href: '#problem' },
      { label: 'Solution', href: '#solution' },
      { label: 'Results', href: '#results' },
      { label: 'Contact', href: '#contact' },
    ],
  },

  hero: {
    headline: 'Building a real-time crypto market analytics platform',
    subheadline:
      'From raw Binance data to actionable trading signals and system stability.',
    cta: { label: 'Read the case study', href: '#overview' },
    imagePlaceholder: 'Platform architecture overview',
    image: dataPipeline,
    imageCaption: 'System architecture: ingestion, processing, analytics, storage',
  },

  caseOverview: {
    sectionTitle: 'Crypto Market Analytics Platform',
    context:
      'A system for collecting, processing, and analyzing real-time and historical market data from Binance to identify trading opportunities and monitor selected assets.',
    facts: [
      { label: 'Product', value: 'Crypto Market Analytics Platform' },
      { label: 'Duration', value: '3 months (Q3–Q4 2024)' },
      { label: 'My Role', value: 'Product Manager / Business Analyst' },
      { label: 'Team Size', value: '1 PM, 2 backend engineers, 1 data engineer' },
      { label: 'Outcome', value: 'Automated signal generation across 50+ assets' },
    ],
    imagePlaceholder: {
      caption: 'High-level system architecture — data ingestion, signal engine, and monitoring dashboard',
      alt: 'Architecture diagram showing Binance API feeds flowing into a processing pipeline and dashboard',
    },
  },

  problem: {
    sectionTitle: 'The Problem',
    statement:
      'Trading decisions relied entirely on manual monitoring across multiple browser tabs, spreadsheets, and disconnected tools. There was no structured pipeline to identify opportunities, validate signals, or track system state at any point in time.',
    metrics: [
      { value: '5+', unit: 'tabs open', description: 'monitored manually across exchanges' },
      { value: '3 hrs', unit: 'per day', description: 'spent on manual market monitoring' },
      { value: '0', unit: 'audit trail', description: 'no record of past signals or decisions' },
      { value: '100%', unit: 'manual', description: 'every trading candidate identified by eye' },
    ],
    painPointsHeading: 'Core pain points',
    painPoints: [
      'No unified system for collecting and processing real-time market data',
      'Manual analysis was slow and inconsistent',
      'No structured pipeline for identifying trading candidates',
      'Lack of visibility into system state',
      'No reliable signal validation',
    ],
    imagePlaceholder: {
      caption: 'Original workflow: fragmented tools, no pipeline, no logging',
      alt: 'Diagram showing disconnected spreadsheets and browser tabs with no structured data flow',
    },
  },

  myRole: {
    sectionTitle: 'My Role',
    subtitle: 'Product Manager / Business Analyst',
    summary:
      'I owned the product end-to-end: from defining the vision and system architecture through backlog management, feature decomposition, and MVP delivery. I acted as the bridge between business goals and engineering execution.',
    responsibilitiesHeading: 'Responsibilities',
    responsibilities: [
      'Defined product vision and goals',
      'Designed end-to-end system architecture',
      'Created BPMN diagrams for core processes',
      'Analyzed Binance API (REST + WebSocket)',
      'Built and managed backlog in Jira',
      'Decomposed features into deliverable tasks',
      'Led MVP definition and delivery',
    ],
    stakeholdersHeading: 'Stakeholders',
    stakeholders: [
      { name: 'Trading Team', interaction: 'Requirements, signal definitions, acceptance criteria' },
      { name: 'Backend Engineers', interaction: 'Architecture review, API contracts, sprint planning' },
      { name: 'Data Engineer', interaction: 'Storage schema, pipeline design, data quality rules' },
    ],
    timelineHeading: 'Project Timeline',
    timeline: [
      { phase: 'Discovery', duration: 'Weeks 1–2', activity: 'Requirements gathering, API analysis, process mapping' },
      { phase: 'Architecture', duration: 'Weeks 3–4', activity: 'System design, BPMN diagrams, backlog setup in Jira' },
      { phase: 'Build', duration: 'Weeks 5–10', activity: 'Sprint-based delivery, iterative demos, signal engine development' },
      { phase: 'Launch', duration: 'Weeks 11–12', activity: 'MVP validation, monitoring setup, team handover' },
    ],
  },

  solution: {
    sectionTitle: 'The Solution',
    intro:
      'The focus was not just on collecting data — but on building a reliable system that processes market signals automatically, handles Binance API constraints, and surfaces actionable information without manual steps.',
    dataFlow: {
      blockTitle: 'Data Flow',
      description:
        'The original workflow required manually refreshing exchange tabs, copying prices into spreadsheets, and eyeballing charts for potential signals. The new system collects OHLCV and order book data via Binance WebSocket streams, processes it through a configurable signal engine, and delivers structured outputs to a monitoring dashboard — fully automated.',
      beforeLabel: 'Before',
      afterLabel: 'After',
      beforeSteps: [
        'Manually monitor price data across multiple exchange tabs',
        'Copy data into spreadsheet for ad-hoc analysis',
        'Apply informal filters to identify trading candidates',
        'Cross-check findings with a separate charting tool',
        'Decide manually whether signal conditions are met',
        'No logging of signals, decisions, or outcomes',
      ],
      afterSteps: [
        'WebSocket streams collect OHLCV + order book data in real time',
        'Signal engine applies defined rules across all tracked assets',
        'Validated signals logged with timestamps and parameters',
        'Dashboard displays active signals and per-asset status',
        'Historical data stored in PostgreSQL for backtesting',
        'Alerts triggered automatically when signal conditions are met',
      ],
      imagePlaceholder: {
        caption: 'Before vs. after: from manual tab monitoring to automated signal pipeline',
        alt: 'Side-by-side diagram: fragmented manual workflow vs. automated WebSocket-to-dashboard pipeline',
      },
      diagram: signalLifecycle,
      diagramCaption: 'Signal lifecycle: detection, evaluation, performance tracking',
    },
    keyFixes: {
      blockTitle: 'Key Fixes',
      theProblemLabel: 'The problem',
      whatIDidLabel: 'What I did',
      items: [
        {
          title: 'Replaced manual data collection with structured WebSocket integration',
          problem: 'Market monitoring happened across multiple browser tabs. Data was stale by the time it was copied into a spreadsheet, and there was no way to track multiple assets simultaneously at scale.',
          fix: 'I defined the data ingestion requirements for a WebSocket-based collector subscribing to Binance streams for OHLCV, ticker, and order book data. I documented the API behaviour, rate limits, and reconnection logic as part of the technical spec.',
          outcome: 'Real-time data collection across 50+ assets with sub-second latency, replacing manual refresh cycles.',
        },
        {
          title: 'Built a rule-based signal validation framework',
          problem: 'Signal identification was entirely informal — based on visual pattern recognition with no consistent criteria, no documentation, and no way to reproduce or audit past decisions.',
          fix: 'Working with the trading team, I defined and documented a set of explicit signal rules (entry conditions, confirmation filters, timeframe requirements). These were implemented as configurable parameters in the signal engine.',
          outcome: 'Every signal is now produced by defined, auditable rules — enabling both real-time monitoring and historical backtesting.',
        },
        {
          title: 'Added system state visibility through a monitoring dashboard',
          problem: 'There was no way to know whether data collection was running, whether signals had fired, or whether the system had encountered an error — until something was noticed manually.',
          fix: 'I specified a lightweight dashboard showing stream connection status, last-updated timestamps per asset, active signals, and a log of recent events. Designed to give immediate answers to "is the system working right now?"',
          outcome: 'System health is visible at a glance; issues are caught proactively rather than discovered after missed signals.',
        },
      ],
    },
    architectureDecisions: {
      blockTitle: 'Architecture Decisions',
      decisionLabel: 'Decision',
      rationaleLabel: 'Rationale',
      tradeoffLabel: 'Trade-off accepted',
      items: [
        {
          title: 'WebSocket streams over REST polling for real-time data',
          decision: 'We chose Binance WebSocket streams rather than periodic REST API calls for market data ingestion.',
          rationale: 'REST polling at useful frequencies (every 1–2 seconds per asset) would quickly exhaust rate limits across 50+ assets. WebSocket pushes updates server-side with no polling overhead and provides genuine real-time data.',
          tradeoff: 'WebSocket connections require reconnection logic and state management — added engineering complexity that was deemed necessary for the use case.',
        },
        {
          title: 'PostgreSQL for time-series storage',
          decision: 'Used PostgreSQL with time-indexed tables rather than a dedicated time-series database.',
          rationale: "The team already had PostgreSQL infrastructure and the data volumes didn't justify a specialised TSDB. Indexing on timestamp columns and partitioning by date provided adequate query performance for the MVP scope.",
          tradeoff: 'Query performance at scale will require revisiting — a planned future consideration if data volume grows significantly.',
        },
        {
          title: 'Scoped MVP to Binance spot market only',
          decision: 'The MVP covered Binance spot market data exclusively, excluding futures, margin, and other exchanges.',
          rationale: 'Multi-exchange and derivatives integration would have tripled integration complexity. Binance spot covered the primary use case, and the architecture was designed to be extensible for future data sources.',
          tradeoff: 'Futures and cross-exchange arbitrage signals are out of scope for the initial release — a deliberate boundary, not an oversight.',
        },
      ],
    },
  },

  artifacts: {
    sectionTitle: 'Artifacts',
    sectionSubtitle: 'A selection of work products from the project.',
    items: [
      {
        type: 'Jira Board',
        caption: 'Sprint board during delivery phase — 4 epics, 63 stories across 8 sprints',
        alt: 'Jira sprint board showing epics: Data Pipeline, Validation Engine, Approval Workflow, Reporting UI',
      },
      {
        type: 'Process Diagram',
        caption: 'As-is / to-be process map produced in discovery and validated with stakeholders in workshop 3',
        alt: 'Two swimlane diagrams showing before and after reporting process with annotated pain points',
      },
      {
        type: 'UI Wireframe',
        caption: 'Exception review screen — the primary day-to-day interface for the compliance analyst',
        alt: 'Low-fidelity wireframe of exception review table with filter panel, row detail drawer, and status sidebar',
      },
      {
        type: 'Requirements Doc',
        caption: 'Functional requirements excerpt — data validation rules section (47 rules documented)',
        alt: 'Structured requirements table with ID, description, acceptance criteria, and regulatory reference columns',
      },
    ],
    userFlow: {
      image: userInteraction,
      caption: 'User interaction flow with API handling and error management',
    },
    product: {
      items: [
        { image: dashboard, title: 'Dashboard', caption: 'Real-time market overview and system state' },
        { image: signals, title: 'Signals', caption: 'Automatically generated trading signals' },
        { image: details, title: 'Signal details', caption: 'Detailed signal view with explanation and metrics' },
      ],
    },
  },

  results: {
    sectionTitle: 'Results',
    headline: 'The platform monitors 50+ assets in real time and generates validated trading signals without manual input.',
    quantitative: [
      { value: '50+', label: 'Assets monitored', detail: 'Automated coverage, up from ~5 tracked manually' },
      { value: '<1s', label: 'Data latency', detail: 'Real-time WebSocket streams vs. manual refresh' },
      { value: '3 hrs', label: 'Daily time saved', detail: 'Previously spent on manual market monitoring' },
      { value: '100%', label: 'Signal auditability', detail: 'Every signal logged with timestamp and parameters' },
    ],
    teamSaidHeading: 'What changed',
    qualitative: [
      'Trading decisions are now based on defined, reproducible signal rules rather than gut feel',
      'The system runs continuously — signals are caught even outside active monitoring hours',
      'Historical data storage enables backtesting of new signal ideas against past market conditions',
      'The dashboard gives immediate visibility into system health and active signals without manual checks',
    ],
    timeToValueHeading: 'Time to value',
    timeToValue: 'First automated signals generated at week 10. Full MVP live at week 12. System has been running continuously since launch with no data loss incidents.',
  },

  howIWork: {
    sectionTitle: 'How I Work',
    intro: "I work best in ambiguous environments where the problem is understood but the solution isn't obvious yet.",
    principles: [
      {
        title: 'Start with the problem, not the solution',
        description: 'I spend disproportionate time in discovery because the cost of solving the wrong problem is higher than extending discovery by two weeks. I validate assumptions early and often.',
      },
      {
        title: 'Write things down',
        description: "Verbal agreements don't survive handoffs. I document decisions, rationale, and trade-offs explicitly — not to create bureaucracy, but to give the team a shared reference point when priorities shift.",
      },
      {
        title: 'Protect the team from scope creep, not from stakeholders',
        description: 'Stakeholders should feel heard. My job is to translate their needs into prioritised, deliverable requirements — not to shield the team from input. Scope is managed through rigorous criteria, not closed doors.',
      },
      {
        title: 'Measure what matters after launch',
        description: "Shipping is not done. I track outcomes against the original success metrics and revisit assumptions. If the numbers don't move, I want to know why — and what we do next.",
      },
    ],
    toolsHeading: 'Tools I use',
    tools: ['Jira', 'Confluence', 'Miro', 'SQL (read-level)', 'Figma (wireframing)', 'Lucidchart'],
  },

  contact: {
    headline: 'Open to PM / BA opportunities',
    body: "I'm currently exploring senior BA and product manager roles, particularly in fintech, insurtech, or ops-heavy domains. If this case study resonates, I'd like to talk.",
    email: 'nextgen.coders.lab@gmail.com',
    linkedin: 'www.linkedin.com/in/ekaterina-chistova-9573532bb',
    availability: 'Available from May 2026',
    emailCta: 'Email me',
    linkedinCta: 'LinkedIn',
  },
}

export type Locale = typeof en
