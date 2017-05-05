const WorkHelpers = (function () {
  var work;

  const getFeaturedTitles = function () {
    return work.featured.map(function (work) {
      return work.get('cat');
    });
  };

  const getCurrentFeaturedSlide = function (current) {
    console.log(this);
    return work.featured.get(current);
  };

  const getCurrentTitle = function () {
    return getCurrentFeaturedSlide().get('cat');
  };

  return {
    init: function (data) {
      work = data;
    },
    getFeaturedTitles: getFeaturedTitles,
    getCurrentTitle: getCurrentTitle,
    getCurrentFeaturedSlide: getCurrentFeaturedSlide
  };
}());

export default WorkHelpers;
