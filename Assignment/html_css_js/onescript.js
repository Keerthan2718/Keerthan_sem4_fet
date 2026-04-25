// 1. Select the button and the role text
const updateButton = document.getElementById('updateBtn');
const roleDisplay = document.getElementById('role-display');

// 2. Add an "Event Listener" to the button
updateButton.addEventListener('click', function() {
    
    // First Alert: Warning the user
    alert("ATTENTION: Unauthorized access to role settings detected. Verifying identity...");

    // Second Alert: The change action
    alert("Identity Verified. Changing role to: Senior Forensic Lead.");

    // 3. Update the DOM (The HTML content)
    roleDisplay.textContent = "Senior Forensic Lead";
    
    // Optional: Change the color of the text via JS to show it's updated
    roleDisplay.style.color = "#ff3e3e"; 

    // Final Confirmation
    alert("System update complete.");
});
