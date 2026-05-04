// Handle login form
document.getElementById('LoginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
        email: form.email.value,
        password: form.password.value
    };

    try {
        const res = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (res.ok && result.status) {
            alert("Login successful!");
            // redirect after login
            window.location.href = "index.html"; // change to your main page
        } else {
            alert("Wrong email or password");
        }

    } catch (err) {
        console.error(err);
        alert("Server error");
    }
});