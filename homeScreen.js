//create account

// Function to gather input data and store it as JSON
function submitUserData() {
    // Access form data
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('userEmail').value;
    const password =  document.getElementById('userPassword').value;
  
    if (!firstName || !lastName || !email || !password) {
        alert("Please fill out all fields.");
        return; // Stop navigation
    }

    // If validation passes, navigate to another page
    window.location.href = "team-selection.html";

    // Create an object with form data
    const formData = {
      name: firstName,
      age: lastName,
      email: email,
      password: password
    };
  
    // Convert the object to a JSON string
    const jsonData = JSON.stringify(formData);
  
    // Log or use the JSON data as needed
    console.log(jsonData);
  
    localStorage.setItem("formData", jsonData);
  }

// sign in
function submitLoginData() {
    // Access form data
    const email = document.getElementById('loginEmail').value;
    const password =  document.getElementById('loginPassword').value;
  
    if (!email || !password) {
        alert("Please fill out all fields.");
        return; // Stop navigation
    }

    // If validation passes, navigate to another page
    window.location.href = "team-selection.html";

    // Create an object with form data
    const formDataLogin = {
      email: email,
      password: password
    };
  
    // Convert the object to a JSON string
    const jsonData = JSON.stringify(formDataLogin);
  
    // Log or use the JSON data as needed
    console.log(jsonData);
  
    localStorage.setItem("formDataLogin", jsonData);
  }
  