fetch('data/technologies.json')
  .then(res => res.json())
  .then(data => {
    const techGrid = document.querySelector('.tech-grid');
    if (!techGrid) return;

    data.forEach(tech => {
      const card = document.createElement('div');
      card.classList.add('tech-card');

      const title = document.createElement('h3');
      title.textContent = tech.name;

      const desc = document.createElement('h4');
      desc.classList.add('tech-desc');
      desc.setAttribute('data-i18n', tech.descKey);
      desc.textContent = tech.desc;

      card.appendChild(title);
      card.appendChild(desc);
      techGrid.appendChild(card);
    });
  })
  .catch(err => console.error('Erro ao carregar technologies.json:', err));
