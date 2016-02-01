export const getTrackTween = function () {
  const TL = new TimelineLite();
  const rect = this.refs.projectIntro.getBoundingClientRect();
  const projHeight = this.refs.projectBox.getBoundingClientRect().height;
  const windowW = window.innerWidth;
  TL.set(this.refs.projectIntro, {
    width: rect.width,
    height: rect.height,
    x: rect.left,
    y: rect.top,
    position: 'fixed',
    overflow: 'hidden'
    // zIndex: 99
  });
  TweenLite.set(this.refs.projectBox, {height: projHeight});

  TL.set(this.refs.projectImage, {
    className: '-=link'
  }, 0);

  TL.to(this.refs.projectIntro, 0.8, {
    width: windowW,
    height: '100%',
    x: windowW / 2,
    y: 0,
    xPercent: -50,
    ease: Quart.easeInOut,
    clearProps: 'all',
    className: '-=closed',
    onComplete: () => {
      this.setState({showBody: !this.state.showBody});
    }
  }, 0);
  return TL;
};

