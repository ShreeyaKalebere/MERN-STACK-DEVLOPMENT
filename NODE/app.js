const express = require("express");

const app = express();

const PORT = 3000;

// To read JSON data
app.use(express.json());

// To use HTML, CSS and JavaScript
app.use(express.static("public"));

// Home page
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Registration API
app.post("/register", function(req, res) {

    const student = req.body;

    console.log("New Student Registered");
    console.log("Name:", student.name);
    console.log("Email:", student.email);
    console.log("Course:", student.course);

    res.json({
        message: "Registration Successful!"
    });
});

// Start server
app.listen(PORT, function() {

    console.log(
        `Server running at http://localhost:${PORT}`
    );

});