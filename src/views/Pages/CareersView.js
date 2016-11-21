/*eslint-disable*/
import React, { PropTypes } from 'react';
import Header from 'components/ui/header-component/header-component.js';
import styles from './careers.css';
import colors from '../../constants/colors.js';

const Jobs = [
  {
    title: 'Media Director, Paid Social',
    active: true,
    type: 'full time',
    summary: 'GLOW\'s Social team continues to experience amazing growth. We have an immediate need for a Media Director. The ideal candidate will be able to hit the ground running, work collaboratively within our award-winning team, provide thought leadership, and drive the development of a groundbreaking paid social strategy.',
    traits: [
      'Bachelor’s degree',
      '4+ years of campaign management and experience (in entertainment preferred)',
      'Paid Social: (significant experience is a must)',
      'Working knowledge of self-serve platforms and API technology on Facebook, Instagram, Snapchat, Twitter, Pinterest, and Tumblr, as well as other emerging platforms',
      'Working knowledge of native and third party tools',
      'Fluency with latest evolutions of tracking and targeting',
      'Deep knowledge of ad serving platforms and online analytic solutions',
      'Knowledge of statistical methods and testing methodology preferred',
      'Ability to communicate findings clearly and cohesively' ,
      'A team player who is able to handle stressful situations and deadlines calmly',
      'Passion for social media, TV, and overall media & entertainment'
    ],
    duties: [
      'Creating and overseeing execution of paid media strategies of various budget levels',
      'Developing a complete understanding of a client’s goals, targets, needs, and expectations',
      'Thinking big picture and creating a holistic approach to the campaign at hand',
      'Deep understanding of all social paid platforms and search',
      'Testing and optimizing media in real-time to ensure client goals are met and/or exceeded',
      'Converting large amounts of data from insights tools into practical strategies and actionable recommendations',
      'Overseeing and guiding a team of paid social specialists to meet and exceed both client and internal goals',
      'Trends and tools for paid social media platforms',
      'Key performance metrics for paid/earned/owned media with a focus on analytics and optimization'
    ]
  },
  {
    title: 'digital project manager',
    active: true,
    type: 'full time',
    summary: 'We are looking for smart and focused digital project managers that are excellent communicators, share our passion for the digital and social space and want to be part of a growing and winning team. The right person for this position takes a glass-half-full approach, is knowledgeable, brings with them a great deal of enthusiasm, shares our work ethic and attention to detail, and has a willingness to both learn and teach. If you’re creative about how you approach challenges, always look to provide solutions, live for the details, love the fast pace, stay cool under pressure and want to continue to grow professionally in a very talented agency environment, then you have a bright future here at GLOW.',
    duties: [
      'Work closely with internal teams and clients to execute social campaigns that integrate with our clients’ overall strategic goals.',
      'Manage day-to-day contact on projects that range from sites and app builds to social activations and content, interfacing between client and agency, as well as vendors where needed.',
      'Work with management, team and client to establish scope, set project timelines and monitor the overall flow of the effort from kickoff to completion.',
      'Participation in brainstorms and creative meetings. Your ideas need to contribute to the team’s thinking!!',
      'Ensure projects have the necessary resources to run efficiently/effectively from kickoff to completion.',
      'You possess a keen understanding of what a project entails, and keep a broader focus on how our efforts ladder to the overarching client goals.',
      'You will be an active participant on new business teams and contribute directly to new business opportunities.',
      'Good problem solving skills, works well under pressure. ',
      'The ability to anticipate the needs of the team and the account.',
      'Active involvement in planning and strategy – you will know your projects and clients inside and out so you can provide answers as needed.',
      'Confidence and comfort to act as the voice of the team when necessary on client correspondence.'
    ],
    traits: [
      'Has a minimum 2-4 years of agency experience.',
      'Must have prior experience working in digital or social media, in an entertainment capacity is a plus.',
      'A genuine enthusiasm about pop culture, entertainment and social media and an understanding of what other brands are doing in the space.',
      'Demonstrated ability to communicate clearly and effectively with clients at varying levels.',
      'Loves a challenge and uses problem-solving skills to seek out ways to help make our team and our partners stronger/smarter/better.',
      'A highly organized, detail-oriented multi-tasker.  The fast pace of real-time social media energizes you!',
      'Considers themselves a curious marketer and is dedicated to personal and team growth.',
      'The ability to communicate clearly, lead conversations, and can function exceptionally well in a team environment.',
      'You know what makes the client tick, and are ready to jump in and make sure they’re being given what they need.',
      'Has opinions and ideas and you’d love to share them with the team and our clients.',
      'Someone who others will want to work with - your personality should work well with many different types of people.',
      'A person who truly wants to grow while learning more about social and digital.'
    ]
  },
  {
    title: 'community manager',
    active: true,
    type: 'freelance',
    summary: 'GLOW is an award-winning social, marketing and creative agency based in New York City. With a 16-year history as a leader in the digital space, GLOW provides innovative social strategies and best in breed executions for a range of clients who are considered the most successful in their respective industries. Our passionate, collaborative culture and wide range of integrated capabilities provides our client partners with strategies and campaigns that solve key business problems and generate measurable results. Our team consists of a dynamic, creative, cooperative group of experts who accomplish the extraordinary by working together to bring the highest level of value to our client partners. GLOW\'s Social team continues to experience amazing growth. We are currently looking for additional community managers to work on very high profile entertainment clients who are considered amongst the best in digital social marketing.',
    duties: [
      'Develop, own, and execute innovative social media campaigns to build conversation and communities for our clients.',
      'Oversee and develop day-to-day editorial/content calendars and publish to client social media channels.',
      'Liaise with our Account and Design teams to facilitate efficient execution.',
      'Own Community Management with client social media channels on a daily basis.',
      'Craft, pitch, and execute strategic social marketing plans for clients.',
      'Define, along with your team, the best direction for each client to grow and improve on social.',
      'Liaise with client to ensure we are optimized to meet their business objectives, as well as foster and nurture a healthy partnership.',
      'Weekly live-tweeting of high profile television shows and live events.',
      'Provide our clients with reporting that measures our success on each platform.',
      'Plan/launch paid social media strategy recommendations and executing paid campaigns',
      'Provide POVs on trends, platforms, relevant industry news, etc.',
      'Inform the team of hot new trends as they happen to stay ahead of competitors.',
      'Contribute to brainstorms and planning for upcoming show strategies.'
    ],
    traits: [
      'At least 1-3 years professional experience in digital and/or specifically social media.',
      'Active familiarity with social platforms, especially Twitter and Facebook, with an added emphasis on Instagram, Snapchat, Tumblr, and others.',
      'You love knowing about the coolest and newest memes, trends and products online.',
      'Excellent writer, interpersonal skills, and comfort speaking in front of clients and senior colleagues.',
      'You take initiative in creating great work, but also a great communicator with team members.',
      'You\'re absolutely obsessed with the latest and greatest tv shows.'

    ]
  },
  {
    title: 'social design intern',
    active: true,
    type: '',
    summary: 'Are you an aspiring Designer who is obsessed with Social Media? Do you want to represent not what Social Media Creative is now, but what Social Media Creative should be? Do you want to learn the language of Quote Cards, GIFs, Vines, Snaps & Tweets, and figure out how to take them to new places? Do you want to learn how to inspire, critique, present, demonstrate, cajole, twist, & juke your way to a great product? Are you looking for a fun creative career? Let’s meet & find out!',
    duties: [
      'creating a plethora of static & motion content across all social media platforms',
      'owning projects alongside senior/junior designers for multiple entertainment clients simultaneously',
      'innovating alongside senior/junior designers to come up with new design ideas & solutions within your executions',
      'presenting your design decisions to senior/junior designers internally and to clients',
      'influencing our clients & staff by providing them valuable social media thinking',
      'discovering developments in the Social space to deliver innovative & competitive content',
      'collaborating on new business opportunities',
      'playing in brainstorms & ideation sessions',
      'engaging with GLOWs internal teams including Creative Directors, Social Strategists, Community Managers, Analysts, and audience engagement specialists'
    ],
    traits: [
      'junior or senior level of experience from an accredited art school or equitable work experience',
      'the absolute love, desire & knowledge for all things Social Media',
      'fundamental design skills',
      'maturity & confidence in yourself as a designer',
      'knowledge of the Adobe Creative Suite',
      'impeccable attention to detail & design quality control',
      'ability to self-manage deadlines',
      'ability to work with a mix of quick turnaround asks and full-time ongoing projects',
      'knowledge of design best practices for Social Media',
      'strong drawing skills',
      'experience with Interactive Design beyond Social',
      'understanding of all major social platforms & why certain content best operates on each',
      'curiosity to explore & play',
      'the desire to grow into a creative leader',
      'the desire to learn the artistic, business & technological requirements of a project (on brand, on budget & within scope)',
      'the desire to learn how to captivate & engage your audience (the client, your director & ultimately the end user)',
      'natural love of an open and honest feedback loop to facilitate both team member & GLOW growth',
      'PLUSES: Copywriting skills and a love for all things pop culture'
    ]
  },
  {
    title: 'junior producer/editor',
    active: true,
    type: 'freelance',
    summary: 'GLOW is looking for a creative and resourceful Junior Producer/Editor who can assist with creating compelling short-form video content for the web and other digital platforms. Must be a native of the digital and pop cultural landscape with intimate knowledge of the latest and greatest in social media, content and emerging technology/platforms. This is a full-time paid position. You must submit a sample video of your work and LINKS to your favorite things around the net to be considered for this position.',
    duties: [
      'Coming up creative concepts and executions',
      'Assist with video shoots - must be comfortable using DSLRs',
      'Setting up basic lighting configurations',
      'Assist with research and media gathering',
      'Editing filmed content'
    ],
    traits: [
      'EPK and or Field Producing experience',
      'Interest in and focus on creating social media video content',
      'Experience with DSLR cameras, sound and lighting equipment',
      'On set experience is a plus',
      'A competitive drive -- you enjoy winning and really going for it',
      'Ability to take direction and work in a dynamic'
    ]
  },
  {
    title: 'social media art director',
    active: true,
    type: 'freelance',
    summary: 'Our dream Art Director is a leader, a builder, a presenter, an inventor, & above all else, a Social creature – in love with the medium & able to harness the things that make it great.',
    duties: [
      'Providing leadership & creative vision for the Social Media Design Team',
      'Injecting your knowledge of, and passion for, Social Media into the design process',
      'Developing relationships with clients, & providing a service that brings them back for more ',
      'Creating work alongside those you\'re directing (roughly a 60/40 split between direction/creation)',
      'Staying abreast of developments in the Social space, & finding exciting applications for them within your projects'
    ],
    traits: [
      'An inborn love of Social Media',
      'The ability to captivate & engage your audience (the client, your director, your designers, & ultimately the end user)',
      '3+ years of agency design experience, with some experience in a managerial role',
      'The ability to lead, direct, inspire, critique, present, demonstrate, cajole, twist, & juke your way to great product',
      'Strong communication skills (written & verbal, client facing & internal)',
      'The ability to satisfy the artistic, business & technological requirements of a project (on brand, on budget & within scope)',
      'Skills in relevant tools (Adobe CC, shared Google Docs, etc.)',
      'A working knowledge of mobile (design & UX best practices)'
    ]
  },
  {
    title: 'junior project manager',
    active: true,
    type: 'freelance',
    summary: 'As a Junior Project Manager you will:',
    duties: [
      'Assist the production director on managing the day-to-day production of digital campaigns and projects.',
      'Learn to manage and interpret important client, vendor and publisher materials such as media detail, scheduling docs, resource management documents and spec sheets. ',
      'Create, organize and distribute internal production documents.',
      'Schedule, facilitate and participate in client and internal staff meetings, brainstorms, etc.',
      'Liaise with account manager and production staff; the right person will have the ability to interface with clients.',
      'Create and manage project schedules.',
      'Demonstrate solid judgment to ensure the daily production cycle runs smoothly.',
      'Direct report to the Production Director.'
    ],
    traits: [
      'Must be incredibly enthusiastic about the ever-evolving worlds of social media, the digital landscape at-large, and the media & TV industry',
      'Strategic thinker',
      'Rock solid organizational skills',
      'Excellent written and verbal presentation skills ',
      'Strong attention to detail and the ability to multitask',
      'Proficient in Google, PC and Mac OS – email, docs, spreadsheets, presentations',
      'Must possess a sense of pride and a strong work ethic',
      'Passion to learn and commitment to the team'
    ]
  },
  {
    title: 'social strategist',
    active: true,
    type: 'freelance',
    summary: 'GLOW continues to experience amazing growth. We are currently looking for additional social strategists to work on very high profile entertainment clients who are considered amongst the best at social marketing.',
    duties: [
      'Social media strategy and execution',
      'Client facing',
      'Can take ownership of project/client and can work with the client to see it through',
      'Shape Voice and Tone for brand',
      'Work with GLOWs creative department to produce creative and compelling social content',
      'Craft, pitch, and execute strategic social marketing plans for clients',
      'Establish KPI’s and success metrics',
      'Provide recommendations for new, innovative social executions',
      'Help our clients navigate the rapidly-evolving world of digital and social',
      'Lead a group of community managers and support staff'
    ],
    traits: [
      'Must be incredibly enthusiastic about the ever-evolving worlds of social media, the digital landscape at-large, and the media & TV industry',
      'Big thinker',
      'Strategic thinker',
      'Rock solid organizational skills',
      'Excellent written and verbal presentation skills ',
      'Strong attention to detail and the ability to multitask',
      'Must possess a sense of pride and a strong work ethic',
      'Passion to learn and commitment to the team'
    ]
  }
];

