const editForm = async function(event) {
    const titleEl = document.getElementById('postTitle');

    const bodyEl = document.getElementById('postBod');

    const postId = document.getElementById('postID')

    fetch("/api/post/" + postId.value, {

        method: "put", 

        body: JSON.stringify({

            title: titleEl.value,

            body: bodyEl.value

        }),

        headers: { "Content-Type": "application/json"}
        
    })
        .then(function() {

            document.location.replace("/dashboard");
            
        })

        .catch(err => console.log(err))
}

document.querySelector("#editpost").addEventListener("submit", editForm);

