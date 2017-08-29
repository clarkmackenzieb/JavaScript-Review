//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).
function Animal(species,name,legs,color,food){

  //code here

  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.food = food;
}
//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
function person(name, age, height, gender){
  return {
    name: name,
    age: age,
    height: height,
    gender: gender,

  }

}

//Create an animal array and a person array.

  //code here
var animals = [];
var person = [];

//Create two instances of Animal and push those into your animal array

  //code here
var cat = new Animal("cat", "delilah", 4, "calico", ["fish", "birds", "moles"]);

var dog = new Animal("dog", "dudley", 4, "golden", ["dog food", "trash", "cheeseburgers"])

animals.push(dog);
animals.push(cat);

//Create two instances of person and push those into your person array.

  //code here

  var Mackenzie = person("Mackenzie", 22, "SUPER SHORT", "Lady");
  var Paul = person("Paul", 25, "a lil short", "Dude");

  people.push(Mackenzie);
  people.push(Paul);

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here

  Animal.prototype.eat = function(){
    var num = (Math.random() * (this.food.length - 0 + 1)) + 0;
    alert(Animal.name + "ate" + Animal.food[num]);
  }

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

  //no, because it has no contextual bindings 


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
  // it creates a new instance/object with the passed in arguments
  2) What's a good way to describe the keyword 'this'
  // a pointer to objects. defines context.
  3) Can a normal function which creates an object and then returns that object use the prototype?
  // yes, but... it's weird. so don't do it. 
  4) What happens if you forget to use 'new' when calling a constructor?
  // :O binds to window. bad! don't do it!
*/