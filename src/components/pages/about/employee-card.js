import React, { PropTypes } from 'react';
import { EmployeeCardAnimation as CardAnim } from 'constants/animations/pages';
import { words } from 'lodash';

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
    TL.addLabel('start');
    TL.to(this.refs.employeeInfo, CardAnim.showInfo.dur, CardAnim.showInfo.params, CardAnim.showInfo.startTime);
    TL.to(this.refs.employeeImageRoll, CardAnim.showImageRollover.dur, CardAnim.showImageRollover.params, CardAnim.showImageRollover.startTime);
  }

  hideEmployeeInfo () {
    const TL = new TimelineLite();
    TL.addLabel('start');
    TL.to(this.refs.employeeInfo, CardAnim.hideInfo.dur, CardAnim.hideInfo.params, CardAnim.hideInfo.startTime);
    TL.to(this.refs.employeeImageRoll, CardAnim.hideImageRollover.dur, CardAnim.hideImageRollover.params, CardAnim.hideImageRollover.startTime);
  }

  getFirstChar (string) {
    return string.charAt(0);
  }

  getFirstName () {
    return words(this.props.name)[0];
  }

  getLastName () {
    return words(this.props.name)[1];
  }

  getEmployeeName () {
    if (this.props.name.length > 15) {
      return `${this.getFirstName()} ${this.getFirstChar(this.getLastName())}.`;
    } else {
      return this.props.name;
    }
  }

  render () {
    return (
      <div className='employee-card' onMouseEnter={this.showEmployeeInfo.bind(this)} onMouseLeave={this.hideEmployeeInfo.bind(this)}>
        <div className='employee-card-inner-container' >
          <img ref='employeeImage' src={'https://s3.amazonaws.com/weareglow-assets/employee-photos/' + this.props.photoName + '.jpg'} alt='' style={{width: '100%'}}/>
          <img className='img-roll' ref='employeeImageRoll' src={'https://s3.amazonaws.com/weareglow-assets/employee-photos/' + this.props.photoName + '_Roll.jpg'} alt='' style={{width: '100%'}}/>
          <div className='employee-card-inner' ref='employeeInfo'>
            <div className='employee-card-inner-wrap' ref='innerWrap'>
              <div className='employee-name'>{this.getEmployeeName()}</div>
              <div className='employee-position'>{this.props.position}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
