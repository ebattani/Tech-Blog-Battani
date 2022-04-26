
const commentForm = async function(event) {

    const post = document.querySelector('input[name="postID"]').value;
    const body = document.querySelector('textarea[name="comBod"]').value;
  
    if (body) {

      await fetch('/api/comment', {

        method: 'POST',

        body: JSON.stringify({

          post,

          body

        }),

        headers: {

          'Content-Type': 'application/json'

        }
      });
    }
  };
  
  document

    .querySelector('#commentform')
    .addEventListener('submit', commentForm);