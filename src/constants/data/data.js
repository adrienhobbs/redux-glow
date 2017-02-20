/*eslint-disable*/

const s3 = 'https://s3.amazonaws.com/weareglow-assets/';
const data = [
  {
    featured: true,
    title: 'Intro Video',
    home: true,
    type: 'video',
    video: 'https://s3.amazonaws.com/weareglow-assets/assets/video/Glow_Website_Animatic.mp4',
    logoColor: '#f12d5c',
    gradientTop: '#c03d3b',
    gradientBottom: '#0e374a',
    cat: '- we are glow -'
  },
  {
    featured: true,
    client: 'hulu',
    project: 'mindy',
    title: 'the mindy project',
    subtitle: 'social media campaign',
    subtitleSlug: 'social media campaign',
    type: 'case-study',
    backgroundImageUrl: s3 + 'case-studies/hulu/mindy-project/mindy-bg.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/hulu/mindy-project/mindy-bg.jpg',
    logoColor: '#68A83B',
    secColor: '#ffffff',
    gradientTop: '#e70062',
    gradientBottom: '#18d4ff',
    clientLogoColor: '#6eb116',
    headlineColor: '#68A83B',
    copyColor: '#A7A7A7',
    cat: ' ― hulu | mindy ― ',
    templateName: 'Mindy',
    shapeColor: '#68A83B',
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#e70662',
      bgColor: '#00C1E8'
    },
    mobile: {
      bgColor: '#0e374a'
    },
    services: ['social strategy', 'community management', 'content lab', 'creative execution', 'video'],
    lockup: {
      className: 'mindy-lockup',
      logoColor: '#FFFFFF'
    },
    sidebar: {
      logoColor: '#A7A7A7',
      copyColor: '#A7A7A7',
      headlineColor: '#68A83B'
    },
    shareButton: {
      strokeColor: '#fff',
      copyColor: '#fff'
    },
    endShape: {
      bgColor: '#00CAFF'
    },
    backbar: {
      bgColor: '#68A83B'
    },
    aboutCopy: '<p>Our objective for The Mindy Project, the highly popular comedy series originally on FOX, was to increase across the board awareness and drive tune-in as Mindy moved from FOX to Hulu as their next original series. We sought to tap into the series’ fanbase and develop engaging custom content that resonated with viewers, while leveraging series\' talent to boost the social conversation and awareness of the series now on Hulu.</p>'  ,
  },
  {
    featured:                   true,
    client:                     'syfy',
    project:                    'hunters',
    title:                      'hunters',
    subtitle:                   'interactive experience',
    subtitleSlug:               'interactive experience',
    type:                       'case-study',
    backgroundImageUrl:         s3 + 'case-studies/syfy/hunters/landscape.jpg',
    backgroundImageUrlVert:     s3 + 'case-studies/syfy/hunters/landscape.jpg',
    featuredBackgroundVideo: s3 + 'case-studies/syfy/hunters/landscape.mp4',
    logoColor:                  '#3dA0A8',
    secColor:                   '#e3e3d7',
    copyColor:                  '#203A4C',
    gradientTop:                '#a3373f',
    gradientBottom:             '#0b1c28',
    featuredProjectTitleColor:  '#a3373f',
    sidebarLogoColor:           '#ffffff',
    shapeColor: '#1f3a4d',
    hasFWAAward: true,
    cat:                        '- syfy | hunters -',
    templateName:               'Hunters',
    backgroundVideoUrl: s3 + 'case-studies/syfy/hunters/landscape.mp4',
    backgroundVideoPoster: s3 + 'case-studies/syfy/hunters/landscape.jpg',
    services:                   ['ui/ux', 'web design', 'motion design', 'audio design', 'web development'],
    headlineColor:              '#1f3a4d',
    mobile: {
      bgColor: '#0b1c28'
    },
    lockup: {
      className:       'hunters-lockup',
      projectColor:    '#FFFFFF',
      featured:        {
        projectColor:  '#3da0a8'
      }
    },
    backbar: {
      bgColor: '#1f3a4d'
    },
    results: {
      stats: [
        {label: 'Twitter impressions', stat: '2B'},
        {label: 'Trending topic (US)', stat: '#1'},
        {label: 'Trending topic (global)', stat: '#2'},
        {label: 'Video views', stat: '6M'}
      ],
      statColor: '#ffffff',
      statLabelColor: '#7d2f37',
      bgColor: '#e3e3d7',
      deviceImageUrl: 'https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-device.png',
      template: 'Standard'
    },
    sidebar: {
      logoColor: '#203A4C',
      copyColor: '#556169',
      headlineColor: '#1f3a4d'
    },
    shareButton: {
      strokeColor: '#7d2f37',
      copyColor: '#ffffff'
    },
    endShape: {
      bgColor: '#091720'
    },
    aboutCopy: '<p>A cross between gritty crime drama and sci-fi thriller, Hunters comes from executive producers Gale Anne Hurd (The Walking Dead, The Terminator trilogy) and Natalie Chaidez (12 Monkeys, Heroes). Utilizing emerging web technologies like WebGL and ThreeJS, Glow partnered with Syfy to create an innovative interactive experience bringing the world of Hunters to life. Over the course of 13 weeks, custom sharable content was “leaked” through the site, giving fans the opportunity to dive into the show in a unique way.</p>'
  },
  {
    featured:                   true,
    client:                     'syfy',
    project:                    'znation',
    title:                      'zombie interstellar produce',
    subtitle:                   'meme generator',
    subtitleSlug:               'meme generator',
    type:                       'case-study',
    backgroundImageUrl:         s3 + 'case-studies/syfy/znation/landscape.jpg',
    backgroundImageUrlVert:     s3 + 'case-studies/syfy/znation/landscape.jpg',
    logoColor:                  '#a3373f',
    secColor:                   '#000000',
    gradientTop:                '#a3373f',
    gradientBottom:             '#0b1c28',
    featuredProjectTitleColor:  '#a3373f',
    sidebarLogoColor:           '#ffffff',
    cat:                        '- syfy | sharknado -',
    templateName:               'Znation',
    services:                   ['ui/ux', 'web design', 'motion design', 'web development', 'social integration'],
    headlineColor:              '#530B0C',
    mobile: {
      bgColor: '#0b1c28'
    },
    copyColor: '#ffffff',
    lockup: {
      className:       'sharknado-lockup',
      projectColor:    '#fff',
      featured:        {
        projectColor:  '#a3373f'
      }
    },
    backbar: {
      bgColor: '#530B0C'
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
    },
    aboutCopy: '<p>Inspired by <span style="text-decoration: underline;">Selleck Waterfall</span> Sandwich Tumblr, which became well-known for its absurd combination of seemingly <span style="text-decoration: underline;">unrelated items</span> and its obviously photoshopped composition, GLOW developed a branded lo-fi, highly unique and totally absurd meme generator to serve the die hard fan base for the 3rd Season of Syfy’s popular scripted zombie spoof, Z-Nation. Zombie Interstellar Produce greets users with a simple interface and instantly generates a random compilation image that pulls assets from three different, and very unrelated categories: Zombie: Z Nation zombie graphic. Interstellar: space background.</p>'
  },
  {
    featured:                   true,
    client:                     'syfy',
    project:                    'sharknado',
    title:                      'sharknado',
    subtitle:                   'social media campaign',
    subtitleSlug:               'social media campaign',
    type:                       'case-study',
    backgroundImageUrl:         s3 + 'case-studies/syfy/sharknado/landscape.jpg',
    backgroundImageUrlVert:     s3 + 'case-studies/syfy/sharknado/vertical.jpg',
    logoColor:                  '#a3373f',
    secColor:                   '#0b1c28',
    gradientTop:                '#a3373f',
    gradientBottom:             '#0b1c28',
    featuredProjectTitleColor:  '#a3373f',
    sidebarLogoColor:           '#ffffff',
    cat:                        '- syfy | sharknado -',
    templateName:               'Sharknado',
    services:                   ['content lab', 'social strategy', 'creative execution', 'influencer marketing', 'community management'],
    headlineColor:              '#7d2f37',
    mobile: {
      bgColor: '#0b1c28'
    },
    copyColor: '#ffffff',
    lockup: {
      className:       'sharknado-lockup',
      projectColor:    '#fff',
      featured:        {
        projectColor:  '#a3373f'
      }
    },
    backbar: {
      bgColor: '#091720'
    },
    results: {
      stats: [
        {label: 'Twitter impressions', stat: '2B'},
        {label: 'Trending topic (US)', stat: '#1'},
        {label: 'Trending topic (global)', stat: '#2'},
        {label: 'Video views', stat: '6M'}
      ],
      statColor: '#ffffff',
      statLabelColor: '#7d2f37',
      bgColor: '#091720',
      deviceImageUrl: 'https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-device.png',
      template: 'Standard'
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
    },
    aboutCopy: '<p>Sharknado 3 took the world by storm and stirred up 2 billion Twitter impressions. Yes, that’s a B. A key priority program for Syfy, GLOW couldn’t wait to dive-in. Together, we planned and launched a FOMO-inducing social campaign, which included social strategy, community management, and social content creative to make Sharknado 3 a can’t-miss event. </p>'
  },
  {
    featured: false,
    client: 'i love new york',
    project: 'social retainer',
    title: 'social',
    subtitle: 'social agency of record',
    subtitleSlug: 'social agency of record',
    type: 'case-study',
    backgroundImageUrl: s3 + 'case-studies/iloveny/social-retainer/ilny-bg.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/iloveny/social-retainer/ilny-bg.jpg',
    logoColor: '#d52027',
    secColor: '#1d1d1d',
    copyColor: '#ffffff',
    cat: ' ― ilny | aor ― ',
    services: ['social strategy', 'community management', 'content lab', 'creative execution'],
    recognition: ['shorty award finalist'],
    templateName: 'ILNY',
    headlineColor: '#d52027',
    backbar: {
      bgColor: '#d52027'
    },
    results: {
      deviceImageUrl: s3 + 'case-studies/iloveny/social-retainer/device.png',
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#d52027',
      bgColor: '#171717',
      template: 'Standard'
    },
    sidebar: {
      // logoColor: '#aaa',
      copyColor: '#616161',
      headlineColor: '#fff',
      customClientLogo: 'ilny-alternate'
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
    },
    aboutCopy: '<p>In the fall of 2014, Empire State Development approached GLOW.  The I Love New York initiative had taken shape on social, but it was important to ESD to maintain an edge over other states.  They needed a partner to analyze the trends, execute on insights and, take their visual and editorial content to a level previously unseen.  GLOW stepped into this role with the goal to revitalize their social footprint, but also give it a unique voice among other states.</p>'
  },
  // {
  //   featured: false,
  //   client: 'westminster',
  //   project: 'westminster',
  //   title: '2015 dog show',
  //   subtitle: 'social media agency of record',
  //   subtitleSlug: 'social agency of record',
  //   type: 'case-study',
  //   backgroundImageUrl: s3 + 'case-studies/wkc/westminster-dog-show/landscape.jpg',
  //   backgroundImageUrlVert: s3 + 'case-studies/wkc/westminster-dog-show/landscape.jpg',
  //   secColor: '#502173',
  //   logoColor: '#d6963f',
  //   featuredProjectTitleColor: '#ffffff',
  //   templateName: 'WKC',
  //   services: ['social strategy', 'community management', 'content lab', 'creative execution', 'live event management'],
  //   clientLogoColor: '#d6963f',
  //   headlineColor: '#d6963f',
  //   lockup: {
  //     className: 'westminster-lockup',
  //     logoColor: '#D6963F'
  //   },
  //   backbar: {
  //     bgColor: '#d6963f'
  //   },
  //   results: {
  //     stats: [{label: 'Snapchat Live Story views', stat: '26M'}, {label: 'FB users reached during 4 show days', stat: '7.8M'}, {label: 'Instagram followers', stat: '2X'}, {label: 'Visitors driven to WKC website', stat: '50K+'}],
  //     statColor: '#ffffff',
  //     statLabelColor: '#d6963f',
  //     bgColor: '#431d67',
  //     deviceImageUrl: 'https://s3.amazonaws.com/weareglow-assets/case-studies/wkc/westminster-dog-show/device.png' ,
  //     template: 'Standard'
  //   },
  //   sidebar: {
  //     logoColor: '#d6963f',
  //     copyColor: '#8b6ba9',
  //     headlineColor: '#fff',
  //     customClientLogo: 'westminster-alternate'
  //   },
  //   shareButton: {
  //     strokeColor: '#d6963f',
  //     copyColor: '#ffffff'
  //   },
  //   endShape: {
  //     bgColor: '#431d67'
  //   },
  //   aboutCopy: '<p>The Westminster Kennel Club Dog Show is one of the oldest sporting events in modern history, and since 2013, GLOW has been the leading force behind expanding the organization’s social media presence.  Challenged with an aging audience and antiquated communication strategies, it was clear to us from day one, that there was the need to double down on social in order to build a larger social footprint and a sustainable social audience.</p>'
  // },
  {
    featured: false,
    client: 'westminster',
    project: 'westminster',
    title: '2016 dog show',
    subtitle: 'social media agency of record',
    subtitleSlug: 'social agency of record',
    type: 'case-study',
    backgroundImageUrl: s3 + 'case-studies/wkc/westminster-dog-show/west-bg.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/wkc/westminster-dog-show/west-bg.jpg',
    secColor: '#502173',
    logoColor: '#d6963f',
    featuredProjectTitleColor: '#ffffff',
    templateName: 'WKC2016',
    services: ['social strategy', 'community management', 'content lab', 'creative execution', 'live event management'],
    clientLogoColor: '#d6963f',
    headlineColor: '#d6963f',
    copyColor: '#fff',
    lockup: {
      className: 'westminster-lockup',
      logoColor: '#D6963F'
    },
    backbar: {
      bgColor: '#d6963f'
    },
    results: {
      stats: [{label: 'snapchat Live Story views', stat: '100m'}, {label: 'fb users reached during 4 day show', stat: '5.8m'}, {label: 'of domestic IG users reached on IG Live', stat: '98%'}, {label: '#wkcdogshow trended nationally on Twitter', stat: 'No. 5'}],
      statColor: '#ffffff',
      statLabelColor: '#d6963f',
      bgColor: '#431d67',
      deviceImageUrl: 'https://s3.amazonaws.com/weareglow-assets/case-studies/wkc/westminster-dog-show/wkc-results-2016.png' ,
      template: 'Standard'
    },
    sidebar: {
      logoColor: '#d6963f',
      copyColor: '#ffffff',
      headlineColor: '#fff',
      customClientLogo: 'westminster-alternate'
    },
    shareButton: {
      strokeColor: '#d6963f',
      copyColor: '#ffffff'
    },
    endShape: {
      bgColor: '#431d67'
    },
    aboutCopy: '<p>The Westminster Kennel Club Dog Show is one of the oldest sporting events in modern history, and since 2013, GLOW has been the leading force behind expanding the organization’s social media presence.  Challenged with an aging audience and antiquated communication strategies, it was clear to us from day one, that there was the need to double down on social in order to build a larger social footprint and a sustainable social audience.</p>'
  },
  {
    featured: false,
    client: 'yahoo',
    project: 'how i did it',
    title: 'how i did it',
    subtitle: 'video campaign',
    subtitleSlug: 'video campaign',
    type: 'case-study',
    backgroundImageUrl: s3 +  'case-studies/yahoo/how-i-did-it/landscape.jpg',
    backgroundImageUrlVert: s3 +  'case-studies/yahoo/how-i-did-it/landscape.jpg',
    backgroundVideoUrl: s3 + 'case-studies/yahoo/how-i-did-it/yahoo_bg_video.mp4',
    backgroundVideoPoster: s3 + 'case-studies/yahoo/how-i-did-it/yahoo_bg_poster.jpg',
    logoColor: '#00283f',
    bodyColor: 'ffffff',
    secColor: '#ffffff',
    cat: ' ― cn | calendar ― ',
    services: ['full-service production', 'motion design', 'scripting', 'direction'],
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
    aboutCopy: '<p>HOW I DID IT: EVERYDAY STORIES OF FINANCIAL SUCCESS is a five part documentary series of short stories on subjects ranging from Paying for College to Buying Your First House. GLOW, in partnership with Believe Entertainment, Yahoo Finance, and the Consumer Financial Protection Bureau, produced, directed and edited all five episodes.</p><p> The goal of the project was to demystify options available when facing a range of different financial challenges, by showing the personal approaches of several ordinary individuals in a fun, and relatable first-person telling of how they met and overcame their own financial issues.</p>',
    videos: [
      {
        videoSrc: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep01.mp4',
        posterImg: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep01-poster.jpg',
        title: 'ep 01 : paying off credit card debt',
        description: 'A former Captain in the U.S. Army breaks down the strategy that helped him pay off $35,000 of credit card debt in less than a year.'
      },
      {
        videoSrc: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep02.mp4',
        posterImg: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep02-poster.jpg',
        title: 'ep 02 : paying off student loans',
        description: 'A public school principal tells the story of how she paid off her student loans in three simple, but determined, steps.'
      },
      {
        videoSrc: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep03.mp4',
        posterImg: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep03-poster.jpg',
        title: 'ep 03: paying for college without loans',
        description: 'See how a former caddy paid for four years of college without taking out one single loan.'
      },
      {
        videoSrc: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep04.mp4',
        posterImg: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep04-poster.jpg',
        title: 'ep 04: saving a million dollars for retirement',
        description: 'Retiree Whitney Devlin offers her simple four-point strategy for securing a million dollars by retirement.'
      },
      {
        videoSrc: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep05.mp4',
        posterImg: 'https://s3.amazonaws.com/weareglow-assets/case-studies/yahoo/how-i-did-it/ep05-poster.jpg',
        title: 'ep 05: buying my first home',
        description: 'Laura Kelly outlines an easy-to-follow strategy, along with pitfalls to avoid, for buying your first home.'
      }
    ]
  },
  {
    featured: false,
    client: 'hbo',
    project: 'veep',
    title: 'veep',
    subtitle: 'seasons 2-3-4 social & media campaigns',
    subtitleSlug: 'social & media campaigns',
    type: 'case-study',
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
    services: ['social strategy', 'community management', 'content lab', 'digital media'],
    recognition: ['shorty: best multi-platform', 'shorty: best twitter campaign'],
    sidebar: {
      logoColor: '#ffffff',
      copyColor: '#577381',
      headlineColor: '#ffffff',
      customClientLogo: 'hbo-alternate'
    },
    backbar: {
      bgColor: '#c03d3b'
    },
    shareButton: {
      strokeColor: '#C03D3B',
      copyColor: '#ffffff'
    },
    mobile: {
      bgColor: '#0e374a'
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
        {label: 'Texts exchanged', stat: '40k'}
      ],
      statColor: '#ffffff',
      statLabelColor: '#C03D3B',
      bgColor: '#0A2C3A',
      deviceImageUrl: 'https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/device.png',
      template: 'Standard'
    },
    endShape: {
      bgColor: '#0A2C3A'
    },
    aboutCopy: '<p>Veep was a favorite among critics in its inaugural season. However, critical acclaim was simply not enough. GLOW approached HBO and took this opportunity to do what we do best - build audience and expand the social footprint with a smart, strong strategy and quality social content...and lots of it.</p><p>All the while, we were striving to redefine how a thirty-minute comedy is marketed on social media. </p><p>And it worked.</p>'
  },
  // {
  //   featured:                   false,
  //   client:                     'cnbc',
  //   project:                    'the profit',
  //   title:                      'the profit',
  //   subtitle:                   'interactive map',
  //   subtitleSlug:               'interactive map',
  //   type:                       'case-study',
  //   backgroundImageUrl:         s3 + 'case-studies/cnbc/the_profit/landscape-theprofit.jpg',
  //   backgroundImageUrlVert:     s3 + 'case-studies/cnbc/the_profit/landscape-theprofit.jpg',
  //   logoColor:                  '#4F4F4F',
  //   secColor:                   '#ffffff',
  //   copyColor:                  '#676767',
  //   gradientTop:                '#a3373f',
  //   gradientBottom:             '#0b1c28',
  //   featuredProjectTitleColor:  '#ffffff',
  //   sidebarLogoColor:           '#ffffff',
  //   shapeColor: '#1f3a4d',
  //   cat:                        '- cnbc | the profit -',
  //   templateName:               'Profit',
  //   services:                   ['ui/ux', 'front-end dev', 'back-end dev', 'mapbox', 'social integration'],
  //   headlineColor:              '#4F4F4F',
  //   mobile: {
  //     bgColor: '#0b1c28'
  //   },
  //   lockup: {
  //     className:       'profit-lockup',
  //     projectColor:    '#FFFFFF'
  //   },
  //   backbar: {
  //     bgColor: '#4F4F4F'
  //   },
  //   sidebar: {
  //     logoColor: '#203A4C',
  //     copyColor: '#556169',
  //     headlineColor: '#1f3a4d'
  //   },
  //   shareButton: {
  //     strokeColor: '#7d2f37',
  //     copyColor: '#ffffff'
  //   },
  //   endShape: {
  //     bgColor: '#091720'
  //   },
  //   aboutCopy: '<p>On each episode of CNBC’s The Profit, millionaire Marcus Lemonis evaluates and decides if he will or will not invest his own money in a featured business. And over the course of three successful seasons he has invested in numerous companies, and his expanding empire spans across the US</p><p>Because the show focuses primarily on the evaluation and investment process, and less on keeping track of the deals made, CNBC wanted to create a way to showcases these individual companies he’s invested in and their expanded franchises in one destination. GLOW was asked to provide the solution.</p>'
  // },
  {
    featured:                   false,
    client:                     'syfy',
    project:                    '12-Monkeys',
    title:                      '12-Monkeys',
    subtitle:                   'integrated campaign',
    subtitleSlug:               'integrated campaign',
    type:                       'case-study',
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
    services:                   ['social strategy', 'content lab', 'display media', 'site development', 'custom video'],
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
        {label: 'Facebook Fans in season 1', stat: '100K'},
        {label: 'In organic page growth', stat: '55%'},
        {label: 'Avg Rich Media engagement', stat: '7.3%'},
        {label: 'Social & video content pieces created', stat: '800+'}
      ],
      statColor:       '#ffffff',
      statLabelColor:  '#551313',
      bgColor:         '#171717',
      deviceImageUrl: s3 + 'case-studies/syfy/12-monkeys/device.png',
      template: 'Standard'
    },

    endShape: {
      bgColor: '#171717'
    },
    aboutCopy: "<p>Syfy’s 12 Monkeys is a science-fiction thriller about one man's desperate attempt to save mankind using a dangerous and untested method of time travel. Our objective around the series launch was to build the world of 12 Monkeys for a new audience by making sense of its complex time-traveling story and supplement the on-air viewing with multi-platform digital and social content around this theme.  </p><p>The goals were to drive an immersive experience that would build and sustain engagement throughout the series and illustrate a comprehensive and clear vision for mapping the time travel jumps of James Cole, one of the lead characters. We also wanted to offer a stream of unique, provocative real-time, platform-specific social content for fans. </p>"
  },
  {
    featured: true,
    client: 'carla hall',
    project: 'southern kitchen',
    title: 'southern kitchen',
    subtitle: 'kickstarter campaign',
    subtitleSlug: 'kickstarter campaign',
    type: 'case-study',
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
    templateName: 'SouthernKitchen',
    mobile: {
      bgColor: '#fff'
    },
    services: ['social strategy', 'community management', 'video production', 'social content'],
    fullScreenBgImg: s3 + 'case-studies/carla-hall/southern-kitchen/video-04.jpg',
    lockup: {
      className: 'carla-lockup'
    },
    backbar: {
      bgColor: '#ed0f77'
    },
    results: {
      stats: [{label: 'Facebook followers', stat: '+89%'}, {label: 'Instagram followers', stat: '+286%'}, {label: 'Twitter followers', stat: '+35%'}],
      statColor: '#000000',
      statLabelColor: '#ed0f77',
      template: 'CalloutBox'
    },
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
      bgColor: '#ffffff',
      summaryCopyColor: '#4d4d4d'
    },
    aboutCopy: '<p>GLOWs relationship with celebrity chef Carla Hall from ABC’s “The Chew” began with a conversation around launching a Kickstarter campaign to raise funds to support her life-long dream of opening her own restaurant, <i>Carla Hall’s Southern Kitchen.</i></p> <p>GLOW laid out a strategy that began with a complete social refresh of all of Carla’s social profiles to ignite and strengthen her base before we kicked off her Kickstarter campaign.</p>'
  },
  {
    featured: false,
    client: 'tnt',
    project: 'proof',
    headlineColor: '#000',
    title: 'proof',
    subtitle: 'media campaign',
    subtitleSlug: 'media campaign',
    type: 'case-study',
    backgroundImageUrl: s3 + 'case-studies/tnt/proof/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/tnt/proof/landscape.jpg',
    logoColor: '#82b3dc',
    secColor: '#ffffff',
    cat: ' ― tnt | proof ― ',
    templateName: 'Proof',
    copyColor: '#000',
    services: ['creative execution', 'digital media', 'social content'],
    backbar: {
      bgColor: '#82b3dc'
    },
    results: {
      deviceImageUrl: s3 + 'case-studies/tnt/proof/device.png',
      stats: [{label: 'Video views', stat: '7M'}, {label: 'Unique users reached', stat: '30M'}],
      statColor: '#ffffff',
      statLabelColor: '#000000',
      bgColor: '#c3c3c3',
      template: 'Standard'
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
    },
    aboutCopy: '<p>The premise of “What happens when we die?” is a powerful question that connects us all.  Near-death experiences are both common, and fascinating.  Our challenge as we began crafting our creative approach was how to best use this question of life after death as a launch platform for TNT’s new show, Proof. </p>'
  },
  {
    featured: false,
    client: 'cn',
    project: 'winter calendar',
    title: 'winter calendar',
    subtitle: 'digital experience',
    subtitleSlug: 'digital experience',
    type: 'case-study',
    backgroundImageUrl: s3 +  'case-studies/cn/winter-calendar/landscape.jpg',
    backgroundImageUrlVert: s3 +  'case-studies/cn/winter-calendar/landscape.jpg',
    logoColor: '#00283f',
    secColor: '#074d68',
    copyColor: '#ffffff',
    cat: ' ― cn | calendar ― ',
    services: ['ui/ux', 'custom animation', 'html5 development', 'creative execution'],
    templateName: 'WinterCalendar',
    headlineColor: '#ffffff',
    lockup: {
      className: 'winter-calendar-lockup'
    },
    results: {
      stats: [
        {stat: '35K', label: 'Prizes unlocked'},
        {stat: '100%', label: 'Fun'}
      ],
      statColor: '#ffffff',
      statLabelColor: '#fcb823',
      bgColor: '#0d4155',
      template: 'Standard',
      deviceImageUrl: 'https://s3.amazonaws.com/weareglow-assets/case-studies/cn/winter-calendar/results.png'
    },
    sidebar: {
      copyColor: '#83a6b4',
      headlineColor: '#fff',
      customClientLogo: 'cartoon-network-alternate'
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
    },
    aboutCopy: '<p>In a count-down-to-winter-themed effort to engage fans with custom and unique content for the hit franchise Adventure Time, GLOW teamed with Cartoon Network to develop a digital experience called Adventure Time: Winter Breakout. Our goal was to develop a fun, seasonal engagement that drove excitement around a countdown to winter, and gave fans a reason to come back and engage with their favorite show, to unlock new items daily that awarded fans with Adventure Time assets and winnable items. </p>'
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
    cat: '― our clients ―'
  },
  {
    featured: false,
    client: 'hulu',
    project: 'casual',
    title: 'casual',
    subtitle: 'social media campaign',
    subtitleSlug: 'social media campaign',
    type: 'case-study',
    backgroundImageUrl: s3 + 'case-studies/hulu/casual/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/hulu/casual/landscape.jpg',
    logoColor: '#68ae34',
    secColor: '#ffffff',
    copyColor: '#676767',
    gradientTop: '#68ae34',
    gradientBottom: '#5f6e8d',
    featuredProjectTitleColor: '#68ae34',
    clientLogoColor: '#6eb116',
    headlineColor: '#606F8C',
    cat: ' ― hulu | casual ― ',
    templateName: 'Casual',
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#ffffff',
      statLabelColor: '#6eb116',
      bgColor: '#4C5772'
    },
    lockup: {
      className: 'casual-lockup',
      logoColor: '#ffffff'
    },
    services: ['social strategy', 'community management', 'content lab', 'creative execution'],
    sidebar: {
      logoColor: '#3C465D',
      copyColor: '#676767',
      headlineColor: '#606F8C',
    },
    shareButton: {
      strokeColor: '#fff',
      copyColor: '#fff'
    },
    backbar: {
      bgColor: '#606F8C'
    },
    aboutCopy: '<p>First, the show\'s theme does not intrinsically have a broad social appeal. Couple that with a show that speaks to an older skewing audience, it was apparent that Casual was not developed to be a heavily social property. In spite of those challenges, we applied a smart strategy that leveraged key elements of the show itself and released content in very focused ways. This provided successful, driving massive viewership. Video clips went viral across Facebook, and earned a total of more than 20 million views on the platform. Overall, our efforts drove widespread engagement and awareness of the series as a fun and unique Hulu Original.</p>' ,
    endShape: {
      bgColor: '#4C5772'
    }
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
    cat: '― get in touch ―'
  }
];

