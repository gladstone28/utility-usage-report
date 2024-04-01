// script.js
document.getElementById('utilityForm').addEventListener('submit', function(event) {
    // Example of a simple validation
    var usage = document.getElementById('usage').value;
    if(isNaN(usage) || usage < 0) {
        alert("Please enter a valid usage amount.");
        event.preventDefault(); // Prevent form submission
    }
});
