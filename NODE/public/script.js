const form = document.getElementById("registrationForm");

form.addEventListener("submit", async function(event) {

    event.preventDefault();

    const student = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        course: document.getElementById("course").value

    };

    const response = await fetch("/register", {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(student)

    });

    const result = await response.json();

    document.getElementById("message").textContent =
        result.message;

    form.reset();

});