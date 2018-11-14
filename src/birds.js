var makeBirds = function(top, left){
  makeDancer.call(this, top, left)
  this.$node = $('<span class="bird"><img class = "sprite bird" src = "https://mbtskoudsalg.com/images/bird-gif-png-7.png" </span>')
  this.setPosition(top, left);
}
makeBirds.prototype = Object.create(makeWhiteDot.prototype);
makeBirds.prototype.constructor = makeBirds;