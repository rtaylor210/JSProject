
console.log('sup');

var var1 = 25; 

let vare = "jerr";

const htf = "frid";

//catch const change exception
//when to use constants?

console.log(var1);

// true, false, null,

var obj = {
    prop1: "value",
    prop2: 54,
    prop3: "lv"
};

// very, very disgusting object syntax

console.log(obj);


//Arrays

var array = ["jim", "jerr", "fjsk"];

array.push("Jack");

array.pop();

console.log(array);

//Objects

var object_one = {
    prop1: "value",
    prop2: 54,
    prop3: "lv"
}

console.log(object_one.prop2);

//Object in object ??

var object_two = {
    prop1: "name",
    prop2: "nickname",
    object_in_object_two: {
        prop_in_wierd_obj: 55
    }
};

console.log(object_two.object_in_object_two.prop_in_wierd_obj);


// Switch-case statements

var val =8;

switch(val){

    case 87:
        console.log("fgh");
        break;
    default:
        console.log("default");
        break;
}

// this allows for fall-through
// meaning without a break after
// a case is true all following statements
// will be executed till a break

// LOOPS

// For-loop

var fruits = ["jelly", "guttt", "gdkvjn", "yellow"];

for(var i = 0; i<fruits.length; i++){
      console.log(i);

    if(fruits[i] == "gdkvjn"){
      console.log("got 'im");
      break;
    }
}

// While loop

while(true){

break;
}

// how to block while-true attacks?

// do-while loop

do{
    console.log("maybe not");
} while(false);

//Functions










// JS - HTML

document.getElementById("demo").innerHTML = "Hello JavaScript"; 

document.getElementById("demo").style.fontSize = "35px"; 















