import React, { PropTypes } from 'react';
import { EmployeeCardAnimation as CardAnim } from 'constants/animations/pages';
import words from 'lodash/words';
import styles from './employee-card.css';

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
      <div className={styles.employee_card} onMouseEnter={this.showEmployeeInfo.bind(this)} onMouseLeave={this.hideEmployeeInfo.bind(this)}>
        <div className={styles.employee_card_inner_container} >
          <img className={styles.img_one} ref='employeeImage' src={'https://s3.amazonaws.com/weareglow-assets/employee-photos/' + this.props.photoName + '.jpg'} alt='' style={{width: '100%'}}/>
          <img className={styles.img_roll} ref='employeeImageRoll' src={'https://s3.amazonaws.com/weareglow-assets/employee-photos/' + this.props.photoName + '_Roll.jpg'} alt='' style={{width: '100%'}}/>
          <div className={styles.employee_card_inner} ref='employeeInfo'>
            <div className={styles.employee_card_inner_wrap} ref='innerWrap'>
              <div className={styles.employee_name}>{this.getEmployeeName()}</div>
              <div className={styles.employee_position}>{this.props.position}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeCard;
