const loginForm = async function(event) {
  
    const userEl = document.querySelector("#usernameinput");

    const passEl = document.querySelector("#passwordinput");

    fetch("/api/user/login", {

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

    .querySelector("#loginform")

    .addEventListener("submit", loginForm);