const data = [
  {
    client: 'syfy',
    project: {
      name: 'hunters',
      type: 'case-study',
      subtitle: 'interactive experience',
    },
    template: {
      name: 'Hunters',
      services: ['ui/ux', 'web design', 'motion design', 'audio design', 'web development'],
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
      results: {
        template: 'Standard',
        deviceImage: '',
        stats: [
          {label: 'Twitter impressions', stat: '2B'},
          {label: 'Trending topic (US)', stat: '#1'},
          {label: 'Trending topic (global)', stat: '#2'},
          {label: 'Video views', stat: '6M'}
        ],
      },
      about: {
        copy: '<p>A cross between gritty crime drama and sci-fi thriller, Hunters comes from executive producers Gale Anne Hurd (The Walking Dead, The Terminator trilogy) and Natalie Chaidez (12 Monkeys, Heroes). Utilizing emerging web technologies like WebGL and ThreeJS, Glow worked in collaboration with Syfy to create an innovative interactive experience bringing the world of Hunters to life. Over the course of 13 weeks, custom created content was “leaked” through the site, giving fans the opportunity to dive into the show in a unique way.</p>'
      }
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
    },
  }
];




contentSections: [
{
	type: 'copy',
	headline: 'Web Development',
	copy: 'this is the copy'
},

{
	type: 'video',
	headline: 'cool video',
	videoUrl: 'http',
	videoDescription: 'sldfkjas;ldfkjas;ldfja;slkdfja;lsdkjf'
},

{
	type: 'image-gallery',
	images: ['image1.jpg', 'image2.jpg', 'image3.jpg']
}


]