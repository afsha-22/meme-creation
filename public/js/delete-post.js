const deletePost = async (event) => {
    event.preventDefault();

    const windowLocation = window.location.pathname.split('/');

    const postID = windowLocation[windowLocation.length - 1];
  
 
      const response = await fetch(`/api/post/${postID}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace(`/profile`);
      } else {
        alert(response.statusText);
      }

};

const checkDelete = (event) => {
    event.preventDefault();

    $('#check-delete').addClass('d-none');
    $('#confirm-delete').removeClass('d-none');

};

const noDelete = (event) => {
    event.preventDefault();

    $('#check-delete').removeClass('d-none');
    $('#confirm-delete').addClass('d-none');

};

document
    .querySelector("#check-delete")
    .addEventListener("click", checkDelete);

document
    .querySelector("#no-delete")
    .addEventListener("click", noDelete);

document
    .querySelector('#delete-post')
    .addEventListener('click', deletePost);