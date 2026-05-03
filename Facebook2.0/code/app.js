const express = require('express')
const db = require('./database')
const app = express()

app.use(express.json())

// 🔥 Serve static files (HTML, CSS, JS)
app.use(express.static('public'))

// 🔥 When visiting "/", show login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html')
})

// 🔹 SIGNUP route
app.post('/signup', (req, res) => {
    const { email, password } = req.body

    db.run(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, password],
        function(err) {
            if (err) {
                return res.status(400).json({ error: "User exists" })
            }
            res.json({ success: true })
        }
    )
})

// 🔹 LOGIN route
app.post('/login', (req, res) => {
    const { email, password } = req.body

    db.get(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, user) => {

            if (err) {
                console.error(err)
                return res.status(500).json({ error: "Database error" })
            }

            if (!user) {
                return res.status(401).json({ status: false })
            }

            if (user.password === password) {
                return res.json({ status: true })
            }

            res.status(401).json({ status: false })
        }
    )
})

// 🔥 Start server
app.listen(3000, () => {
    console.log("Running on http://localhost:3000")
})

