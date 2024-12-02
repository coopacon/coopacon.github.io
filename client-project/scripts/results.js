//Update the paragraph element with the values from local storage
document.getElementById("results").innerHTML = "Team Member Score: "+localStorage.getItem("team")
    +"<br>Advanced Co-operative Team Member/Trainer Score: "+localStorage.getItem("advanced") 
    +"<br>Team Lead/Manager Score: "+localStorage.getItem("manager")
    +"<br>Director/Operator: "+localStorage.getItem("equipping");