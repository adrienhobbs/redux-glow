import React from 'react';
import Sidebar from 'components/ui/sidebar';
import BaseTemplate from '../base-study-template';

export class Casual extends BaseTemplate {

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
          <article className='results' id='results'>
            <div className='results-bg' style={{backgroundColor: this.props.data.get('results').bgColor}}></div>
            <div className='results-outer'>
              <h1 style={this.getHeadlineStyle()} className='page-title'>results</h1>
              <div className='results-inner'>
                <div className='stat-boxes'>
                  <div className='stat-device-left'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        #Trending
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Trended #1 in U.S. & #2 across the planet
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        6 million
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        video views
                      </h5>
                    </div>
                  </div>
                  <div className='stat-device-image'>
                    <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/syfy/sharknado/sharknado-device.png' alt='' />
                  </div>
                  <div className='stat-device-right'>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        100%
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        increase in Twitter traffic
                      </h5>
                    </div>
                    <div className='stat-rule'></div>
                    <div className='stat-box-device'>
                      <div style={{color: this.props.data.get('results').statColor}} className='stat-num'>
                        2 billion
                      </div>
                      <h5 style={{color: this.props.data.get('results').statLabelColor}} className='stat-description'>
                        Twitter impressions
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
          <div className='media-campaign'>
            {this.createHeadlineEl('social strategy')}
            <div className='copy'>
              <div className='copy-inner'>
                <p style={this.getCopyStyle()}>Glow also partnered to create the digital media campaigns for Veep.  As both social and display partner, we were able to work with HBO to integrate the robocall number into key art on all display units in the campaign, adding a significant element of reach and awareness to the effort.</p>
              </div>
            </div>
            <div className='img-single'>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/hbo/veep/veep-media.png' alt='' />
            </div>
            <div className='end'>
              <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
                <polygon style={{fill:  this.props.data.get('endShape').bgColor}} points='0,0 1920,314.6 1920,600 0,600 '/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Casual;
