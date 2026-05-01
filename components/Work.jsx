const companies = [
    {
        name: 'S&P Global',
        logo: '/assets/logo-spglobal.png',
        initials: 'S&P',
        color: '#E32028',
        role: 'Software Developer II',
        period: 'Oct 2024 – Present',
        location: 'Remote, UK',
        project: 'Energy Data Services — Azure → SPGI Cloud Migration',
        highlights: [
            'Designed multi-stage Jenkins CI/CD pipelines (dev → stage → prod) with automated quality gates and rollback hooks',
            'Triaged Fortify, Mend & SonarQube findings; authored secure-code remediation playbooks to prevent regressions',
            'Built xUnit test suites with mock frameworks covering AWS S3 ingestion and mapping flows',
            'Refactored ingestion & mapping modules toward API-first architecture on ASP.NET C#',
        ],
        stack: ['C#', 'ASP.NET Core', 'xUnit', 'Jenkins', 'AWS S3', 'Fortify', 'SonarQube', 'React Native', 'Python', 'Azure'],
    },
    {
        name: '4ORTY Ltd',
        logo: null,
        initials: '4T',
        color: '#FF6B35',
        role: 'Software Engineer',
        period: 'Mar 2023 – Jun 2024',
        location: 'London, UK',
        project: 'Food & Beverage Branch Analytics — 4-Branch P&L Tracking',
        highlights: [
            'Modelled normalised SQL schema and authored stored procedures optimised for multi-branch P&L reporting',
            'Built Python (Pandas) ETL scripts to aggregate and reconcile multi-branch CSV exports into trend reports',
            'Implemented daily reconciliation checks and unit tests to detect stock discrepancies early',
            'Deployed local SQL Server solution; trained branch managers on daily reporting workflows',
        ],
        stack: ['C#', 'ASP.NET', 'SQL Server', 'Python', 'Pandas', 'Git', 'Azure'],
    },
    {
        name: 'Infosys',
        logo: '/assets/logo-infosys.png',
        initials: 'INF',
        color: '#007CC3',
        role: 'Senior System Engineer',
        period: 'Apr 2021 – Oct 2021',
        location: 'India',
        project: 'United Airlines — Backend Migration & Payment Module',
        highlights: [
            'Refactored legacy payment flows into API-first controllers (ASP.NET MVC) with idempotency and reconciliation handling',
            'Performed API contract testing with Swagger & Postman; supported QA-led defect triage',
            'Managed packaged artifacts and dependencies via JFrog Artifactory for controlled deployments and rollbacks',
            'Stabilised payment flows during migration, reducing defects through cleaner API contracts',
        ],
        stack: ['ASP.NET MVC', 'C#', 'Next.js', 'Swagger', 'Postman', 'JFrog Artifactory', 'SQL Server'],
    },
    {
        name: 'Blue Pearl Infotech',
        logo: '/assets/logo-bluepearl.jpeg',
        initials: 'BP',
        color: '#6C63FF',
        role: 'Software Engineer',
        period: 'Jul 2018 – Mar 2021',
        location: 'India',
        project: 'Healthcare, E-commerce & Civic Engagement Platforms',
        highlights: [
            'Integrated Razorpay payment gateway with split-payment logic (up to 6-month instalments) and settlement flows',
            'Built QR-code generation embedded in PDF lab reports with automated SMS/email delivery workflows',
            'Developed React Native mobile clients + ASP.NET MVC admin portals with Cosmos DB for mobile-sourced data',
            'Designed role-based access control and data sync mechanisms for a civic engagement platform',
        ],
        stack: ['ASP.NET', 'C#', 'React', 'React Native', 'SQL Server', 'Cosmos DB', 'Razorpay', 'OAuth2', 'MongoDB'],
    },
];

export default function Work() {
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Career History</h4>
            <h2 className="text-center text-5xl font-Ovo">My Technical Journey</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo">
                6+ years engineering web, mobile and cloud solutions across energy, finance and healthcare — from startup to S&P 500.
            </p>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
                {/* Vertical line */}
                <div className="hidden md:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#b820e6] via-purple-300 to-[#da7d20] opacity-30" />

                <div className="flex flex-col gap-12">
                    {companies.map((company) => (
                        <div key={company.name} className="relative flex gap-6 md:gap-10 items-start group">

                            {/* Logo / Initials badge */}
                            <div className="relative z-10 flex-shrink-0">
                                <div
                                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg border border-white/20 overflow-hidden"
                                    style={{
                                        boxShadow: `0 4px 20px ${company.color}30`,
                                        background: company.logo ? '#fff' : `linear-gradient(135deg, ${company.color}, ${company.color}cc)`,
                                    }}
                                >
                                    {company.logo ? (
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="w-12 h-12 object-contain"
                                        />
                                    ) : (
                                        <span className="text-white text-xs font-bold tracking-wide">
                                            {company.initials}
                                        </span>
                                    )}
                                </div>
                                {/* Timeline dot */}
                                <div
                                    className="hidden md:block absolute -left-[1.15rem] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white dark:border-darkTheme shadow-md"
                                    style={{ background: company.color }}
                                />
                            </div>

                            {/* Card */}
                            <div className="flex-1 border border-gray-200 dark:border-white/15 rounded-2xl p-6 bg-white/60 dark:bg-white/5 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300 dark:hover:bg-white/10">

                                {/* Header */}
                                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                                        <p className="text-sm font-medium" style={{ color: company.color }}>{company.role}</p>
                                    </div>
                                    <div className="text-right text-xs text-gray-500 dark:text-white/50">
                                        <p className="font-medium">{company.period}</p>
                                        <p>{company.location}</p>
                                    </div>
                                </div>

                                {/* Project label */}
                                <p className="text-xs text-gray-500 dark:text-white/40 italic mb-4 border-l-2 pl-2" style={{ borderColor: company.color }}>
                                    {company.project}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2 mb-5">
                                    {company.highlights.map((point, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-white/70 leading-snug">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: company.color }} />
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                {/* Tech stack tags */}
                                <div className="flex flex-wrap gap-2">
                                    {company.stack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[11px] font-medium px-2.5 py-0.5 rounded-full border"
                                            style={{
                                                color: company.color,
                                                borderColor: `${company.color}40`,
                                                background: `${company.color}10`,
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
