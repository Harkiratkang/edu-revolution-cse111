// Edu Revolution - CSE 111 website project

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", () => {
  navigation.classList.toggle("open");
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => navigation.classList.remove("open"));
});

// Search courses by title or keywords.
const courseSearch = document.getElementById("courseSearch");
const courseCards = document.querySelectorAll(".course-card");
const noResults = document.getElementById("noResults");

courseSearch.addEventListener("input", () => {
  const searchTerm = courseSearch.value.toLowerCase().trim();
  let visibleCount = 0;

  courseCards.forEach((card) => {
    const searchableText = card.dataset.title + " " + card.innerText;
    const matches = searchableText.toLowerCase().includes(searchTerm);
    card.hidden = !matches;
    if (matches) visibleCount++;
  });

  noResults.hidden = visibleCount !== 0;
});

// Demo interaction for course exploration.
document.querySelectorAll(".enroll-btn").forEach((button) => {
  button.addEventListener("click", () => {
    alert(`Thanks for your interest in ${button.dataset.course}! Course registration is a demo feature.`);
  });
});

// Demo contact form: validates fields and displays a confirmation.
// This project does not send data to a server.
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  document.getElementById("formMessage").textContent =
    `Thank you, ${name}! Your demo message has been received.`;
  event.target.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
