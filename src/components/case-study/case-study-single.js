import React from 'react';
import { connect } from 'react-redux';
import setPageInfo from 'constants/set-page-info';
import WorkItems from 'components/work-items';

const mapStateToProps = (state) => ({
  nav: state.nav,
  viewport: state.viewport,
  app: state.app,
  counter: state.counter
});
export class CaseStudySingle extends React.Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    app: React.PropTypes.object,
    viewport: React.PropTypes.object,
    counter: React.PropTypes.object
  };

  constructor () {
    super();
  }

  componentDidMount () {
    console.log(this.props.children);
    setPageInfo('CASE-STUDY');
  }
  componentWillReceiveProps () {
    console.log(this);
  }
  render () {
    return (
      <div id="work">
      </div>
    );
  }
}


export default connect(mapStateToProps)(CaseStudySingle);
