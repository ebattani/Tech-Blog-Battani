const signupForm = async function(event) {

    const userEl = document.querySelector("#userinputSU");

    const passEl = document.querySelector("#passinputSU");

    fetch("/api/user", {

      method: "post",

      body: JSON.stringify({

        username: userEl.value,

        password: passEl.value

      }),

      headers: { "Content-Type": "application/json" }

    })

      .then(function() {

        document.location.replace("/dashboard");

      })

      .catch(err => console.log(err));
  };
  
  document

    .querySelector("#signup")

    .addEventListener("submit", signupForm);