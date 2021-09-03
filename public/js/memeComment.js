
function showcoment() {
    
    var elements = document.getElementById("user-comment");
    //const elementsid = e.currentTarget.id;

       elements.classList.remove('hide-comment-post');
       elements.classList.add ('show-comment-post');
    
    console.log(elements);
}

  
  const ps = document.querySelectorAll(".commentIconeBtn");
  function showCommentBox(e){
  // When this function is used as an event handler: this === e.currentTarget
    const id = e.currentTarget.id
     console.log(id);
     
   showcoment();
  }


  for(let i = 0; i < ps.length; i++){
    // console: print the clicked <p> element
    ps[i].addEventListener('click',showCommentBox);
   
  }

 //ps.addEventListener('click', showCommentBox);


 ////Post Comment to DB

 async function commentFormHandler(event) {
    event.preventDefault();
  
    const comment= document.querySelector('textarea[name="comment-body"]').value.trim();
    
    
    console.log(comment ,"Post", post_id);
     
    if (comment) {
        const response = await fetch('/api/comment', {
          method: 'POST',
          body: JSON.stringify({
            comment,
           
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
      
        if (response.ok) {
         //document.location.reload();
        } else {
          alert(response.statusText);
        }
      }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);