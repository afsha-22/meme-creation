async function resetPasswordform(event) {
  event.preventDefault();
  const userName = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#New-password").value.trim();
  const errorMessage = document.querySelector(".errMessage");

  // if all three fields have content
  if (userName && email && password.length >= 8) {
    //  console.log(userName, email, password);
    // POST the new user to the user table in the database
    const response = await fetch("/api/user/passwordreset", {
      method: "PUT",
      body: JSON.stringify({
        userName,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // when the fetch promise is fufilled, check the response status and convey the results
    if (response.ok) {
        errorMessage.innerHTML ="password Reset";
      document.location.replace("/login");
    } else {
      errorMessage.innerHTML = response.statusText + " user details did not match the record";
  } 
}
else {
    errorMessage.innerHTML =
      "Invalid Data! Please try Again. Password must be 8 charecter logn ";
  }
}
document
  .querySelector(".resetPassword")
  .addEventListener("submit", resetPasswordform);
