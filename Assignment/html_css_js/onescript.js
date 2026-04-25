// Grab the button and the role heading
const roleButton = document.getElementById('changeRoleBtn');
const roleDisplay = document.getElementById('role-display');

// Listen for the click
roleButton.addEventListener('click', function() {
    
    // 1. Open the prompt and store the user's answer in a variable called 'newRole'
    let newRole = prompt("CRITICAL SYSTEM UPDATE: Enter your new designation:");

    // 2. Check if the user actually typed something (and didn't hit cancel)
    if (newRole !== null && newRole !== "") {
        
        // 3. Update the text on the page
        roleDisplay.textContent = newRole;

        // 4. Alert to confirm it worked
        alert("Access Granted. Role updated to: " + newRole);
        
    } else {
        // If they hit cancel or left it blank
        alert("Update Cancelled. Current credentials retained.");
    }
});
