import HomeDesktopView from './DesktopHomeView.js';
import HomeMobileView from './MobileHomeView.js';

const HomeViews = (function () {
  return {
    desktop: HomeDesktopView,
    mobile: HomeMobileView
  };
}());

export default HomeViews;

