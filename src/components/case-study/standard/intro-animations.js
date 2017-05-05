import du from 'domutil';

const IntroAnimations = {

  getNavTween () {
    const TL = new TimelineLite;
    TL.add(
      this.props.navActions.changeNavState.bind(
        this, {isVisible: !this.state.singleMode}
      ));
    return TL;
  },

  getTrackTween () {
    const TL      = new TimelineLite;
    const rect    = this.refs.projectIntro.getBoundingClientRect();
    const windowW = window.innerWidth;

    TL.set(this.refs.projectIntro, {
      width: rect.width,
      height: rect.height,
      x: rect.left,
      y: rect.top,
      position: 'fixed',
      overflow: 'hidden',
      zIndex: 99
    });

    TL.set(this.refs.projectBox, {height: rect.height + 80});

    TL.to(this.refs.projectImage, 0.6, {
      height: '100%',
      ease: Power4.easeOut,
      className: '-=link'
    }, 0.3);

    TL.to(this.refs.projectIntro, 0.8, {
      width: windowW,
      height: '100%',
      x: windowW / 2,
      y: 0,
      xPercent: -50,
      ease: Expo.easeInOut,
      clearProps: 'all',
      className: '-=closed',
      onComplete: () => {
        du.addClass(document.body, 'locked');
      }
    }, 0);
    return TL;
  },

  openStudy () {
    du.addClass(document.body, 'locked');
    this.TL.reverse();
    this.props.hideOthers(this.props.id, true);
    this.studyTL        = new TimelineLite();
    const floatContainer  = this.getTrackTween();
    const navTween        = this.getNavTween();
    this.studyTL.add(floatContainer, 0);
    this.studyTL.add(navTween, 0.4);
    this.studyTL.add(TweenLite.to(this.maskSvg, 0.3, {autoAlpha: 0, opacity: 0, ease: Expo.easeInOut}), 0);
    this.studyTL.add(TweenLite.to(this.info, 0.4, {autoAlpha: 0, opacity: 0}), 0.4);
  },

  closeStudy () {
    const sequence = new TimelineLite({paused: true});
    sequence.add(this.reverseStudyTL, 0);
    sequence.add(this.getNavTween, 0.6);
    sequence.play();
    this.props.hideOthers(null, false);
  },

  openStudyFromProject () {
    if (!this.state.singleMode) {
      this.toggleStudyState();
    }
  },

  reverseStudyTL () {
    TweenLite.set(this.refs.projectIntro, {overflow: 'hidden'});
    this.studyTL.eventCallback('onReverseComplete', () => {
      TweenLite.set([this.refs.projectIntro, this.refs.projectImage, this.refs.projectBox], {
        clearProps: 'all'
      });
    });

    du.removeClass(document.body, 'locked');
    return this.studyTL.reverse();
  },

  setMaskViewBox () {
    const rect = this.refs.projectImage.getBoundingClientRect();
    const ht   = rect.height;
    const wd   = rect.width;
    TweenLite.set(this.refs.maskSvg, {attr: {viewBox: `0 0 ${wd} ${ht}`}});
  },
  testTween () {
    this.maskSVGTL = new TimelineMax;
    const rect = this.refs.projectImage.getBoundingClientRect();
    const ht   = rect.height;
    const wd   = rect.width;
    const sP = [0, ht, wd, ht, wd, ht, 0, ht];
    const eP = [0, ht * 0.8, wd, ht * 0.6, wd, ht, 0, ht];
    eP.ease = Expo.easeInOut;
    eP.onUpdate = () => {
      const points = `${sP[0]} ${sP[1]} ${sP[2]} ${sP[3]} ${sP[4]} ${sP[5]} ${sP[6]} ${sP[7]}`;
      TweenLite.set(this.refs.pointsSvg, {attr: {points: points}});
    };
    TweenLite.set(this.refs.maskSvg, {attr: {viewBox: '0 0 ' + wd + ' ' + ht}});
    this.maskSVGTL.to(sP, 0.4, eP);

  },

  testTweenOut () {
    this.maskSVGTL.reverse();
  },
  getMaskEndValue () {

    if (this.refs.projectImage) {
      this.testTween();
      const rect = this.refs.projectImage.getBoundingClientRect();
      const ht   = rect.height;
      const wd   = rect.width;
      if (this.state.isHovered) {
        return {
          val: {
            vb: '0 0 ' + wd + ' ' + ht,
            points: {val: [0, ht * 0.8, wd, ht * 0.6, wd, ht, 0, ht], config: [700, 37]},
            opac: {val: 1, config: [200, 20]},
            vis: {val: (this.state.singleMode) ? 'hidden' : 'visible', config: []}
          }
        };
      } else {
        return {
          val: {
            points: {val: [0, ht, wd, ht, wd, ht, 0, ht], config: [400, 37]},
            vb: '0 0 ' + wd + ' ' + ht,
            opac: {val: 0, config: [200, 20]},
            vis: {val: (this.state.singleMode) ? 'hidden' : 'visible', config: []}
          }
        };
      }
    } else {
      return {
        val: {
          vb: '0 0 560 169',
          points: {val: [0, 0, 0, 0, 0, 0, 0, 0], config: []},
          opac: {val: 0, config: [200, 20]},
          vis: {val: (this.state.singleMode) ? 'hidden' : 'visible', config: []}
        }
      };
    }
  },

  getInfoEndValue () {
    if (this.state.isHovered) {
      const rect       = this.refs.projectImage.getBoundingClientRect();
      const ht         = rect.height;
      const maskHeight = (this.props.viewport.isMobile) ? ht * 0.3 : ht * 0.230;
      const fSize      = (this.props.viewport.isMobile) ? ht / 6 : ht / 10;
      return {
        val: {
          y: {val: -(maskHeight), config: [200, 20]},
          fontSize: {val: fSize, config: [1000, 40] },
          fontColor: {val: [249, 48, 91], config: [1000, 40]},
          data: {val: this.props.data.toJS(), config: []},
          state: {val: this.state, config: []}
        }
      };
    } else {
      return {
        val: {
          y: {val: 0, config: [170, 18]},
          fontSize: {val: 24, config: [232, 28]},
          fontColor: {val: [128, 128, 128], config: [1000, 40]},
          data: {val: this.props.data.toJS(), config: []},
          state: {val: this.state, config: []}
        }
      };
    }
  }

};

export default IntroAnimations;
