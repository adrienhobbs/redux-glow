// import React from 'react';
// import './slider.scss';
// import du from 'domutil';
// import WorkItems from 'components/work-items';

// const Slider = React.createClass({

//   propTypes: {
//     goForward : React.PropTypes.func,
//     goBack    : React.PropTypes.func,
//     toggleNav : React.PropTypes.func,
//     TL        : React.PropTypes.object
//   },

//   getInitialState () {
//     return {
//       singleView: false
//     };
//   },

//   componentDidMount () {
//     du.bind(document, 'touchmove', this.listenForTouchMove);
//   },

//   componentDidUpdate (nextProps, prevState) {
//     if (this.state.singleView && !prevState.singleView) {
//       this.cancelTouchMoveListen();
//     } else if (!this.state.singleView && prevState.singleView) {
//       du.bind(document, 'touchmove', this.listenForTouchMove);
//     }
//   },

//   componentWillUnmount () {
//     this.cancelTouchMoveListen();
//   },

//   onWheel (e) {
//     this.checkThreshold(e);
//   },

//   onTouchStart (e) {
//     if (!this.state.singleView) {
//       const t = (e.targetTouches) ? e.targetTouches[0] : e;
//       this.touchStartX = t.pageX;
//       this.touchStartY = t.pageY;
//     }
//   },

//   onTouchMove (e) {
//     if (!this.state.singleView) {
//       const touchMult = 1;
//       const t = (e.targetTouches) ? e.targetTouches[0] : e;
//       const event = {
//         deltaX: (t.pageX - this.touchStartX) * touchMult,
//         deltaY: (t.pageY - this.touchStartY) * touchMult
//       };

//       this.checkThreshold(event, e);
//     }
//   },

//   listenForTouchMove (e) {
//     e.preventDefault();
//   },

//   cancelTouchMoveListen () {
//     du.unbind(document, 'touchmove', this.listenForTouchMove);
//   },

//   checkThreshold(e) {
//     if (!this.state.singleView) {
//       if (e.deltaY > 50) {
//         if (e.type === 'wheel') {
//           this.props.goForward();
//         } else {
//           this.props.goBack();
//         }
//       } else if (e.deltaY < -50) {
//         if (e.type === 'wheel') {
//           this.props.goBack();
//         } else {
//           this.props.goForward();
//         }
//       }
//     }
//   },

//   toggleNav(bool) {
//     this.setState({singleView: !this.state.singleView});
//     this.props.toggleNav(bool);
//   },

//   render() {
//     return (
//       <div className='slider'
//            ref='slider'
//            onWheel={(evt) => this.onWheel(evt)}
//            onTouchMove={(evt) => this.onTouchMove(evt)}
//            onTouchStart={(evt) => this.onTouchStart(evt)}
//         >
//         <WorkItems
//           ref='workItems'
//           getCurrentPosition={this.getCurrentPosition}
//           TL={this.props.TL}
//           toggleNav={this.toggleNav}
//           featuredWorkOnly
//           slider />
//       </div>
//     );
//   }
// });

// export default Slider;
