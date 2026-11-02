// Lab 4: Fix the Form!

// Your job is to make the volunteer interest form work.

console.log("Volunteer form JavaScript loaded.");


const nameInput = document.querySelector("#name");
const result = document.querySelector("#result");

// TODO: Select the form, email input, and interest dropdown.
const form = document.querySelector("#volunteerForm");
const emailInput = document.querySelector("#email");
const interestInput = document.querySelector("#interest");

// TODO: Add a submit event listener to the form.
 
form.addEventListener("submit", function(event) {

// TODO: Prevent the default form submission.
    event.preventDefault();

// TODO: Read the input values and check for missing information.
  const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const interest = interestInput.value;

    if (name === "") {
        result.textContent = "Please enter your name.";
    }
    else if (email === "") {
        result.textContent = "Please enter your email.";
    }
    else if (!emailInput.checkValidity()) {
        result.textContent = "Please enter a valid email address.";
    }
    else if (interest === "") {
        result.textContent = "Please select an interest.";
    }
// TODO: Display helpful errors or an interest-specific response.
 else if (interest === "outreach") {
        result.textContent = "Thank you " + name + "! We appreciate your interest in Community Outreach.";
    }
    else if (interest === "events") {
        result.textContent = "Thank you " + name + "! We would love your help with our community events.";
    }
    else if (interest === "mentoring") {
        result.textContent = "Thank you " + name + "! We are excited about your interest in mentoring youth.";
    }

});