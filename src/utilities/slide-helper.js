const WorkHelpers = (function () {
  var work;

  const getTitles = function () {
    return work.featured.map(function (work) {
      return work.get('cat');
    });
  };

  return {
    init: function (data) {
      work = data;
    },
    getTitles: getTitles
  };
}());

export default WorkHelpers;
