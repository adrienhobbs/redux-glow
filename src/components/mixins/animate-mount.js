const animateMountMixin = {
  leftTransTL: (leftEl, startOrigin, endOrigin) => {
    const TL = new TimelineLite;
    TL.to(leftEl, 0.42, {scaleX: 1, transformOrigin: startOrigin, ease: Quart.easeIn});
    TL.to(leftEl, 0.42, {scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeIn});
    return TL;
  },
  rightTransTL: (rightEl, startOrigin, endOrigin) => {
    const TL = new TimelineLite;
    TL.to(rightEl, 0.42, {scaleX: 1, transformOrigin: startOrigin, ease: Quart.easeIn});
    TL.to(rightEl, 0.12, {scaleX: 0, transformOrigin: endOrigin, ease: Quart.easeIn});
    return TL;
  },
  pageTransTL: (pageEl, xStart) => {
    const TL = new TimelineLite;
    TL.fromTo(pageEl, 0.4, {xPercent: xStart}, {xPercent: 0, ease: Quart.easeOut});
    return TL;
  },
  animateMount: function (transLeft, transRight) {
    const pageTL = new TimelineLite;
    const transOriginStart = (this.props.location.state.animDir === 'left') ? 'center left' : 'center right';
    const transOriginEnd = (this.props.location.state.animDir === 'left') ? 'center right' : 'center left';
    const xStart = (this.props.location.state.animDir === 'left') ? -100 : 100;

    pageTL.addLabel('start');
    pageTL.add(this.leftTransTL(transLeft, transOriginStart, transOriginEnd), 'start');
    pageTL.add(this.rightTransTL(transRight, transOriginStart, transOriginEnd), 'start+=0.33');
    pageTL.add(this.pageTransTL(this.refs.page, xStart), 'start+=1.1');
  }
};

export default animateMountMixin;
