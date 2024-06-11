window.addEventListener('scroll', function () {
    var navContainer = document.querySelector('.nav-container');
    var firstContainer = document.querySelector('.first-container');
    var scrollTop = window.scrollY || window.pageYOffset;

    if (scrollTop >= firstContainer.clientHeight - 40) {
      navContainer.classList.add('solid-nav');
    } else {
      navContainer.classList.remove('solid-nav');
    }
  });