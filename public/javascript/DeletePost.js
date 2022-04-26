const deletePost = async function(event) {


    const postId = document.getElementById('postID')


    fetch("/api/post/" + postId.value, {

        method: "delete"

    })
    .then(function() {

        document.location.replace("/dashboard");

    })

    .catch(err => console.log(err))

}

document.querySelector("#deletebtn").addEventListener("click", deletePost);