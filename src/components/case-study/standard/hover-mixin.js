import Colors from 'constants/colors';

const HoverMixin = {

  hover () {
    const infoEls  = [this.refs.clientName, this.refs.sep, this.refs.projectName];
    const rect     = this.refs.projectIntro.getBoundingClientRect();
    const infoRect = this.refs.projectInfo.getBoundingClientRect();
    const yPer     = rect.height / 2 - (infoRect.height / 1.5);
    this.hoverTL   = new TimelineLite({autoRemoveChildren: true});

    this.hoverTL.addLabel('start');
    this.hoverTL.add(TweenMax.to([this.refs.projectTitle, this.refs.tags], 0.5, {y: -yPer, ease: Expo.easeInOut}), 'start');
    this.hoverTL.add(TweenLite.fromTo(this.refs.overlay, 0.3, {autoAlpha: 0}, {autoAlpha: 0.5, ease: Expo.easeInOut}), 'start');
    this.hoverTL.add(TweenLite.to(this.refs.shape, 0.5, {scaleY: 0.5, ease: Expo.easeInOut, transformOrigin: 'bottom center'}), 'start');
    this.hoverTL.add(TweenLite.fromTo(this.refs.overlay, 0.3, {autoAlpha: 0}, {autoAlpha: 0.5, ease: Expo.easeInOut}), 'start');
    this.hoverTL.add(TweenLite.to(infoEls, 0.4, {color: Colors.radRed}), 0);
    this.hoverTL.play();
  },

  hoverOut () {
    const infoEls = [this.refs.clientName, this.refs.sep, this.refs.projectName];
    const TL      = new TimelineLite({autoRemoveChildren: true});

    TL.addLabel('start');
    TL.add(TweenMax.to([this.refs.tags, this.refs.projectTitle], 0.5, {y: 0, ease: Expo.easeInOut}), 'start');
    TL.add(TweenLite.fromTo(this.refs.overlay, 0.8, {autoAlpha: 0.5}, {autoAlpha: 0, ease: Expo.easeInOut}), 'start');
    TL.add(TweenLite.to(this.refs.shape, 0.5, {scaleY: 0, ease: Expo.easeInOut, transformOrigin: 'bottom center'}), 'start+=0.05');
    TL.add(TweenLite.to(infoEls, 0.4, {color: Colors.tin}), 'start');
    TL.play();
  }

};

export default HoverMixin;
