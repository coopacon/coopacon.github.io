
function updateDateTime(){
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        twelveHour: true
    };
    const dateTimeString = now.toLocaleString('en-US', options);
    document.getElementById("todayDate").innerText = dateTimeString;
}
setInterval(updateDateTime, 1000);
updateDateTime();





function printGreeting() {
    let enteredName = document.getElementById("enteredName").value;
    let feeling = document.getElementById("feeling").value;

    document.getElementById('feelingMessage').textContent = `Hello ${enteredName}. Hear you're feeling ${feeling}.`;
}

function polyfun() {
    let myNumber = document.getElementById("number").value;
    if (isNaN(myNumber) || myNumber < 1 || myNumber > 10) {
        document.getElementById("polygonMessage").innerHTML = "Please enter a number 1-10";
    } else if (myNumber == 1){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a henagon 'has' 1 side!";
    } else if (myNumber == 2){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a digon 'has' 2 sides!";
    } else if (myNumber == 3){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a trigon has 3 sides!";
    } else if (myNumber == 4){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a tetragon has 4 sides!";
    } else if (myNumber == 5){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a pentagon has 5 sides!";
    } else if (myNumber == 6){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a hexagon has 6 sides!";
    } else if (myNumber == 7){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a heptagon has 7 sides!";
    } else if (myNumber == 8){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: an octagon has 8 sides!";
    } else if (myNumber == 9){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: an enneagon has 9 sides!";
    } else if (myNumber == 10){
        document.getElementById("polygonMessage").innerHTML = "Did you know?: a decagon has 10 sides!";
    }

}


function showTextOne() {
    document.getElementById("message").innerHTML = "The phoenix is happy, but do you smell smoke?";
}
function showTextTwo() {
    document.getElementById("message").innerHTML = "The phoenix is feeling salty";
}
function showTextThree() {
    document.getElementById("message").innerHTML = "profits = sales-expenses \n Do the math!";
}
function showTextFour() {
    document.getElementById("message").innerHTML = "In the Virgo Supercluster, specifically within the Local Group, approximately two-thirds of the way out from the center in the Orion Arm, about 4.24 light-years from Proxima Centauri, 16-20 light-years above the mid-plane, and situated in the Milky Way.";
}


let thisPage = window.location.href;
document.getElementById("html-validator").innerHTML = document.getElementById("html-validator").innerHTML + "check?uri=" + thisPage;
document.getElementById("CSS-validator").innerHTML = document.getElementById("CSS-validator").innerHTML + "check?uri=" + thisPage;