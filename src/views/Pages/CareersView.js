/*eslint-disable*/
import React, { PropTypes } from 'react';
import Header from 'components/ui/header-component/header-component.js';
import styles from './careers.css';
import colors from '../../constants/colors.js';

const Jobs = [
  {
    title: 'project manager',
    contactEmail: 'pete',
    active: true,
    type: 'full time',
    summary: 'Glow Interactive, Inc. has an opening for a Project Manager - Digital and Social Media Agency at its New York City offices.',
    duties: [
      'Responsible for and manages day-to-day activities on projects for a digital and social media agency that range from website development, mobile applications and video content',
      'Work closely with internal teams and clients to execute digital initiatives that integrate with our clients’ overall strategic goals',
      'Interface between client and team, as well as vendors when needed',
      'Work with management, team and client to establish scope, set project timelines and to manage the overall flow of the effort from kickoff to completion',
      'Keep projects on track through clear task lists, issue tracking, status reports, and meeting notes',
      'Clearly communicate changes, issues, and resolutions to the tactical and executive teams'
    ],
    traits: [
      'Has Bachelor’s Degree in Computer Science, Business Administration in or with a concentration in Marketing, or a related field or its foreign equivalent and two years post-Degree experience in the position or the above referenced education and two years post-Degree experience in any occupation providing marketing services for a digital and social media agency, including assisting the account team with strategic planning, user research, brainstorming, pitching, and collaborating',
      'Firm knowledge and understanding of modern day digital technologies such as: HTML5, Javascript, iOS/Android, chatbots, software SDK’s and social platform API’s',
      'Two years of analytic experience with MS Excel, Google Analytics, and Omniture; Must have demonstrated skills as being highly organized and a detailed-oriented multitasker',
      'Must have demonstrated knowledge of the digital and social media agency market, good problem- solving skills and the ability to communicate and to lead conversations effectively, and to function in a team environment',
      'Current knowledge of digital marketing best practices and industry best practices',
      'Demonstrated ability to manage multiple, competing priorities, duties and/or projects',
      'A genuine enthusiasm about pop culture, entertainment and social media and an understanding of what other brands are doing in the space',
      'Demonstrated ability to communicate clearly and effectively with clients at varying levels'
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
  },
  {
    title: 'social design intern',
    active: true,
    type: 'full time',
    contactEmail: 'intern.creative',
    summary: 'A love for marketing and all things social. You are fluent in social media and know how to speak the visual language of users, no matter what platform, and are passionate about taking social design to the next level. ',
    traits: [
      'Junior or Senior level of experience from an accredited art school or equitable work experience',
      'Strong knowledge of design best practices for Social Media',
      'Strong fundamental design skills',
      'A knack for visual storytelling',
      'Maturity and confidence as a designer',
      'Strong knowledge of the Adobe Creative Suite',
      'Working knowledge of motion design language and principles',
      'Impeccable attention to detail & design quality control',
      'Ability to handle simultaneous design tasks',
      'Ability to self-manage deadlines',
      'Understanding of all major social platforms and why certain content best operates on each',
      'Curiosity to explore and play',
      'The desire to grow into a creative leader',
      'The desire to learn the artistic, business & technological requirements of a project (on brand, on budget/scope and within technical parameters)',
      'The desire to learn how to captivate and engage your audience (the client, your director & ultimately the end user)',
      'Natural love of an open and honest feedback loop to facilitate both team member and GLOW growth'
    ],
    duties: [
      'Creating a plethora of static and motion content across all social media platforms',
      'Owning projects alongside senior/junior designers for multiple entertainment clients simultaneously',
      'Innovating alongside senior/junior designers to come up with new design ideas and solutions within your executions',
      'Presenting your design decisions to senior/junior designers internally',
      'Influencing our clients & staff by providing them valuable social media thinking',
      'Discovering developments in the Social space to deliver innovative & competitive content',
      'Collaborating on new business opportunities',
      'Playing in brainstorms and ideation sessions',
      'Engaging with GLOW’s internal teams including Art Directors, Social Strategists, Community Managers, Analysts, and audience engagement specialists'
    ]
  },
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
    var contactEmail = this.props.job.contactEmail || 'jobs'
    var mailTo = `mailto:${contactEmail}@weareglow.com?subject=${this.props.job.title}%20position%20availability&body=Hi%20there%2C%0D%0A%0D%0AInterested%20in%20this%20${this.props.job.title}%20position.`;
    var extraContent = (this.props.job.title === 'project manager') ? 'Applicants should send resumes to Peter Levin at Glow Interactive, Inc., 333 Hudson Street, Suite 302, NY, NY or to Pete@weareglow.com. Equal Opportunity Employer' : ''

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
          <div style={{fontStyle: 'italic', textAlign: 'center', display: 'block', marginTop: 10}}>
            {extraContent}
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
