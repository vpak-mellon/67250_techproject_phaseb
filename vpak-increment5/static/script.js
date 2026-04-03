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

// Nav Bar:
const navLinks = document.querySelectorAll('nav a');
/* Sets the 'active' class on the navigation link that matches the current page URL.*/
function activeNav() {
    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active-nav-link");
        }
    });
}

// Responsive nav bar:
const menuIcon = document.querySelector(".nav-bar .icon");
const navBar = document.querySelector(".nav-bar");
menuIcon.addEventListener("click", function (e) {
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        link.classList.toggle("responsive");
    });
});


// Global date object
var now = new Date();
var hour = now.getHours();
var month = now.getMonth() + 1; // add 1 to account for 0 indexing
var year = now.getFullYear();

// Update footer year
function addYear() {
    document.getElementById("copyYear").innerHTML = year
}

// Index:
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

if (window.location.href.includes("index")) {
    // When the "Read Less" button is clicked
    $("#long-intro-read-less").click(function(){ 
        $("#long-intro").hide(); // Hide the long introduction text
        $("#long-intro-read-less").hide();  // Hide the "Read Less" button itself
        $("#long-intro-read-more").show();  // Show the "Read More" button  

    });
  
    // Index page: When the "Read More" button is clicked - jQuery
    $("#long-intro-read-more").click(function(){
        $("#long-intro").show();  // Show the long introduction text
        $("#long-intro-read-less").show();   // Show the "Read Less" button
        $("#long-intro-read-more").hide();   // Hide the "Read More" button  
    });
}

// Explore:
// Gallery slideshow button control:
if (window.location.href.includes("explore")) {
    const images = document.querySelectorAll(".gallery-image")
    const mainImage = document.getElementById("current-image");
    const prevBtn = document.querySelector(".previous");
    const nextBtn = document.querySelector(".next");
    let currentIndex = 0;

    function updateGallery(index) {
        currentIndex = index;
        mainImage.src = images[index].src;

        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");
    }

    // Next button
    nextBtn.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % images.length;
        updateGallery(nextIndex);
    });

    // Prev button
    prevBtn.addEventListener("click", () => {
        let prevIndex = ((currentIndex - 1) + images.length) % images.length;
        updateGallery(prevIndex);
    });
}

// Buy Tickets: 
// identify which date is clicked and call selectDate: 
if (window.location.href.includes("buytickets")) {
    // define buy tickets button/form:
    const ticketsBtn = document.getElementById("tickets-btn")
    const buyForm = document.getElementById("checkout-form");
    ticketsBtn.style.width = "23rem";

    // Autofill date in form if it is visible:
    function autofillDate() {
        if (buyForm.offsetParent!== null) {
            let dateOfVisitField = document.getElementById("dateOfVisit");
            // pad month and day to 2 digits
            let formattedMonth = month.toString().padStart(2, '0');
            let formattedDay = dateSelected.toString().padStart(2, '0');
            // autofill date
            let autofillDate = `${year}-${formattedMonth}-${formattedDay}`;
            dateOfVisitField.value = autofillDate;
        }
    }

    // initialized dateSelected variable for this page's logic
    let dateSelected = null;
    document.querySelectorAll(".calendar td").forEach(el => {
        el.addEventListener("click", function (e) {
            if (e.target.classList.contains("date")) {
                dateSelected = e.target.textContent;
                // style buy tickets button according to date selected
                ticketsBtn.classList.add("clickable");
                ticketsBtn.textContent = "BUY TICKETS FOR " + (month) + "/" + dateSelected;
            }
            // Autofill selected date in form if the form shows:
            autofillDate();
        });
        if (dateSelected == null) {
            ticketsBtn.classList.remove("clickable");
            ticketsBtn.textContent = "Please select a date.";
        }
    });

    // Check for buy tickets button click + show form
    ticketsBtn.addEventListener("click", function (e) {
        if (ticketsBtn.classList.contains("clickable")) {
            buyForm.classList.add("show");
        }
        autofillDate();
    });

    // Check for submit tickets button click + show form
    buyForm.addEventListener("submit", (e) => {
    // Select all input types within the form --> ensures that all fields are filled
        const inputs = e.target.querySelectorAll("input");
        const adultTickets = e.target.querySelector("#adult-ticket-quantity");
        const studentTickets = e.target.querySelector("#student-ticket-quantity");
        const memberTickets = e.target.querySelector("#member-ticket-quantity");
        let canSubmit = true;
        inputs.forEach(input => {
            if (input.value.trim() === "") {
                canSubmit = false;
            } 
        });
        if (adultTickets.value == "0" && studentTickets.value == "0" && memberTickets.value == "0") {
            e.preventDefault();
            window.alert("Please buy at least 1 ticket.");
            canSubmit = false;
        }
        if (canSubmit) {
            window.alert(`Redirect to Payment System.\nTotal: $${updateTotal()}.00`);
        }
    });

    // Update total display:
    // Access elements:
    const adultTickets = document.querySelector("#adult-ticket-quantity");
    const studentTickets = document.querySelector("#student-ticket-quantity");
    const memberTickets = document.querySelector("#member-ticket-quantity");
    const totalDisplay = document.querySelector("#total-cost");
    // Set dictionary of ticket prices
    const PRICES = {adult: 18, student: 10, member: 15};
    // Function to update total
    function updateTotal() {
        const adultQty = parseInt(adultTickets.value) || 0;
        const studentQty = parseInt(studentTickets.value) || 0;
        const memberQty = parseInt(memberTickets.value) || 0;
        let total = (adultQty * PRICES.adult) + (studentQty * PRICES.student) + (memberQty * PRICES.member);
        totalDisplay.textContent = `Total Cost: $${total}.00`;
        return total;
    }

    // listen for changes
    [adultTickets, studentTickets, memberTickets].forEach(input => {
        input.addEventListener("input", updateTotal);
    });
}

// Set h2 greeting on index.html
setGreeting(hour);

// Execute the function to set the active navigation link on page load
activeNav();
