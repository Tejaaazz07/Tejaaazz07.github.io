import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Tejas',
        title: 'Commerce Student | AI Automation & Financial Analytics',
        subtitle: 'AI Agent Builder • Financial Data Modeling • Rotaract Club Service Director • ProtoSem Innovation Trainee',
        bio: 'A second-year Bachelor of Commerce (B.Com) student at Kumaraguru College of Liberal Arts and Sciences with a distinctive focus that bridges financial strategy, investment planning, and autonomous AI systems. Experienced in architecting AI agent workflows using n8n and advanced prompt engineering, alongside structured financial modeling and analytics in Microsoft Excel. Active student leader serving as the Club Service Director of the Rotaract Club and selected for PRICE ProtoSem (powered by Forge Innovations & RAI), driving practical technology solutions and scalable venture prototyping.',
        avatar: '/profile.jpeg',
        location: 'Coimbatore, Tamil Nadu, India',
        email: 'tejas@example.com',
        resumeUrl: '/resume',
        website: 'https://tejaaazz07.github.io',
        languages: [
            { name: 'English', level: 'Professional' },
            { name: 'Tamil', level: 'Native' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/Tejaaazz07',
                icon: 'github',
                username: 'Tejaaazz07',
            },
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/tejas-s-k-333a78359',
                icon: 'linkedin',
                username: 'Tejas S K',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/tejas.archives_?igsi=MXU5cmRuaTltYnoyNQ==',
                icon: 'instagram',
                username: 'tejas.archives_',
            },
        ],
    },
    projects: [
        {
            id: 'project-1',
            slug: 'autonomous-ad-generation-ai-agent',
            title: 'Autonomous Ad Generation AI Agent',
            description: 'Autonomous AI agent built on n8n for automated multi-platform advertising copy generation.',
            longDescription: 'Architected and deployed a custom AI agent designed to generate high-converting advertisement copy, marketing headlines, and targeted visual concepts automatically. Engineered on top of the n8n automation engine with advanced LLM prompt orchestration, reducing creative turnaround time and streamlining multi-channel marketing campaigns.',
            techStack: ['n8n', 'AI Prompt Engineering', 'OpenAI API', 'LLM Orchestration', 'JSON Workflows'],
            tools: ['n8n', 'VS Code', 'REST APIs', 'Postman'],
            status: 'completed',
            repoUrl: 'https://github.com/Tejaaazz07',
            demoUrl: '#',
            startDate: '2025-11-01',
            role: 'AI Agent Developer',
            customTimeline: 'November 2025',
            team: 'Personal Project',
            highlights: ['Autonomous Agent Pipelines', 'Multi-variant Copy Generation', 'n8n Workflow Automation'],
            category: 'AI & Automation',
            features: [
                {
                    title: 'Core Capabilities',
                    items: [
                        '**Multi-variant Generation**: Automatically generates diverse headline, body, and CTA variations for target buyer personas.',
                        '**n8n Workflow Engine**: Zero-code/low-code automated pipelines connecting webhooks, LLM APIs, and messaging outputs.',
                        '**Prompt Architectures**: Highly structured few-shot system prompts guaranteeing conversion-focused copy.'
                    ]
                },
                {
                    title: 'Performance & Scalability',
                    items: [
                        '**Fast Iteration**: Generates full ad creative suites in seconds from simple product descriptions.',
                        '**API Efficiency**: Implements prompt token optimization and error-resilient webhook fallbacks.'
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Inconsistent LLM Output Formatting",
                    solution: "Enforced JSON-schema structured output parsing inside n8n nodes to ensure seamless downstream consumption."
                },
                {
                    problem: "Brand Voice Alignment",
                    solution: "Engineered specialized brand tone parameterization and audience demographic conditioning in system prompts."
                }
            ]
        },
        {
            id: 'project-2',
            slug: 'digital-marketing-brand-growth',
            title: 'Digital Marketing & Social Media Campaign Strategy',
            description: 'Data-backed social media campaigns, content strategies, and conversion funnels for digital brand growth.',
            longDescription: 'Executed high-impact digital marketing strategies and social media outreach campaigns targeted at youth demographics. Analyzed engagement metrics and consumer response data to refine ad creative performance and integrated AI copywriting to scale promotional frequency and customer acquisition.',
            techStack: ['Digital Marketing', 'E-Commerce Strategy', 'Audience Analytics', 'AI Copywriting', 'Conversion Funnels'],
            tools: ['Meta Business Suite', 'Social Analytics', 'Canva', 'MS Excel'],
            status: 'completed',
            repoUrl: 'https://github.com/Tejaaazz07',
            demoUrl: '#',
            startDate: '2025-06-01',
            role: 'Growth & Marketing Lead',
            customTimeline: 'June 2025',
            team: 'E-Commerce Venture',
            highlights: ['Targeted Outreach', 'Funnel Optimization', 'AI-assisted Copywriting'],
            category: 'Marketing & Growth',
            features: [
                {
                    title: 'Strategic Pillars',
                    items: [
                        '**Data-Backed Outreach**: Scheduled organic content and paid campaigns aligned with demographic trends.',
                        '**Customer Journey Mapping**: Optimized multi-touch conversion funnels from discovery to checkout.',
                        '**Content Scalability**: Leveraged AI tools to create high-velocity social content.'
                    ]
                }
            ],
            challengesAndSolutions: [
                {
                    problem: "Audience Retention & Fatigue",
                    solution: "A/B tested creative variants and dynamically adjusted posting schedules based on peak engagement windows."
                }
            ]
        },
        {
            id: 'project-3',
            slug: 'price-protosem-innovation',
            title: 'PRICE ProtoSem: Phygital Retail Innovation',
            description: '20-week industry-integrated innovation programme solving retail challenges with AI, IoT, and prototyping.',
            longDescription: 'Selected for a 20-week industry-integrated innovation programme focused on solving real-world retail and commerce challenges through AI, analytics, intelligent systems, IoT, prototyping, and entrepreneurship. Working with industry problem statements to explore, develop, and validate practical technology solutions beyond conventional classroom learning.',
            techStack: ['Phygital Retail', 'Intelligent Systems', 'IoT', 'Prototyping', 'AI & Analytics', 'Entrepreneurship'],
            tools: ['Forge Innovation Framework', 'Prototyping Tools', 'MS Excel'],
            status: 'ongoing',
            repoUrl: 'https://github.com/Tejaaazz07',
            demoUrl: '#',
            startDate: '2025-10-01',
            role: 'Innovation Engineer Trainee',
            customTimeline: '20-Week Programme',
            team: 'PRICE ProtoSem Cohort',
            highlights: ['20-Week Innovation Framework', 'Phygital Retail Systems', 'Industry Problem Validation'],
            category: 'Innovation & Prototyping',
            features: [
                {
                    title: 'Programme Focus',
                    items: [
                        '**4-Phase Innovation Process**: Discovery, Solution Architecture, Integration, and Venture Validation.',
                        '**Industry Problem Statements**: Direct engagement with retail and commerce technology requirements.',
                        '**Multidisciplinary Engineering**: Combining business viability with technical prototyping.'
                    ]
                }
            ]
        }
    ],
    experiences: [
        {
            id: 'exp-1',
            company: 'PRICE ProtoSem (Forge Innovations & RAI)',
            position: 'Innovation Engineer Trainee',
            description: '20-Week Industry-Integrated Innovation Programme focused on solving retail and commerce challenges through AI, analytics, intelligent systems, IoT, prototyping, and entrepreneurship.',
            responsibilities: [
                'Work with industry problem statements to explore, develop, and validate practical technology solutions beyond classroom learning.',
                'Execute a structured 4-phase milestone innovation framework across 20 weeks of rigorous prototyping.',
                'Integrate phygital commerce frameworks, data analytics, and intelligent systems to build viable venture prototypes.'
            ],
            skills: ['Phygital Retail', 'AI & Analytics', 'Intelligent Systems', 'IoT', 'Prototyping', 'Entrepreneurship'],
            startDate: '2025-10-01',
            isOngoing: true,
            location: 'Coimbatore, India',
            type: 'apprenticeship',
            logo: '/about/protosem.png',
        },
        {
            id: 'exp-2',
            company: 'Rotaract Club of Kumaraguru Institutions',
            position: 'Club Service Director',
            description: 'Leading club service administration, university-wide community initiatives, and cross-functional student teams.',
            responsibilities: [
                'Direct club service initiatives, orchestrating large-scale student community events and institutional activities.',
                'Facilitate cross-functional collaboration among member committees, fostering teamwork and strategic execution.',
                'Deliver humorous, engaging, and persuasive presentations to recruit members and align project teams.'
            ],
            skills: ['Leadership', 'Public Speaking', 'Team Building', 'Event Coordination', 'Executive Presentations'],
            startDate: '2024-07-01',
            isOngoing: true,
            location: 'Coimbatore, India',
            type: 'volunteer',
            logo: '/about/rotaract.png',
        }
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Kumaraguru College of Liberal Arts and Sciences',
            degree: 'Bachelor of Commerce (B.Com)',
            major: 'Commerce, Finance & Financial Analytics',
            startDate: '2023-08-01',
            endDate: '2027-05-31',
            isOngoing: true,
            activities: ['Rotaract Club (Club Service Director)', 'Protosem Innovation Cohort', 'Finance & Commerce Club'],
            achievements: ['Appointed Club Service Director', 'Selected for PRICE ProtoSem Innovation Fellowship']
        },
        {
            id: 'edu-2',
            institution: 'Forge Innovations & RAI',
            degree: 'PRICE ProtoSem Fellowship',
            major: 'Innovation Engineering & Technology Venture Prototyping',
            startDate: '2025-10-01',
            isOngoing: true,
            activities: ['20-Week Industry Problem Solving', 'Phygital Retail Systems Prototyping'],
            achievements: ['Selected Innovation Engineer Trainee']
        }
    ],
    achievements: [
        {
            id: 'ach-1',
            title: 'PRICE ProtoSem Fellow & Innovation Engineer Trainee',
            issuer: 'Forge Innovations & RAI',
            date: '2025-10',
            description: 'Selected for the prestigious 20-week industry-integrated innovation programme focused on solving retail and intelligent commerce challenges.',
            category: 'award',
            tags: ['ProtoSem', 'Innovation', 'AI', 'Retail Tech']
        },
        {
            id: 'ach-2',
            title: 'Club Service Director Appointment',
            issuer: 'Rotaract Club of Kumaraguru Institutions',
            date: '2024-07',
            description: 'Elected to lead club service operations, community engagement, and cross-functional team coordination.',
            category: 'recognition',
            tags: ['Leadership', 'Community Service', 'Public Speaking']
        }
    ],
    techStack: [
        { name: 'n8n Automation', icon: 'workflow', category: 'tool', url: 'https://n8n.io' },
        { name: 'Microsoft Excel', icon: 'table', category: 'tool', url: 'https://office.com' },
        { name: 'AI Prompt Engineering', icon: 'brain', category: 'language', url: 'https://openai.com' },
        { name: 'LLM Orchestration', icon: 'cpu', category: 'framework', url: 'https://groq.com' },
        { name: 'Financial Modeling', icon: 'coins', category: 'library', url: '#' },
        { name: 'Market Analysis', icon: 'trending-up', category: 'tool', url: '#' },
        { name: 'Digital Marketing', icon: 'target', category: 'tool', url: '#' },
        { name: 'Canva', icon: 'palette', category: 'tool', url: 'https://canva.com' },
        { name: 'Git & GitHub', icon: 'github', category: 'tool', url: 'https://github.com' }
    ],
    hardSkills: [
        { name: 'n8n Workflow Automation', category: 'ai', level: 'advanced', description: 'Architecting autonomous agent pipelines and webhook integrations.' },
        { name: 'Microsoft Excel Financial Modeling', category: 'data', level: 'advanced', description: 'Advanced formulas, data modeling, financial statements, and forecasting.' },
        { name: 'AI Prompt Engineering', category: 'ai', level: 'advanced', description: 'Few-shot prompting, structured JSON schema output parsing, and persona design.' },
        { name: 'Financial & Investment Analysis', category: 'other', level: 'intermediate', description: 'Stock market research, portfolio planning, and company valuation.' },
        { name: 'Digital Marketing & Social Strategy', category: 'other', level: 'advanced', description: 'Customer journey mapping, conversion funnel optimization, and campaign analytics.' },
        { name: 'Phygital Retail Systems', category: 'other', level: 'intermediate', description: 'Bridging physical retail with digital AI, IoT, and analytics.' }
    ],
    softSkills: [
        { name: 'Public Speaking & Keynotes', description: 'Delivering engaging, humorous, and persuasive presentations.' },
        { name: 'Team Leadership & Building', description: 'Directing collaborative committees and driving team alignment.' },
        { name: 'Strategic Communication', description: 'Effective stakeholder negotiation and cross-functional coordination.' },
        { name: 'Creative Problem Solving', description: 'Applying innovation frameworks to complex real-world challenges.' }
    ],
    tools: [
        { name: 'n8n', icon: 'workflow', category: 'productivity' },
        { name: 'Microsoft Excel', icon: 'table', category: 'productivity' },
        { name: 'VS Code', icon: 'code', category: 'ide' },
        { name: 'GitHub', icon: 'github', category: 'devops' },
        { name: 'Meta Business Suite', icon: 'globe', category: 'productivity' },
        { name: 'Canva', icon: 'palette', category: 'design' }
    ],
    faqs: [
        {
            question: "What is your primary area of focus and expertise?",
            answer: "I am a Commerce student at Kumaraguru College specializing in the intersection of financial modeling, digital marketing, and autonomous AI automation (n8n & LLMs)."
        },
        {
            question: "What is PRICE ProtoSem?",
            answer: "PRICE ProtoSem is a 20-week industry-integrated innovation programme powered by Forge Innovations & RAI, where Innovation Engineer Trainees solve real-world retail and commerce challenges through AI, IoT, and prototyping."
        },
        {
            question: "What projects have you developed?",
            answer: "I developed an Autonomous Ad Generation AI Agent using n8n and advanced prompting, and executed social media marketing and brand growth strategies for digital e-commerce ventures."
        },
        {
            question: "Are you available for collaborations or speaking engagements?",
            answer: "Yes! I enjoy public speaking, team leadership, and collaborating on AI automation, digital marketing, and financial analysis projects."
        }
    ],
    blogs: [
        {
            id: 'blog-1',
            slug: 'protosem-week-01',
            title: 'PRICE ProtoSem: Week 01 Field Notes',
            excerpt: 'Embarking on the 20-week innovation journey: Discovery, problem space immersion, and team alignment.',
            content: 'Selected for the PRICE ProtoSem innovation fellowship powered by Forge Innovations & RAI. Week 01 commenced with problem statement orientation and mapping phygital retail challenges.',
            image: '/profile.jpeg',
            date: '2025-10-08',
            category: 'ProtoSem',
            tags: ['ProtoSem', 'Innovation', 'Week 01', 'Retail Tech'],
            author: { name: 'Tejas', avatar: '/profile.jpeg' },
            readTime: '3 min read'
        },
        {
            id: 'blog-2',
            slug: 'building-autonomous-ai-agents-with-n8n',
            title: 'Architecting Autonomous Ad Generation Agents with n8n',
            excerpt: 'How to build multi-variant ad copywriting pipelines using n8n workflows and structured prompt engineering.',
            content: 'Exploring how low-code automation tools like n8n combined with LLMs enable creators to automate high-converting marketing copy.',
            image: '/profile.jpeg',
            date: '2025-11-20',
            category: 'AI & Automation',
            tags: ['n8n', 'AI Agents', 'Marketing', 'Automation'],
            author: { name: 'Tejas', avatar: '/profile.jpeg' },
            readTime: '4 min read'
        },
        {
            id: 'blog-3',
            slug: 'financial-modeling-excel-best-practices',
            title: 'Modern Financial Modeling with Microsoft Excel',
            excerpt: 'Structuring dynamic financial statements, revenue forecasting, and valuation metrics in Excel.',
            content: 'A walkthrough of essential spreadsheet modeling techniques for investment planning and business decision making.',
            image: '/profile.jpeg',
            date: '2025-12-05',
            category: 'Finance',
            tags: ['Finance', 'Excel', 'Financial Modeling', 'Analytics'],
            author: { name: 'Tejas', avatar: '/profile.jpeg' },
            readTime: '4 min read'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'Tejas Profile',
            imageUrl: '/profile.jpeg',
            category: 'Personal',
            description: 'Tejas - Commerce Student & AI Automation Enthusiast',
            date: '2026'
        }
    ]
};