module.exports = data;

// {
//   featured:                   false,
//   client:                     'tvland',
//   project:                    'younger',
//   title:                      'younger',
//   subtitle:                   'interactive experience',
//   subtitleSlug:               'interactive experience',
//   type:                       'case-study',
//   backgroundImageUrl:         s3 + 'case-studies/tvland/younger/landscape.jpg',
//   backgroundImageUrlVert:     s3 + 'case-studies/syfy/younger/landscape.jpg',
//   logoColor:                  '#1686DC',
//   secColor:                   '#ffffff',
//   copyColor:                  '#A7A7A7',
//   gradientTop:                '#a3373f',
//   gradientBottom:             '#0b1c28',
//   featuredProjectTitleColor:  '#a3373f',
//   sidebarLogoColor:           '#ffffff',
//   shapeColor: '#1f3a4d',
//   cat:                        '- tvland | younger -',
//   templateName:               'Younger',
//   services:                   ['ui/ux', 'motion design', 'front-end dev', 'back-end dev', 'social integration'],
//   headlineColor:              '#1686DC',
//   lockup: {
//     className:       'younger-lockup',
//     projectColor:    '#FFFFFF',
//     featured:        {
//       projectColor:  '#3da0a8'
//     }
//   },
//   backbar: {
//     bgColor: '#1686DC'
//   },
//   results: {
//   },
//   sidebar: {
//     logoColor: '#203A4C',
//     copyColor: '#A7A7A7',
//     headlineColor: '#1686DC'
//   },
//   shareButton: {
//     strokeColor: '#7d2f37',
//     copyColor: '#ffffff'
//   },
//   aboutCopy: '<p>First, the show\'s theme does not intrinsically have a broad social appeal. Couple that with a show that speaks to an older skewing audience, it was aparent that Casual was not developed to be a heavily social property. In spite of those challenges, we applied a smart strategy that leveraged key elements of the show itself and released content in very focused ways. This provided successful, driving massive viewership. Video clips went viral across Facebook, and earned a total of more than 20 million views on the platform. Overall, our efforts drove widespread engagement and awareness of the series as a fun and unique Hulu Original. </p>'
// },
