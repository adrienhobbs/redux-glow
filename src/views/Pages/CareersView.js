import React from 'react';
import { connect } from 'react-redux';
import PageLayout from 'layouts/PageLayout/PageLayout';
import Header from 'components/ui/header-component/header-component.js';

const mapStateToProps = (state) => ({
  routerstate: state.router
});
export class Careers extends PageLayout {
  constructor (props) {
    super(props);
  }
  componentWillMount () {
    this.setupPageInfo('Careers');
  }
  componentDidMount () {
    this.animatePageContentIn();
  }

  render () {
    return (
      <div className='container' id='careers' ref='page'>
        <Header title={'careers'} subtitle={'We pay your bills in exchange for your skills'} />
        <div className='page-content'>
          <div className='row'>
            <p className='careers-copy'> MailChimp makes powerful marketing products that people love to use. In 2015, our 500 employees will help 9 million users around the world send 200 billion emails. We’re privately owned, profitable, and growing fast. We live in Atlanta and dream in the stratosphere. We’re always looking for weird, smart, and independent thinkers to join the team.</p>
          </div>
          <div className='row career-listings'>
            <div className='career'>
              <div className='career-category'>
                <h4 className='career-title'>client services</h4>
                <ul className='positions-list'>
                  <li className='position'>project manager</li>
                  <li className='position'>account manager</li>
                </ul>
              </div>
            </div>
            <div className='career'>
              <div className='career-category'>
                <h4 className='career-title'>creative</h4>
                <ul className='positions-list'>
                  <li className='position'>junior designer</li>
                  <li className='position'>art director</li>
                  <li className='position'>production designer</li>
                </ul>
              </div>
            </div>
            <div className='career'>
              <div className='career-category'>
                <h4 className='career-title'>strategy</h4>
                <ul className='positions-list'>
                  <li className='position'>junior strategist</li>
                  <li className='position'>brand strategist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Careers);
