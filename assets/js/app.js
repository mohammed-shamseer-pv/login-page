const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});




function validate() {
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value == "") {
    alert("plese enter your youser username");
    document.form.username.focuss();
    return false;
  }
  if (email.value == "") {
    alert("plese enter your youser email");
    document.form.email.focuss();
    return false;
  }

  if (password.value == "") {
    alert("plese enter your youser password");
    document.form.password.focuss();
    return false;
  }

  return true;
}