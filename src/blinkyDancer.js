// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step;// saves step method from makeDancer through fall-through

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle(); //toggles the node which was made in makeDancer
//   };

//   return blinkyDancer;
// };


var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  //this.$node.toggle();
}


makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;


//goal is to call step / makeDancers step

console.log('bob', makeDancer.prototype)

makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;

// console.log(makeBlinkyDancer.prototype.oldStep)

makeBlinkyDancer.prototype.step = function() {
  
  //set oldStep equal to the 'step' function bound to the parent class 'makeDancer'
// makeDancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
}

