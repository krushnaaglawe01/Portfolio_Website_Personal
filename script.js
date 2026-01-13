document.addEventListener("DOMContentLoaded", () => {

  window.toggleTheme = function () {
    document.body.classList.toggle("light");
  };

  const reveals = document.querySelectorAll(".reveal");

  window.addEventListener("scroll", () => {
    reveals.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.classList.add("active");
      }
    });
  });

  window.validateForm = function () {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let msg = document.getElementById("message").value.trim();

    if (name === "" || email === "" || msg === "") {
      alert("All fields are required");
      return false;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return false;
    }

    alert("Message sent successfully!");
    return false;
  };

});
