import shader from 'constants/shade-blender';

const IconHoverMixin = {
  onMouseEnter () {
    const hoverColor = shader(-0.20, this.props.color);
    TweenLite.to(this.refs.icon, 0.3, {fill: hoverColor, stroke: hoverColor, ease: Circ.easeInOut});
  },
  onMouseLeave () {
    TweenLite.to(this.refs.icon, 0.3, {fill: this.props.color, stroke: this.props.color, ease: Circ.easeInOut});
  }
};

export default IconHoverMixin;
