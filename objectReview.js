//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

  //Your code here

var favoriteThings = { 
  band: "Fleet Foxes",
  food: "Curry",
  person: "Mom",
  book: "Crusader",
  movie: "Mamma Mia!", 
  holiday: "Christmas"
}

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here

  favoriteThings.car = "Fiesta";
  favoriteThings.brand = "Starbucks";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  //Your code here

  favoriteThings.food = "Lettuce";
  favoriteThings.book = "50 Shades of Gray";

//Now, alert your favorite person, then alert your favorite book.

  //Your code here

  alert(favoriteThings.person);
  alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here

  for(var prop in user){
    if(!user[prop]){
      delete user[prop];
    }
  }

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Your code here

  user.name = "Mackenzie";
  user.email = "clarkmackenzieb@gmail.com";
  user.pwHash = "12345";
  user.birthday = "11/01/1994";
  user.username = "clarkmackenzieb";
  user.age = 22;

//Now console.log your object and make sure it looks right.

  //Your code here

  console.log(user);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  //Your code here

  var methodCollection = {
    alertHello: function(){
      alert("hello");
    },
    logHello: function(){
      console.log("hello");
    },
  }

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  //Your code here
//oops did that wrong MY B
//Now call your alertHello and logHello methods. 
methodCollection.alertHello();
methodCollection.logHello();
  //Your code here



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};

//lol this code is way more complicated than it had to be

function voweler(str){
  str = str.replace(/[^aeiou]/gi, '');
  var newArr = str.split('');
  var myObj = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };

newArr.map(function(x){
  if(x === "a"){
    myObj.a += 1;
  }
  else if(x === "e"){
    myObj.e += 1;  
  }
  else if(x === "i"){
    myObj.i += 1;  
  }
  else if(x === "o"){
    myObj.o += 1;  
  }
  else if(x === "u"){
    myObj.u += 1; 
  }

});

for(var prop in myObj){
  if(myObj[prop] === 0){
    delete myObj[prop];
  }
}

return myObj;
}
