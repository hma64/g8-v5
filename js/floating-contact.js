document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.floating-contact-container');
  const mainBtn = document.getElementById('floatingContactMainBtn');
  const buttonsMenu = document.getElementById('floatingContactButtons');

  if (container) {
    // Ajout d'une transition fluide pour l'apparition/disparition
    container.style.transition = 'opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease';
    
    // Fonction pour gérer la visibilité selon le scroll
    const handleScroll = () => {
      // Le bouton disparaît si on défile de plus de 150px
      if (window.scrollY > 150) {
        container.style.opacity = '0';
        container.style.visibility = 'hidden';
        container.style.transform = 'translateY(20px)';
        container.style.pointerEvents = 'none';
      } else {
        container.style.opacity = '1';
        container.style.visibility = 'visible';
        container.style.transform = 'translateY(0)';
        container.style.pointerEvents = 'auto';
      }
    };

    // Vérification initiale au chargement
    handleScroll();
    
    // Écoute de l'événement de défilement
    window.addEventListener('scroll', handleScroll);
  }

  if (mainBtn && buttonsMenu) {
    mainBtn.addEventListener('click', function() {
      buttonsMenu.classList.toggle('active');
      mainBtn.classList.toggle('active');
      
      // Changement de l'icône lors de l'activation
      const svg = mainBtn.querySelector('svg');
      if (mainBtn.classList.contains('active')) {
        svg.innerHTML = '<path d="M18 6L6 18M6 6l12 12" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>';
      } else {
        svg.innerHTML = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
      }
    });

    // Fermeture du menu lors d'un clic à l'extérieur
    document.addEventListener('click', function(event) {
      if (!mainBtn.contains(event.target) && !buttonsMenu.contains(event.target)) {
        buttonsMenu.classList.remove('active');
        mainBtn.classList.remove('active');
        const svg = mainBtn.querySelector('svg');
        if (svg) {
          svg.innerHTML = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
        }
      }
    });
  }
});
