// Uncomment sections to see the effects!

//Changing the CSS properties of elements
$(function(){
  // let redBox = $(".red-box");
  //You can find out the width of the red box below. 80px
  // console.log(redBox.css("width"));
  //similarly, you can get the width with the width method and it will return the width WITHOUT the px. It will just give you the number. This is helpful if you needed to do some calculations. 
  // console.log(redBox.width());

  // redBox.css("background-color", "#D2691E");
  // $("p").css("font-size", "18px");
  // Add on 20px of width to the existing width. 
  // redBox.css("width", "+=20");

  // You can also set a variable to an array of css properties. 
  // let properties = $("p").css(["font-size", "line-height", "color"]);
  // It will print out as a JS object key/value pair. 
  // console.log(properties);

  //If you didnt want the text to be selectable. If you look in you insepect and select the red box, if you used fireFox it will have put the moz- prefix for you. This is helpful when writing code across platforms. 

  // redBox.css("user-select", "none");

  //You can also pass in a function here. 
  // redBox.css("user-select", function(){
  //   return "none";
  // });

})

//Adding or Removing CSS Classes
$(function(){
  //NOTICE how there is no DOT in front of the class fancy-link. This is because it is already specified that it is a class with the addClass() method. Adding a DOT would be redundant. 
  $("a").addClass("fancy-link");

  // You can also add more than one class at once like so:
  $("p:first").addClass("large emphasize");

// You can also give a bunch of items an index and run a function that can name each class. In thids case we select the li of li. This would be the sub li items. 
$("li li").addClass(function(index){
  // In this case, we are taking the sub li elements, and for each of them, we are adding a class of item- and the index number +1. With this we would get item-1, item-2, item-3... and so on until all the sun item li elements have a class. 
  $(this).addClass("item-" + (index + 1));
  console.log(this);
})

// You can also add a class using a function. In this code below, we are selecting all divs. If the div has a current class equal to "dummy", it will add "red-box" class to it. 
$("div").addClass(function(index, currentClass){
  if (currentClass === "dummy"){
    return "red-box";
  }

})

// Removing classes is also simple. Use the removeClass() method to remove a class specified. You can then chain on a new class to add as this is what it is commonly used for!
$(".dummy").removeClass("dummy red-box").addClass("blue-box 2");


// Coding Mini Challenge!
// Select a dummy element, remove the dummy class and instead add the green box class.
// Because all the changes to the dummy box, we have to realize that the dummy box's class is no longer dummy. It is now blue-box 2. By selecting it by class 2, we can remove the old classes and add on the new green box class. I also added a 2 because I wanted to specify which green box this is. 
$(".2").removeClass("blue-box 2").addClass("green-box 2");

// The instructor does it like this because he commented out all the previous code. 
// $(".dummy").removeClass("dummy").addClass("green-box");

})