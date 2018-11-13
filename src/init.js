$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    // console.log($(this)[0].dataset.dancerMakerFunctionName); // this evaluates to makeBlinkyDancer
    var dancerMakerFunctionName = $(this)[0].dataset.dancerMakerFunctionName;
    //console.log('bob', dancerMakerFunctionName)
    
    // get the maker function for the kind of dancer we're supposed to make
    //var dancerMakerFunction = window[dancerMakerFunctionName];
    
    var dancerMakerFunction = window[dancerMakerFunctionName]; //dynamically allows access to a dancer function  

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  });
  
  
 
 $('.addWhiteDot').on('click', function (event) {
  var whiteDotString = $(this)[0].dataset.dancerMakerFunctionName;
  console.log('dancerMakerFunctionName', $(this)[0].dataset.dancerMakerFunctionName)
  
  
  var dancerMakerFunction = window[whiteDotString]; //dynamically allows access to a dancer function  
  console.log('dancerMakerFunction', dancerMakerFunction);
  console.log('window', window)

  var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
  
    $('body').append(dancer.$node);
 }) 
  
  
  
});

