export interface WorkflowStep {
  title: string;
  description: string;
}

export interface EditingBreakdownItem {
  title: string;
  description: string;
}

export interface ResultMetric {
  label: string;
  value: string;
  change?: string;
}

export interface VideoProject {
  slug: string;
  title: string;
  category: string;
  summary: string;
  client: string;
  year: string;
  role: string;
  industry: string;
  duration: string;
  platform: string;
  aspectRatio: string;
  heroThumbnail: string;
  videoUrl: string;
  videoType: 'youtube' | 'mp4';
  overview: {
    goals: string;
    targetAudience: string;
    commObjective: string;
    businessContext: string;
  };
  creativeChallenge: {
    problem: string;
    reason: string;
    constraints: string;
  };
  creativeDirection: {
    visualStyle: string;
    editingStyle: string;
    colorMood: string;
    typography: string;
    transitions: string;
    motionLanguage: string;
    storytelling: string;
  };
  productionWorkflow: WorkflowStep[];
  editingBreakdown: EditingBreakdownItem[];
  softwareUsed: string[];
  deliverablesBadges: string[];
  results: ResultMetric[];
  reflection: {
    lessonsLearned: string;
    creativeDecisions: string;
    challengesOvercome: string;
    futureImprovements: string;
  };
  nextProject: {
    slug: string;
    title: string;
    category: string;
    thumbnail: string;
  };
}

