
// A function to log out a user
async function logout(e) {
 e.stopPropagation();
 
    const response = await fetch('/api/user/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  
    if (response.ok) {
      console.log("routs to home page");
      document.location.replace('/');
    } else {
      alert(response.statusText);

    }
  }
  
  document.querySelector('#logout').addEventListener('click', logout);