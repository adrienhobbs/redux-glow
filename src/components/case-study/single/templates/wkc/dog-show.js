import React from 'react';
import Results from 'components/ui/results';
import shader from 'constants/shade-blender';
import Sidebar from 'components/ui/sidebar';
import BaseTemplate from '../base-study-template';

export class WKC extends BaseTemplate {

  static propTypes = {
    data: React.PropTypes.object
  };

  constructor (props) {
    super(props);
  }

  render () {
    const subStyle = {color: shader(0.15, this.props.data.get('logoColor'))};
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
                <p style={copyStyle}>That is seventeen five - your half of the thirty-five thousand. Plus there's an extra fifteen in there, it's all yours, you've earned it. We made a deal. That's right. Because I think that we can do business together - we came to an understanding. Take a look at the money in your hand. Now just imagine making that every week. That's right. Two pounds a week, thirty-five thousand a pound. Look... I feel like I'm running out of ways to explain this to you but once more, I shall try. <span style={subStyle}>This fly is a major problem for us. </span>It will ruin our batch. And we need to destroy it and every trace of it, so we can cook.</p>
              </div>
            </div>
            <Sidebar data={this.props.data}/>
          </div>
          <article className='results' id='results'>
            <Results data={this.props.data} bg={this.props.data.get('secColor')} />
          </article>
          <div className='end'>
            <svg preserveAspectRatio='none' className='end-shape' ref='endShape' version='1.1' id='Layer_1'  x='0px' y='0px' viewBox='0 0 1920 600' >
              <polygon style={{fill:  '#c3c3c3'}} points='0,0 1920,314.6 1920,600 0,600 '/>
            </svg>
            <div className='copy' style={{backgroundColor: '#c3c3c3'}}>
              <div className='copy-inner end'>
                <h2 style={this.getHeadlineStyle()} className='page-title'>recap</h2>
                <p style={copyStyle}>That is seventeen five - your half of the thirty-five thousand. Plus there's an extra fifteen in there, it's all yours, you've earned it. We made a deal. That's right. Because I think that we can do business together - we came to an understanding. Take a look at the money in your hand. Now just imagine making that every week.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WKC;
