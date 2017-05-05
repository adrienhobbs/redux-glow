/*eslint-disable */
/**
 *
 *            Slide Tracker
 *  -- Keeps Track of current slide --
 *  -- Always returns a valid slide number --
 *
 *
 */

var SlideTracker = (function() {

  var slideTracker = {

    set current(num) {
      this.__current__ = num;
    },

    get current() {
      return (this.__current__ < 0 ) ? 0 : this.__current__;
    },

    set total(num) {
      this.__total__ = num;
    },

    get total() {
      return this.__total__;
    },

    get previous() {
      return (this.isFirst) ? 0 : this.__current__ - 1;
    },

    get next() {
      return (this.isLast) ? this.__current__ : this.__current__ + 1 ;
    },

    get isLast() {
      return this.__current__ === this.__total__;
    },

    get isFirst() {
      return this.__current__ === 0;
    },

    inc: function() {
      this.current = this.next;
      return this.current;
    },

    dec: function() {
      this.current = this.previous;
      return this.current;
    }

  };

  // Closure

  var publicApi = {
    create: function (total) {
      var sT = Object.create(slideTracker);
      sT.current = 0;
      sT.total = total;
      return sT;
    }

  };

  return publicApi;


})();

module.exports = SlideTracker;
