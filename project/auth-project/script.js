// ==========================================
// REGISTER
// ==========================================

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (event) {

        // Form ko reload hone se rokna
        event.preventDefault();

        // Input values lena
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;


        // Empty fields check
        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields");
            return;
        }


        // Password match check
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }


        // User object
        const user = {
            name: name,
            email: email,
            password: password
        };


        // LocalStorage mein save
        localStorage.setItem("user", JSON.stringify(user));


        alert("Registration successful!");


        // Login page par bhejna
        window.location.href = "login.html";

    });
}


// ==========================================
// LOGIN
// ==========================================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Login input values
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;


        // LocalStorage se user lena
        const storedUser = localStorage.getItem("user");


        // Agar user registered nahi hai
        if (!storedUser) {

            alert("No user found. Please register first.");

            return;
        }


        // JSON string ko object mein convert karna
        const user = JSON.parse(storedUser);


        // Email aur password check
        if (email === user.email && password === user.password) {

            alert("Login successful!");


            // Login status save
            localStorage.setItem("isLoggedIn", "true");


            // Dashboard par bhejna
            window.location.href = "dashboard.html";

        } else {

            alert("Invalid email or password");

        }

    });
}


// ==========================================
// DASHBOARD
// ==========================================

const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeMessage) {

    // Login check
    const isLoggedIn = localStorage.getItem("isLoggedIn");


    // Agar login nahi hai
    if (isLoggedIn !== "true") {

        window.location.href = "login.html";

    } else {

        // User data lena
        const storedUser = localStorage.getItem("user");

        if (storedUser) {

            const user = JSON.parse(storedUser);

            welcomeMessage.innerText =
                "Welcome, " + user.name + " 👋";
        }
    }
}


// ==========================================
// LOGOUT
// ==========================================

const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        // Login status remove
        localStorage.removeItem("isLoggedIn");


        // Login page par bhejna
        window.location.href = "login.html";

    });
}