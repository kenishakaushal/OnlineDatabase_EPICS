// Get elements
const showPopupButton = document.getElementById('btn-showPopup');
const closePopupButton = document.getElementById('btn-closePopup');
const popup = document.getElementById('popup');

// Show popup when button is clicked
showPopupButton.addEventListener('click', function() {
    popup.style.display = 'flex'; // Show the popup
});

// Close popup when the close button is clicked
closePopupButton.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the popup
});

// event handler for popup variables, change color to indicate selection
function toggleSelection(button) {
    button.classList.toggle("selected");
}

document.getElementById("btn-closePopup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";

    const buttons = document.querySelectorAll("#popup .button");
    buttons.forEach(button => button.classList.remove("selected"));

});

