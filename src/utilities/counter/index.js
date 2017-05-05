/*eslint-disable */

var SlideTracker = require("./slide-tracker");

var slideCounter = (function() {

    var slideTracker = SlideTracker.create();

    function startCounting(tS) {
        slideTracker.total = tS;
        return slideTracker.current;
    }

    function next() {
        return slideTracker.inc();
    }

    function back() {
        return slideTracker.dec();
    }

    function prevSlide() {
        return slideTracker.previous;
    }

    function nextSlide() {
        return slideTracker.next;
    }

    function isFirst() {
        return slideTracker.isFirst;
    }

    function isLast() {
        return slideTracker.isLast;
    }

    function currentSlide() {
        return slideTracker.current;
    }

    function nextIsLast() {
        return (slideTracker.current + 1) === slideTracker.total;
    }

    function getTotal() {
        return slideTracker.total;
    }

    function setCurrent(current) {
        slideTracker.current = current;
        return slideTracker.current;
    }

    var publicApi = {
        next: next,
        back: back,
        start: startCounting,
        isLast: isLast,
        isFirst: isFirst,
        nextSlide: nextSlide,
        previousSlide: prevSlide,
        current: currentSlide,
        nextIsLast: nextIsLast,
        getTotal: getTotal,
        setCurrent: setCurrent
    };

    return publicApi;

})();


module.exports = slideCounter;
