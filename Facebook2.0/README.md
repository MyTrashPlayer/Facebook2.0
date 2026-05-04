# 🍽️ PhotoBook Web App

A full-stack web application that allows users to create accounts, log in, and interact with a personalized system (recipes, plans, etc.).

---

## 🚀 Features

* User **Signup & Login**
* Backend API with **Node.js & Express**
* Database using **SQLite**
* Frontend built with **HTML, CSS, JavaScript**
* Ready for protected pages and future features

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Database:** SQLite
* **Tools:** bcrypt (optional), nodemon (optional)

---

## 📁 Project Structure

```text
Facebook2.0/
└── code/
    ├── app.js              # Main backend server
    ├── database.js         # Database connection
    ├── database.db         # SQLite database file
    ├── package.json        # Dependencies
    ├── package-lock.json
    ├── node_modules/
    └── public/             # Frontend files (served by Express)
        ├── index.html
        ├── login.html
        ├── NewAcc.html
        ├── login.js
        ├── NewAcc.js
        ├── login.css
        ├── NewAcc.css
```

---

## ⚙️ Installation & Setup

### 1. Install Node.js  (do this only once) (only do step2 and step4 if its ur second time) 

Download from: https://nodejs.org

Check installation:

```bash
node -v
npm -v
```

---

### 2. change to cd code

cd Facebook2.0/code   # ⚠️ IMPORTANT: go into /code folder


### 3. Install Dependencies

```bash
npm install
```

---

### 4. Run the Server

```bash
node app.js
```

You should see:

```text
Running on http://localhost:3000
```

---

### 5. Open the Application

Go to your browser:

```text
http://localhost:3000
```

👉 This will load the **login page**

---

## 🧠 How It Works

### 🔹 Frontend

* Users interact with forms (`login.html`, `NewAcc.html`)
* JavaScript sends requests using `fetch()`

### 🔹 Backend

* Express handles API routes:

  * `POST /signup` → create account
  * `POST /login` → validate user

### 🔹 Database

* SQLite stores user data in `database.db`
* Automatically created if it doesn’t exist

---

## 🔐 Authentication Flow

1. User submits form
2. JS sends request to backend (`fetch`)
3. Backend checks database
4. Response sent back
5. User redirected

---

## ⚠️ Important Notes

* Always open the app using:

  ```text
  http://localhost:3000
  ```

  ❌ Do NOT open HTML files using `file://`

* Always run the server inside:

  ```text
  Facebook2.0/code
  ```

---

## 🐞 Common Issues & Fixes

### ❌ Cannot find module 'app.js'

👉 You are in the wrong folder
✔ Fix:

```bash
cd Facebook2.0/code
```

---

### ❌ Cannot GET /login.html

👉 Files are not in `public/`
✔ Fix:

* Move all frontend files into `/public`

---

### ❌ CORS errors / Failed to fetch

👉 You opened HTML with `file://` or used Live Server
✔ Fix:

* Use only `http://localhost:3000`

---

### ❌ Port already in use

👉 Another server is running
✔ Fix:

* Close it or change port in `app.js`

---

## 🔧 Future Improvements

* Add password hashing with bcrypt
* Add sessions (stay logged in)
* Protect routes (only logged-in users access certain pages)
* Improve UI/UX

---

## 📌 Quick Start

```bash
cd Facebook2.0/code
npm install
node app.js
```

👉 Then open:

```text
http://localhost:3000
```

---

## 🧠 Tip

* **Frontend = what user sees**
* **Backend = logic**
* **Database = storage**

All must work together.

---

## 👨‍💻 Author

Built as a full-stack learning project.

