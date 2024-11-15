function saveSelection() {
    // Get selected option
    const selectedOption = document.getElementById("teams").value;
    // Save selected option to localStorage
    localStorage.setItem("selectedOption", selectedOption);
    // Redirect to second page
    window.location.href = "variables-selection.html";
}

const selectedOption = localStorage.getItem("selectedOption");
        // Display it in the heading tag
document.getElementById("selected-option").innerText = selectedOption ? selectedOption : "No option selected";