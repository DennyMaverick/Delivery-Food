window.addEventListener('DOMContentLoaded', function() {
// Слайдер
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider-button-next',
      prevEl: '.slider-button-prev',
    },
  
    // And if we need scrollbar
   
  });

  // Добавление табов

  const tabsLinks = document.querySelectorAll('.tabs-link');

    tabsLinks.forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.preventDefault();
        tabsLinks.forEach(function(item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
        
        const contentID = event.target.dataset.tab;
        const tabsContents = document.querySelectorAll('.tabs-content');
        tabsContents.forEach(function(item) {
          item.classList.add('hidden');
        });

        const tabContent = document.querySelector('#' + contentID);
        tabContent.classList.remove('hidden');

      });
    });
// Показать больше блюд

// const moreDishes = document.querySelector('.more');

//   moreDishes.addEventListener('click', function() {

//   });

// Добавление тени при скролле

const headerTop = document.querySelector('.header');
 
  headerTopChanging();

  window.addEventListener('scroll', function() {
    headerTopChanging();
  });

  function headerTopChanging() {
    const scrollSize = window.pageYOffset; //Высота скролла
    const pixels = 82;
    if (scrollSize > pixels) {
      headerTop.style.boxShadow = "2px 2px 10px #020202";
    } else {
      headerTop.style.boxShadow = "none";
    }
  }

});

