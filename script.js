// Dark / Light Mode Toggle
const body = document.body;
const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
});

// Project Filtering
const filterButtons = document.querySelectorAll('.filters button');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    projectCards.forEach(card => {
      card.style.display = (filter === 'all' || card.classList.contains(filter))
        ? 'block'
        : 'none';
    });
  });
});

// Set initial filter to 'All'
document.querySelector('.filters button[data-filter="all"]').classList.add('active');
