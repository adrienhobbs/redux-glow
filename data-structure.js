const data = [
  {
    client: 'syfy',
    project: 'Hunters',
    subtitle: 'interactive experience',
    colors: {
      copy:                '',
      headline:            '',
      lockupProjectTitle:  '',
      backbar:             '',
      stat:                '#ffffff',
      statLabel:           '#7d2f37',
      resultsBg:           '#e3e3d7',
      sidebarLogo:         '#203A4C',
      sidebarCopy:         '#556169',
      sidebarHeadline:     '#1f3a4d',
      shareButtonStroke:   '',
      shareButtonCopy:     ''
    },
    featured: {
      homepageByline: '',
      colors: {
        primary: '',
        secondary: '',
        gradientTop: '',
        gradientBottom: '',
        lockupTitle: '',
        lockupShape: '',
        mobileBgColor: ''
      },
      assets: {
        lockupClass: '',
        backgrounds: {
          landscape: '',
          portrait: '',
          video: ''
        },
      }
    }
  }
];




contentSections: [
  {
    type: 'about',
    description: '<p>A cross between gritty crime drama and sci-fi thriller, Hunters comes from executive producers Gale Anne Hurd (The Walking Dead, The Terminator trilogy) and Natalie Chaidez (12 Monkeys, Heroes). Utilizing emerging web technologies like WebGL and ThreeJS, Glow worked in collaboration with Syfy to create an innovative interactive experience bringing the world of Hunters to life. Over the course of 13 weeks, custom created content was “leaked” through the site, giving fans the opportunity to dive into the show in a unique way.</p>'
    services: ['ui/ux', 'web design', 'motion design', 'audio design', 'web development'],
  },
  {
    type: 'results',
    template: 'Standard', // standard, device
    deviceImage: '',
    stats: [
      {label: 'Twitter impressions', stat: '2B'},
      {label: 'Trending topic (US)', stat: '#1'},
      {label: 'Trending topic (global)', stat: '#2'},
      {label: 'Video views', stat: '6M'}
    ],
  },

  {
    type: 'opening-paragraph',
    headline: 'Web Development',
    copy: 'this is the copy'
  },

  {
    type: 'gallery',
    items: [
      {type: 'image', className: 'full-width', src: 'image1.jpg'},
      {type: 'looping-video', className: 'half-width', src: 'image2.jpg'}
      {type: 'image', className: 'half-width', src: 'image3.jpg'}
    ]
  },

  {
    type: 'video',
    headline: 'cool video',
    videoUrl: 'http',
    videoDescription: 'sldfkjas;ldfkjas;ldfja;slkdfja;lsdkjf'
  },

  {
    type: 'paragraph',
    copy: 'Consectetur eius hic at eius laboriosam consequuntur nulla, deleniti. Esse aliquam exercitationem quas ipsa sequi consectetur architecto quis qui, officia praesentium? Laboriosam amet dignissimos veniam dolorum aperiam eos similique! Dolorum.'
  }

]
