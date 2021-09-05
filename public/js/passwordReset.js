// Sign up form handler
async function resetPasswordform(event) {
    event.preventDefault();
    console.log("test");

    // get the information from the sign up form
    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#New-password').value.trim();

    // if all three fields have content
    if (userName && email && password) {
      //  console.log(userName, email, password);
        // POST the new user to the user table in the database
        const response = await fetch('/api/user/passwordreset', {
            method: 'PUT',
            body: JSON.stringify({
                userName,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
            
        });
        // when the fetch promise is fufilled, check the response status and convey the results
        if (response.ok) {
            alert('password Reset');
            document.location.replace('/login');
        } else {
            alert(response.statusText, "Password did not match the requirement" )
        }
    }
}

document
.querySelector('.resetPassword')
.addEventListener('submit', resetPasswordform);