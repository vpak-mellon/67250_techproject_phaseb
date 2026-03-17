// var x = 5;
// var y = 7;
// var z = x + y;
// console.log(z);

// var a = "Hello ";
// var b = "World!";
// var c = a + b;
// console.log(c);

// function sumAndPrint(x1, x2) {
//     console.log(x1 + x2);
// }

// sumAndPrint(x, y);
// sumAndPrint(a, b);

// if (c.length > z) {
//     console.log(c);
// } else if (c.length < z) {
//     console.log(z);
// } else {
//     console.log("Good Job!");
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];
// const fruitArrays = [L1, L2];

// function findTheBanana(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] == "Banana") {
//             alert("Banana Found!");
//         }
//     }
// }

// fruitArrays.forEach(findTheBanana())

var now = new Date();
var hour = now.getHours();

// Set h2 greeting on index.html
function setGreeting(h) {
    var greeting = "";
    if (h < 5 || h >= 20) {
        greeting = "Good Night";
    } else if (h < 12) {
        greeting = "Good Morning";
    } else if (h < 18) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }
    if (document.getElementById("greeting") != null) {
        document.getElementById("greeting").innerHTML = greeting;
    }
}

// Update footer year
function addYear() {
    document.getElementById("copyYear").innerHTML = now.getFullYear();
}

// Set h2 greeting on index.html
setGreeting(hour);