export class Career extends React.Component {
  static propTypes = {
    job: React.PropTypes.object.isRequired
  }

  constructor (props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  toggleItem () {
    this.setState({isOpen: !this.state.isOpen});
  }


  getStatusCharacter () {
    return (this.state.isOpen) ? '− ' : '+ ';
  }

  render () {
    var bodyStyle = {
      height: (this.state.isOpen) ? 'auto' : 0,
      overflow: 'hidden',
      paddingTop: (this.state.isOpen) ? 15 : 0
    };

    var duties = this.props.job.duties.map(function (duty, i) {
      return <li key={i} className={styles.duty}>{duty}</li>;
});
var traits = this.props.job.traits.map(function (trait, i) {
  return <li key={i} className={styles.trait}>{trait}</li>;
    });

    var color = (this.state.isOpen) ? colors.radRed : colors.stormDust;
    var mailTo = `mailto:jobs@weareglow.com?subject=${this.props.job.title}%20position%20availability&body=Hi%20there%2C%0D%0A%0D%0AInterested%20in%20this%20${this.props.job.title}%20position.`;

    return (
      <div className={styles.career_list_item}>
        <div ref='careerHeader' onClick={this.toggleItem.bind(this)} className={styles.career_item_header}>
          <div className={styles.career_title} style={{color: color}}><span>{this.getStatusCharacter()}</span>{this.props.job.title}</div>
          <div className={styles.career_type} style={{color: color, visibility: (this.state.isOpen) ? 'visible' : 'hidden'}}>{this.props.job.type}</div>
        </div>
        <div className={styles.career_body} style={bodyStyle} ref='careerBody'>
          <p style={{marginBottom: 0}}>
            {this.props.job.summary}
          </p>
          <div className={styles.position_duties}>
            <div className={styles.section_header}>position duties</div>
            <ul className={styles.duties}>
              {duties}
            </ul>
          </div>
          <div className={styles.position_traits}>
            <div className={styles.section_header}>our ideal hire...</div>
            <ul className={styles.traits}>
              {traits}
            </ul>
          </div>
          <div className={styles.apply_now}>
            <a href={mailTo}>apply now</a>
          </div>
        </div>
      </div>
    );
  }
}

export class Careers extends React.Component {
  static contextTypes = {
    setupPageInfo: PropTypes.func,
    animatePageContentIn: PropTypes.func
  };

  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.context.setupPageInfo('Careers');
    this.context.animatePageContentIn(this.refs.page);
  }

  render () {
    const careerItems = Jobs.map(function (item, i) {
      return <Career key={i} job={item} />;
    });

    return (
      <div className='container' id='careers' ref='page'>
      <Header title={'careers'} subtitle={'oh yeah! come drink our kool-aid.'} />
        <div className='page-content'>
         <div className='row'>
      <p className={styles.careers_copy}>At GLOW, hiring the best and brightest talent is by far our best concept.  If you are looking to join a young, smart, hardworking team that values thinking, creativity, passion and curiosity, then we want to hear from you.  Below is a list of current positions available at GLOW.</p>
      </div>
      </div>
      <h1 className={styles.headline}>current openings</h1>
      <div className={styles.career_list}>
      <div className='row'>
      {careerItems}
      </div>
      </div>
      </div>
    );
  }
}

export default Careers;
