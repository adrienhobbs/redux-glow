import React, { PropTypes } from 'react';
import { EmployeeCardAnimation as CardAnim } from 'constants/animations/pages';

export class EmployeeCard extends React.Component {

  static propTypes = {
    photoName: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string
  };

  constructor (props) {
    super(props);
  }

  showEmployeeInfo () {
    const TL = new TimelineLite();
    TL.to(this.refs.employeeImageRoll, CardAnim.showImageRollover.dur, CardAnim.showImageRollover.params)
    .to(this.refs.employeeInfo, CardAnim.showInfo.dur, CardAnim.showInfo.params, CardAnim.showInfo.startTime)
    .fromTo(this.refs.innerWrap, CardAnim.showWrap.dur, CardAnim.showWrap.paramsFrom, CardAnim.showWrap.paramsTo, CardAnim.showWrap.startTime);
  }

  hideEmployeeInfo () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.to(this.refs.employeeInfo, CardAnim.hideInfo.dur, CardAnim.hideInfo.params, CardAnim.hideInfo.startTime);
    TL.to(this.refs.innerWrap, CardAnim.hideWrap.dur, CardAnim.hideWrap.params, CardAnim.hideWrap.startTime);
    TL.to(this.refs.employeeImageRoll, CardAnim.hideImageRollover.dur, CardAnim.hideImageRollover.params, CardAnim.hideImageRollover.startTime);
  }

  render () {
    return (
      <div className='employee-card' onMouseEnter={this.showEmployeeInfo.bind(this)} onMouseLeave={this.hideEmployeeInfo.bind(this)}>
        <img ref='employeeImage' src={'https://s3.amazonaws.com/weareglow-assets/employee-photos/' + this.props.photoName + '.jpg'} alt='' style={{width: '100%'}}/>
        <img className='img-roll' ref='employeeImageRoll' src={'https://s3.amazonaws.com/weareglow-assets/employee-photos/' + this.props.photoName + '_Roll.jpg'} alt='' style={{width: '100%'}}/>
        <div className='employee-card-inner' ref='employeeInfo'>
          <div className='inner-wrap' ref='innerWrap'>
            <div className='employee-name'>{this.props.name}</div>
            <div className='employee-position'>{this.props.position}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
