const navMenu = document.getElementById('nav-menu');

navMenu.addEventListener('click', function(event) {
  const target = event.target;

  if (target.matches('nav-option')) {
    target.classList.add('active');
    target.style.fontWeight = 'bold';
  }
});