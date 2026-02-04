  const categories = document.querySelectorAll('.search-category.category');
  const clearBtn = document.querySelector('.search-button');


  categories.forEach(category => {
    const btn = category.querySelector('.dropdown-btn');
    const dropdown = category.querySelector('.dropdown');
    const input = category.querySelector('input');

    btn.addEventListener('click', e => {
      e.stopPropagation();

      document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== dropdown) d.classList.add('hidden');
      });

      dropdown.classList.toggle('hidden');
    });

    dropdown.querySelectorAll('li').forEach(item => {
      item.addEventListener('click', () => {
        input.value = item.textContent;
        dropdown.classList.add('hidden');
      });
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.add('hidden');
    });
  });

 clearBtn.addEventListener('click', () => {
  categories.forEach(category => {
    const input = category.querySelector('input');
    input.value = '';
    input.placeholder = input.dataset.placeholder;
  });

  const searchByName = document.querySelector('.js-search-name');
  if (searchByName) {
    searchByName.value = '';
    searchByName.placeholder = searchByName.dataset.placeholder;
  }
});

