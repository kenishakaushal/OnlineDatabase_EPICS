// Retrieve the data from localStorage
const storedData = localStorage.getItem('dataForm');
console.log('Stored Data:', storedData);

if (storedData) {
    // Parse the JSON string
    const { firstName} = JSON.parse(storedData);

    // Display the data in the heading
    document.getElementById('welcomeOutput').textContent = `Welcome, ${firstName}!`;
} else {
    // If no data found, show a default message
    document.getElementById('welcomeOutput').textContent = 'No data found!';
}
