// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE TO UPDATE YOUR SITE. Nothing else needs touching.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Abdullah Naqvi",
  initials: "AN",
  // Put a square photo at public/profile.jpg and it appears automatically.
  // If the file is not there, the site falls back to the "AN" monogram.
  photo: "/profile.jpg",
  // Small badge under your photo. Label + value.
  badgeLabel: "Focus",
  role: "Data Analysis & BI",
  discipline: "Data Analyst", // shown under your name
  headline: "BS Business Data Analytics @ COMSATS University Islamabad · SQL · Python · Power BI",
  tagline:
    "I clean messy data, analyse it, and turn the result into something someone can actually make a decision with.",
  location: "Islamabad, Pakistan",
  availability: "Open to data analyst, BI and analytics roles",
  links: {
    email: "abdullahnaqvi131@gmail.com",
    github: "https://github.com/abdullah5-ig",
    linkedin: "https://www.linkedin.com/in/abdullah-naqvi-34162733b",
  },
};

// Core stack shown as prominent chips directly under the hero tagline.
export const coreStack = ["SQL", "Python", "Power BI", "Excel"];

export const stats = [
  { value: "SQL · Python", label: "Core analysis stack" },
  { value: "Power BI", label: "Dashboards & reporting" },
  { value: "5th sem", label: "BS Business Data Analytics" },
];

export const about = {
  paragraphs: [
    "I'm a Business Data Analytics student at COMSATS University Islamabad, and data analysis is what I do. I work in SQL, Python, Power BI and Excel — cleaning messy data, running the analysis, and building the charts and reports that make a finding useful to someone who has to act on it.",
    "I put that to work during an internship at Vertex Digital Ventures, analysing US industry and buyer data to test whether an opportunity was real before anyone spent money on it. The research was the context; the analysis underneath it was the part I owned.",
    "What I care about is the question behind the numbers — not just what the data says, but whether it still holds up when you go looking for reasons it might not.",
  ],
  pillars: [
    {
      title: "Analysis and code",
      body: "SQL and Python to clean, join and dig into messy data until I know the pattern is real and not an accident.",
    },
    {
      title: "Charts and reports",
      body: "Power BI dashboards and Excel models that put the numbers in front of people in a form they can act on.",
    },
    {
      title: "Research and validation",
      body: "Using that analysis for market and customer research — sizing opportunities and testing whether the demand is really there.",
    },
  ],
};

export const experience = [
  {
    company: "Vertex Digital Ventures",
    role: "Market Research Analyst",
    period: "July 2026 — September 2026",
    location: "Pakistan · US Market Focus",
    current: false,
    summary:
      "Analysed market and industry data for products entering the US market, to work out which opportunities were real enough to build.",
    points: [
      "Collected, cleaned and analysed market and industry data, then structured it into sized, comparable opportunities.",
      "Ran structured research on US industries, buyers and competitors.",
      "Tested whether an opportunity was real before resources were committed to it.",
      "Used AI tools to move faster from raw data to a clear conclusion.",
      "Turned messy findings into evidence the team could act on.",
    ],
    tags: ["Data Analysis", "Idea Validation", "Market Analysis", "Competitive Analysis"],
  },
];

export const education = [
  {
    school: "COMSATS University Islamabad",
    detail: "Bachelor's Degree, Business Data Analytics",
    period: "2024 — 2028",
    current: true,
  },
  {
    school: "Punjab Colleges",
    detail: "Intermediate",
    period: "2022 — 2024",
  },
  {
    school: "FFC Education System",
    detail: "Schooling",
    period: "2009 — 2022",
  },
];

// ── Certifications ──────────────────────────────────────────────
// To add one, copy a block and change the text. Newest at the top.
export const certifications = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google · Coursera",
  },
  {
    name: "Foundations: Data, Data, Everywhere",
    issuer: "Google · Coursera",
  },
];

