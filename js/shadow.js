


document.onreadystatechange = function() {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(e) {
      lastScrollPosition = window.scrollY;
      
      if (lastScrollPosition > 100)
        navbar.classList.add('navbar-shadow');
      else
        navbar.classList.remove('navbar-shadow');
    });
  }