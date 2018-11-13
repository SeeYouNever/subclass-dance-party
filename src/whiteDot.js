
var makeWhiteDot = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer cat"><img class = "sprite cat" src = "http://media.giphy.com/media/67j0Iy0UzvBG8/giphy.gif"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  //this.$node.toggle();
}


makeWhiteDot.prototype = Object.create(makeDancer.prototype);

makeWhiteDot.prototype.constructor = makeWhiteDot;

makeWhiteDot.prototype.oldStep = makeDancer.prototype.step;
makeWhiteDot.prototype.step = function() {
  
  //set oldStep equal to the 'step' function bound to the parent class 'makeDancer'
// makeDancer.prototype.step;
  this.oldStep();
  this.$node.toggle();
}

