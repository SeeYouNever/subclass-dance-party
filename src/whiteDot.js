
var makeWhiteDot = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="addWhiteDancer"></span>')
  //this.$node.toggle();
}


makeWhiteDot.prototype = Object.create(makeDancer.prototype);

makeWhiteDot.prototype.constructor = makeWhiteDot;