// Order here = order on the page. Data skills lead deliberately.
// Anything listed in `featured` renders as a dark highlighted pill.
export const skillGroups = [
  {
    title: "Data Analysis & Programming",
    items: [
      "SQL",
      "Python",
      "Data Cleaning",
      "Exploratory Data Analysis",
      "Joins & Aggregation",
      "Statistics",
      "Statistical Modelling",
      "Predictive Analytics",
      "Machine Learning",
    ],
    featured: ["SQL", "Python"],
  },
  {
    title: "Business Intelligence",
    items: [
      "Power BI",
      "Excel",
      "Dashboards",
      "KPI Design",
      "Data Visualization",
      "Reporting",
    ],
    featured: ["Power BI", "Excel"],
  },
  {
    title: "Financial Analysis",
    items: [
      "Portfolio Risk Analysis",
      "CAPM",
      "Beta & Volatility",
      "Sharpe & Treynor Ratios",
      "Performance Benchmarking",
    ],
    featured: [],
  },
  {
    title: "Analytics Workflow",
    items: [
      "Problem Framing",
      "Data Modelling",
      "Metric Definition",
      "Insight Communication",
      "Documentation",
    ],
    featured: [],
  },
  {
    title: "Research & Validation",
    items: [
      "Idea Validation",
      "Market Analysis",
      "Customer Research",
      "Competitive Analysis",
      "Opportunity Sizing",
      "Secondary Research",
      "SaaS Landscape Mapping",
    ],
    featured: ["Idea Validation", "Market Analysis"],
  },
  {
    title: "AI-Native Workflow",
    items: [
      "AI Research Tooling",
      "Prompt Design",
      "Evaluation Frameworks",
      "Synthesis & Summarisation",
    ],
    featured: [],
  },
];

// ── Your projects. Add a new object to this list for each one. ──
// Shape:
//   title, category, body   (required)
//   tags    : [] list of tools
//   link    : "https://..." or null
//   image   : "/projects/file.png" — optional chart or screenshot
//   imageAlt: short description of the image, for screen readers
export const projects = [
  {
    title: "Diabetes Risk Prediction",
    category: "Machine Learning",
    body: "A model that predicts diabetes risk from health and survey data, tested on 20,000 people. It gets 96% of cases right overall and catches 65% of the people who actually have diabetes, with very few false alarms — only 170 healthy people wrongly flagged. Built the whole pipeline in Python: cleaning the raw survey data, handling missing values and outliers, removing variables that measured the same thing twice, then training and tuning regression models and checking they held up statistically.",
    tags: ["Python", "pandas", "NumPy", "scikit-learn", "Statistical Modelling"],
    image: "/projects/diabetes-confusion-matrix.png",
    imageAlt:
      "Confusion matrix: 18,130 healthy correctly identified, 1,104 diabetic correctly identified, 170 false alarms, 596 missed cases",
    link: null,
  },
  {
    title: "Portfolio Risk & Return Analysis",
    category: "Financial Analysis",
    body: "Measured the risk and return of four listed companies — FFC, MARI, OGDC and FCCL — and built two portfolios from them. Calculated returns from historical price data, then measured how volatile each stock was and how much it moved with the wider market. Scored every asset on risk-adjusted return using the Sharpe ratio, Treynor ratio and Jensen's Alpha, and plotted them against the Security Market Line. The chart shows the finding: only FFC sits above the line, meaning it was the one asset paying more return than its risk level called for. The other three sat below it.",
    tags: ["Excel", "CAPM", "Beta & Volatility", "Sharpe Ratio", "Data Visualisation"],
    image: "/projects/security-market-line.png",
    imageAlt:
      "Security Market Line chart plotting return against beta for FFC, MARI, OGDC, FCCL and two portfolios",
    link: null,
  },
  {
    title: "Telco Customer Churn — who leaves, and who to call",
    category: "Prediction & Cost Analysis",
    body: "A phone company loses customers every month. Predicting who might leave is the easy half — the harder half is deciding who is actually worth calling, because every retention offer costs money. 84.5% accuracy on 7,043 real customers. I also caught the model being overconfident: it said 37% where the real answer was 20%, which the usual accuracy scores could not see at all. Fixing that moved the answer by 15 percentage points and was worth $9,270.",
    tags: ["Python", "scikit-learn", "pandas", "Seaborn"],
    link: "https://github.com/abdullah5-ig/telco-churn-retention-analytics",
  },
  {
    title: "Diamond Prices — a correlation pointing the wrong way",
    category: "Prediction & Data Quality",
    body: "A model that predicts diamond prices within about 7%, on 53,794 real diamonds. But the interesting part came first: in the raw data, better quality diamonds look cheaper. Flawless ones average $2,871 and the worst grade averages $5,057. The reason is size — flawless diamonds here are half the weight. Compare diamonds of a similar size and a 2.6x premium appears. I also fixed real problems in the data: 20 diamonds listed with a measurement of zero, and 146 duplicate rows that would have let the model cheat.",
    tags: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
    link: "https://github.com/abdullah5-ig/diamond-price-intelligence",
  },
  {
    title: "US Market Opportunity Validation",
    category: "Market Research",
    body: "Structured research on a US product category at Vertex Digital Ventures — demand signals, what buyers actually need, and gaps in the competition, pulled together into a clear go or no-go recommendation.",
    tags: ["Market Analysis", "Idea Validation", "AI Research Tools"],
    link: null,
  },
];
