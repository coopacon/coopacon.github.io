//Previous button function
function prev() {
    // Gets the total to modify
    let equippingCount = parseInt(localStorage.getItem("equipping"));
    try {
        // Check if every value is not null
        document.querySelector('input[name="strategy"]:checked').value;
        document.querySelector('input[name="longTerm"]:checked').value;
        document.querySelector('input[name="coaching"]:checked').value;
        document.querySelector('input[name="mentoring"]:checked').value;
        document.querySelector('input[name="succession"]:checked').value;
        document.querySelector('input[name="career"]:checked').value;
        document.querySelector('input[name="recruiting"]:checked').value;
        document.querySelector('input[name="empowering"]:checked').value;
        document.querySelector('input[name="riskTaking"]:checked').value;

        // Reset the total to 0
        localStorage.setItem("equipping", 0);
        equippingCount=0;

        // If every parsing does not return an error add every value to the total count
        equippingCount += parseInt(document.querySelector('input[name="strategy"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="longTerm"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="coaching"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="mentoring"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="succession"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="career"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="recruiting"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="empowering"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="riskTaking"]:checked').value);

        // Alert for debugging
        alert(equippingCount);

        // Store the total in local storage
        localStorage.setItem("equipping", equippingCount);

        // Navigate to the previous page
        window.location.href = "forms-three.html";
    } catch (error) {
        // If an error occurs, request form completion
        alert("Please answer all the questions");
        console.log(error.message);
    }
}

// Next button function
function next() {
    // Gets the total to modify
    let equippingCount = parseInt(localStorage.getItem("equipping"));
    try {
        // Check if every value is not null
        document.querySelector('input[name="strategy"]:checked').value;
        document.querySelector('input[name="longTerm"]:checked').value;
        document.querySelector('input[name="coaching"]:checked').value;
        document.querySelector('input[name="mentoring"]:checked').value;
        document.querySelector('input[name="succession"]:checked').value;
        document.querySelector('input[name="career"]:checked').value;
        document.querySelector('input[name="recruiting"]:checked').value;
        document.querySelector('input[name="empowering"]:checked').value;
        document.querySelector('input[name="riskTaking"]:checked').value;

        // Reset the total to 0
        localStorage.setItem("equipping", 0);
        equippingCount=0;

        // If every parsing does not return an error add every value to the total count
        equippingCount += parseInt(document.querySelector('input[name="strategy"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="longTerm"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="coaching"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="mentoring"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="succession"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="career"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="recruiting"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="empowering"]:checked').value);
        equippingCount += parseInt(document.querySelector('input[name="riskTaking"]:checked').value);

        // Alert for debugging
        alert(equippingCount);

        // Store the total in local storage
        localStorage.setItem("equipping", equippingCount);

        // Navigate to the next page
        window.location.href = "results.html";
    } catch (error) {
        // If an error occurs, request form completion
        alert("Please answer all the questions");
        console.log(error.message);
    }
}

// Event listener for previous button
document.getElementById("prev-page").addEventListener("click", prev);

// Event listener for next button
document.getElementById("next-page").addEventListener("click", next);