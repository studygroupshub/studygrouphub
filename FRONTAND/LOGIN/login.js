function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  const user = JSON.parse(localStorage.getItem("studentUser"));

  if (!user) {
    alert("No account found");
    return;
  }

  if (email === user.email && password === user.password) {
    alert("Login Successful");
    window.location.href = "dashboard.html";
  } else {
    alert("Wrong email or password");
  }
}
