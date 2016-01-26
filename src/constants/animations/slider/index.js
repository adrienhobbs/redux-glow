/* eslint-disable */
let upAndOut = {
  dur: 1.48,
  vars: {
    yPercent: -100,
    ease: Power3.easeInOut
  }
};

let inAndUp = {
  dur: 1,
  vars: {
    yPercent: 0 ,
    delay: 0.3,
    ease: Power3.easeInOut,
    autoAlpha: 1,
    transformOrigin: "center center"
  }
};

let downAndIn = {
  dur: 0.9,
  vars: {
    yPercent: 0,
    delay: 0,
    ease: Quart.easeInOut
  }
};

let downAndOut = {
  dur: 0.8,
  vars: {
    yPercent: 100 ,
    ease: Quart.easeInOut,
    autoAlpha: 1
  }
};

var SlideAnimations = (function(){
  var animateUpAndOut = function animateUpAndOutTween(el) {
    let TL = new TimelineLite({autoRemoveChildren: true});
    TL.add(TweenLite.to(el, upAndOut.dur, upAndOut.vars), 0);
    return TL;
  };

  var animateInAndUp = function animateInAndUpTween(el) {
    let TL = new TimelineLite({autoRemoveChildren: true});
    TL.add(TweenLite.to(el, inAndUp.dur, inAndUp.vars), 0);
    return TL;
  };

  var animateDownAndIn = function animateDownAndInTween(el) {
    let TL = new TimelineLite({autoRemoveChildren: true});
    TL.add(TweenLite.to(el, downAndIn.dur, downAndIn.vars), 0);
    return TL;
  };

  var animateDownAndOut = function animateDownAndOutTween(el) {
    let TL = new TimelineLite({autoRemoveChildren: true});
    TL.add(TweenLite.to(el, downAndOut.dur, downAndOut.vars), 0);
    return TL;
  };

  return {
    upAndOut: animateUpAndOut,
    upAndIn: animateInAndUp,
    downAndIn: animateDownAndIn,
    downAndOut: animateDownAndOut
  }
})();

export default SlideAnimations;
