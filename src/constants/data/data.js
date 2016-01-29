/*eslint-disable */
// veep, sharknado, i love ny, winter calendar, westminster, comic-con stunt syfy, ascension, carla hall, tnt proof, cbs/ecomedia
const s3 = 'https://s3.amazonaws.com/weareglow-assets/';
const data = [
  // {
  //   featured: true,
  //   title: "Intro Video",
  //   home: true,
  //   type: "video",
  //   video: "https://s3.amazonaws.com/weareglow-assets/assets/video/Glow_Website_Animatic.mp4",
  //   logoColor: "#f12d5c",
  //   gradientTop: "#c03d3b",
  //   gradientBottom: "#0e374a",
  //   cat: " ― glow hq ― "
  // },
  {
    featured: false,
    client: 'hulu',
    project: "mindy",
    title: "the mindy project",
    subtitle: "social media campaign",
    type: "case-study",
    infoPath: s3 + "case-studies/hulu/mindy-project/logo-title.svg",
    backgroundImageUrl: s3 + 'case-studies/hulu/mindy-project/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/hulu/mindy-project/landscape.jpg',
    logoColor: "#e70062",
    secColor: "#18d4ff",
    gradientTop: "#e70062",
    gradientBottom: "#18d4ff",
    clientLogoColor: '#6eb116',
    headlineColor: "#e70062",
    copyColor: "#000",
    featuredProjectTitleColor: '#e70062',
    cat: " ― hulu | mindy ― ",
    templateName: 'Mindy',
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#000000',
      statLabelColor: '#ed0f77',
      customHtml: '<div class="info-box"> testing </div>'
    },
    services: ['community management', 'video production', 'social content'],
    recognition: ['short award finalist', 'best twitter campaign'],
    sidebar: {
      logoColor: '#129fbf',
      copyColor: '#129fbf',
      headlineColor: '#fff'
    },
    shareButton: {
      strokeColor: '#fff',
      copyColor: '#fff'
    },
    sidebarLogoColor: '#129fbf',
    sidebarCopyColor: '#129fbf'
  },
  {
    featured: false,
    client: 'hulu',
    project: "casual",
    title: "casual",
    subtitle: "social campaign",
    type: "case-study",
    infoPath: s3 + "case-studies/hulu/casual/logo-title.svg",
    backgroundImageUrl: s3 + 'case-studies/hulu/casual/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/hulu/casual/landscape.jpg',
    logoColor: "#68ae34",
    secColor: "#5f6e8d",
    gradientTop: "#68ae34",
    gradientBottom: "#5f6e8d",
    featuredProjectTitleColor: '#68ae34',
    clientLogoColor: '#6eb116',
    cat: " ― hulu | casual ― "
  },
  {
    featured: true,
    client: 'carla hall',
    project: "southern kitchen",
    title: "southern kitchen",
    subtitle: "kickstarter campaign",
    type: "case-study",
    infoPath: s3 + "case-studies/carla-hall/southern-kitchen/logo-title.svg",
    backgroundImageUrl: s3 + 'case-studies/carla-hall/southern-kitchen/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/carla-hall/southern-kitchen/landscape.jpg',
    logoColor: "#ed0f77",
    secColor: "#ffffff",
    gradientTop: "#ed0f77",
    gradientBottom: "#ffffff",
    shapeColor: "#ed0f77",
    headlineColor: '#ed0f77',
    sidebarLogoColor: '#4d4d4d',
    sidebarCopyColor: '#4d4d4d',
    copyColor: '#000000',
    cat: "― carla hall ―",
    logo: "HBO_logo.svg",
    services: ['community management', 'video production', 'social content'],
    results: {
      stats: [{label: 'Facebook followers', stat: '+89%'}, {label: 'Facebook followers', stat: '+286%'}, {label: 'Twitter followers', stat: '+35%'}],
      statColor: '#000000',
      statLabelColor: '#ed0f77',
      customHtml: '<div class="info-box"> testing </div>'
    },
    videoCampaign: {},
    fullScreenBgImg: s3 + 'case-studies/carla-hall/southern-kitchen/carla-full-bg.jpg',
    templateName: 'SouthernKitchen',
    sidebar: {
      logoColor: '#4d4d4d',
      copyColor: '#4d4d4d',
      headlineColor: '#4d4d4d'
    },
    shareButton: {
      strokeColor: '#ed0f77',
      copyColor: '#4d4d4d'
    }
  },
  {
    featured: true,
    client: 'hbo',
    project: "veep",
    title: "veep",
    subtitle: "seasons 2-3-4 social & media campaigns",
    type: "case-study",
    infoPath: s3 + "case-studies/hbo/veep/logo-title.svg",
    backgroundImageUrl: s3 + 'case-studies/hbo/veep/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/hbo/veep/vertical.jpg',
    logoColor: "#c03d3b",
    secColor: "#0e374a",
    gradientTop: "#c03d3b",
    gradientBottom: "#0e374a",
    featuredProjectTitleColor: '#c03d3b',
    cat: " ― hbo | veep ― ",
    templateName: 'Veep',
    copyColor: '#ffffff',
    headlineColor: '#ffffff',
    services: ['social strategy', 'community management', 'media campaign', 'asset creation'],
    sidebar: {
      logoColor: '#ffffff',
      copyColor: '#577381',
      headlineColor: '#ffffff'
    },
    shareButton: {
      strokeColor: '#C03D3B',
      copyColor: '#ffffff'
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
        {label: 'Twitter buzz increase', stat: '??'},
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
    featured: false,
    client: 'tnt',
    project: "proof",
    title: "proof",
    subtitle: "social campaign",
    type: "case-study",
    infoPath: s3 + "case-studies/tnt/proof/logo-title.svg",
    backgroundImageUrl: s3 + 'case-studies/tnt/proof/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/tnt/proof/landscape.jpg',
    logoColor: "#82b3dc",
    secColor: "#ffffff",
    copyColor: '#000000',
    gradientTop: "#82b3dc",
    gradientBottom: "#ffffff",
    shapeColor: "#82b3dc",
    cat: " ― tnt | proof ― ",
    logo: "HBO_logo.svg",
    templateName: 'Proof',
    services: ['community management', 'video production', 'social content'],
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#000000',
      statLabelColor: '#ed0f77',
      customHtml: '<div class="info-box"> testing </div>'
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
  },
  {
    featured: false,
    client: 'i love ny',
    project: "social retainer",
    title: "social retainer",
    subtitle: "social campaign",
    type: "case-study",
    infoPath: s3 + "case-studies/iloveny/social-retainer/logo-title.svg",
    backgroundImageUrl: s3 + 'case-studies/iloveny/social-retainer/landscape.jpg',
    backgroundImageUrlVert: s3 + 'case-studies/iloveny/social-retainer/landscape.jpg',
    logoColor: "#d52027",
    secColor: "#1d1d1d",
    gradientTop: "#d52027",
    gradientBottom: "#1d1d1d",
    cat: " ― ilny | aor ― ",
    logo: "HBO_logo.svg"
  },
  {
    featured: false,
    client: 'syfy',
    project: "ascension",
    title: "ascension",
    subtitle: "instagram campaign",
    type: "case-study",
    infoPath: s3 + "case-studies/syfy/ascension/Glow_Featured_Ascension.svg",
    backgroundImageUrl: s3 +  "case-studies/syfy/ascension/Ascension_Image.jpg",
    backgroundImageUrlVert: s3 + "case-studies/syfy/ascension/Glow_Home_Ascension_Vertical.jpg",
    logoColor: "#00838b",
    secColor: "#54325b",
    gradientTop: "#54325b",
    gradientBottom: "#00838b",
    cat: " ― syfy | ascension ― ",
    logo: "Syfy.svg"
  },
  {
    featured: false,
    client: 'cn',
    project: "winter calendar",
    title: "winter calendar",
    subtitle: "facebook experience",
    type: "case-study",
    infoPath: s3 + "case-studies/cn/winter-calendar/logo-title.svg",
    backgroundImageUrl: s3 +  "case-studies/cn/winter-calendar/landscape.jpg",
    backgroundImageUrlVert: s3 +  "case-studies/cn/winter-calendar/landscape.jpg",
    logoColor: "#00283f",
    secColor: "#074d68",
    gradientTop: "#00283f",
    gradientBottom: "#074d68",
    cat: " ― cn | calendar ― ",
    logo: "Syfy.svg"
  },
  {
    featured: false,
    client: 'syfy',
    project: "sharknado",
    title: "sharknado",
    subtitle: "social campaign",
    type: "case-study",
    infoPath: s3 + "case-studies/syfy/sharknado/logo-title.svg",
    backgroundImageUrl: s3 + "case-studies/syfy/sharknado/landscape.jpg",
    backgroundImageUrlVert: s3 + "case-studies/syfy/sharknado/vertical.jpg",
    logoColor: "#a3373f",
    secColor: "#0b1c28",
    gradientTop: "#a3373f",
    gradientBottom: "#0b1c28",
    featuredProjectTitleColor: '#a3373f',
    headlineColor: '#a3373f',
    sidebarLogoColor: '#ffffff',
    cat: " ― syfy | sharknado ",
    logo: "CartoonNetwork.svg",
    templateName: 'Sharknado',
    sidebarCopyColor: '#ffffff',
    services: ['community management', 'video production', 'social content'],
    results: {
      stats: [{label: 'dollars raised', stat: '$264,704'}, {label: 'video shot', stat: '108 min'}],
      statColor: '#000000',
      statLabelColor: '#ed0f77',
      customHtml: '<div class="info-box"> testing </div>'
    },
  },
  {
    featured: false,
    client: 'westminster',
    project: "westminster",
    title: "westminster",
    subtitle: "social media agency of record",
    type: "case-study",
    infoPath: s3 + "case-studies/wkc/westminster-dog-show/logo-title.svg",
    backgroundImageUrl: s3 + "case-studies/wkc/westminster-dog-show/landscape.jpg",
    backgroundImageUrlVert: s3 + "case-studies/wkc/westminster-dog-show/landscape.jpg",
    secColor: "#502173",
    logoColor: "#d6963f",
    gradientTop: "#502173",
    headlineColor: '#d6963f',
    gradientBottom: "#d6963f",
    featuredProjectTitleColor: '#ffffff',
    sidebarLogoColor: '#d6963f',
    sidebarCopyColor: '#ffffff',
    templateName: 'WKC',
    services: ['community management', 'video production', 'social content'],
    cat: " ― wkc | dog-show ",
    logo: "CartoonNetwork.svg",
    clientLogoColor: '#d6963f',
  },
  {
    featured: true,
    title: "contact",
    type: "jobs-clients",
    home: true,
    backgroundImageUrl: "/assets/images/contact.jpg",
    logoColor: "#f12d5c",
    secColor: "#DADADA",
    gradientTop: "#FFFFFF",
    gradientBottom: "#f12d5c",
    cat: " ― about glow ― "
  },
  {
    featured: true,
    title: "Info",
    type: "contact",
    home: true,
    backgroundImageUrl: "/assets/images/infoPath.jpg",
    logoColor: "#f12d5c",
    secColor: "#FFFFFF",
    gradientBottom: "#FFFFFF",
    gradientTop: "#DADADA",
    cat: " ― get in touch ― "
  }
];

module.exports = data;
