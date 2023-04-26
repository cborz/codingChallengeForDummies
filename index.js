console.log('hello world')


// Get the modal
var modal = document.getElementById("clickMeModal");

// Get the button that opens the modal
var openBtn = document.getElementById("openBtn");

// Get the yes button
var yesBtn = document.getElementById("yesBtn");

// Get the no button
var noBtn = document.getElementById("noBtn");

// Get the <div> element for the background
var mainContent = document.getElementsByClassName("mainContent")[0];

// When the user clicks on the button, open the modal
openBtn.onclick = function() {
    modal.style.display = "block";
    mainContent.style.filter = "blur(5px)"
}

// When the user clicks on no, close the modal
noBtn.onclick = function() {
    modal.style.display = "none";
    mainContent.style.filter = "blur(0px)"
    changeStatus("You clicked no you, negative nancy")
}

// When the user clicks on yes, close the modal
yesBtn.onclick = function() {
    modal.style.display = "none";
    mainContent.style.filter = "blur(0px)"
    changeStatus("You clicked yes")
}

function changeStatus (newStatus) {
    var status = document.getElementById("status");
    status.textContent = newStatus
    }