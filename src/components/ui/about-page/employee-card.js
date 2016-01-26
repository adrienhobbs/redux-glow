import React from 'react';
import './_employee-card.scss';

const cdm = function employeeCardDidMount () {
  this.employeeInfo  = this.refs.employeeInfo;
  this.employeeImage = this.refs.employeeImage;
  this.innerWrap     = this.refs.innerWrap;
  this.ease          = Expo.easeInOut;
  this.infoTL        = new TimelineMax(
    {
      onReverseCompleteParams: ['{self}'],
      onReverseComplete: function empCardRevComplete (self) {
        self.clear();
      }
    }
  );
};

const showEmployeeInfo = function employeeInfoIn () {
  this.infoTL.add(TweenLite.to(this.employeeInfo, 0.5,
    {
      scaleY: 1,
      transformOrigin: 'bottom center',
      ease: this.ease
    }
  )).add(TweenLite.set(this.employeeImage,
      {className: '+=filter'}, '-=0.3')
  ).add(
    TweenLite.fromTo(
      this.innerWrap, 0.5,
      {y: 80},
      {y: 0, ease: this.ease}
    ), '-=0.4');
  this.infoTL.play();
};

const hideEmployeeInfo = function employeeInfoOut () {
  this.infoTL.reverse();
};

const render = function renderEmployeeCard () {
  return (
    <div className="employee-card"
         onMouseEnter={this.showEmployeeInfo}
         onMouseLeave={this.hideEmployeeInfo}
      >
      <img ref='employeeImage' src={'/assets/images/employee-photos/' + this.props.photo} alt=""
           style={{width: '100%'}}
        />
      <div className="employee-card-inner" ref='employeeInfo'>
        <div className="inner-wrap" ref="innerWrap">
          <div className="employee-name">{this.props.name}</div>
          <div className="employee-position">{this.props.position}</div>
        </div>
      </div>
    </div>
  );
};

const EmployeeCard = React.createClass({
  render: render,
  componentDidMount: cdm,
  showEmployeeInfo: showEmployeeInfo,
  hideEmployeeInfo: hideEmployeeInfo
});


export default EmployeeCard;
