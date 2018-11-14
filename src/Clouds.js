var makeCloud = function(top, left){
  makeDancer.call(this, top, left)
  this.$node = $('<span class="dog"><img class = "sprite" src = "https://media.giphy.com/media/O4eiQDMi5S18I/giphy.gif" width="150px" height="150px" </span>')
  this.setPosition(top, left);
}
makeCloud.prototype = Object.create(makeWhiteDot.prototype);
makeCloud.prototype.constructor = makeCloud;