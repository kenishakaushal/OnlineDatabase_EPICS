function submitData() {
    // Access form data
    const timeVar = document.getElementById('time').value;
    const pHVar = document.getElementById('pH').value;
    const soilMoistureVar = document.getElementById('soilMoisture').value;
    const salinityVar =  document.getElementById('salinity').value;
  
    if (!timeVar || !pHVar || !soilMoistureVar || !salinityVar) {
        alert("Please fill out all fields.");
        return; // Stop navigation
    }

    // If validation passes, navigate to another page
    window.location.href = "analysis.html";

    // Create an object with form data
    const dataValues = {
      time: timeVar,
      pH: pHVar,
      soilMoisture: soilMoistureVar,
      salinity: salinityVar
    };
  
    // Convert the object to a JSON string
    const jsonData = JSON.stringify(dataValues);
  
    // Log or use the JSON data as needed
    console.log(jsonData);
  
    localStorage.setItem("formDataValues", jsonData);
  }