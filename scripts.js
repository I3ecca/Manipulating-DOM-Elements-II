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

//Adding or Removing CSS Classes. Uncomment dummy div in HTML file to see effects of each line. 
 $(function(){
  //NOTICE how there is no DOT in front of the class fancy-link. This is because it is already specified that it is a class with the addClass() method. Adding a DOT would be redundant. 
  // $("a").addClass("fancy-link");

  // You can also add more than one class at once like so:
  // $("p:first").addClass("large emphasize");

// You can also give a bunch of items an index and run a function that can name each class. In thids case we select the li of li. This would be the sub li items. 
// $("li li").addClass(function(index){
  // In this case, we are taking the sub li elements, and for each of them, we are adding a class of item- and the index number +1. With this we would get item-1, item-2, item-3... and so on until all the sun item li elements have a class. 
//   $(this).addClass("item-" + (index + 1));
//   console.log(this);
// })

// You can also add a class using a function. In this code below, we are selecting all divs. If the div has a current class equal to "dummy", it will add "red-box" class to it. 
// $("div").addClass(function(index, currentClass){
//   if (currentClass === "dummy"){
//     return "red-box";
//   }

// })

// Removing classes is also simple. Use the removeClass() method to remove a class specified. You can then chain on a new class to add as this is what it is commonly used for!
// $(".dummy").removeClass("dummy red-box").addClass("blue-box 2");


// Coding Mini Challenge!
// Select a dummy element, remove the dummy class and instead add the green box class.
// Because all the changes to the dummy box, we have to realize that the dummy box's class is no longer dummy. It is now blue-box 2. By selecting it by class 2, we can remove the old classes and add on the new green box class. I also added a 2 because I wanted to specify which green box this is. 
// $(".2").removeClass("blue-box 2").addClass("green-box 2");

// The instructor does it like this because he commented out all the previous code. 
// $(".dummy").removeClass("dummy").addClass("green-box");

})

//Changing the Data of an Element. Associating and removing data with JQuery. Uncomment to see effects!
$(function(){
  // let gallery = $(".gallery");
  // console.log(gallery);


  // let images =  [
  //   "img/laptop-mobile_small.jpg",
  //   "img/laptop-on-table_small.jpg",
  //   "img/people-office-group-team_small.jpg"
  // ];

// Here we are adding a new key to the object called availableImages and added the images as its value. 

  // gallery.data("availableImages", images);

  //Prints out array of the three images available. 

  // console.log(gallery.data("availableImages"));

  // Here we creata a name key and assign the value of The Awersome Gallery. 

  // gallery.data("name", "The Awesome Gallery");
  // console.log(gallery.data("name"));

  //We can use data() method to see all the data the selected value has. 

  // console.log(gallery.data());

  //We can also remove key/value pairs from data like so:

  // gallery.removeData("name");

  //Now when we print out the data for gallery, it no longer has name. 

  // console.log(gallery.data());

  // Will return undefined because the name was removed. 

  // console.log(gallery.data("name"));


  //Another cool thing is that with HTML 5 you can specify a key value pair right in the HTML. In the HTML we wrote on the first p tag, data-mydata="some data here". Now when we want to access that, JQuery will recognize the data as mydata. 

  // let firstP = $("p:first");

  // console.log(firstP.data("mydata"));


})


//Manipulating the data between the opening and closing tags. The content of the element!
$(function(){

// We will be focusing on these two methods! text(), html()

// let firstPar = $("p:first");

//When you log out with text() and html() you can see they are very similar! They both log out the text of the first p element, however the html also prints out any other tags that are in the p. In this case we can see the <span> elements print out. 

//Both of the functions will not include the parent paragraph tag. But only what is between the opening and closing tags. 

// console.log(firstPar.text());
// console.log(firstPar.html());

// Seems like this one works? Actually because there are multiple p elements, JQuery is only going to pick the first one. The text() and html() methods can only be used for one element. 

// console.log($("p").html());

//Lets make a new text! IF we use the text() method to make new text but then I also want to add some HTML in like a strong tag, it will print out the tags as text on the docuemnt, not bold the text like we want. 

//This can be helpful if you actually wanted to have some code snippets on your page, but if you do not want this, it is best to use he html() method. 

// firstPar.text("<strong>Hello World!</strong>");
// firstPar.html("<strong>Hello World!</strong>");


//Quick Mini Challenege! Append some text to the paragraph. Adding all the text we had before plus a new sentence!

//To do this, you select the firstPar variable, and then you use the html() method. Now you want to pass in the variable firstPar.html() + the new text you want after!

// console.log(firstPar.html());

// firstPar.html(firstPar.html() + " I am a new sentence at the end of the first paragraph!");

// console.log(firstPar.html());



})