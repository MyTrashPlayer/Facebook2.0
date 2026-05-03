// Handle signup form
document.getElementById('NewAccForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
        email: form.email.value,
        password: form.password.value
    };

    try {
        const res = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await res.json();

        if (res.ok && result.success) {
            alert("Account created successfully!");
            window.location.href = "login.html";
        } else {
            alert(result.error || "Signup failed");
        }

    } catch (err) {
        console.error(err);
        alert("Server error");
    }
});
