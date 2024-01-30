// utils/global.js
async function loadScripts() {
  if (typeof window === 'undefined') return; // Ensure this runs on client side

  // Dynamically import external libraries
  const Typed = (await import('typed.js')).default;
  const Swiper = (await import('swiper')).default;
  const AOS = (await import('aos')).default;
  const Isotope = (await import('isotope-layout')).default;
  const GLightbox = (await import('glightbox')).default;
  const Waypoint = (await import('waypoints/lib/noframework.waypoints')).default;
  // Import other libraries as needed

  // Easy selector helper function
  const select = (el, all = false) => {
    el = el.trim();
    return all ? [...document.querySelectorAll(el)] : document.querySelector(el);
  };

  // Easy event listener function
  const on = (type, el, listener, all = false) => {
    const selectEl = select(el, all);
    if (selectEl) {
      (all ? selectEl : [selectEl]).forEach(e => e.addEventListener(type, listener));
    }
  };

  // Easy on scroll event listener
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };

  // Navbar links active state on scroll
  const navbarlinksActive = () => {
    const navbarlinks = select('#navbar .scrollto', true);
    const position = window.scrollY + 200;
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return;
      const section = select(navbarlink.hash);
      if (!section) return;
      navbarlink.classList.toggle('active', position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight));
    });
  };
  window.addEventListener('load', navbarlinksActive);
  onscroll(document, navbarlinksActive);

  // Scrolls to an element with header offset
  const scrollto = (el) => {
    const elementPos = select(el).offsetTop;
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    });
  };

  // Back to top button
  const toggleBacktotop = () => {
    const backtotop = select('.back-to-top');
    if (backtotop) {
      backtotop.classList.toggle('active', window.scrollY > 100);
    }
  };
  window.addEventListener('load', toggleBacktotop);
  onscroll(document, toggleBacktotop);

  // Mobile nav toggle
  on('click', '.mobile-nav-toggle', function() {
    const body = select('body');
    body.classList.toggle('mobile-nav-active');
    this.classList.toggle('bi-list');
    this.classList.toggle('bi-x');
  });

  // Scroll with offset on links with a class name .scrollto
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault();
      const body = select('body');
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active');
        const navbarToggle = select('.mobile-nav-toggle');
        navbarToggle.classList.toggle('bi-list');
        navbarToggle.classList.toggle('bi-x');
      }
      scrollto(this.hash);
    }
  }, true);

  // Scroll with offset on page load with hash links in the url
  window.addEventListener('load', () => {
    if (window.location.hash && select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  });

  // Preloader
  const preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => preloader.remove());
  }

  // Hero type effect
  const typedElements = select('.typed', true);
  typedElements.forEach(typedElement => {
    const typed_strings = typedElement.getAttribute('data-typed-items').split(',');
    new Typed(typedElement, {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  });

  // Skills animation
  const skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: () => {
        const progress = select('.progress .progress-bar', true);
        progress.forEach(el => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  }

  // Portfolio isotope and filter
  const portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    const portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item'
    });

    const portfolioFilters = select('#portfolio-flters li', true);
    on('click', '#portfolio-flters li', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(el => el.classList.remove('filter-active'));
      this.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      portfolioIsotope.on('arrangeComplete', () => {
        AOS.refresh();
      });
    }, true);
  }

  // Initiate portfolio lightbox
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  // Initiate portfolio details lightbox
  const portfolioDetailsLightbox = GLightbox({
    selector: '.portfolio-details-lightbox',
    width: '90%',
    height: '90vh'
  });

  // Portfolio details slider
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Testimonials slider
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  // Animation on scroll
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  });
}

loadScripts();
