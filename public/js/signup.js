// Sign up form handler
async function signupFormHandler(event) {
    event.preventDefault();
    // get the information from the sign up form
    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const errorMessage = document.querySelector(".errMessage");
    
      // if all three fields have content
    if (userName && email && password) {
      //  console.log(userName, email, password);
        // POST the new user to the user table in the database
            
        const response = await fetch('/api/user/signup', {
            method: 'post',
            body: JSON.stringify({
                userName,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
            
        });
        // when the fetch promise is fufilled, check the response status and convey the results
        if (response.ok) {
          
            document.location.replace('/');
        } 
        if (response.status == 409 ||response.status == 400 || response.status == 401) {
            
            errorMessage.innerHTML= "unable to signup ";
        }
        else{
            errorMessage.innerHTML= "unable to signup ";
        }
    }
    else {
        errorMessage.innerHTML= "Email or password not valid";
    }
}

document
.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler);