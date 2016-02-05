// import React from 'react';
const s3 = 'https://s3.amazonaws.com/weareglow-assets/';
const data = [
  // {
  //   featured: true,
  //   title: 'Intro Video',
  //   home: true,
  //   type: 'video',
  //   video: 'https://s3.amazonaws.com/weareglow-assets/assets/video/Glow_Website_Animatic.mp4',
  //   logoColor: '#f12d5c',
  //   gradientTop: '#c03d3b',
  //   gradientBottom: '#0e374a',
  //   cat: ' ― glow hq ― '
  // },
  //
  {
    featured: true,
    client: 'carla hall',
    project: 'southern kitchen',
    title: 'southern kitchen',
    subtitle: 'kickstarter campaign',
    subtitleSlug: 'kickstarter campaign',
    type: 'case-study',
    infoPath: s3 + 'case-studies/carla-hall/southern-kitchen/logo-title.svg',
    backgroundImageUrl: s3 + 'case-studies/carla-hall/southern-kitchen/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/carla-hall/southern-kitchen/portrait.jpg',
    logoColor: '#ed0f77',
    secColor: '#ffffff',
    gradientTop: '#ed0f77',
    gradientBottom: '#ffffff',
    shapeColor: '#ed0f77',
    headlineColor: '#ed0f77',
    copyColor: '#000000',
    cat: '― carla hall ―',
    services: ['community management', 'video production', 'social content'],
    fullScreenBgImg: s3 + 'case-studies/carla-hall/southern-kitchen/video-04.jpg',
    lockup: {
      className: 'carla-lockup'
    },
    backbar: {
      bgColor: '#ed0f77'
    },
    results: {
      stats: [{label: 'Facebook followers', stat: '+89%'}, {label: 'Facebook followers', stat: '+286%'}, {label: 'Twitter followers', stat: '+35%'}],
      statColor: '#000000',
      statLabelColor: '#ed0f77'
      // customHtml: <div class='info-box'> testing </div>
    },
    templateName: 'SouthernKitchen',
    sidebar: {
      logoColor: '#4d4d4d',
      copyColor: '#4d4d4d',
      headlineColor: '#4d4d4d'
    },
    shareButton: {
      strokeColor: '#ed0f77',
      copyColor: '#4d4d4d'
    },
    mobile: {
      bgColor: '#c3c3c3',
      summaryCopyColor: '#000000'
    },
    aboutCopy: '<p>GLOWs relationship with celebrity chef Carla Hall from ABC’s “The Chew” began with a conversation around launching a Kickstarter campaign to raise funds to support her life long dream of opening her own restaurant, <i>Carla Hall’s Southern Kitchen.</i></p> <p>GLOW laid out a strategy that began with a complete social refresh of all of Carla’s social profiles to ignite and strengthen her base before we kicked off her Kickstarter campaign.</p>'
  },
  // {
  //   featured: false,
  //   client: 'hulu',
  //   project: 'mindy',
  //   title: 'the mindy project',
  //   subtitle: 'social media campaign',
  //   subtitleSlug: 'social media campaign',
  //   type: 'case-study',
  //   infoPath: s3 + 'case-studies/hulu/mindy-project/logo-title.svg',
  //   backgroundImageUrl: s3 + 'case-studies/hulu/mindy-project/landscape.jpg',
  //   backgroundImageUrlVert: s3 + 'case-studies/hulu/mindy-project/landscape.jpg',
  //   logoColor: '#e70062',
  //   secColor: '#18d4ff',
  //   gradientTop: '#e70062',
  //   gradientBottom: '#18d4ff',
  //   clientLogoColor: '#6eb116',
  //   headlineColor: '#e70062',
  //   copyColor: '#000',
  //   featuredProjectTitleColor: '#e70062',
  //   cat: ' ― hulu | mindy ― ',
  //   templateName: 'Mindy',
  //   results: {
  //     stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
  //     statColor: '#ffffff',
  //     statLabelColor: '#e70662',
  //     bgColor: '#00C1E8'
  //   },
  //   services: ['community management', 'video production', 'social content'],
  //   recognition: ['short award finalist', 'best twitter campaign'],
  //   lockup: {
  //     className: 'mindy-lockup',
  //     logoColor: '#73B100'
  //   },
  //   sidebar: {
  //     logoColor: '#129fbf',
  //     copyColor: '#129fbf',
  //     headlineColor: '#fff'
  //   },
  //   shareButton: {
  //     strokeColor: '#fff',
  //     copyColor: '#fff'
  //   },
  //   endShape: {
  //     bgColor: '#00CAFF'
  //   },
  //   backbar: {
  //     bgColor: '#e70062'
  //   }
  // },
  // {
  //   featured: false,
  //   client: 'hulu',
  //   project: 'casual',
  //   title: 'casual',
  //   subtitle: 'social media campaign',
  //   subtitleSlug: 'social media campaign',
  //   type: 'case-study',
  //   infoPath: s3 + 'case-studies/hulu/casual/logo-title.svg',
  //   backgroundImageUrl: s3 + 'case-studies/hulu/casual/landscape.jpg',
  //   backgroundImageUrlVert: s3 + 'case-studies/hulu/casual/landscape.jpg',
  //   logoColor: '#68ae34',
  //   secColor: '#5f6e8d',
  //   gradientTop: '#68ae34',
  //   gradientBottom: '#5f6e8d',
  //   featuredProjectTitleColor: '#68ae34',
  //   clientLogoColor: '#6eb116',
  //   headlineColor: '#ffffff',
  //   cat: ' ― hulu | casual ― ',
  //   templateName: 'Casual',
  //   results: {
  //     stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
  //     statColor: '#ffffff',
  //     statLabelColor: '#6eb116',
  //     bgColor: '#4C5772'
  //   },
  //   lockup: {
  //     className: 'casual-lockup',
  //     logoColor: '#73B100'
  //   },
  //   services: ['community management', 'video production', 'social content'],
  //   recognition: ['short award finalist', 'best twitter campaign'],
  //   sidebar: {
  //     logoColor: '#3C465D',
  //     copyColor: '#3C465D',
  //     headlineColor: '#fff'
  //   },
  //   shareButton: {
  //     strokeColor: '#fff',
  //     copyColor: '#fff'
  //   },
  //   backbar: {
  //     bgColor: '#6eb116'
  //   },
  //   endShape: {
  //     bgColor: '#4C5772'
  //   }
  // },
  {
    featured: true,
    client: 'hbo',
    project: 'veep',
    title: 'veep',
    subtitle: 'seasons 2-3-4 social & media campaigns',
    subtitleSlug: 'social & media campaigns',
    type: 'case-study',
    infoPath: s3 + 'case-studies/hbo/veep/logo-title.svg',
    backgroundImageUrl: s3 + 'case-studies/hbo/veep/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/hbo/veep/portrait.jpg',
    logoColor: '#c03d3b',
    secColor: '#0e374a',
    gradientTop: '#c03d3b',
    gradientBottom: '#0e374a',
    featuredProjectTitleColor: '#c03d3b',
    cat: ' ― hbo | veep ― ',
    templateName: 'Veep',
    copyColor: '#ffffff',
    headlineColor: '#ffffff',
    services: ['social strategy', 'community management', 'media campaign', 'asset creation'],
    sidebar: {
      logoColor: '#ffffff',
      copyColor: '#577381',
      headlineColor: '#ffffff'
    },
    backbar: {
      bgColor: '#c03d3b'
    },
    shareButton: {
      strokeColor: '#C03D3B',
      copyColor: '#ffffff'
    },
    mobile: {
      bgColor: '#0e374a',
      summaryCopyColor: '#000000'
    },

    lockup: {
      className: 'veep-lockup',
      projectColor: '#fff',
      featured: {
        projectColor: '#BE4138'
      }
    },
    results: {
      stats: [
        {label: 'Twitter buzz increase', stat: '+76%'},
        {label: 'Pieces of custom content', stat: '1500+'},
        {label: 'increase in social volume', stat: '+53%'},
        {label: 'tweeting premieres w/ custom content RT', stat: 'live'},
        {label: 'Robocall texts exchanged', stat: '40k'},
        {label: 'GIF on Tumblr w/ reblog from founder David Karp', stat: 'viral'},
        {label: 'Twitter mentions from top social influencers', stat: '20'},
        {label: 'Twitter buzz increase', stat: '??'}
      ],
      statColor: '#ffffff',
      statLabelColor: '#C03D3B',
      bgColor: '#0A2C3A'
    },

    endShape: {
      bgColor: '#0A2C3A'
    }
  },
  {
    featured:                   false,
    client:                     'syfy',
    project:                    '12-Monkeys',
    title:                      '12-Monkeys',
    subtitle:                   'integrated campaign',
    subtitleSlug:               'integrated campaign',
    type:                       'case-study',
    infoPath:                   s3 + 'case-studies/syfy/12-monkeys/logo-title.svg',
    backgroundImageUrl:         s3 + 'case-studies/syfy/12-monkeys/landscape.jpg',
    backgroundImageUrlVert:     s3 + 'case-studies/syfy/12-monkeys/landscape.jpg',
    logoColor:                  '#551313',
    secColor:                   '#1d1d1d',
    gradientTop:                '#c03d3b',
    gradientBottom:             '#0e374a',
    featuredProjectTitleColor:  '#c03d3b',
    cat:                        '― 12 | Monkeys  ―',
    templateName:               'TwelveMonkeys',
    copyColor:                  '#ffffff',
    headlineColor:              '#949494',
    services:                   ['social strategy', 'community management', 'media campaign', 'asset creation'],
    sidebar: {
      logoColor:      '#ffffff',
      copyColor:      '#727272',
      headlineColor:  '#ffffff'
    },
    lockup: {
      className: '12-monkeys-lockup'
    },
    backbar: {
      bgColor: '#551313'
    },
    shareButton: {
      strokeColor:  '#551313',
      copyColor:    '#ffffff'
    },
    mobile: {
      bgColor:           '#0e374a',
      summaryCopyColor:  '#000000'
    },
    results: {
      stats: [
        {label: 'Twitter buzz increase', stat: '+76%'},
        {label: 'Pieces of custom content', stat: '1500+'},
        {label: 'increase in social volume', stat: '+53%'},
        {label: 'tweeting premieres w/ custom content RT', stat: 'live'},
        {label: 'Robocall texts exchanged', stat: '40k'},
        {label: 'GIF on Tumblr w/ reblog from founder David Karp', stat: 'viral'},
        {label: 'Twitter mentions from top social influencers', stat: '20'},
        {label: 'Twitter buzz increase', stat: '??'}
      ],
      statColor:       '#ffffff',
      statLabelColor:  '#551313',
      bgColor:         '#171717'
    },

    endShape: {
      bgColor: '#171717'
    }
  },
  {
    featured: false,
    client: 'tnt',
    project: 'proof',
    title: 'proof',
    subtitle: 'media campaign',
    subtitleSlug: 'media campaign',
    type: 'case-study',
    infoPath: s3 + 'case-studies/tnt/proof/logo-title.svg',
    backgroundImageUrl: s3 + 'case-studies/tnt/proof/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/tnt/proof/landscape.jpg',
    logoColor: '#82b3dc',
    secColor: '#ffffff',
    copyColor: '#000000',
    gradientTop: '#82b3dc',
    gradientBottom: '#ffffff',
    shapeColor: '#82b3dc',
    cat: ' ― tnt | proof ― ',
    logo: 'HBO_logo.svg',
    templateName: 'Proof',
    services: ['social strategy', 'community management', 'video production'],
    backbar: {
      bgColor: '#82b3dc'
    },
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#000000',
      bgColor: '#c3c3c3'
    },
    sidebar: {
      logoColor: '#aaa',
      copyColor: '#aaa',
      headlineColor: '#000'
    },
    shareButton: {
      strokeColor: '#82b3dc',
      copyColor: '#000'
    },
    mobile: {
      bgColor: '#82b3dc',
      summaryCopyColor: '#000000'
    },
    lockup: {
      className: 'proof-lockup'
    },
    endShape: {
      bgColor: '#82b3dc'
    }
  },
  {
    featured: false,
    client: 'ILNY',
    project: 'social retainer',
    title: 'social retainer',
    subtitle: 'social agency of record',
    subtitleSlug: 'social agency of record',
    type: 'case-study',
    infoPath: s3 + 'case-studies/iloveny/social-retainer/logo-title.svg',
    backgroundImageUrl: s3 + 'case-studies/iloveny/social-retainer/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/iloveny/social-retainer/landscape.jpg',
    logoColor: '#d52027',
    secColor: '#1d1d1d',
    gradientTop: '#d52027',
    gradientBottom: '#1d1d1d',
    cat: ' ― ilny | aor ― ',
    services: ['community management', 'video production', 'social content'],
    templateName: 'ILNY',
    headlineColor: '#d52027',
    backbar: {
      bgColor: '#d52027'
    },
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#d52027',
      bgColor: '#171717'
    },
    sidebar: {
      // logoColor: '#aaa',
      copyColor: '#616161',
      headlineColor: '#fff'
    },
    shareButton: {
      strokeColor: '#d52027',
      copyColor: '#ffffff'
    },
    lockup: {
      className: 'ilny-lockup'
    },
    mobile: {
      bgColor: '#82b3dc',
      summaryCopyColor: '#000000'
    },
    endShape: {
      bgColor: '#171717'
    }
  },
  // {
  //   featured: false,
  //   client: 'syfy',
  //   project: 'ascension',
  //   title: 'ascension',
  //   subtitle: 'instagram campaign',
  //   type: 'case-study',
  //   infoPath: s3 + 'case-studies/syfy/ascension/Glow_Featured_Ascension.svg',
  //   backgroundImageUrl: s3 +  'case-studies/syfy/ascension/Ascension_Image.jpg',
  //   backgroundImageUrlVert: s3 + 'case-studies/syfy/ascension/Glow_Home_Ascension_Vertical.jpg',
  //   logoColor: '#00838b',
  //   secColor: '#54325b',
  //   gradientTop: '#54325b',
  //   gradientBottom: '#00838b',
  //   cat: ' ― syfy | ascension ― ',
  //   services: ['community management', 'video production', 'social content']
  // },
  {
    featured: false,
    client: 'cn',
    project: 'winter calendar',
    title: 'winter calendar',
    subtitle: 'facebook experience',
    subtitleSlug: 'facebook experience',
    type: 'case-study',
    infoPath: s3 + 'case-studies/cn/winter-calendar/logo-title.svg',
    backgroundImageUrl: s3 +  'case-studies/cn/winter-calendar/landscape.jpg',
    backgroundImageUrlVert: s3 +  'case-studies/cn/winter-calendar/landscape.jpg',
    logoColor: '#00283f',
    secColor: '#074d68',
    gradientTop: '#00283f',
    gradientBottom: '#074d68',
    cat: ' ― cn | calendar ― ',
    services: ['ui/ux', 'animation', 'development'],
    templateName: 'WinterCalendar',
    headlineColor: '#ffffff',
    lockup: {
      className: 'winter-calendar-lockup'
    },
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#fcb823',
      bgColor: '#0d4155'
    },
    sidebar: {
      copyColor: '#83a6b4',
      headlineColor: '#fff'
    },
    shareButton: {
      strokeColor: '#fcb823',
      copyColor: '#ffffff'
    },
    mobile: {
      bgColor: '#82b3dc',
      summaryCopyColor: '#000000'
    },
    endShape: {
      bgColor: '#00283f'
    },
    backbar: {
      bgColor: '#00283f'
    }
  },
  {
    featured: false,
    client: 'yahoo',
    project: 'how i did it',
    title: 'how i did it',
    subtitle: 'video campaign',
    subtitleSlug: 'video campaign',
    type: 'case-study',
    infoPath: s3 + 'case-studies/yahoo/how-i-did-it/logo-title.svg',
    backgroundImageUrl: s3 +  'case-studies/yahoo/how-i-did-it/landscape.jpg',
    backgroundImageUrlVert: s3 +  'case-studies/yahoo/how-i-did-it/landscape.jpg',
    logoColor: '#00283f',
    bodyColor: 'ffffff',
    secColor: '#ffffff',
    gradientTop: '#00283f',
    gradientBottom: '#074d68',
    cat: ' ― cn | calendar ― ',
    services: ['video production', 'post production', 'motion design', 'scripting', 'direction', 'production personnel', 'audio engineering'],
    copyColor: '#000000',
    templateName: 'HowIDidIt',
    headlineColor: '#1EB547',
    lockup: {
      className: 'yahoo-lockup',
      projectTitle: '#fff'
    },
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#fcb823',
      bgColor: '#0d4155'
    },
    sidebar: {
      logoColor: '#1EB547',
      copyColor: '#949494',
      headlineColor: '#000'
    },
    shareButton: {
      strokeColor: '#1EB547',
      copyColor: '#000000'
    },
    mobile: {
      bgColor: '#82b3dc',
      summaryCopyColor: '#000000'
    },
    endShape: {
      bgColor: '#00283f'
    },
    backbar: {
      bgColor: '#1EB547'
    },
    aboutCopy: '<p>HOW I DID IT: EVERYDAY STORIES OF FINANCIAL SUCCESS is a five part documentary series of short stories on subjects ranging from Paying for College, to Buying Your First House. GLOW, in partnership with Believe Entertainment, Yahoo Finance, and the Consumer Financial Protection Bureau, produced, directed and edited all five episodes.</p><p> The goal of the project was to demystify options available when facing a range of different financial challenges, by showing the personal approaches of several ordinary individuals in a fun, and relatable first-person telling of how they met and overcame their own financial issues.</p>'
  },
  {
    featured: true,
    client: 'syfy',
    project: 'sharknado',
    title: 'sharknado',
    subtitle: 'social media campaign',
    subtitleSlug: 'social media campaign',
    type: 'case-study',
    infoPath: s3 + 'case-studies/syfy/sharknado/logo-title.svg',
    backgroundImageUrl: s3 + 'case-studies/syfy/sharknado/landscape-1440.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/syfy/sharknado/vertical.jpg',
    logoColor: '#a3373f',
    secColor: '#0b1c28',
    gradientTop: '#a3373f',
    gradientBottom: '#0b1c28',
    featuredProjectTitleColor: '#a3373f',
    sidebarLogoColor: '#ffffff',
    cat: ' ― syfy | sharknado ',
    templateName: 'Sharknado',
    services: ['community management', 'video production', 'social content'],
    headlineColor: '#7d2f37',
    lockup: {
      className: 'sharknado-lockup'
    },
    backbar: {
      bgColor: '#091720'
    },
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#7d2f37',
      bgColor: '#091720'
    },
    sidebar: {
      // logoColor: '#aaa',
      copyColor: '#556169',
      headlineColor: '#fff'
    },
    shareButton: {
      strokeColor: '#7d2f37',
      copyColor: '#ffffff'
    },
    endShape: {
      bgColor: '#091720'
    }
  },
  {
    featured: false,
    client: 'westminster',
    project: 'westminster',
    title: '2015 dog show',
    subtitle: 'social agency of record',
    subtitleSlug: 'social agency of record',
    type: 'case-study',
    infoPath: s3 + 'case-studies/wkc/westminster-dog-show/logo-title.svg',
    backgroundImageUrl: s3 + 'case-studies/wkc/westminster-dog-show/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/wkc/westminster-dog-show/landscape.jpg',
    secColor: '#502173',
    logoColor: '#d6963f',
    gradientTop: '#502173',
    gradientBottom: '#d6963f',
    featuredProjectTitleColor: '#ffffff',
    templateName: 'WKC',
    services: ['community management', 'video production', 'social content'],
    cat: ' ― wkc | dog-show ',
    clientLogoColor: '#d6963f',
    headlineColor: '#d6963f',
    lockup: {
      className: 'westminster-lockup',
      logoColor: '#D6963F'
    },
    backbar: {
      bgColor: '#d6963f'
    },
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#d6963f',
      bgColor: '#431d67'
    },
    sidebar: {
      logoColor: '#d6963f',
      copyColor: '#8b6ba9',
      headlineColor: '#fff'
    },
    shareButton: {
      strokeColor: '#d6963f',
      copyColor: '#ffffff'
    },
    endShape: {
      bgColor: '#431d67'
    }
  },
  {
    featured: true,
    title: 'contact',
    type: 'jobs-clients',
    home: true,
    backgroundImageUrl: '/assets/images/contact.jpg',
    logoColor: '#f12d5c',
    secColor: '#DADADA',
    gradientTop: '#FFFFFF',
    gradientBottom: '#f12d5c',
    cat: ' ― about glow ― '
  },
  {
    featured: true,
    title: 'Info',
    type: 'contact',
    home: true,
    backgroundImageUrl: '/assets/images/infoPath.jpg',
    logoColor: '#f12d5c',
    secColor: '#FFFFFF',
    gradientBottom: '#FFFFFF',
    gradientTop: '#DADADA',
    cat: ' ― get in touch ― '
  }
];

module.exports = data;

// {
//   featured: false,
//   client: 'hulu',
//   project: 'mindy',
//   title: 'the mindy project',
//   subtitle: 'social media campaign',
//   type: 'case-study',
//   infoPath: s3 + 'case-studies/hulu/mindy-project/logo-title.svg',
//   backgroundImageUrl: s3 + 'case-studies/hulu/mindy-project/landscape.jpg',
//   backgroundImageUrlVert: s3 + 'case-studies/hulu/mindy-project/landscape.jpg',
//   logoColor: '#e70062',
//   secColor: '#18d4ff',
//   gradientTop: '#e70062',
//   gradientBottom: '#18d4ff',
//   clientLogoColor: '#6eb116',
//   headlineColor: '#e70062',
//   copyColor: '#000',
//   featuredProjectTitleColor: '#e70062',
//   cat: ' ― hulu | mindy ― ',
//   templateName: 'Mindy',
//   results: {
//     stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
//     statColor: '#000000',
//     statLabelColor: '#ed0f77',
//     customHtml: '<div class='info-box'> testing </div>'
//   },
//   services: ['community management', 'video production', 'social content'],
//   recognition: ['short award finalist', 'best twitter campaign'],
//   sidebar: {
//     logoColor: '#129fbf',
//     copyColor: '#129fbf',
//     headlineColor: '#fff'
//   },
//   shareButton: {
//     strokeColor: '#fff',
//     copyColor: '#fff'
//   },
//   sidebarLogoColor: '#129fbf',
//   sidebarCopyColor: '#129fbf'
// },
// {
//   featured: false,
//   client: 'hulu',
//   project: 'casual',
//   title: 'casual',
//   subtitle: 'social media campaign',
//   type: 'case-study',
//   infoPath: s3 + 'case-studies/hulu/casual/logo-title.svg',
//   backgroundImageUrl: s3 + 'case-studies/hulu/casual/landscape.jpg',
//   backgroundImageUrlVert: s3 + 'case-studies/hulu/casual/landscape.jpg',
//   logoColor: '#68ae34',
//   secColor: '#5f6e8d',
//   gradientTop: '#68ae34',
//   gradientBottom: '#5f6e8d',
//   featuredProjectTitleColor: '#68ae34',
//   clientLogoColor: '#6eb116',
//   cat: ' ― hulu | casual ― '
// },