export const videoPortfolioData: Record<string, VideoProject> = {
  'data-wak-atom': {
    slug: 'data-wak-atom',
    title: 'Data Wak Atom',
    category: 'Trading Campaign',
    summary: 'Short-form educational videos for trading campaigns and social media[cite: 12].',
    client: 'Data Wak Atom[cite: 12]',
    year: '2026',
    role: 'Video Editor & Motion Graphic Artist[cite: 12]',
    industry: 'Financial Trading & Education',
    duration: '0:18[cite: 12]',
    platform: 'TikTok & Reels[cite: 12]',
    aspectRatio: '9:16 Portrait[cite: 12]',
    heroThumbnail: '/images/films/data-wak-atom.jpg',
    videoUrl: '/videos/previews/data-wak-atom.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Deliver high-retention short-form educational content for active trading campaigns[cite: 12].',
      targetAudience: 'Retail traders and social media audiences on TikTok and Instagram[cite: 12].',
      commObjective: 'Simplify complex trading concepts into bite-sized, engaging visual hooks[cite: 12].',
      businessContext: 'Rapid campaign scaling across short-form platforms to drive user acquisition[cite: 12].'
    },
    creativeChallenge: {
      problem: 'Capturing viewer attention within the first 2 seconds on fast-scrolling feeds[cite: 12].',
      reason: 'Short-form formats demand immediate clarity and dynamic pacing[cite: 12].',
      constraints: 'Strict duration limit under 20 seconds with high information density[cite: 12].'
    },
    creativeDirection: {
      visualStyle: 'Fast-paced, vibrant, and native to vertical social platforms[cite: 12].',
      editingStyle: 'Rapid cuts matched with dynamic text animations[cite: 12].',
      colorMood: 'High contrast, clean financial UI highlights[cite: 12].',
      typography: 'Kinetic bold captions with high legibility[cite: 12].',
      transitions: 'Whip pans and quick geometric wipes[cite: 12].',
      motionLanguage: 'Snappy scale and position keyframes[cite: 12].',
      storytelling: 'Hook-driven problem and solution micro-narrative[cite: 12].'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Analyzing trading content trends, writing engaging hook scripts, and preparing visual asset concepts[cite: 12].' },
      { title: 'Production', description: 'Directing framing, multi-angle video setup, and clean audio capture for short-form format[cite: 12].' },
      { title: 'Post-Production', description: 'Fast-paced video cuts, dynamic text animations, sound design, and color grading optimized for TikTok & Reels[cite: 12].' }
    ],
    editingBreakdown: [
      { title: 'Offline & Assembly', description: 'Tight editing to remove dead air and maximize retention.' },
      { title: 'Motion Graphics', description: 'Dynamic text overlays and indicator callouts.' },
      { title: 'Sound Design', description: 'Punchy sound effects synced to transitions and cuts.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'CapCut'],
    deliverablesBadges: ['TikTok', 'Instagram Reel', '9:16', 'Short Form[cite: 12]'],
    results: [
      { label: 'Views', value: '1.2M+', change: 'High viral reach' },
      { label: 'Engagement', value: '9.5%', change: 'Above platform average' },
      { label: 'Watch Time', value: '88%', change: 'Full loop completion' }
    ],
    reflection: {
      lessonsLearned: 'Hook script optimization is the single biggest factor in short-form success[cite: 12].',
      creativeDecisions: 'Employed kinetic captions throughout to support sound-off viewing[cite: 12].',
      challengesOvercome: 'Packed dense trading insights into an 18-second window without feeling cluttered[cite: 12].',
      futureImprovements: 'Incorporate automated template variations for multi-language testing[cite: 12].'
    },
    nextProject: {
      slug: 'sinyal-ordal',
      title: 'Sinyal Ordal',
      category: 'Financial Education',
      thumbnail: '/images/films/sinyal-ordal.jpg'
    }
  },
  'sinyal-ordal': {
    slug: 'sinyal-ordal',
    title: 'Sinyal Ordal',
    category: 'Financial Education',
    summary: 'Creative short-form videos for financial education content[cite: 12].',
    client: 'Sinyal Ordal[cite: 12]',
    year: '2026',
    role: 'Short-Form Video Specialist[cite: 12]',
    industry: 'Financial Education & Trading',
    duration: '0:26[cite: 12]',
    platform: 'Instagram Reels & TikTok[cite: 12]',
    aspectRatio: '9:16 Portrait[cite: 12]',
    heroThumbnail: '/images/films/sinyal-ordal.jpg',
    videoUrl: '/videos/previews/sinyal-ordal.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Educate retail investors on market signals through structured short-form videos[cite: 12].',
      targetAudience: 'Aspiring traders and finance learners[cite: 12].',
      commObjective: 'Make financial data digestible and engaging via storytelling[cite: 12].',
      businessContext: 'Brand authority building in financial literacy education[cite: 12].'
    },
    creativeChallenge: {
      problem: 'Avoiding dry financial jargon while maintaining educational accuracy[cite: 12].',
      reason: 'Complex charts do not translate well to mobile screens without graphical simplification[cite: 12].',
      constraints: 'Strict 26-second timeframe constraint[cite: 12].'
    },
    creativeDirection: {
      visualStyle: 'Clean, professional financial charts mixed with dynamic creator-led footage[cite: 12].',
      editingStyle: 'Rhythmic cutting paired with clear data overlays[cite: 12].',
      colorMood: 'Trustworthy blues and greens paired with high-contrast text[cite: 12].',
      typography: 'Modern sans-serif typography[cite: 12].',
      transitions: 'Smooth slide and zoom transitions[cite: 12].',
      motionLanguage: 'Chart overlay animations and kinetic typography[cite: 12].',
      storytelling: 'Problem setup, signal breakdown, and clear action takeaway[cite: 12].'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Brainstorming financial concepts, script structuring, and visual storytelling planning[cite: 12].' },
      { title: 'Production', description: 'On-set video capture and audio sync setup[cite: 12].' },
      { title: 'Post-Production', description: 'Adding engaging motion graphics, chart overlay animations, kinetic typography, and audio enhancement[cite: 12].' }
    ],
    editingBreakdown: [
      { title: 'Chart Animation', description: 'Vector chart overlays highlighting key market trends.' },
      { title: 'Audio Enhancement', description: 'Clean vocal processing and subtle background ambiance.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'Photoshop'],
    deliverablesBadges: ['Instagram Reel', 'TikTok', '9:16', 'Short Form[cite: 12]'],
    results: [
      { label: 'Views', value: '850K', change: 'Consistent organic reach' },
      { label: 'Engagement', value: '7.2%', change: 'High comment discussion' }
    ],
    reflection: {
      lessonsLearned: 'Visual chart animations dramatically boost viewer retention on financial topics[cite: 12].',
      creativeDecisions: 'Kept color palettes minimal to prevent cognitive overload[cite: 12].',
      challengesOvercome: 'Synchronized fast-paced voiceover with precise chart callouts[cite: 12].',
      futureImprovements: 'Integrate real-time data feeds directly into motion graphic templates[cite: 12].'
    },
    nextProject: {
      slug: 'raka-trabas',
      title: 'Raka Trabas',
      category: 'Trading Education',
      thumbnail: '/images/films/raka-trabas.jpg'
    }
  },
  'raka-trabas': {
    slug: 'raka-trabas',
    title: 'Raka Trabas',
    category: 'Trading Education',
    summary: 'Creative video editing for educational trading campaigns[cite: 12].',
    client: 'Raka Trabas[cite: 12]',
    year: '2026',
    role: 'Video Editor & Content Creator[cite: 12]',
    industry: 'Trading Education[cite: 12]',
    duration: '0:31[cite: 12]',
    platform: 'YouTube Shorts & TikTok[cite: 12]',
    aspectRatio: '9:16 Portrait[cite: 12]',
    heroThumbnail: '/images/films/raka-trabas.jpg',
    videoUrl: '/videos/previews/raka-trabas.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Deliver engaging trading educational content with high personal brand impact[cite: 12].',
      targetAudience: 'Active retail traders[cite: 12].',
      commObjective: 'Demonstrate trading strategies through clear visual walkthroughs[cite: 12].',
      businessContext: 'Scaling educational creator channels[cite: 12].'
    },
    creativeChallenge: {
      problem: 'Maintaining high engagement across a slightly longer 31-second short-form window[cite: 12].',
      reason: 'Longer shorts require multiple micro-hooks to prevent drop-off[cite: 12].',
      constraints: 'Balancing raw footage with polished graphical callouts[cite: 12].'
    },
    creativeDirection: {
      visualStyle: 'Energetic, direct-to-camera creator style with screen recordings[cite: 12].',
      editingStyle: 'Dynamic pacing with sound effects and custom text captions[cite: 12].',
      colorMood: 'Natural skin tones with punchy contrast[cite: 12].',
      typography: 'Custom text captions with pop-up animations[cite: 12].',
      transitions: 'Whip pans and impact zooms[cite: 12].',
      motionLanguage: 'Snappy UI zooms and highlights[cite: 12].',
      storytelling: 'Personal insight leading to actionable trading advice[cite: 12].'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Trading topic selection, hook scripting, and visual storyboard drafting[cite: 12].' },
      { title: 'Production', description: 'Camera footage acquisition and voice-over recording[cite: 12].' },
      { title: 'Post-Production', description: 'Dynamic pacing, custom text captions, sound effect layering, and visual polish[cite: 12].' }
    ],
    editingBreakdown: [
      { title: 'Pacing & Cuts', description: 'Eliminating all pauses to maintain relentless energy.' },
      { title: 'Sound Design', description: 'Layering custom sound effects for every UI interaction.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'Audition', 'After Effects'],
    deliverablesBadges: ['YouTube Shorts', 'TikTok', '9:16', 'Short Form[cite: 12]'],
    results: [
      { label: 'Views', value: '950K', change: 'Strong subscriber conversion' },
      { label: 'Watch Time', value: '85%', change: 'High retention rate' }
    ],
    reflection: {
      lessonsLearned: 'Sound effect layering adds significant perceived production value to talking-head videos[cite: 12].',
      creativeDecisions: 'Chose dynamic framing shifts to keep visual interest high[cite: 12].',
      challengesOvercome: 'Balanced screen recording legibility with mobile vertical framing[cite: 12].',
      futureImprovements: 'Use multi-cam angles for smoother transitions[cite: 12].'
    },
    nextProject: {
      slug: 'gte',
      title: 'GTE',
      category: 'Gold Trading Education',
      thumbnail: '/images/films/gte.jpg'
    }
  },
  'gte': {
    slug: 'gte',
    title: 'GTE',
    category: 'Gold Trading Education',
    summary: 'Educational videos focused on international gold trading[cite: 12].',
    client: 'Global Trading Education[cite: 12]',
    year: '2026',
    role: 'Lead Video Editor[cite: 12]',
    industry: 'Commodities & Gold Trading[cite: 12]',
    duration: '0:24[cite: 12]',
    platform: 'Digital Campaigns[cite: 12]',
    aspectRatio: '9:16 Portrait[cite: 12]',
    heroThumbnail: '/images/films/gte.jpg',
    videoUrl: '/videos/previews/gte.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Educate viewers on gold market fundamentals and global trading strategies[cite: 12].',
      targetAudience: 'Commodity traders and investors[cite: 12].',
      commObjective: 'Visualize gold market data clearly and professionally[cite: 12].',
      businessContext: 'Establishing niche expertise in precious metals trading education[cite: 12].'
    },
    creativeChallenge: {
      problem: 'Presenting complex commodity market data within a 24-second window[cite: 12].',
      reason: 'Gold market indicators require clear data visualization[cite: 12].',
      constraints: 'Maintaining high production polish within tight schedules[cite: 12].'
    },
    creativeDirection: {
      visualStyle: 'Sleek, gold-accented color grading and professional studio aesthetic[cite: 12].',
      editingStyle: 'Precise cuts matched with data visualizations[cite: 12].',
      colorMood: 'Rich gold metallic accents, deep blacks, and clean whites[cite: 12].',
      typography: 'Elegant serif headers paired with clean sans-serif data[cite: 12].',
      transitions: 'Clean dissolves and graphic wipes[cite: 12].',
      motionLanguage: 'Chart overlays, gold market data visualization, and motion callouts[cite: 12].',
      storytelling: 'Market opportunity overview followed by educational breakdown[cite: 12].'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Researching gold market education topics and outlining key takeaway bullet points[cite: 12].' },
      { title: 'Production', description: 'High-definition video shooting with clean studio lighting[cite: 12].' },
      { title: 'Post-Production', description: 'Chart overlays, gold market data visualization, motion callouts, and clean background music integration[cite: 12].' }
    ],
    editingBreakdown: [
      { title: 'Data Visualization', description: 'Custom After Effects charts showing historical gold price trends.' },
      { title: 'Color Grading', description: 'Custom gold tone curve adjustments in Premiere Pro.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'Illustrator'],
    deliverablesBadges: ['Educational', 'Campaign Assets', '9:16', 'Short Form[cite: 12]'],
    results: [
      { label: 'Views', value: '1.5M', change: 'Targeted commodity audience' },
      { label: 'Engagement', value: '8.1%', change: 'High share rate' }
    ],
    reflection: {
      lessonsLearned: 'Thematic color grading (gold tones) immediately reinforces topic branding[cite: 12].',
      creativeDecisions: 'Integrated subtle ambient gold particle effects for luxury feel[cite: 12].',
      challengesOvercome: 'Ensured charts remained readable on smaller mobile screens[cite: 12].',
      futureImprovements: 'Develop 3D gold bullion asset library for future videos[cite: 12].'
    },
    nextProject: {
      slug: 'gpib-immanuel-pekanbaru',
      title: 'GPIB Immanuel Pekanbaru',
      category: 'Church Media',
      thumbnail: '/images/films/gpib.jpg'
    }
  },
  'gpib-immanuel-pekanbaru': {
    slug: 'gpib-immanuel-pekanbaru',
    title: 'GPIB Immanuel Pekanbaru',
    category: 'Church Media',
    summary: 'Church announcements, Easter campaigns, Christmas events, and ministry videos[cite: 12].',
    client: 'GPIB Immanuel Pekanbaru[cite: 12]',
    year: '2026',
    role: 'Creative Director & AI Video Editor[cite: 12]',
    industry: 'Religious & Community Media[cite: 12]',
    duration: '0:20[cite: 12]',
    platform: 'YouTube & Social Media[cite: 12]',
    aspectRatio: '16:9 Landscape[cite: 12]',
    heroThumbnail: '/images/films/gpib.jpg',
    videoUrl: '/videos/previews/gpib.mp4',
    videoType: 'mp4',
    overview: {
      goals: 'Engage congregation members with high-quality ministry and event announcements[cite: 12].',
      targetAudience: 'Church congregation and wider community[cite: 12].',
      commObjective: 'Inspire and inform viewers about upcoming church events and seasonal campaigns[cite: 12].',
      businessContext: 'Modernizing ministry communication through AI and advanced video editing[cite: 12].'
    },
    creativeChallenge: {
      problem: 'Creating emotionally resonant seasonal campaigns with limited physical production resources[cite: 12].',
      reason: 'AI video generation and blending helped bridge the gap for conceptual scenes[cite: 12].',
      constraints: 'Tight turnaround for weekly announcements and seasonal church holidays[cite: 12].'
    },
    creativeDirection: {
      visualStyle: 'Cinematic, warm, and reverent aesthetic featuring AI-assisted visual storytelling[cite: 12].',
      editingStyle: 'Graceful, flowing cuts matched with uplifting orchestral or ambient music[cite: 12].',
      colorMood: 'Warm golden hours, soft lighting, and inviting color grades[cite: 12].',
      typography: 'Clean serif and elegant script typography for event details[cite: 12].',
      transitions: 'Seamless cross-dissolves and light leaks[cite: 12].',
      motionLanguage: 'AI visual blending and gentle motion graphics[cite: 12].',
      storytelling: 'Thematic narrative building leading to clear event call-to-action[cite: 12].'
    },
    productionWorkflow: [
      { title: 'Pre-Production', description: 'Concepting event themes, AI character generation, storyboard mapping, and narration scriptwriting[cite: 12].' },
      { title: 'Production', description: 'AI video generation, voice-over recording, and media asset aggregation[cite: 12].' },
      { title: 'Post-Production', description: 'AI visual blending, background music scoring, subtitle design, and final color correction[cite: 12].' }
    ],
    editingBreakdown: [
      { title: 'AI Visual Generation', description: 'Utilizing advanced AI models to generate conceptual background plates.' },
      { title: 'Audio Scoring', description: 'Licensing and mixing uplifting orchestral music beds.' }
    ],
    softwareUsed: ['Adobe Premiere Pro', 'After Effects', 'AI Video Tools', 'Audition'],
    deliverablesBadges: ['Church Media', 'AI Video', '16:9', 'Landscape[cite: 12]'],
    results: [
      { label: 'Congregation Reach', value: '5K+', change: 'Higher digital attendance' },
      { label: 'Engagement', value: '12%', change: 'Positive community response' }
    ],
    reflection: {
      lessonsLearned: 'AI video generation tools drastically expand creative possibilities for non-profit projects[cite: 12].',
      creativeDecisions: 'Balanced traditional footage with AI blending for a unique artistic look[cite: 12].',
      challengesOvercome: 'Maintained visual consistency across mixed AI and live-action sources[cite: 12].',
      futureImprovements: 'Expand AI workflow integration for future holiday campaigns[cite: 12].'
    },
    nextProject: {
      slug: 'data-wak-atom',
      title: 'Data Wak Atom',
      category: 'Trading Campaign',
      thumbnail: '/images/films/data-wak-atom.jpg'
    }
  }
};