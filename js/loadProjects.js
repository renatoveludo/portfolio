fetch('data/projects.json')
  .then(res => res.json())
  .then(data => {
    const container = document.querySelector('.project-grid');
    if (!container) return;

    data.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
        <img src="../assets/img/${project.img}" alt="${project.alt}">
        <h3 ${project.i18nTitle ? `data-i18n="${project.i18nTitle}"` : ''}>${project.title}</h3>
        <p>${project.desc}</p>
        ${
          project.github && project.demo
            ? `<div class="project-links">
                <a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub Code</a>
                <a href="${project.demo}" target="_blank" rel="noopener noreferrer">DEMO</a>
              </div>`
            : ''
        }
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error('Erro ao carregar projects.json:', err));
