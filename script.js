// JavaScript for Interactive Features

// Highlighting the rows on hover
document.querySelectorAll("tr").forEach(row => {
  row.addEventListener("mouseenter", () => {
    row.style.backgroundColor = "#f7e9d7";
  });

  row.addEventListener("mouseleave", () => {
    row.style.backgroundColor = "";
  });
});

// Adding alert to forms
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", event => {
    alert("Form submitted! Redirecting to your query...");
  });
});

// Smooth Scroll for Links
document.querySelectorAll('a').forEach(link => {
  link.addEventListener("click", event => {
    if (link.getAttribute("href").startsWith("#")) {
      event.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
