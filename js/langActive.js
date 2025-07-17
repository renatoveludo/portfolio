document.addEventListener('click', (event) => {
  const clicked = event.target;
  if (clicked.classList.contains('lang-btn')) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    clicked.classList.add('active');
  }
});