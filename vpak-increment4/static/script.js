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

// Global date object
var now = new Date();
var hour = now.getHours();
var month = now.getMonth();

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

/* Sets the 'active' class on the navigation link that matches the current page URL.*/
function activeNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');
    console.log(navLinks);

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active-nav-link");
        }
    });
}

// Only use following code on index page
if (window.location.href.includes("index")) {
// When the "Read Less" button is clicked
    $("#long-intro-read-less").click(function(){ 
        $("#long-intro").hide(); // Hide the long introduction text
        $("#long-intro-read-less").hide();  // Hide the "Read Less" button itself
        $("#long-intro-read-more").show();  // Show the "Read More" button  

    });
  
// Index page: When the "Read More" button is clicked
    $("#long-intro-read-more").click(function(){
        $("#long-intro").show();  // Show the long introduction text
        $("#long-intro-read-less").show();   // Show the "Read Less" button
        $("#long-intro-read-more").hide();   // Hide the "Read More" button  
    });
}

// Buy Tickets: 
// identify which date is clicked and call selectDate: 
if (window.location.href.includes("buytickets")) {
    // define buy tickets button:
    const ticketsBtn = document.getElementById("tickets-btn")
    ticketsBtn.style.width = "23rem";
    // initialized dateSelected variable for this page's logic
    let dateSelected = null;
    document.querySelectorAll(".calendar td").forEach(el => {
        el.addEventListener("click", function (e) {
            if (e.target.classList.contains("date")) {
                dateSelected = e.target.textContent;
                // style buy tickets button according to date selected
                ticketsBtn.classList.add("clickable");
                ticketsBtn.textContent = "BUY TICKETS FOR " + (month+1) + "/" + dateSelected;
            }
        });
        if (dateSelected == null) {
            ticketsBtn.classList.remove("clickable");
            ticketsBtn.textContent = "Please select a date.";
        }
    });

    // Check for buy tickets button click + show form
    const buyForm = document.getElementById("checkout-form");
    ticketsBtn.addEventListener("click", function (e) {
        if (ticketsBtn.classList.contains("clickable")) {
            buyForm.classList.add("show");
        }
    });

    // Check for submit tickets button click + show form
    buyForm.addEventListener("submit", (e) => {
    // Select all input types within the form --> ensures that all fields are filled
        const inputs = e.target.querySelectorAll("input");
        let canSubmit = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                canSubmit = false;
            }
        });
        if (canSubmit) {
            window.alert("Redirect to Payment System.");
        }
    });
}

// Set h2 greeting on index.html
setGreeting(hour);

// Execute the function to set the active navigation link on page load
activeNav();
