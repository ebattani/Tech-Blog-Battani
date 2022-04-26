const newForm = async function(event) {
  
    const title = document.querySelector('input[name="postTitle"]').value;
    const body = document.querySelector('textarea[name="postBod"]').value;
  

    await fetch(`/api/post`, {

      method: "POST",

      body: JSON.stringify({

        title,

        body

      }),

    });
  
    document.location.replace("/dashboard");
  };
  
  document

    .querySelector("#newpost")

    .addEventListener("submit", newForm);