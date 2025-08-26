document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("changeTheme");
    const form = document.getElementById("registrationForm");
    const message = document.getElementById("message");
    const outerDiv = document.getElementById("outerDiv");
    const innerButton = document.getElementById("innerButton");

    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // ----------------------
    // 1. Theme Toggle + Animation
    // ----------------------
    themeButton.addEventListener("click", () => {
        document.body.classList.add("fade"); // add fade effect
        setTimeout(() => {
            document.body.classList.toggle("dark-mode");
            document.body.classList.remove("fade");
        }, 300);
        
        // Change button text
        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Switch to Dark Mode";
        } else {
            themeButton.textContent = "Switch to Light Mode";
        }
    });

    // ----------------------
    // 2. Form Validation Function
    // ----------------------
    function validateForm(showMessage = true) {
        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (username.length < 3) {
            if (showMessage) {
                message.textContent = "Username must be at least 3 characters.";
                message.style.color = "red";
            }
            return false;
        } else if (!email.includes("@")) {
            if (showMessage) {
                message.textContent = "Email must contain '@'.";
                message.style.color = "red";
            }
            return false;
        } else if (password.length < 6) {
            if (showMessage) {
                message.textContent = "Password must be at least 6 characters.";
                message.style.color = "red";
            }
            return false;
        }
        if (showMessage) {
            message.textContent = "Registration successful!";
            message.style.color = "green";
        }
        return true;
    }

    // ----------------------
    // 3. Form Submission
    // ----------------------
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (validateForm(true)) {
            form.reset();
        }
    });

    // ----------------------
    // 4. Real-time Validation (while typing)
    // ----------------------
    usernameInput.addEventListener("input", () => validateForm(false));
    emailInput.addEventListener("input", () => validateForm(false));
    passwordInput.addEventListener("input", () => validateForm(false));

    // ----------------------
    // 5. Reset Button Feature
    // ----------------------
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Reset";
    resetBtn.type = "button";
    resetBtn.style.marginLeft = "10px";
    form.appendChild(resetBtn);

    resetBtn.addEventListener("click", () => {
        form.reset();
        message.textContent = "";
    });

    // ----------------------
    // 6. Event Bubbling vs Capturing
    // ----------------------
    outerDiv.addEventListener("click", () => {
        console.log("Div Clicked (Bubbling)");
    });

    innerButton.addEventListener("click", (event) => {
        console.log("Button Clicked");
        // event.stopPropagation(); // optional: stops bubbling
    });

    // Capturing Example
    outerDiv.addEventListener("click", () => {
        console.log("Div Clicked (Capturing)");
    }, { capture: true });
});
