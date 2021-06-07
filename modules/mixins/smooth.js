"use strict";

export default {
 /*
  * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
  */
  defaultEasing :  (x) => {
    if(x < 0.5) {
      return Math.pow(x*2, 2)/2;
    }
    return 1-Math.pow((1-x)*2, 2)/2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: (x) =>  x,
  // accelerating from zero velocity
  easeInQuad:(x) =>   x * x,
  // decelerating to zero velocity
  easeOutQuad: (x) => x * (2 - x),
  // acceleration until halfway, then deceleration
  easeInOutQuad: (x) =>  x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x,
  // accelerating from zero velocity 
  easeInCubic: (x) => x * x * x,
  // decelerating to zero velocity π
  easeOutCubic: (x) => (--x) * x * x + 1,
  // acceleration until halfway, then deceleration 
  easeInOutCubic: (x) => x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1,
  // accelerating from zero velocity 
  easeInQuart: (x) =>  x * x * x * x,
  // decelerating to zero velocity 
  easeOutQuart: (x) =>  1 - (--x) * x * x * x,
  // acceleration until halfway, then deceleration
  easeInOutQuart: (x) =>   x < .5 ? 8 * x * x * x * x : 1 - 8 * (--x) * x * x * x,
  // accelerating from zero velocity
  easeInQuint: (x) =>  x * x * x * x * x,
  // decelerating to zero velocity
  easeOutQuint: (x) =>  1 + (--x) * x * x * x * x,
  // acceleration until halfway, then deceleration 
  easeInOutQuint: (x) =>   x < .5 ? 16 * x * x * x * x * x : 1 + 16 * (--x) * x * x * x * x,
  // deceleration until 25% then accelerates faster
  easeInExpo: (x) => x === 0 ? 0 : pow(2, 10 * x - 10),
  // accelerates until 25% then deceleration
  easeOutExpo: (x) => x === 1 ? 1 : 1 - pow(2, -10 * x),
  // deceleration at halfway, but fast at beginning and end
  easeInOutExpo: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2,
  // goes back then accelerate to end and stop
  easeInBack: (x) => 2.70158 * x * x * x - 1.70158 * x * x,
  // goes a little beyond at end
  easeOutBack: (x) => 1 + 2.70158 * pow(x - 1, 3) + 1.70158 * pow(x - 1, 2),
  // goes back at beginning and goes beyond at end
  easeInOutBack: (x) => x < 0.5 ? (pow(2 * x, 2) * ((1.70158 + 1) * 2 * x - 2.5949095)) / 2 : (pow(2 * x - 2, 2) * ((2.5949095 + 1) * (x * 2 - 2) + 2.5949095) + 2) / 2,
  // very bouncy at end
  easeInElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * ((2 * Math.PI) / 3)),
  // very bouncy at beginning 
  easeOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * ((2 * Math.PI) / 3)) + 1,
  // very bounce at beginning and at end
  easeInOutElastic: (x) => x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2  : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1

};
