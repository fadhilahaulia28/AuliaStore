document.getElementById("loginForm")?.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (email === "admin@example.com" && password === "password123") {
      alert("Login berhasil!");
      window.location.href = "index.html";
    } else {
      alert("Email atau password salah!");
    }
  });