import React from 'react';
import BaseTemplate from '../base-study-template';
import AboutSection from '../../../content-modules/about.js';
import ResponsiveVideo from 'components/video/responsive';
import Button from 'components/ui/buttons/button.js';

export class BridgetJones extends BaseTemplate {
  static propTypes = {
    data: React.PropTypes.object
  };
  constructor (props) {
    super(props);
  }
  render () {
    const copyStyle = this.getCopyStyle();
    return (
      <div ref='studyContent' className='study-content'>
        <div className='content-container'>
          <AboutSection data={this.props.data} >
            <Button
              link='http://bridgetjonesmoment.com/'
              hoverColor='#8153af'
              color={this.props.data.get('secColor')}
              bgColor={this.props.data.get('headlineColor')}
              text='View Site'
            />
          </AboutSection>
          <article className='approach'>
            {this.createHeadlineEl('take the quiz')}
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <ResponsiveVideo src='http://player.vimeo.com/video/216734259?title=0&byline=0&portrait=0' />
            </div>
            <div className='copy'>
              <div className='copy-inner'>
                <p style={copyStyle}>A UGC experience that allowed users to create their own Bridget Jones Moment by taking a dynamic quiz that matched the user’s personality type with a quote from the film. Images created could be downloaded and shared on Facebook and Twitter. A content filtering tool was developed to allow rapid approval or rejection of user-generated photos displayed in the global photo gallery. A global meme gallery was implemented to allow users to view the thousands of user-generated photos that have been created to date.</p>
              </div>
            </div>
          </article>
          <article className='approach'>
            {this.createHeadlineEl('user generated content')}
            <div className='img-single inner_section' style={{marginTop: 0}}>
              <img src='https://s3.amazonaws.com/weareglow-assets/case-studies/universal/bridget-jones-moment/user-generated.jpg' alt='mindy project social centric' />
            </div>
          </article>
        </div>
      </div>
    );
  }
}

export default BridgetJones;
