// Reveal sections as they enter the viewport
const revealTargets = document.querySelectorAll('.section, .strip');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(el => io.observe(el));

// Reminder in console for the LinkedIn placeholder
const linkedin = document.getElementById('linkedin-link');
if (linkedin && linkedin.getAttribute('href') === '#') {
  console.info('Update the LinkedIn href in index.html (#linkedin-link) with your real profile URL.');
}
