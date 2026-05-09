document.addEventListener('DOMContentLoaded', function() {
  const mainBtn = document.getElementById('floatingContactMainBtn');
  const buttonsMenu = document.getElementById('floatingContactButtons');

  if (mainBtn && buttonsMenu) {
    mainBtn.addEventListener('click', function() {
      buttonsMenu.classList.toggle('active');
      mainBtn.classList.toggle('active');
      
      // Change icon when active
      const svg = mainBtn.querySelector('svg');
      if (mainBtn.classList.contains('active')) {
        svg.innerHTML = '<path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
      } else {
        svg.innerHTML = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!mainBtn.contains(event.target) && !buttonsMenu.contains(event.target)) {
        buttonsMenu.classList.remove('active');
        mainBtn.classList.remove('active');
        const svg = mainBtn.querySelector('svg');
        svg.innerHTML = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      }
    });
  }
});
