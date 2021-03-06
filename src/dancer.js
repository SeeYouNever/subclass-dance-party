// // Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {

//   var dancer = {};

//   // use jQuery to create an HTML <span> tag
//   dancer.$node = $('<span class="dancer"></span>'); //sets property on dance object which is a Jquery span node

//   dancer.step = function() {
//     // the basic dancer doesn't do anything interesting at all on each step,
//     // it just schedules the next step
//     setTimeout(dancer.step, timeBetweenSteps);
//   };
  
//   dancer.step(); //incoke dancer.step

//   dancer.setPosition = function(top, left) {
//     // Use css top and left properties to position our <span> tag
//     // where it belongs on the page. See http://api.jquery.com/css/
//     //
//     var styleSettings = {
//       top: top,
//       left: left
//     };
//     dancer.$node.css(styleSettings);
//   };

//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   dancer.setPosition(top, left);

//   return dancer;
// };



// Our implementation is below
var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"><img class = "dog" src = "https://orig00.deviantart.net/fe46/f/2017/049/4/3/excuse_me_pardon_me_by_baying-dazkh6o.gif" width="200px" height="250px"></span>');
  this.step(); 
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
}




makeDancer.prototype.step = function() {
  var dancerContext = this;//sets context to makeBlinkyDancer b/c oldStep is being invoked and refering back to this line

  // setTimeout(this.step.bind(dancerContext), this.timeBetweenSteps);
  // setTimeout(makeDancer.prototype.step.bind(dancerContext), this.timeBetweenSteps); //try it normally with setTimeout(this, timeBetweenSteps)
}




makeDancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
    this.$node.css(styleSettings)
}









