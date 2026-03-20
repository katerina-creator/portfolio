// ─── Portfolio Content ────────────────────────────────────────────────────────
// Single source of truth for all case study content.
// Update this file to change what appears on the site.

export const content = {
  // ─── Meta ──────────────────────────────────────────────────────────────────
  name: 'Jamie Cole',
  tagline: 'Product Manager · Business Analyst',

  // ─── Header Nav ────────────────────────────────────────────────────────────
  nav: [
    { label: 'Overview', href: '#overview' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Results', href: '#results' },
    { label: 'Contact', href: '#contact' },
  ],

  // ─── Hero ──────────────────────────────────────────────────────────────────
  hero: {
    headline: 'How I cut compliance reporting time by 90%',
    subheadline:
      'A 6-month case study in process redesign, stakeholder alignment, and building the right thing — at a 300-person insurance firm.',
    cta: { label: 'Read the case study', href: '#overview' },
  },

  // ─── Case Overview ─────────────────────────────────────────────────────────
  caseOverview: {
    title: 'Compliance Reporting Automation',
    context:
      'Ironbridge Insurance\'s compliance team spent 40+ hours every month manually compiling regulatory reports across six data sources in Excel. Errors were routine, deadlines were missed, and the team had no time left for actual analysis. I was brought in as Business Analyst to own requirements and drive delivery of an automated reporting pipeline within a fixed 6-month window.',
    facts: [
      { label: 'Company', value: 'Ironbridge Insurance (300 employees)' },
      { label: 'Duration', value: '6 months (Q1–Q2 2024)' },
      { label: 'My Role', value: 'Business Analyst / Product Owner' },
      { label: 'Team Size', value: '1 BA, 2 engineers, 1 data analyst' },
      { label: 'Outcome', value: '40 hrs/mo → 4 hrs/mo reporting cycle' },
    ],
  },

  // ─── Problem ───────────────────────────────────────────────────────────────
  problem: {
    statement:
      'Monthly compliance reports took 5 full business days to complete manually. The process touched six source systems with no single owner, required three separate sign-offs, and had a 22% error rate on first submission.',
    metrics: [
      { value: '40+', unit: 'hours/month', description: 'spent on manual data collection' },
      { value: '22%', unit: 'error rate', description: 'on first regulatory submission' },
      { value: '3×', unit: 'rework cycles', description: 'average per monthly report' },
      { value: '$180K', unit: 'estimated cost', description: 'of staff time per year' },
    ],
    painPoints: [
      'No single source of truth — each analyst maintained their own Excel files',
      'Zero audit trail: changes happened in spreadsheets with no version history',
      'Regulatory deadlines required all-hands effort, pulling people from other work',
      'Leadership had no visibility into report status until the day of submission',
    ],
    imageCaption: 'Original process map: 14 manual steps, 3 handoffs, and no automated validation',
  },

  // ─── My Role ───────────────────────────────────────────────────────────────
  myRole: {
    title: 'Business Analyst / Product Owner',
    summary:
      'I owned requirements end-to-end: from stakeholder interviews and current-state mapping through UAT sign-off and post-launch review. I acted as the bridge between the compliance team, engineering, and the data warehouse team.',
    responsibilities: [
      'Ran 14 stakeholder interviews across compliance, IT, finance, and legal',
      'Mapped and validated the as-is process by shadowing 3 complete reporting cycles',
      'Wrote functional requirements, acceptance criteria, and data validation rules',
      'Prioritised and managed the backlog across two-week sprints in Jira',
      'Led weekly demos with the compliance director and final UAT with end users',
      'Created training materials and ran onboarding sessions for 11 team members',
    ],
    stakeholders: [
      { name: 'Compliance Director', interaction: 'Weekly status, final sign-off authority' },
      { name: 'Data Warehouse Team', interaction: 'Source system mapping and API contracts' },
      { name: 'Regulatory Affairs', interaction: 'Validation rules and submission format' },
      { name: 'Finance & Legal', interaction: 'Sign-off gates and audit requirements' },
    ],
    timeline: [
      { phase: 'Discovery', duration: 'Weeks 1–4', activity: 'Stakeholder interviews, as-is mapping, pain-point prioritisation' },
      { phase: 'Definition', duration: 'Weeks 5–8', activity: 'Requirements, data dictionary, acceptance criteria' },
      { phase: 'Delivery', duration: 'Weeks 9–20', activity: 'Sprint-based build, bi-weekly demos, iterative validation' },
      { phase: 'Launch', duration: 'Weeks 21–24', activity: 'UAT, training, go-live, retrospective' },
    ],
  },

  // ─── Solution ──────────────────────────────────────────────────────────────
  solution: {
    intro:
      'Rather than automate the broken process, I started by redesigning it. Once the new workflow was agreed, we built a lightweight pipeline that pulled from existing data warehouse tables — no new infrastructure needed.',

    dataFlow: {
      description:
        'The original flow required analysts to manually export from six systems, reconcile in Excel, and email a PDF to three approvers. The new flow consolidates data pulls into a scheduled pipeline, applies validation rules automatically, and generates a submission-ready report with a full audit log.',
      beforeSteps: [
        'Analyst exports data from 6 systems individually',
        'Manual reconciliation in shared Excel file',
        'Spot-check formulas by second analyst',
        'Format report to regulatory template',
        'Email draft to 3 approvers for sign-off',
        'Incorporate comments, resubmit',
        'Final PDF sent to regulator',
      ],
      afterSteps: [
        'Scheduled pipeline pulls from data warehouse (nightly)',
        'Automated validation rules flag exceptions',
        'Analyst reviews exceptions only (avg. 12 per month)',
        'One-click approval workflow with audit trail',
        'Submission-ready report auto-generated',
        'Submitted directly via regulator portal',
      ],
      imageCaption: 'Before vs. after process diagram — 14 steps reduced to 6',
    },

    keyFixes: [
      {
        title: 'Replaced 6 source exports with a single warehouse view',
        problem: 'Analysts wasted hours reconciling inconsistent data from six systems. Each had different export formats, update schedules, and field naming conventions.',
        fix: 'I worked with the data warehouse team to define a canonical reporting view that normalised fields and applied agreed business rules at source. The compliance team no longer touches raw exports.',
        outcome: 'Eliminated 8 hours of weekly data prep; single source of truth for all reports.',
      },
      {
        title: 'Built explicit validation rules (not "just check it")',
        problem: 'The 22% error rate came from implicit knowledge living in individuals\' heads — there were no documented rules for what made a valid submission.',
        fix: 'Over 3 workshops with regulatory affairs and compliance, I documented 47 validation rules. These were implemented as database constraints and pipeline checks, not spreadsheet formulas.',
        outcome: 'First-submission error rate dropped to under 2% within the first quarter of go-live.',
      },
      {
        title: 'Changed the approval workflow from email chains to structured sign-off',
        problem: 'Sign-off happened via email with attachments. Comments came back in different formats, there was no clear state ("who still needs to approve?"), and the thread was not retained.',
        fix: 'Designed a lightweight approval workflow within the internal portal — each approver sees the current report state, comments in context, and confirms with a date-stamped action.',
        outcome: 'Average sign-off time reduced from 3 days to 4 hours; full audit trail retained for regulatory review.',
      },
      {
        title: 'Configured exception-only review instead of full data review',
        problem: 'Analysts reviewed every data row every month — 12,000+ records — looking for anomalies by eye. This is how errors were introduced, not caught.',
        fix: 'Worked with the data analyst to define threshold rules and anomaly detection. Analysts now only see flagged exceptions on a dedicated review screen.',
        outcome: 'Monthly review time reduced from 16 hours to under 2 hours for a typical cycle.',
      },
    ],

    architectureDecisions: [
      {
        title: 'No new infrastructure — build on the existing data warehouse',
        decision: 'We had two options: a purpose-built reporting microservice or views on top of the existing SQL Server warehouse. I pushed for the warehouse option.',
        rationale: 'The warehouse was already governed, backed up, and maintained by a team. A new service would introduce ownership questions, hosting costs, and pipeline complexity the team wasn\'t staffed to maintain.',
        tradeoff: 'Slightly less flexibility in data transformation logic — acceptable given that reporting requirements are stable and change-managed.',
      },
      {
        title: 'Scheduling over real-time data',
        decision: 'Reports refresh nightly, not in real-time.',
        rationale: 'Regulatory reports are monthly. Real-time data would have added significant pipeline complexity and introduced synchronisation edge cases with no business value.',
        tradeoff: 'Analysts can\'t see intra-day changes, but this was never a requirement — confirmed with regulatory affairs in discovery.',
      },
      {
        title: 'Scope-locked the MVP to one report type',
        decision: 'We had 4 report types in scope at discovery kickoff. I recommended phasing: deliver the highest-volume report first, validate the architecture, then extend.',
        rationale: 'Attempting all four would have spread engineering capacity thin and delayed any go-live. Delivering one high-value report at month 6 was more defensible than delivering nothing at all.',
        tradeoff: 'Three report types remained manual during the initial rollout — a deliberately managed gap, not an oversight.',
      },
    ],
  },

  // ─── Artifacts ─────────────────────────────────────────────────────────────
  artifacts: [
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

  // ─── Results ───────────────────────────────────────────────────────────────
  results: {
    headline: 'Six months in, the compliance team runs reports in a single morning.',
    quantitative: [
      { value: '90%', label: 'Reduction in reporting time', detail: 'From 40 hours to 4 hours per cycle' },
      { value: '2%', label: 'First-submission error rate', detail: 'Down from 22% — sustained over 6 months post-launch' },
      { value: '4 hrs', label: 'Average sign-off time', detail: 'Down from 3 business days' },
      { value: '$162K', label: 'Estimated annual savings', detail: 'Based on staff time recaptured' },
    ],
    qualitative: [
      '"This is the first time I\'ve been able to take a lunch break during reporting week." — Senior Compliance Analyst',
      'Compliance director now has real-time visibility into report status for the first time',
      'The team has repurposed recaptured hours into proactive risk analysis — a function that didn\'t exist before',
      'Three other departments have requested access to the same pipeline pattern',
    ],
    timeToValue: 'First report generated through the new system at week 22. Full team transitioned by week 24. No parallel running required after UAT.',
  },

  // ─── How I Work ────────────────────────────────────────────────────────────
  howIWork: {
    intro: 'I work best in ambiguous environments where the problem is understood but the solution isn\'t obvious yet.',
    principles: [
      {
        title: 'Start with the problem, not the solution',
        description: 'I spend disproportionate time in discovery because the cost of solving the wrong problem is higher than extending discovery by two weeks. I validate assumptions early and often.',
      },
      {
        title: 'Write things down',
        description: 'Verbal agreements don\'t survive handoffs. I document decisions, rationale, and trade-offs explicitly — not to create bureaucracy, but to give the team a shared reference point when priorities shift.',
      },
      {
        title: 'Protect the team from scope creep, not from stakeholders',
        description: 'Stakeholders should feel heard. My job is to translate their needs into prioritised, deliverable requirements — not to shield the team from input. Scope is managed through rigorous criteria, not closed doors.',
      },
      {
        title: 'Measure what matters after launch',
        description: 'Shipping is not done. I track outcomes against the original success metrics and revisit assumptions. If the numbers don\'t move, I want to know why — and what we do next.',
      },
    ],
    tools: ['VS Code', 'PostgreSQL', 'Jira', 'Camunda'],
  },

  // ─── Contact ───────────────────────────────────────────────────────────────
  contact: {
    headline: 'Open to PM / BA opportunities',
    body: 'I\'m currently exploring senior BA and product manager roles, particularly in fintech, insurtech, or ops-heavy domains. If this case study resonates, I\'d like to talk.',
    email: 'jamie.cole@example.com',
    linkedin: 'https://linkedin.com/in/jamie-cole',
    availability: 'Available from May 2026',
  },
}
