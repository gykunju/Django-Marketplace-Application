document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript is working!"); 

  // Example: Highlight the active menu lin

  const logout = document.getElementById("logout");
  if (logout) {
    logout.addEventListener("click", (event) => {
      const confirmed = confirm("Are you sure you want to log out?");
      if (!confirmed) {
        event.preventDefault();
      }
    });
  }   


  const currentPath = window.location.pathname;
  document.querySelectorAll("nav a").forEach((link) => {
    const href = link.getAttribute("href")

    if (href === "{% url 'playground:signup' %}" || href === "{% url 'playground:login' %}") {
      return;
    }

    if (link.getAttribute("href") === currentPath) {
      link.classList.add("text-teal-700", "font-bold");
    }
  });
});
