import React, { PropTypes } from 'react';
import Header from 'components/ui/header-component/header-component.js';
import styles from './careers.css';
import colors from '../../constants/colors.js';

const Jobs = [
  {
    title: 'account executive',
    active: true,
    type: 'full time',
    summary: 'We are looking for smart and focused account executives that are excellent communicators, share our passion for the digital and social space and want to be part of a growing and winning team. The right person for this position has a passion for digital/social, is knowledgeable, hard-working, brings with them a great deal of enthusiasm, shares our work ethic and attention to detail, and has a willingness to learn and teach. If you’re creative about how you approach challenges, always look to provide solutions, live for the details, love the fast pace, stay cool under pressure and want to continue to grow professionally in a very talented agency environment, then you have a bright future here at GLOW.',
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
    title: 'sr. creative designer',
    active: true,
    type: 'freelance',
    summary: 'We are looking for smart and focused account executives that are excellent communicators, share our passion for the digital and social space and want to be part of a growing and winning team. The right person for this position has a passion for digital/social, is knowledgeable, hard-working, brings with them a great deal of enthusiasm, shares our work ethic and attention to detail, and has a willingness to learn and teach. If you’re creative about how you approach challenges, always look to provide solutions, live for the details, love the fast pace, stay cool under pressure and want to continue to grow professionally in a very talented agency environment, then you have a bright future here at GLOW.',
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
    title: 'junior designer',
    active: true,
    type: 'part time',
    summary: 'We are looking for smart and focused account executives that are excellent communicators, share our passion for the digital and social space and want to be part of a growing and winning team. The right person for this position has a passion for digital/social, is knowledgeable, hard-working, brings with them a great deal of enthusiasm, shares our work ethic and attention to detail, and has a willingness to learn and teach. If you’re creative about how you approach challenges, always look to provide solutions, live for the details, love the fast pace, stay cool under pressure and want to continue to grow professionally in a very talented agency environment, then you have a bright future here at GLOW.',
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
    title: 'motion designer',
    active: true,
    type: 'full time',
    summary: 'We are looking for smart and focused account executives that are excellent communicators, share our passion for the digital and social space and want to be part of a growing and winning team. The right person for this position has a passion for digital/social, is knowledgeable, hard-working, brings with them a great deal of enthusiasm, shares our work ethic and attention to detail, and has a willingness to learn and teach. If you’re creative about how you approach challenges, always look to provide solutions, live for the details, love the fast pace, stay cool under pressure and want to continue to grow professionally in a very talented agency environment, then you have a bright future here at GLOW.',
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
    title: 'strategist',
    active: true,
    type: 'full time',
    summary: 'We are looking for smart and focused account executives that are excellent communicators, share our passion for the digital and social space and want to be part of a growing and winning team. The right person for this position has a passion for digital/social, is knowledgeable, hard-working, brings with them a great deal of enthusiasm, shares our work ethic and attention to detail, and has a willingness to learn and teach. If you’re creative about how you approach challenges, always look to provide solutions, live for the details, love the fast pace, stay cool under pressure and want to continue to grow professionally in a very talented agency environment, then you have a bright future here at GLOW.',
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
          <div className={styles.career_type} style={{color: color}}>{this.props.job.type}</div>
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
    console.log(this);
  }

  toggleItem () {

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
