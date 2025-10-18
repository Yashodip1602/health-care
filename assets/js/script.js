
// function login() {
//             const username = document.getElementById('Username').value;
//             const password = document.getElementById('Password').value;

//             const defineUsername = "SuperAdmin";
//             const definePassword = "password1602";
            
//             if (username === defineUsername && password === definePassword) {
//                 showLoginSuccessMessage();
//                 setTimeout(() => {
//                     window.location.href="assets/main_/Main_health.html";
//                     }, 1000);
//                 // Redirect to admin dashboard or perform other actions
//             } else {
//                 showLoginFailureMessage();
//             }
// }

// Simple login function
function login() {
    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;

    // Hardcoded credentials
    const correctUsername = "SuperAdmin";
    const correctPassword = "password1602";
    
    if (username === correctUsername && password === correctPassword) {
        showLoginSuccessMessage();
        
        // Store login status
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('loginTime', Date.now().toString());
        
        // Redirect to main page
        setTimeout(() => {
            window.location.href = "assets/main_/Main_health.html";
        }, 1000);
    } else {
        showLoginFailureMessage();
    }
}

// Simple logout function
function logout() {
    if (confirm) {
        // Clear login data
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('loginTime');
        
        // Redirect to login page
        window.location.href = "../../index.html";
    }
}

// Check if user is logged in (add this to main page)
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // Redirect to login if not logged in
        window.location.href = "../../index.html";
    }
}

// Block browser back/forward buttons (add this to main page)
function blockNavigation() {
    // Prevent back button
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
        history.go(1);
        alert("Please use the logout button to exit.");
    };
}

// Create simple logout button (add this to main page)
function addLogoutButton() {
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = "Logout";
    logoutBtn.onclick = logout;
    
    // Simple styling
    logoutBtn.style.position = 'fixed';
    logoutBtn.style.top = '10px';
    logoutBtn.style.right = '10px';
    logoutBtn.style.padding = '8px 16px';
    logoutBtn.style.background = 'red';
    logoutBtn.style.color = 'white';
    logoutBtn.style.border = 'none';
    logoutBtn.style.borderRadius = '4px';
    logoutBtn.style.cursor = 'pointer';
    
    document.body.appendChild(logoutBtn);
}

// Password visibility toggle
function togglePass(){
    const password = document.getElementById('Password');
    const icon = document.getElementById('togglePassword');

    if (password.type === 'password'){
        password.type = 'text';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        password.type = 'password';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
}

// Login success message
function showLoginSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const failureMessage = document.getElementById('failureMessage');
    
    // Show the success message and hide the failure message
    successMessage.classList.remove('hidden');
    failureMessage.classList.add('hidden');
    
    // Hide the message after 3 seconds
    setTimeout(() => {
        successMessage.classList.add('hidden');
    }, 3000);
}

// Login failure message
function showLoginFailureMessage() {
    const successMessage = document.getElementById('successMessage');
    const failureMessage = document.getElementById('failureMessage');

    // Show the failure message and hide the success message
    failureMessage.classList.remove('hidden');
    successMessage.classList.add('hidden');

    // Hide the message after 3 seconds
    setTimeout(() => {
        failureMessage.classList.add('hidden');
    }, 3000);
}

// Auto-check login on main page load
if (window.location.pathname.includes('Main_health.html')) {
    checkLogin();
    blockNavigation();
    addLogoutButton();
}

// Add event listener for Enter key on login page
if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
    document.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            login();
        }
    });
}
// Example usage after a login attempt:
// If login is successful:
// showLoginMessage(true);
// If login fails:
// showLoginMessage(false);

