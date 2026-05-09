document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.floating-contact-container');
  const mainBtn = document.getElementById('floatingContactMainBtn');
  const buttonsMenu = document.getElementById('floatingContactButtons');

  // Numéro de téléphone à appeler
  const phoneNumber = '+21694827228';

  if (container) {
    // Transition fluide pour l'apparition/disparition
    container.style.transition = 'opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease';
    
    let ticking = false;

    const updateVisibility = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      // Disparaît après 250px
      if (scrollY > 250) {
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
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    updateVisibility();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('touchmove', onScroll, { passive: true });
  }

  if (mainBtn) {
    // On remplace le comportement de menu par un appel direct
    mainBtn.addEventListener('click', function(e) {
      // Si le menu flottant existe, on l'empêche de s'ouvrir pour privilégier l'appel
      if (buttonsMenu) {
        buttonsMenu.style.display = 'none';
      }
      
      // Redirection vers le numéroteur téléphonique
      window.location.href = 'tel:' + phoneNumber;
    });
  }
});
