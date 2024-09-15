const users = [
    { email: 'user398944', phone: '555-123-4020' },
    { email: 'another@example.com', phone: '555-3333' },
    { email: 'test@example.com', phone: '555-876-4444' }
];

const emailInput = document.getElementById('3w41l');

let debounceTimer;

// Function to process input and update localStorage
const updatePhoneNumber = (inputValue) => {
    const trimmedInput = inputValue.trim(); // Remove leading and trailing whitespace
    // Check for both email and username (the part before '@' for emails)
    const user = users.find(user => user.email === trimmedInput || 
                                    (user.email.includes('@') && user.email.split('@')[0] === trimmedInput));

    if (user) {
        localStorage.setItem('phone', user.phone); // Store the phone number in localStorage
    }
};

// Event listener for input
emailInput.addEventListener('input', function () {
    clearTimeout(debounceTimer); // Clear the previous timer
    debounceTimer = setTimeout(() => {
        updatePhoneNumber(emailInput.value); // Update phone number after 300ms of inactivity
    }, 300);
});

// Event listener for blur to immediately update on focus loss
emailInput.addEventListener('blur', function () {
    updatePhoneNumber(emailInput.value); // Update phone number immediately on blur
});