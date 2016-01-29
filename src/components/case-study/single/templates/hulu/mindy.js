import React from 'react';
import Sidebar from 'components/ui/sidebar';
import BaseTemplate from '../base-study-template';

export class MindyProject extends BaseTemplate {

  static propTypes = {
    data: React.PropTypes.object
  };
  constructor (props) {
    super(props);
  }
  getStatContent () {
    return this.props.data.get('results').stats.map((stat, i) => {
      return (
        <div key={i} className='stat-box-triple'>
          <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
            {stat.stat}
          </div>
          <div style={{color: this.props.data.get('results').statLabelColor}} className='stat-label'>
            {stat.label}
          </div>
        </div>
      );
    });
  }
  render () {
    // const subStyle = {color: shader(0.15, this.props.data.get('logoColor'))};
    const copyStyle = this.getCopyStyle();

    return (
      <div ref='studyContent' className='study-content' style={{background: this.props.data.get('secColor')}}>
        <div className='content-container' style={{backgroundColor: this.props.data.get('secColor')}}>
          <h1 style={this.getHeadlineStyle()} className='page-title'>about</h1>
          <div className='copy' id='about'>
            <div className='about-left'>
            </div>
            <div className='about-center'>
              <div className='copy-inner'>
                <p style={copyStyle}>GLOWs relationship with celebrity chef Carla Hall from ABC’s “The Chew” began with a conversation around launching a Kickstarter campaign to raise funds to support her life long dream of opening her own restaurant, Carla Hall’s Southern Kitchen. <br /> <br /> GLOW laid out a strategy that began with a complete social refresh of all of Carla’s social profiles to ignite and strengthen her base before we kicked off her Kickstarter campaign.<br /> <br /> In just 3.5 months, we increased Facebook page Likes by 20.73 % - Twitter followers by 8.0% and Instagram follows by 34.48%.</p>
              </div>
            </div>
            <Sidebar data={this.props.data}/>
          </div>
          <div className='end'>
            <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
              <polygon style={{fill:  this.props.data.get('secColor')}} points='0,0 1920,314.6 1920,600 0,600 '/>
            </svg>
          </div>
        </div>
      </div>
    );
  }
}

export default MindyProject;
