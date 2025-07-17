function loadPartial(id, file, callback) {
  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.getElementById(id).innerHTML = html;
      if (callback) callback();
    })
    .catch(err => console.error(`Erro ao carregar ${file}:`, err));
}


loadPartial("header", "partials/header.html", initMenuToggle);
loadPartial("main", "partials/main.html", () => {
  loadTechnologies();
  loadProjects();
});
loadPartial("footer", "partials/footer.html");


function initMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  }

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });

}
