export const links = {
  github: 'https://github.com/JojoTheWarrior', linkedin: 'https://www.linkedin.com/in/jojothewarrior/', email: 'mailto:j2975wan@uwaterloo.ca',
  codeforces: 'https://codeforces.com/profile/JojoTheWarrior', dmoj: 'https://dmoj.ca/user/JojoTheWarrior',
};
export const projects = [
  {
    slug: 'kingdom', name: 'Kingdom', year: '2026', kind: 'HackMIT', note: 'Cognition sponsor prize · HackMIT 2026',
    description: 'A little kingdom with a lot of questions. Send research agents on missions and watch the findings come back.',
    image: '/images/kingdom.png', alt: 'Kingdom’s pixel-art island, with a castle and little buildings representing research missions', tools: ['Python', 'Devin', 'React', 'Pygame'],
    links: [{ label: 'GitHub', href: 'https://github.com/JojoTheWarrior/kingdom' }],
    intro: 'What if running a research project felt a bit like building a kingdom?',
    paragraphs: [
      'Kingdom sends agents out to investigate questions across datasets, then brings their work back as reports and visualizations. The pixel-art dashboard turns those missions into a small, growing world: huts for work in progress, monuments for completed runs, and a castle to look through it all.',
      'We built it at HackMIT, where it picked up the Cognition sponsor prize. Underneath the game-like surface is a research workflow for connecting data, testing hypotheses, and following up on what the results actually say.',
    ],
    detailTitle: 'Behind the castle', detail: 'Research missions can compare indicators, look for lagged relationships, and produce charts alongside their findings. The web interface lets you follow a mission as it runs and steer it with follow-up questions.',
  },
  {
    slug: 'chatgpme', name: 'ChatGPMe', year: '2024', kind: 'Hack the North', note: 'Finalist · Hack the North 2024',
    description: 'Your turn to be the chatbot. An Overcooked-inspired game about answering everyone’s questions at once.',
    image: '/images/chatgpme.png', alt: 'ChatGPMe’s illustrated game thumbnail', tools: ['Unity', 'C#', 'JavaScript', 'Cohere'],
    links: [{ label: 'GitHub', href: 'https://github.com/JojoTheWarrior/ChatGPMe' }, { label: 'Devpost', href: 'https://devpost.com/software/chatgpme' }],
    intro: 'We made a game where you do the chatbot’s job.',
    paragraphs: [
      'Requests keep arriving, the timer keeps ticking, and you have to type the answers. ChatGPMe takes the frantic multitasking of Overcooked and puts you on the other side of an AI conversation.',
      'I worked on the backend that scores responses and the typing interaction in Unity. We built it together at Hack the North 2024 and made the finals.',
    ],
    detailTitle: 'A very busy chatbot', detail: 'Players juggle questions while a Cohere-powered backend evaluates their answers. Unity handles the game world, characters, and the increasingly busy queue of requests.',
  },
  {
    slug: 'syllavise', name: 'Syllavise', year: '2025–', kind: 'App', note: 'Built with my roommates',
    description: 'Upload your syllabi. Keep track of the deadlines. An app to make the semester a little less scattered.',
    image: '/images/syllavise.png', alt: 'Syllavise dashboard showing courses, grades, and upcoming assignments', tools: ['Next.js', 'TypeScript', 'Supabase'],
    links: [{ label: 'Website', href: 'https://www.syllavise.com/' }, { label: 'App Store', href: 'https://apps.apple.com/us/app/syllavise/id6797568122' }],
    intro: 'For the part of school that’s just figuring out what’s due.',
    paragraphs: [
      'Syllavise turns uploaded syllabi into a place to keep track of coursework, assignments, and deadlines. It also helps students keep an eye on their grades throughout the semester.',
      'I’ve been working on it with my roommates, handling frontend development with Next.js and database work with Supabase. It’s available on the App Store.',
    ],
    detailTitle: 'A home for the semester', detail: 'The app brings syllabus parsing, upcoming tasks, and grade tracking together. It’s contract work, so the source code is private; the website and App Store are the places to check it out.',
  },
];
const repo = (name, path = '', branch = 'main') => `https://github.com/JojoTheWarrior/${name}${path ? `/blob/${branch}/${path}` : ''}`;
export const algorithms = [
  { name: 'Min-cost max-flow', category: 'Graphs', description: 'Flow networks with costs, for assignment and optimization problems.', source: 'mcmf', href: repo('mcmf', 'mcmf.cpp') },
  { name: 'Rollback union-find', category: 'Data structures', description: 'A disjoint-set structure with undo, useful for offline connectivity.', source: 'rollback_union_find', href: repo('rollback_union_find', 'rollback.cpp') },
  { name: 'Half-plane intersection', category: 'Geometry', description: 'Intersect half-planes to find the convex region they share.', source: 'half_plane_intersection', href: repo('half_plane_intersection', 'half_plane_intersection.cpp', 'master') },
  { name: 'Rotating calipers', category: 'Geometry', description: 'Sweep around a convex polygon to work with distances and antipodal pairs.', source: 'rotating_calipers', href: repo('rotating_calipers', 'rotating_calipers.cpp') },
  { name: 'Point location', category: 'Geometry', description: 'Point-location code kept alongside my flow and geometry notes.', source: 'mcmf', href: repo('mcmf', 'point_loc.cpp') },
  { name: 'Fast Fourier transform', category: 'Math', description: 'Polynomial multiplication using the FFT.', source: 'fastfouriertransform', href: repo('fastfouriertransform', 'main.cpp') },
  { name: 'Matrix determinant', category: 'Math', description: 'A determinant implementation for the linear-algebra corner of the notebook.', source: 'mcmf', href: repo('mcmf', 'mat/det.cpp') },
  { name: 'Li Chao tree', category: 'Data structures', description: 'Keep a collection of lines and query the best one at a point.', source: 'mcmf', href: repo('mcmf', 'cht/li_chao.cpp') },
  { name: 'Lyndon factorization', category: 'Strings', description: 'Split strings into Lyndon words.', source: 'mcmf', href: repo('mcmf', 'lyndon/lyndon.cpp') },
  { name: 'Suffix automaton', category: 'Strings', description: 'A compact structure for working with substrings.', source: 'mcmf', href: repo('mcmf', 'sam/sam.cpp') },
  { name: 'Suffix array', category: 'Strings', description: 'Sort suffixes for string-processing problems.', source: 'mcmf', href: repo('mcmf', 'sam/suffix_array.cpp') },
];
export const collections = [
  { name: 'The mixed notebook', description: 'Flow, strings, geometry, and reference notes for Burnside’s lemma and Knuth optimization.', href: repo('mcmf') },
  { name: 'ICPC Winter Challenge', description: 'Notes and experiments from the 2025 online challenge, working on optical network connections.', href: repo('huawei_oxc') },
];
