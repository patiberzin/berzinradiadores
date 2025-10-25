const btn = document.getElementById('faleBtn');
const menu = document.getElementById('menuTelefones');

btn.addEventListener('click', function(e) {
  e.preventDefault();
  menu.classList.toggle('show');
});

// Fecha o menu se clicar fora
document.addEventListener('click', function(e) {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('show');
  }
});

