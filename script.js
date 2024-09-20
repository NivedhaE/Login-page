document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const validUsername = "Entri Elevate";
    const validPassword = "admin123";

    // Verify username and password
    if (username === validUsername && password === validPassword) {
        errorMessage.textContent = '';
        // Redirect to homepage.html if credentials are correct
        window.location.href = 'homepage.html';
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});

// Handle "Forgot Password" link click
document.getElementById('forgot-password').addEventListener('click', function(e) {
    e.preventDefault();

    const email = prompt('Enter your email');
    if (email) {
        alert('Verification code sent to your email');
    }
});
