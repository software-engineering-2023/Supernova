const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform login process here
    console.log(username);

    if (username === "user" && password === "user") {
      window.location.href="Home.html";
      // Redirect to another page or perform other actions
    } else if(username === "banker" && password === "banker") {
      window.location.href="HomeBanker.html";
    }else if (username === "admin" && password === "admin"){
      window.location.href="HomeAdmin.html";
    }else{
      alert("invalid username or password");
    }
  });