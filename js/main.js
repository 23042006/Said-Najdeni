

    function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      if (menu) menu.classList.toggle('open');
    }

    function handleSubmit(e) {
      e.preventDefault();
      const msg = document.getElementById('form-msg');
      if (msg) {
        msg.style.display = 'block';
        setTimeout(() => msg.style.display = 'none', 4000);
      }
    }

    function openOrariModal() {
      document.getElementById('orari-modal-overlay').classList.add('open');
      document.body.style.overflow = 'hidden';
    }
    function closeOrariModalBtn() {
      document.getElementById('orari-modal-overlay').classList.remove('open');
      document.body.style.overflow = '';
    }
    function closeOrariModal(e) {
      if (e.target === document.getElementById('orari-modal-overlay')) closeOrariModalBtn();
    }

    // Lidhja e butonave navbar me modal
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('a[href="#orari"]').forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          openOrariModal();
        });
      });

      // Navbar scroll shadow
      window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (nav) nav.classList.toggle('scrolled', window.scrollY > 40);
      });

      // Animacionet scroll
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      document.querySelectorAll('.lajm-card, .drejtim-card, .mesues-card, .gal-item, .value-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
      });
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeOrariModalBtn();
    });

  