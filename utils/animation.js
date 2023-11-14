/**
 * Adds animation while scrolling
 * @param {*} animation callback, take target element and adds styles for animation
 */

export const intesectionUtil = (animation) => {
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  debugger
  const callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animation(entry.target)
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);

  var targets = document.querySelectorAll(".target");
  targets.forEach(target => observer.observe(target))
}


