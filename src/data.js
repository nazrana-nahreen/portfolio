// Edit this file to update your portfolio content. Everything comes from your CV.
export const profile = {
  name: 'Nazrana Nahreen',
  role: 'CSE Undergraduate · AI/ML Engineering',
  intro:
    'I try to build AI and ML models that help you accomplish everyday tasks more intelligently.',
  email: 'nahreennazrana@gmail.com',
  linkedin: 'https://linkedin.com/in/nazrana-nahreen',
  github: 'https://github.com/nazrana-nahreen',
}

export const about = [
  'I study Computer Science and Engineering at International Islamic University Chittagong (CGPA 3.53/4.00). I like problems where careful data handling decides whether a model can be trusted.',
  'I have taught lab sessions, handled customer support for a US-based service, led a university Hult Prize team and competed in hackathons, so I am used to explaining technical ideas to different audiences.',
]

export const skills = [
  { group: 'Languages', items: ['Python', 'C', 'C++', 'C#', 'Java', 'SQL'] },
  { group: 'Web & backend', items: ['Django', 'Flask', 'FastAPI', 'REST APIs', 'HTML5', 'CSS3', 'JavaScript'] },
  { group: 'Databases', items: ['PostgreSQL', 'SQLite', 'MongoDB'] },
  { group: 'CS fundamentals', items: ['Algorithms', 'Data Structures', 'OOP', 'Debugging'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Docker', 'VS Code', 'PyCharm', 'Overleaf'] },
]

export const research = [
  {
    title: 'A Leakage-Aware Two-Stage XGBoost Framework for Early Detection and Clinical Staging of Chronic Kidney Disease',
    venue: 'IEEE QPAIN 2026, Chittagong · April 2026',
    status: 'Published',
    link: 'https://doi.org/10.1109/QPAIN69676.2026.11545518',
  },
  {
    title: 'ML for Personalized Drug Classification: Comparative Study Using Patient Clinical Data',
    venue: 'IEEE QPAIN 2026, Chittagong · April 2026',
    status: 'Published',
    link: 'https://doi.org/10.1109/QPAIN69676.2026.11545980',
  },
]

export const experience = [
  {
    role: 'Undergraduate Teaching Assistant',
    org: 'International Islamic University Chittagong',
    when: 'Aug – Dec 2025',
    points: [
      'Supported Software Development Lab-1 (CSE-2340) and helped students with core concepts.',
      'Gave one-to-one debugging help.',
      'Prepared a structured learning roadmap and other instructional materials.',
    ],
  },
  {
    role: 'Customer Support & Relationship Manager',
    org: 'RideMint NYC (remote)',
    when: 'Aug – Sep 2025',
    points: [
      'Handled support requests and bookings for a US-based limousine service.',
      'Resolved client issues over email, phone and social media.',
    ],
  },
]

export const achievements = [
  'Finalist, NASA International Space Apps Challenge 2024',
  'Finalist, IEEE WIE Robotics for Climate Change and Assistive Technology, WIE BD Summit 2024',
  'Finalist (Top 5), Hult Prize Campus Round 2024; Deputy Head, HR & Development, Hult Prize at IIUC 2025',
  'National Rank 19, ICT Olympiad Bangladesh, Season 2',
  'Round 2 qualifier, SOLVIO AI Hackathon 2025',
  'Winner, Banglalink AppLink Workshop, IEEE IIUC WIE 2024',
  'ICPC Asia Dhaka Regional Preliminary, 2024 and 2025',
  'Qualified, International Astronomy and Astrophysics Competition 2025',
]

export const projects = [
  {
    title: 'CycleSense.ai: Menstrual Health & PCOS Guidance Platform',
    summary:
      'A dignified, evidence-backed menstrual health platform designed for accurate cycle tracking, nuanced symptom awareness, and compassionate PCOS guidance. Combines empirical cycle science with dual-language AI assistance (English & Bengali) and 100% privacy-protected health insights.',
    result: 'Deployed live on Vercel with bilingual health AI (EN/বাং), cycle phase prediction, hormonal symptom awareness, and privacy-first architecture.',
    tags: ['HealthTech AI', 'Menstrual Health', 'React', 'Dual-Language NLP', 'PCOS Guidance', 'Privacy-First'],
    link: 'https://cycle-sense-ai-xi.vercel.app/',
    linkLabel: 'Launch CycleSense.ai',
  },
  {
    title: 'Bangladeshi Taka Note Detection API',
    summary:
      'YOLOv11-based computer vision web system and REST API for real-time detection, boundary localization, and classification of Bangladeshi bank currency notes with automated inference.',
    result: 'Deployed live on Render with an interactive image upload interface and computer vision inference pipeline.',
    tags: ['YOLOv11', 'Computer Vision', 'FastAPI', 'Deep Learning', 'PyTorch'],
    link: 'https://bangladeshi-taka-detection-api-j8gz.onrender.com',
    linkLabel: 'Try live demo',
  },
  {
    title: 'BanglaText: Bengali NLP & Sentiment API',
    summary:
      'A production-grade natural language processing REST API specialized for the Bengali language. Provides automated text normalization, tokenization, preprocessing, and Bengali sentiment analysis.',
    result: 'Fully documented OpenAPI/Swagger endpoints (/process, /sentiment, /health) deployed live on Render for developer integration.',
    tags: ['Bengali NLP', 'Sentiment Analysis', 'FastAPI', 'Python', 'REST API'],
    link: 'https://banglatext-api.onrender.com',
    linkLabel: 'View API & docs',
  },
  {
    title: 'OrbitWatch AI: Asteroid Tracking & Orbit Risk Explorer',
    summary:
      'Scientific exploration and real-time monitoring of Near-Earth Asteroids (NEAs), close approach trajectory calculation, orbital risk assessment, and interactive ephemeris celestial visualization powered by NASA JPL data.',
    result: 'Deployed live on Vercel with high-precision orbital tracking, risk index metrics, and interactive celestial dashboard.',
    tags: ['React', 'NASA JPL API', 'Orbital Mechanics', 'Data Visualization', 'AI'],
    link: 'https://orbitwatch-l1rq.vercel.app/',
    linkLabel: 'Launch OrbitWatch',
  },
  {
    title: 'AeroHealth AI: Aircraft Predictive Maintenance System',
    summary:
      'End-to-end Machine Learning and Prognostics & Health Management (PHM) system for turbofan engines using NASA C-MAPSS telemetry. Estimates degradation trajectories, Remaining Useful Life (RUL), and delivers maintenance intelligence via a FastAPI REST API and Streamlit cockpit dashboard.',
    result: 'Evaluated against NASA PHM 2008 asymmetric penalty scoring with automated feature engineering pipelines and fleet monitoring.',
    tags: ['Machine Learning', 'NASA C-MAPSS', 'Predictive Maintenance', 'FastAPI', 'Streamlit'],
    link: 'https://github.com/nazrana-nahreen/AeroHealth',
    linkLabel: 'View on GitHub',
  },
]
